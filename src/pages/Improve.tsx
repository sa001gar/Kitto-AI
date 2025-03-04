import React, { useState, useRef } from 'react';
import { PenTool, Upload, RefreshCw, CheckCircle, XCircle, AlertCircle, FileText, Image } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Textarea } from '../components/ui/Textarea';
import { useAI } from '../context/AIContext';
import { fileToBase64, writingTypes } from '../lib/utils';
import { useToast } from '../components/ui/Toaster';

const Improve = () => {
  const { analyzeText, analyzeHandwriting, loading, error: aiError } = useAI();
  const { addToast } = useToast();
  const [isHandwriting, setIsHandwriting] = useState(false);
  const [text, setText] = useState('');
  const [selectedType, setSelectedType] = useState('essay');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleInputMode = () => {
    setIsHandwriting(!isHandwriting);
    setAnalysisResult(null);
    setError(null);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    try {
      const base64 = await fileToBase64(file);
      setUploadedImage(base64);
      setError(null);
    } catch (err) {
      setError('Failed to process image. Please try again.');
      console.error('File processing error:', err);
    }
  };

  const handleAnalyze = async () => {
    setError(null);
    setAnalysisResult(null);
    
    try {
      let result;
      
      if (isHandwriting) {
        if (!uploadedImage) {
          setError('Please upload an image of your handwriting');
          return;
        }
        
        result = await analyzeHandwriting(uploadedImage);
      } else {
        if (!text.trim()) {
          setError('Please enter some text to analyze');
          return;
        }
        
        result = await analyzeText(text, selectedType);
      }
      
      if (result) {
        setAnalysisResult(result);
        
        // Show success toast
        addToast({
          title: 'Analysis Complete',
          description: 'Your writing has been analyzed successfully',
          variant: 'success',
        });
      } else if (aiError) {
        setError(aiError);
      }
    } catch (err) {
      setError('Failed to analyze. Please try again.');
      console.error('Analysis error:', err);
    }
  };

  const renderAnalysisResult = () => {
    if (!analysisResult) return null;
    
    // For handwriting analysis
    if (isHandwriting) {
      return (
        <div className="space-y-6">
          {analysisResult.transcription && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-green-600" />
                Transcription
              </h3>
              <div className="bg-white p-4 rounded-md border border-gray-200 shadow-inner">
                <p className="whitespace-pre-wrap">{analysisResult.transcription}</p>
              </div>
            </div>
          )}
          
          {analysisResult.legibility && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
                <Image className="w-5 h-5 mr-2 text-blue-600" />
                Handwriting Legibility
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-md border border-blue-100">
                {analysisResult.legibility}
              </div>
            </div>
          )}
          
          {analysisResult.errors && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
                <XCircle className="w-5 h-5 mr-2 text-red-600" />
                Grammar & Spelling
              </h3>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-md border border-red-100">
                <ul className="space-y-2">
                  {Array.isArray(analysisResult.errors) ? (
                    analysisResult.errors.map((error: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{error}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{analysisResult.errors}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
          
          {analysisResult.structure && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
                Sentence Structure
              </h3>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-md border border-yellow-100">
                {analysisResult.structure}
              </div>
            </div>
          )}
          
          {analysisResult.organization && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                Organization
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-md border border-blue-100">
                {analysisResult.organization}
              </div>
            </div>
          )}
          
          {analysisResult.improvements && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Improvement Suggestions
              </h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-md border border-green-100">
                <ul className="space-y-2">
                  {Array.isArray(analysisResult.improvements) ? (
                    analysisResult.improvements.map((improvement: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{improvement}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{analysisResult.improvements}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
          
          {analysisResult.score !== undefined && (
            <div className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-md border border-blue-100 shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Overall Score</h3>
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="text-3xl font-bold text-white">{analysisResult.score}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-gray-800">/10</span>
                  </div>
                </div>
                <div className="ml-6 text-gray-700">
                  {analysisResult.score >= 8 ? (
                    <div>
                      <p className="text-xl font-semibold text-green-600 mb-1">Excellent work!</p>
                      <p className="text-sm text-gray-600">Your writing meets high standards for Indian academic requirements.</p>
                    </div>
                  ) : analysisResult.score >= 6 ? (
                    <div>
                      <p className="text-xl font-semibold text-blue-600 mb-1">Good work with room for improvement</p>
                      <p className="text-sm text-gray-600">Focus on the suggestions to enhance your writing further.</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xl font-semibold text-orange-600 mb-1">Needs significant improvement</p>
                      <p className="text-sm text-gray-600">Work on the fundamentals and practice regularly.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    // Handle text analysis
    return (
      <div className="space-y-6">
        {analysisResult.errors && (
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
              <XCircle className="w-5 h-5 mr-2 text-red-600" />
              Grammar & Spelling
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-md border border-red-100">
              <ul className="space-y-2">
                {Array.isArray(analysisResult.errors) ? (
                  analysisResult.errors.map((error: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{error}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{analysisResult.errors}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
        
        {analysisResult.structure && (
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
              Sentence Structure
            </h3>
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-md border border-yellow-100">
              {analysisResult.structure}
            </div>
          </div>
        )}
        
        {analysisResult.organization && (
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
              Organization
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-md border border-blue-100">
              {analysisResult.organization}
            </div>
          </div>
        )}
        
        {analysisResult.vocabulary && (
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
              Vocabulary Suggestions
            </h3>
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-md border border-purple-100">
              {analysisResult.vocabulary}
            </div>
          </div>
        )}
        
        {analysisResult.format && (
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
              Format Assessment
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-md border border-blue-100">
              {analysisResult.format}
            </div>
          </div>
        )}
        
        {analysisResult.tone && (
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-indigo-600" />
              Tone & Formality
            </h3>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-md border border-indigo-100">
              {analysisResult.tone}
            </div>
          </div>
        )}
        
        {analysisResult.improvements && (
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Improvement Suggestions
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-md border border-green-100">
              <ul className="space-y-2">
                {Array.isArray(analysisResult.improvements) ? (
                  analysisResult.improvements.map((improvement: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{improvement}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{analysisResult.improvements}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
        
        {analysisResult.score !== undefined && (
          <div className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-md border border-blue-100 shadow-md">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Overall Score</h3>
            <div className="flex items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-3xl font-bold text-white">{analysisResult.score}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-gray-800">/10</span>
                </div>
              </div>
              <div className="ml-6 text-gray-700">
                {analysisResult.score >= 8 ? (
                  <div>
                    <p className="text-xl font-semibold text-green-600 mb-1">Excellent work!</p>
                    <p className="text-sm text-gray-600">Your writing meets high standards for Indian academic requirements.</p>
                  </div>
                ) : analysisResult.score >= 6 ? (
                  <div>
                    <p className="text-xl font-semibold text-blue-600 mb-1">Good work with room for improvement</p>
                    <p className="text-sm text-gray-600">Focus on the suggestions to enhance your writing further.</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xl font-semibold text-orange-600 mb-1">Needs significant improvement</p>
                    <p className="text-sm text-gray-600">Work on the fundamentals and practice regularly.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Improve Your Writing</h1>
        <p className="text-gray-600 mt-2">Get feedback on your writing with AI-powered analysis</p>
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-md" role="group">
          <button
            type="button"
            className={`px-6 py-3 text-sm font-medium rounded-l-lg transition-all duration-300 ${
              !isHandwriting
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/20'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
            onClick={() => !isHandwriting || toggleInputMode()}
          >
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Type Text
            </div>
          </button>
          <button
            type="button"
            className={`px-6 py-3 text-sm font-medium rounded-r-lg transition-all duration-300 ${
              isHandwriting
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/20'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
            onClick={() => isHandwriting || toggleInputMode()}
          >
            <div className="flex items-center">
              <Image className="w-4 h-4 mr-2" />
              Upload Handwriting
            </div>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="bg-gradient-card shadow-md border-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader>
              <CardTitle className="text-gray-800">
                {isHandwriting ? 'Upload Handwritten Work' : 'Enter Your Text'}
              </CardTitle>
              <CardDescription>
                {isHandwriting
                  ? 'Upload a clear image of your handwritten work for analysis'
                  : 'Type or paste your text for analysis and improvement suggestions'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isHandwriting ? (
                <div className="space-y-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  
                  {uploadedImage ? (
                    <div className="relative rounded-lg overflow-hidden shadow-md">
                      <img
                        src={uploadedImage}
                        alt="Uploaded handwriting"
                        className="w-full rounded-md"
                      />
                      <button
                        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                        onClick={triggerFileInput}
                      >
                        <RefreshCw className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className="border-2 border-dashed border-green-300 rounded-lg p-10 text-center cursor-pointer hover:bg-green-50 transition-colors"
                      onClick={triggerFileInput}
                    >
                      <Upload className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600 font-medium">
                        Click to upload an image of your handwritten work
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Supported formats: JPG, PNG, JPEG
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {writingTypes.map((type) => (
                      <button
                        key={type.value}
                        className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${
                          selectedType === type.value
                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-sm'
                            : 'bg-white border border-gray-200 text-gray-700 hover:bg-green-50 hover:border-green-200'
                        }`}
                        onClick={() => setSelectedType(type.value)}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                  
                  <Textarea
                    placeholder={`Enter your ${selectedType} here for analysis...`}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="min-h-[200px] border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  />
                </div>
              )}
              
              <div className="mt-5">
                <Button
                  onClick={handleAnalyze}
                  disabled={loading || (isHandwriting ? !uploadedImage : !text.trim())}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-md shadow-green-500/20 py-6"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span className="font-medium">Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <PenTool className="w-5 h-5" />
                      <span className="font-medium">Analyze {isHandwriting ? 'Handwriting' : 'Text'}</span>
                    </>
                  )}
                </Button>
              </div>
              
              {error && (
                <div className="mt-3 p-3 bg-red-50 text-red-600 rounded-md flex items-center border border-red-100">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}
            </CardContent>
          </Card>
          
          {!isHandwriting && (
            <Card className="bg-gradient-learn shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-gray-800">Writing Tips</CardTitle>
                <CardDescription>
                  Follow these guidelines for better scores in Indian board exams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Follow the correct format for letters, applications, and essays</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Use formal language for official writing tasks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Organize your content with proper paragraphs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Include relevant examples from Indian context</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Proofread for spelling and grammatical errors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div>
          <Card className="bg-gradient-card shadow-md border-0 h-full">
            <CardHeader>
              <CardTitle className="text-gray-800">Analysis Results</CardTitle>
              <CardDescription>
                AI-powered feedback based on Indian academic standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              {analysisResult ? (
                renderAnalysisResult()
              ) : (
                <div className="text-center py-16 text-gray-500">
                  {loading ? (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
                        <RefreshCw className="w-8 h-8 text-white animate-spin" />
                      </div>
                      <p className="text-lg font-medium text-gray-700">Analyzing your writing...</p>
                      <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center mb-4">
                        <PenTool className="w-8 h-8 text-blue-500" />
                      </div>
                      <p className="text-lg font-medium text-gray-700">{isHandwriting ? 'Upload an image of your handwriting' : 'Enter your text'}</p>
                      <p className="text-sm text-gray-500 mt-2">and click Analyze to get detailed feedback</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Improve;