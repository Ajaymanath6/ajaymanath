import fullImg from "./full.jpg";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function About() {
  const [showInfo, setShowInfo] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isOnline, setIsOnline] = useState(true);

  const storyText = "I'm Ajay, an **AI-powered product designer** who bridges **design and development**. I specialize in **rapid prototyping** with **Cursor AI**, helping teams test interactions earlier and reduce development cycles. I blend **traditional UX principles** with **cutting-edge AI** to accelerate decision-making and bring ideas to life faster.";

  // Simulate online/offline status with random changes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.3); // 70% chance of being online
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (showStory) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < storyText.length) {
          setTypedText(storyText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 30); // Adjust speed here (lower = faster)
      
      return () => clearInterval(timer);
    }
  }, [showStory, storyText]);

  const handleImageClick = () => {
    setShowInfo(!showInfo);
    if (!showInfo) {
      // Show story after a delay when info section appears
      setTimeout(() => setShowStory(true), 800);
    } else {
      setShowStory(false);
      setTypedText('');
    }
  };

  // Function to format text with bold and gradient highlights
  const formatText = (text: string) => {
    // Split by **bold** markers
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return (
          <span
            key={index}
            className="font-semibold"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(192,192,192,0.8) 50%, rgba(169,169,169,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {boldText}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-custom-dark text-white flex flex-col">
      {/* Header with back button - now floating without background */}
      <div className="fixed top-4 left-4 z-50">
        <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link to="/" className="text-white flex items-center bg-black bg-opacity-50 px-3 px-sm-4 py-2 rounded-lg backdrop-blur-sm text-sm sm:text-base">
            <i className="ri-arrow-left-line mr-2"></i>
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </div>

      {/* Reduced spacer since header is now floating */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center relative px-4">
        {/* Spider Web Background */}
        <div className="pattern-container" style={{ mixBlendMode: 'normal', opacity: 0.6, backgroundColor: 'rgba(20, 20, 20, 0.7)' }}>
          {/* SVG content remains unchanged */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Existing SVG content */}
            <defs>
              {/* Gradient for web strands */}
              <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.2)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
              </linearGradient>
            </defs>
            
            {/* Spider Web - Concentric circles */}
            <g className="pulse-animation" style={{ animationDuration: '4s' }}>
              <circle cx="50%" cy="50%" r="10%" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="40%" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="50%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            </g>
            
            {/* Spider Web - Radial lines from center */}
            <g className="rotate-animation" style={{ animationDuration: '20s' }}>
              {/* Main 8 radial lines */}
              <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="85.36%" y2="14.64%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="85.36%" y2="85.36%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="14.64%" y2="85.36%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="0%" y2="50%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="14.64%" y2="14.64%" stroke="url(#webGradient)" strokeWidth="1" />
            </g>
            
            {/* Additional radial lines for denser web */}
            <g className="rotate-animation" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
              <line x1="50%" y1="50%" x2="67.68%" y2="7.32%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              <line x1="50%" y1="50%" x2="92.68%" y2="32.32%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              <line x1="50%" y1="50%" x2="92.68%" y2="67.68%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              <line x1="50%" y1="50%" x2="67.68%" y2="92.68%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              <line x1="50%" y1="50%" x2="32.32%" y2="92.68%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              <line x1="50%" y1="50%" x2="7.32%" y2="67.68%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              <line x1="50%" y1="50%" x2="7.32%" y2="32.32%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              <line x1="50%" y1="50%" x2="32.32%" y2="7.32%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
            </g>
            
            {/* Web intersection points with subtle glow */}
            <g className="pulse-animation" style={{ animationDelay: '1s' }}>
              <circle cx="50%" cy="40%" r="2" fill="rgba(255, 255, 255, 0.4)" />
              <circle cx="60%" cy="50%" r="2" fill="rgba(255, 255, 255, 0.4)" />
              <circle cx="50%" cy="60%" r="2" fill="rgba(255, 255, 255, 0.4)" />
              <circle cx="40%" cy="50%" r="2" fill="rgba(255, 255, 255, 0.4)" />
              <circle cx="57%" cy="43%" r="1.5" fill="rgba(255, 255, 255, 0.3)" />
              <circle cx="57%" cy="57%" r="1.5" fill="rgba(255, 255, 255, 0.3)" />
              <circle cx="43%" cy="57%" r="1.5" fill="rgba(255, 255, 255, 0.3)" />
              <circle cx="43%" cy="43%" r="1.5" fill="rgba(255, 255, 255, 0.3)" />
            </g>
            
            {/* Center spider (optional small dot) */}
            <g className="float-animation">
              <circle cx="50%" cy="50%" r="3" fill="rgba(255, 255, 255, 0.5)" />
            </g>
            
            {/* Outer web strands - irregular connections */}
            <g className="pulse-animation" style={{ animationDelay: '2s', animationDuration: '6s' }}>
              <path d="M 10% 20% Q 30% 10% 50% 20%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
              <path d="M 50% 20% Q 70% 10% 90% 20%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
              <path d="M 90% 20% Q 95% 40% 90% 50%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
              <path d="M 90% 50% Q 95% 70% 90% 80%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
              <path d="M 90% 80% Q 70% 90% 50% 80%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
              <path d="M 50% 80% Q 30% 90% 10% 80%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
              <path d="M 10% 80% Q 5% 60% 10% 50%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
              <path d="M 10% 50% Q 5% 30% 10% 20%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
            </g>
          </svg>
        </div>
        
        <div className="text-center relative z-10 flex flex-col items-center">
          {/* Profile image container with integrated info section */}
          <motion.div 
            className="relative inline-block cursor-pointer image-container"
            whileHover={{ scale: 1.05 }}
            onClick={handleImageClick}
          >
            {/* Light grey border around entire container */}
            <div className="border border-gray-300 border-opacity-20 inline-block p-1">
              <div className="overflow-hidden">
                <motion.img 
                  src={fullImg} 
                  alt="Ajay Manath" 
                  className="w-64 h-64 sm:w-72 sm:h-72 object-cover bw-image block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Info section that extends directly from image - NO GAP */}
                <AnimatePresence>
                  {showInfo && (
                    <motion.div 
                      className="info-section bg-black px-4 sm:px-6 py-4 -mt-1"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: '100%' }}
                    >
                      {/* Name - Left aligned */}
                      <motion.div 
                        className="text-left"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h2 className="text-xl sm:text-2xl font-bold text-white">AJAY L MANATH</h2>
                      </motion.div>
                      
                      {/* Gradient border below name */}
                      <motion.div 
                        className="my-2 sm:my-3"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div 
                          className="w-full"
                          style={{ 
                            height: '0.5px',
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)'
                          }}
                        ></div>
                      </motion.div>
                      
                      {/* Bottom section with position and social icons */}
                      <motion.div 
                        className="flex justify-between items-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {/* Left side - Position with animated indicator */}
                        <motion.div 
                          className="flex items-center"
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                        >
                          <motion.span 
                            className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}
                            animate={{ 
                              scale: isOnline ? [1, 1.2, 1] : [1, 0.8, 1],
                              boxShadow: isOnline 
                                ? ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 4px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
                                : ['0 0 0 0 rgba(239, 68, 68, 0.7)', '0 0 0 4px rgba(239, 68, 68, 0)', '0 0 0 0 rgba(239, 68, 68, 0)']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-xs sm:text-sm text-white opacity-80">{isOnline ? 'Available for hire' : 'Currently busy'}</span>
                        </motion.div>
                        
                        {/* Right side - Social icons */}
                        <div className="flex space-x-2 sm:space-x-3">
                          <motion.a 
                            href="https://github.com" 
                            className="text-white opacity-80 hover:opacity-100 transition-opacity"
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <i className="ri-github-line text-sm sm:text-base"></i>
                          </motion.a>
                          <motion.a 
                            href="https://linkedin.com" 
                            className="text-white opacity-80 hover:opacity-100 transition-opacity"
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <i className="ri-linkedin-line text-sm sm:text-base"></i>
                          </motion.a>
                          <motion.a 
                            href="https://twitter.com" 
                            className="text-white opacity-80 hover:opacity-100 transition-opacity"
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <i className="ri-twitter-x-line text-sm sm:text-base"></i>
                          </motion.a>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Story text below image - maximizing readability with max-width */}
          <AnimatePresence>
            {showStory && (
              <motion.div
                className="mt-8 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div 
                  className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto text-white opacity-90 text-left text-sm sm:text-base leading-relaxed"
                >
                  <p>{formatText(typedText)}</p>
                  <span className="inline-block w-1 h-5 bg-white opacity-80 ml-1 animate-pulse"></span>
                </div>
                  
                <div className="mt-6 sm:mt-8 flex justify-center">
                  <motion.button 
                    className="text-white text-xs sm:text-sm bg-transparent border border-white border-opacity-20 rounded-full px-4 py-2 flex items-center"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <i className="ri-add-line mr-2"></i>
                    <span>See Full Resume</span>
                  </motion.button>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
          
          {/* Click instruction - only shown when story is not visible */}
          <AnimatePresence>
            {!showInfo && (
              <motion.div 
                className="mt-4 text-white opacity-70 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className="ri-cursor-line mr-1"></i> Click on image to show details
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer with increased margin-top */}
      <footer className="bg-custom-dark text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-white opacity-60">
            © {new Date().getFullYear()} AJAY MANATH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About; 