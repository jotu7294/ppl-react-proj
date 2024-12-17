import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar';
import Blog from './pages/Blog';
import About from './pages/About'; // Import the About component
import useFadeIn from './hooks/useFadeIn';

function AppContent() {
  useFadeIn();

  return (
    <div className="bg-custom-gray min-h-screen flex flex-col items-center">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex-grow flex items-center justify-center text-white fade-in">
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} /> {/* Add the About route */}
          <Route path="/" element={<p className="text-white">Welcome to my website!</p>} />
        </Routes>
      </main>
      <footer className="w-full text-center text-xs text-gray-400 py-2">
        Joey Tursi 2024
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
