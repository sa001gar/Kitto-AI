import React, { useState } from 'react';
import { Sparkles, Copy, Check, RefreshCw, Lightbulb } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Textarea } from '../components/ui/Textarea';
import { useAI } from '../context/AIContext';
import { writingTypes, indianBoardExamTopics } from '../lib/utils';

const Generate = () => {
  const { generateContent, loading, error } = useAI();
  const [prompt, setPrompt] = useState('');
  const [selectedType, setSelectedType] = useState('essay');
  const [generatedContent, setGeneratedContent] = useState('');
  const [copied, setCopied] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    const result = await generateContent(prompt, selectedType);
    if (result) {
      setGeneratedContent(result);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
    setShowSuggestions(false);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setGeneratedContent('');
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Generate Content</h1>
        <p className="text-gray-600 mt-2">Create essays, letters, and applications following Indian writing standards</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-gradient-card shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-gray-800">Content Type</CardTitle>
              <CardDescription>Select the type of content you want to generate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {writingTypes.map((type) => (
                  <div
                    key={type.value}
                    className={`p-3 rounded-md cursor-pointer transition-all duration-300 ${
                      selectedType === type.value
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                        : 'bg-white hover:bg-purple-50 border border-gray-200'
                    }`}
                    onClick={() => handleTypeChange(type.value)}
                  >
                    {type.label}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-md border-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <CardTitle className="text-gray-800">Need Ideas?</CardTitle>
              </div>
              <CardDescription>Click to see common topics from Indian board exams</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-yellow-200 hover:bg-yellow-50 text-yellow-700"
                onClick={() => setShowSuggestions(!showSuggestions)}
              >
                {showSuggestions ? 'Hide Suggestions' : 'Show Topic Suggestions'}
              </Button>
              
              {showSuggestions && (
                <div className="mt-4 max-h-60 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                  {indianBoardExamTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="p-2 text-sm bg-white hover:bg-yellow-50 rounded-md cursor-pointer border border-gray-100 shadow-sm transition-colors"
                      onClick={() => handleSuggestionClick(topic)}
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-card shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-gray-800">Enter Your Topic</CardTitle>
              <CardDescription>
                Provide a topic or prompt for your {selectedType}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder={`Enter your ${selectedType} topic here...`}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] border-gray-300 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              />
              
              <div className="mt-4">
                <Button 
                  onClick={handleGenerate} 
                  disabled={loading || !prompt.trim()}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md shadow-purple-500/20"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
                    </>
                  )}
                </Button>
              </div>
              
              {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
              )}
            </CardContent>
          </Card>
          
          {generatedContent && (
            <Card className="bg-gradient-card shadow-md border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-gray-800">Generated Content</CardTitle>
                  <CardDescription>
                    Your {selectedType} has been generated according to Indian standards
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 border-purple-200 hover:bg-purple-50"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-green-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-600">Copy</span>
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-6 rounded-md whitespace-pre-wrap max-h-[500px] overflow-y-auto border border-gray-100 shadow-inner">
                  {generatedContent}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Generate;