import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';

const Home = () => {
  return (
    <div className="flex flex-col space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none"></div>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Improve Your Writing with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Kitto AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            The AI-powered writing assistant designed specifically for Indian students to master paragraph writing, letter writing, essay writing, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/learn">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 gap-2 shadow-lg shadow-blue-500/20">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/improve">
              <Button size="lg" variant="outline" className="border-blue-300 hover:bg-blue-50 gap-2">
                Try It Now <PenTool className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            How Kitto AI Helps You
          </span>
          <div className="absolute w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 bottom-2 left-1/2 transform -translate-x-1/2 rounded-full mt-2"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-learn card-hover-effect border-0 shadow-md overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader>
              <div className="mb-4 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Learn</CardTitle>
              <CardDescription className="text-gray-600">
                Master writing with structured lessons following Indian academic standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>CBSE/ICSE writing guidelines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Formal letter formats</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Essay structure techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Application writing tips</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/learn" className="w-full">
                <Button variant="outline" className="w-full border-blue-300 hover:bg-blue-100 text-blue-700">
                  Start Learning
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-generate card-hover-effect border-0 shadow-md overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader>
              <div className="mb-4 w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">Generate</CardTitle>
              <CardDescription className="text-gray-600">
                Create content based on topics following Indian writing styles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Essays and paragraphs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Formal and informal letters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>School applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mock tests with answers</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/generate" className="w-full">
                <Button variant="outline" className="w-full border-purple-300 hover:bg-purple-100 text-purple-700">
                  Generate Content
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-improve card-hover-effect border-0 shadow-md overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader>
              <div className="mb-4 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <PenTool className="w-7 h-7 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Improve</CardTitle>
              <CardDescription className="text-gray-600">
                Get feedback on your writing with detailed analysis and suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Handwriting analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Grammar and spelling check</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Structure improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Board exam-style marking</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/improve" className="w-full">
                <Button variant="outline" className="w-full border-green-300 hover:bg-green-100 text-green-700">
                  Analyze Your Writing
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            How It Works
          </span>
          <div className="absolute w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full mt-2"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 animate-float">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">Choose Your Task</h3>
            <p className="text-gray-600">Select whether you want to learn, generate content, or improve your writing</p>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">Input Your Content</h3>
            <p className="text-gray-600">Type your text or upload a picture of your handwritten work</p>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">AI Analysis</h3>
            <p className="text-gray-600">Our AI analyzes your writing based on Indian academic standards</p>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">Get Feedback</h3>
            <p className="text-gray-600">Receive detailed feedback, corrections, and improvement suggestions</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Writing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Join thousands of Indian students who are enhancing their writing skills with Kitto AI.
        </p>
        <Link to="/learn">
          <Button size="lg" variant="secondary" className="bg-white text-indigo-700 hover:bg-blue-50 shadow-lg gap-2 px-8 py-6 text-lg">
            Get Started Now <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;