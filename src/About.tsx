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

  const storyText = "I'm Ajay, an **AI-powered product designer** transforming how teams create digital experiences. I bridge **design and development**, creating meaningful digital experiences with specialized **AI workflows**.\n\nMy strength lies in **rapid prototyping** with **Cursor AI**—teams can test real interactions earlier, dramatically reducing **development cycles**. With **dual expertise** across design and engineering, I collaborate seamlessly to create cohesive products with smoother implementation.\n\nI blend **traditional UX principles** with **cutting-edge AI** to accelerate decision-making and bring ideas to life faster than ever before.";

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
      {/* Header with back button - removed margin-top */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-custom-dark py-4 site-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to="/" className="text-white flex items-center">
                <i className="ri-arrow-left-line mr-2"></i>
                <span>Back to Portfolio</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden under fixed header - reduced back to original */}
      <div className="h-[80px]"></div>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center relative">
        {/* Spider Web Background */}
        <div className="pattern-container" style={{ mixBlendMode: 'normal', opacity: 0.6, backgroundColor: 'rgba(20, 20, 20, 0.7)' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Light grey border around entire container */}
            <div className="border border-gray-300 border-opacity-20 inline-block p-1">
              <div className="overflow-hidden">
                <motion.img 
                  src={fullImg} 
                  alt="Ajay Manath" 
                  className="w-80 h-80 object-cover bw-image block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Info section that extends directly from image - NO GAP */}
                <AnimatePresence>
                  {showInfo && (
                    <motion.div 
                      className="info-section bg-black px-6 py-4 -mt-1"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: '320px' }}
                    >
                      {/* Name - Left aligned */}
                      <motion.div 
                        className="text-left"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h2 className="text-2xl font-bold text-white">AJAY L MANATH</h2>
                      </motion.div>
                      
                      {/* Gradient border below name */}
                      <motion.div 
                        className="my-3"
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
                            className={`w-2 h-2 rounded-full mr-3 ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}
                            animate={{ 
                              scale: isOnline ? [1, 1.2, 1] : [1, 0.8, 1],
                              boxShadow: isOnline 
                                ? ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 4px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
                                : ['0 0 0 0 rgba(239, 68, 68, 0.7)', '0 0 0 4px rgba(239, 68, 68, 0)', '0 0 0 0 rgba(239, 68, 68, 0)']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.span>
                          <p className="text-sm text-white">Product Designer</p>
                        </motion.div>
                        
                        {/* Right side - Only 3 social media icons */}
                        <motion.div 
                          className="flex items-center space-x-5"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                        >
                          <motion.a 
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <i className="ri-github-fill text-lg"></i>
                          </motion.a>
                          <motion.a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <i className="ri-linkedin-fill text-lg"></i>
                          </motion.a>
                          <motion.a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <i className="ri-instagram-fill text-lg"></i>
                          </motion.a>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Story Section */}
          <AnimatePresence>
            {showStory && (
              <motion.div
                className="mt-12 max-w-2xl mx-auto px-6 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Gradient background for the story */}
                  <div 
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  ></div>
                  
                  <div className="relative p-8">
                    <motion.div 
                      className="text-lg leading-relaxed"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontWeight: '300',
                        letterSpacing: '0.02em',
                        lineHeight: '1.8'
                      }}
                    >
                      {formatText(typedText)}
                      {typedText.length < storyText.length && (
                        <motion.span
                          className="inline-block w-0.5 h-6 bg-white ml-1"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
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