import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/Toaster';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Generate from './pages/Generate';
import Improve from './pages/Improve';
import { AIProvider } from './context/AIContext';

function App() {
  return (
    <AIProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/generate" element={<Generate />} />
              <Route path="/improve" element={<Improve />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AIProvider>
  );
}

export default App;