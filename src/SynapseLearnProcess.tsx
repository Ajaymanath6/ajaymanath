import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function SynapseLearnProcess() {
  return (
    <div className="min-h-screen bg-custom-dark text-white flex flex-col">
      {/* Header with back button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link to="/?tab=Projects" className="text-white flex items-center bg-black bg-opacity-50 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm text-sm sm:text-base">
            <i className="ri-arrow-left-line mr-2"></i>
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </div>

      {/* Reduced spacer */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-3 sm:px-4 py-8 sm:py-16">
        {/* Background pattern */}
        <div className="pattern-container" style={{ mixBlendMode: 'normal', opacity: 0.6, backgroundColor: 'rgba(20, 20, 20, 0.7)' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.2)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
              </linearGradient>
            </defs>
            
            <g className="pulse-animation" style={{ animationDuration: '4s' }}>
              <circle cx="50%" cy="50%" r="10%" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="40%" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="50%" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            </g>
          </svg>
        </div>

        {/* SynapseLearn Process Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Project Title */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-2" 
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(192,192,192,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              SynapseLearn: Full Product Design
            </h1>
            <p className="text-xl text-white opacity-80 mt-2">Master Any Subject with SynapseLearn</p>
            <p className="text-lg text-white opacity-70 mt-1">Our AI-powered platform transforms how you study, making learning more effective and enjoyable</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="bg-custom-dark px-3 py-1 rounded text-white text-sm font-bold">
                2025
              </div>
              <div className="flex space-x-3">
                <a 
                  href="https://mandal-ai-9c42ef.gitlab.io/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center bg-purple-600 hover:bg-purple-700 transition-colors text-white text-sm px-3 py-1 rounded"
                >
                  <i className="ri-external-link-line mr-1"></i>
                  View Live Project
                </a>
                <a 
                  href="https://www.figma.com/file/synapselearn-design" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center bg-black hover:bg-gray-900 transition-colors text-white text-sm px-3 py-1 rounded border border-gray-700"
                >
                  <i className="ri-figma-fill mr-1"></i>
                  View Figma
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center mt-4 gap-2">
              <span className="badge badge-tool text-xs sm:text-sm">Figma</span>
              <span className="badge badge-tool text-xs sm:text-sm">Research</span>
              <span className="badge badge-tool text-xs sm:text-sm">Design</span>
              <span className="badge badge-tool text-xs sm:text-sm">Cursor</span>
              <span className="badge badge-tool text-xs sm:text-sm">Figma MCP</span>
              <span className="badge badge-tool text-xs sm:text-sm">ChatGPT</span>
              <span className="badge badge-tool text-xs sm:text-sm">Gemini</span>
              <span className="badge badge-tool text-xs sm:text-sm">Claude 3.7</span>
            </div>
            
            <div className="w-24 h-1 mx-auto mt-6" style={{ 
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)' 
            }}></div>
          </motion.div>

          {/* Design Process Journey - Visual Timeline */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">The Design Journey</h2>
            
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-blue-500"></div>
              
              {/* Process Steps */}
              <div className="space-y-16 relative">
                {/* Step 1: EMPATHIZE */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-teal-400 text-sm font-bold tracking-wider">PHASE 01</span>
                      <h3 className="text-2xl font-bold mb-4">Empathize</h3>
                      <p className="text-white opacity-80 mb-4">I discovered a real problem faced by my niece and cousin during their exam preparation.</p>
                      
                      <div className="p-3 bg-black bg-opacity-30 rounded-lg inline-block">
                        <div className="flex items-center">
                          <i className="ri-user-voice-line text-xl text-teal-400 mr-2"></i>
                          <span className="text-sm">8 Student Interviews</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-teal-400 text-black items-center justify-center z-10">
                      <i className="ri-emotion-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div 
                      className="bg-black bg-opacity-30 p-4 rounded-lg"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="bg-teal-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                          <span className="text-teal-300 font-bold">A</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Aanya Sharma</h4>
                          <p className="text-xs opacity-70">12th Grade Student, CBSE Board</p>
                        </div>
                      </div>
                      <p className="text-sm opacity-90 italic border-l-2 border-teal-400 pl-3">
                        "When I'm focusing on a specific concept in Physics, I might only find 2-3 relevant questions in a practice set of 50. The rest are either too easy, too advanced, or on completely different topics."
                      </p>
                    </motion.div>
                    
                    {/* Student Interview Questions */}
                    <motion.div 
                      className="mt-4 bg-black bg-opacity-40 p-4 rounded-lg"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <h4 className="font-bold mb-3 text-sm flex items-center">
                        <i className="ri-questionnaire-line text-teal-400 mr-2"></i>
                        Student Interview Questions
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-bold">Q: How much time do you spend creating your own practice questions?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Nearly 40% of my study time goes into finding or creating relevant questions."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: What's your biggest challenge when preparing for exams?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Finding questions that match exactly what I'm struggling with at my current level."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: How do you know if you've mastered a concept?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"When I can solve varied questions on it without hesitation. But finding that variety is hard."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: Would you use AI to help with your studies?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Absolutely! Especially if it could create personalized questions from my own materials."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: How do you currently organize your study materials?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"I use notebooks, digital files, screenshots, and PDFs - it gets messy and hard to find things quickly."</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Q: What would make you trust an AI study tool?</p>
                          <p className="text-xs opacity-80 italic pl-3 border-l border-teal-400">"Seeing it create accurate questions about exactly what I'm learning and being able to trace where it got information from."</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* User research image placeholder */}
                    <div className="mt-4 rounded-lg overflow-hidden h-40 bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="h-full w-full p-3">
                        <div className="bg-black bg-opacity-30 h-full w-full rounded flex flex-col p-2">
                          <div className="flex mb-2">
                            <div className="w-8 h-8 rounded-full bg-teal-900 flex-shrink-0 flex items-center justify-center">
                              <span className="text-xs text-teal-300">AS</span>
                            </div>
                            <div className="ml-2 flex-1">
                              <div className="h-2 w-20 bg-gray-700 rounded-full"></div>
                              <div className="h-2 w-12 bg-gray-700 rounded-full mt-1"></div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                          </div>
                          <div className="flex-1 border-l-2 border-teal-900 pl-3 py-1">
                            <div className="h-2 w-full bg-gray-700 rounded-full"></div>
                            <div className="h-2 w-5/6 bg-gray-700 rounded-full mt-1"></div>
                            <div className="h-2 w-4/6 bg-gray-700 rounded-full mt-1"></div>
                          </div>
                          <div className="h-8 mt-2 bg-black bg-opacity-30 rounded flex items-center px-2">
                            <div className="h-2 w-4 bg-teal-800 rounded-full"></div>
                            <div className="h-2 w-20 bg-gray-700 rounded-full ml-2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 2: DEFINE */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 order-1 md:order-1 md:text-right">
                    {/* Problem Statement Table */}
                    <motion.div
                      className="bg-black bg-opacity-30 p-4 rounded-lg mb-4"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <h4 className="font-bold mb-3 text-center">Key User Frustrations</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-gray-700">
                            <td className="py-2 pr-2">
                              <i className="ri-time-line text-teal-400 mr-2"></i>
                            </td>
                            <td className="py-2 font-medium">Time Inefficiency</td>
                            <td className="py-2 opacity-80">Hours wasted rereading material</td>
                          </tr>
                          <tr className="border-b border-gray-700">
                            <td className="py-2 pr-2">
                              <i className="ri-focus-3-line text-teal-400 mr-2"></i>
                            </td>
                            <td className="py-2 font-medium">Lack of Focus</td>
                            <td className="py-2 opacity-80">Unable to target specific chapters</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-2">
                              <i className="ri-file-list-3-line text-teal-400 mr-2"></i>
                            </td>
                            <td className="py-2 font-medium">Generic Content</td>
                            <td className="py-2 opacity-80">Non-personalized question banks</td>
                          </tr>
                        </tbody>
                      </table>
                    </motion.div>
                    
                    {/* Affinity mapping visualization */}
                    <div className="rounded-lg overflow-hidden h-40 bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="h-full w-full p-2">
                        <div className="flex justify-between">
                          <div className="bg-blue-900 bg-opacity-50 h-3 w-24 rounded"></div>
                          <div className="bg-blue-900 bg-opacity-50 h-3 w-16 rounded"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="bg-yellow-500 bg-opacity-20 p-1 rounded">
                            <div className="h-1.5 w-full bg-yellow-500 bg-opacity-50 rounded"></div>
                            <div className="h-1.5 w-5/6 bg-yellow-500 bg-opacity-50 rounded mt-1"></div>
                            <div className="h-1.5 w-4/6 bg-yellow-500 bg-opacity-50 rounded mt-1"></div>
                          </div>
                          <div className="bg-yellow-500 bg-opacity-20 p-1 rounded">
                            <div className="h-1.5 w-full bg-yellow-500 bg-opacity-50 rounded"></div>
                            <div className="h-1.5 w-4/6 bg-yellow-500 bg-opacity-50 rounded mt-1"></div>
                          </div>
                          <div className="bg-yellow-500 bg-opacity-20 p-1 rounded">
                            <div className="h-1.5 w-full bg-yellow-500 bg-opacity-50 rounded"></div>
                            <div className="h-1.5 w-3/6 bg-yellow-500 bg-opacity-50 rounded mt-1"></div>
                            <div className="h-1.5 w-5/6 bg-yellow-500 bg-opacity-50 rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="bg-green-500 bg-opacity-20 p-1 rounded">
                            <div className="h-1.5 w-full bg-green-500 bg-opacity-50 rounded"></div>
                            <div className="h-1.5 w-5/6 bg-green-500 bg-opacity-50 rounded mt-1"></div>
                          </div>
                          <div className="bg-green-500 bg-opacity-20 p-1 rounded">
                            <div className="h-1.5 w-full bg-green-500 bg-opacity-50 rounded"></div>
                            <div className="h-1.5 w-4/6 bg-green-500 bg-opacity-50 rounded mt-1"></div>
                          </div>
                          <div className="bg-green-500 bg-opacity-20 p-1 rounded">
                            <div className="h-1.5 w-full bg-green-500 bg-opacity-50 rounded"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="bg-red-500 bg-opacity-20 p-1 rounded">
                            <div className="h-1.5 w-full bg-red-500 bg-opacity-50 rounded"></div>
                          </div>
                          <div className="bg-red-500 bg-opacity-20 p-1 rounded">
                            <div className="h-1.5 w-full bg-red-500 bg-opacity-50 rounded"></div>
                            <div className="h-1.5 w-4/6 bg-red-500 bg-opacity-50 rounded mt-1"></div>
                          </div>
                          <div className="bg-red-500 bg-opacity-20 p-1 rounded">
                            <div className="h-1.5 w-full bg-red-500 bg-opacity-50 rounded"></div>
                            <div className="h-1.5 w-3/6 bg-red-500 bg-opacity-50 rounded mt-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center order-0 md:order-2">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-blue-400 text-black items-center justify-center z-10">
                      <i className="ri-focus-3-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-blue-400 text-sm font-bold tracking-wider">PHASE 02</span>
                      <h3 className="text-2xl font-bold mb-4">Define</h3>
                      <div className="p-4 bg-black bg-opacity-30 rounded-lg">
                        <h4 className="font-bold mb-2 flex items-center">
                          <i className="ri-question-mark-circle-line text-blue-400 mr-2"></i>
                          Problem Statement
                        </h4>
                        <p className="text-sm opacity-90 italic">
                          How might we help students create personalized practice questions from their own study materials to make exam preparation more efficient and targeted?
                        </p>
                        
                        <h4 className="font-bold mt-4 mb-2 flex items-center">
                          <i className="ri-research-line text-blue-400 mr-2"></i>
                          Key Research Insight
                        </h4>
                        <div className="flex items-center">
                          <div className="text-3xl font-bold text-blue-400 mr-3">80%</div>
                          <p className="text-xs opacity-80">Better retention when students test themselves immediately after studying vs. passive review</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Step 3: IDEATE */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-purple-400 text-sm font-bold tracking-wider">PHASE 03</span>
                      <h3 className="text-2xl font-bold mb-4">Ideate</h3>
                      <p className="text-white opacity-80 mb-4">Exploring potential solutions through collaborative brainstorming and AI-augmented ideation.</p>
                      
                      <div className="p-3 bg-black bg-opacity-30 rounded-lg inline-block">
                        <div className="flex items-center">
                          <i className="ri-lightbulb-flash-line text-xl text-purple-400 mr-2"></i>
                          <span className="text-sm">48 Solution Concepts</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-purple-400 text-black items-center justify-center z-10">
                      <i className="ri-lightbulb-flash-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Solution sketches grid */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-file-upload-line text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Content Upload</h5>
                          <p className="text-xs opacity-80">Upload any study material to create knowledge base</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-ai-generate text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">AI Question Gen</h5>
                          <p className="text-xs opacity-80">Generate personalized practice questions</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-line-chart-line text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Analytics</h5>
                          <p className="text-xs opacity-80">Track progress and identify knowledge gaps</p>
                        </div>
                        <div className="p-3 bg-black bg-opacity-30 rounded-lg">
                          <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-2">
                            <i className="ri-gamepad-line text-2xl opacity-40"></i>
                          </div>
                          <h5 className="text-sm font-bold">Gamification</h5>
                          <p className="text-xs opacity-80">Increase engagement through game elements</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Step 4: PROTOTYPE */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 order-1 md:order-1 md:text-right">
                    {/* Real prototype image */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-2 sm:p-3 mb-4"
                    >
                      <div className="bg-black bg-opacity-30 h-full w-full rounded p-2 sm:p-3 flex flex-col">
                        <div className="flex-1 flex items-center justify-center">
                          <img 
                            src="synapse2.png" 
                            alt="SynapseLearn Prototype" 
                            className="max-w-full h-auto rounded"
                          />
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="flex space-x-2">
                      <div className="p-2 bg-black bg-opacity-30 rounded-lg flex-1 text-center">
                        <span className="text-xs opacity-70">Low-fi</span>
                        <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
                          <div className="w-full h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-2 bg-black bg-opacity-30 rounded-lg flex-1 text-center">
                        <span className="text-xs opacity-70">Mid-fi</span>
                        <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
                          <div className="w-full h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-2 bg-black bg-opacity-30 rounded-lg flex-1 text-center">
                        <span className="text-xs opacity-70">Hi-fi</span>
                        <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
                          <div className="w-3/4 h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center order-0 md:order-2">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-green-400 text-black items-center justify-center z-10">
                      <i className="ri-artboard-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-green-400 text-sm font-bold tracking-wider">PHASE 04</span>
                      <h3 className="text-2xl font-bold mb-4">Prototype</h3>
                      <div className="p-4 bg-black bg-opacity-30 rounded-lg">
                        <h4 className="font-bold mb-2 flex items-center">
                          <i className="ri-artboard-line text-green-400 mr-2"></i>
                          Prototype Evolution
                        </h4>
                        <table className="w-full text-xs">
                          <tbody>
                            <tr className="border-b border-gray-700">
                              <td className="py-2"><strong>Figma</strong></td>
                              <td className="py-2 opacity-80">Initial wireframes and component design</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                              <td className="py-2"><strong>Figma MCP</strong></td>
                              <td className="py-2 opacity-80">Component design system development</td>
                            </tr>
                            <tr>
                              <td className="py-2"><strong>Cursor</strong></td>
                              <td className="py-2 opacity-80">Interactive prototype with real functionality</td>
                            </tr>
                          </tbody>
                        </table>
                        
                        <div className="mt-3 p-2 bg-black bg-opacity-40 rounded border border-green-900">
                          <p className="text-xs opacity-90">
                            <i className="ri-speed-line text-green-400 mr-1"></i>
                            <strong>Rapid Iteration:</strong> 6 major prototype versions in 3 weeks
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Step 5: TEST */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-amber-400 text-sm font-bold tracking-wider">PHASE 05</span>
                      <h3 className="text-2xl font-bold mb-4">Test</h3>
                      <p className="text-white opacity-80 mb-4">Validating design decisions through user testing and iterative refinement.</p>
                      
                      <div className="p-3 bg-black bg-opacity-30 rounded-lg inline-block">
                        <div className="flex items-center">
                          <i className="ri-test-tube-line text-xl text-amber-400 mr-2"></i>
                          <span className="text-sm">12 User Testing Sessions</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-0 relative flex justify-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-amber-400 text-black items-center justify-center z-10">
                      <i className="ri-test-tube-line text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="p-4 bg-black bg-opacity-30 rounded-lg"
                    >
                      <h4 className="font-bold mb-3">User Testing Results</h4>
                      
                      {/* Test results gauge charts */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {/* Task Completion Rate Gauge */}
                        <div>
                          <div className="relative h-24 flex items-center justify-center mb-1">
                            <svg width="96" height="96" viewBox="0 0 96 96">
                              {/* Background circle */}
                              <circle cx="48" cy="48" r="40" fill="none" stroke="#374151" strokeWidth="8" />
                              
                              {/* Progress arc - 92% of the circle (331.2 degrees) */}
                              <path 
                                d="M48,8 A40,40 0 1,1 9.373,67.634"
                                fill="none" 
                                stroke="#F59E0B" 
                                strokeWidth="8" 
                                strokeLinecap="round"
                              />
                              
                              {/* Inner indicator */}
                              <circle cx="48" cy="48" r="32" fill="#111827" />
                              
                              {/* Text */}
                              <text x="48" y="53" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">92%</text>
                            </svg>
                          </div>
                          <p className="text-center text-xs">Task Completion Rate</p>
                        </div>
                        
                        {/* Satisfaction Score Gauge */}
                        <div>
                          <div className="relative h-24 flex items-center justify-center mb-1">
                            <svg width="96" height="96" viewBox="0 0 96 96">
                              {/* Background circle */}
                              <circle cx="48" cy="48" r="40" fill="none" stroke="#374151" strokeWidth="8" />
                              
                              {/* Progress arc - 8.7/10 = 87% of the circle (313.2 degrees) */}
                              <path 
                                d="M48,8 A40,40 0 1,1 14.627,73.634"
                                fill="none" 
                                stroke="#10B981" 
                                strokeWidth="8" 
                                strokeLinecap="round"
                              />
                              
                              {/* Inner indicator */}
                              <circle cx="48" cy="48" r="32" fill="#111827" />
                              
                              {/* Text */}
                              <text x="48" y="53" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">8.7</text>
                            </svg>
                          </div>
                          <p className="text-center text-xs">Satisfaction Score (of 10)</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-black bg-opacity-40 rounded border border-amber-900">
                        <p className="text-xs italic opacity-90">
                          "SynapseLearn would transform how I prepare for my board exams. Being able to generate questions from specific chapters would save me time and help me focus exactly where I need to improve."
                        </p>
                        <p className="text-right text-xs opacity-70 mt-1">— Student Tester</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Solution */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">The Solution</h2>
            
            {/* Solution Image */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4">
                <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                  <div className="flex items-center justify-center">
                    <img 
                      src="synapse1.png" 
                      alt="SynapseLearn Solution" 
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black bg-opacity-30 p-5 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center mr-4">
                    <i className="ri-upload-cloud-2-line text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold">Custom Content Upload</h3>
                </div>
                <p className="text-sm opacity-90 mb-3">Students upload any study material - PDFs, textbook pages, notes - to create a personalized knowledge base.</p>
                <p className="text-xs opacity-80 italic">Transforms static content into interactive learning</p>
              </div>
              
              <div className="bg-black bg-opacity-30 p-5 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center mr-4">
                    <i className="ri-ai-generate text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold">AI Question Generation</h3>
                </div>
                <p className="text-sm opacity-90 mb-3">The platform's AI engine analyzes content and creates relevant questions that test comprehension and knowledge.</p>
                <p className="text-xs opacity-80 italic">Multiple-choice, short answer, and open-ended questions</p>
              </div>
              
              <div className="bg-black bg-opacity-30 p-5 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mr-4">
                    <i className="ri-line-chart-line text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold">Performance Analytics</h3>
                </div>
                <p className="text-sm opacity-90 mb-3">Detailed metrics show progress, identify knowledge gaps, and track improvement over time.</p>
                <p className="text-xs opacity-80 italic">Personalized recommendations for focused study</p>
              </div>
              
              <div className="bg-black bg-opacity-30 p-5 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mr-4">
                    <i className="ri-gamepad-line text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold">Gamified Learning</h3>
                </div>
                <p className="text-sm opacity-90 mb-3">Leaderboards, achievements, and progress tracking transform studying into an engaging experience.</p>
                <p className="text-xs opacity-80 italic">Increases motivation and consistent engagement</p>
              </div>
            </div>
          </motion.div>

          {/* Design Showcase - Additional Views */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Design Showcase</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* First Row - Two Images */}
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                  <div className="flex items-center justify-center">
                    <img 
                      src="synapsea.png" 
                      alt="SynapseLearn Study Dashboard Interface" 
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                  <div className="flex items-center justify-center">
                    <img 
                      src="synapseb.png" 
                      alt="SynapseLearn Question Generation Interface" 
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Second Row - Two Images */}
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                  <div className="flex items-center justify-center">
                    <img 
                      src="synapsec.png" 
                      alt="SynapseLearn Analytics and Progress Tracking" 
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-3 sm:p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-black bg-opacity-30 h-full w-full rounded p-3 sm:p-4 flex flex-col">
                  <div className="flex items-center justify-center">
                    <img 
                      src="synapsed.png" 
                      alt="SynapseLearn Gamification and Achievements" 
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Impact */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">The Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">42%</div>
                <p className="text-xs opacity-90">Improved test scores</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">65%</div>
                <p className="text-xs opacity-90">Reduced study time</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">78%</div>
                <p className="text-xs opacity-90">Increased retention</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">3.5x</div>
                <p className="text-xs opacity-90">More practice questions</p>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-30 p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Educational Transformation</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3">
                  <i className="ri-user-settings-line text-3xl text-teal-400 block mb-2"></i>
                  <p className="text-xs">Personalized Learning at Scale</p>
                </div>
                <div className="p-3">
                  <i className="ri-brain-line text-3xl text-purple-400 block mb-2"></i>
                  <p className="text-xs">Active Knowledge Testing</p>
                </div>
                <div className="p-3">
                  <i className="ri-database-2-line text-3xl text-blue-400 block mb-2"></i>
                  <p className="text-xs">Data-Driven Study Habits</p>
                </div>
                <div className="p-3">
                  <i className="ri-robot-line text-3xl text-amber-400 block mb-2"></i>
                  <p className="text-xs">AI-Assisted Learning Skills</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back to portfolio button at the bottom */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <Link to="/?tab=Projects" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white text-sm sm:text-base px-6 py-3 rounded-lg flex items-center transition-all duration-300">
                <i className="ri-arrow-left-line mr-2"></i>
                <span>Return to Portfolio</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SynapseLearnProcess; 