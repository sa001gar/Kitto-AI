import React from 'react';
import { BookOpen, PenTool, Sparkles, Brain, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white border-t border-indigo-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Brain className="h-8 w-8 text-indigo-300" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">Kitto AI</span>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 items-center">
            <div className="flex items-center space-x-2 group">
              <BookOpen className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors" />
              <span className="text-sm text-indigo-200 group-hover:text-white transition-colors">Learn</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Sparkles className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors" />
              <span className="text-sm text-indigo-200 group-hover:text-white transition-colors">Generate</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <PenTool className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors" />
              <span className="text-sm text-indigo-200 group-hover:text-white transition-colors">Improve</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-indigo-800 text-center">
          <p className="text-indigo-200">Kitto AI - Writing Assistant for Indian Students</p>
          <p className="mt-2 flex items-center justify-center text-sm text-indigo-300">
            Made with <Heart className="w-4 h-4 mx-1 text-pink-400 animate-pulse" /> by Sagar Kundu
          </p>
          <p className="mt-4 text-xs text-indigo-400">© {new Date().getFullYear()} Kitto AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;