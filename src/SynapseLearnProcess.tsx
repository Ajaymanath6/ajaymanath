import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function SynapseLearnProcess() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">

      {/* Reduced spacer */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-3 sm:px-4 py-8 sm:py-16">

        {/* SynapseLearn Process Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Project Header - Two Column Layout */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column - Logo, Name, Description */}
              <div className="flex flex-col items-start">
                {/* Logo and Project Name - Left Side */}
                <div className="flex items-start justify-between w-full mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-brain-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-black">
                        SynapseLearn
            </h1>
                      <div className="bg-gray-800 px-3 py-1 rounded text-white text-sm font-bold">
                2025
              </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-bold">
                      Ongoing
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-base text-black opacity-80 leading-relaxed mb-6">
                  SynapseLearn reached out to us for a full product design of their AI-powered learning platform. 
                  Over a few months, we worked together to create a new system that transforms how students study, 
                  making learning more effective and enjoyable. We made sure everything looked fresh, consistent, 
                  and worked smoothly across all devices. Even with the complexities of personalized learning 
                  algorithms, we kept the design intuitive and engaging for students of all levels.
                </p>
                
                {/* Action Buttons */}
              <div className="flex space-x-3">
                <a 
                  href="https://mandal-ai-9c42ef.gitlab.io/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                    className="flex items-center bg-purple-600 hover:bg-purple-700 transition-colors text-white text-sm px-4 py-2 rounded-lg"
                >
                    <i className="ri-external-link-line mr-2"></i>
                  View Live Project
                </a>
                <a 
                  href="https://www.figma.com/file/synapselearn-design" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                    className="flex items-center bg-black hover:bg-gray-900 transition-colors text-white text-sm px-4 py-2 rounded-lg border border-gray-700"
                >
                    <i className="ri-figma-fill mr-2"></i>
                  View Figma
                </a>
              </div>
            </div>
            
              {/* Right Column - Scope of Work and Stack */}
              <div className="flex flex-col">
                {/* Scope of Work */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-black mb-4">Scope of work</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Product Design</span>
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Component Library</span>
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">User Research</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Variants</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Prototyping</span>
                    <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">AI Integration</span>
                  </div>
                </div>
                
                {/* Stack */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Stack</h3>
                  
                  {/* Stack with Badge Style */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                        <i className="ri-figma-fill text-black text-xs"></i>
                      </div>
                      <span className="text-black text-sm font-medium">Figma</span>
                    </div>
                    
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                        <i className="ri-code-line text-black text-xs"></i>
                      </div>
                      <span className="text-black text-sm font-medium">Cursor</span>
                    </div>
                    
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                        <i className="ri-robot-line text-black text-xs"></i>
                      </div>
                      <span className="text-black text-sm font-medium">Gemini</span>
                    </div>
                    
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                        <i className="ri-chat-3-line text-black text-xs"></i>
                      </div>
                      <span className="text-black text-sm font-medium">ChatGPT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-24 h-1 mx-auto mt-8" style={{ 
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-black">The Design Journey</h2>
            
            {/* Bento Box Grid */}
            <motion.div 
              className="space-y-[50px] mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Bento Box 1 - Full Width */}
              <motion.div 
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[650px]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="image1.png" 
                    alt="Design Process Visual 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Bento Box 2 - Full Width */}
              <motion.div 
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[650px]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="image2.png" 
                    alt="Design Process Visual 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Bento Box 3 - Full Width */}
              <motion.div 
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[650px]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="image3.png" 
                    alt="Design Process Visual 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Bento Box 4 - Full Width */}
              <motion.div 
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[650px]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="image4.png" 
                    alt="Design Process Visual 4" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
            
            <div className="relative">
              {/* Left-aligned Process Timeline */}
              <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-blue-500"></div>
              
              {/* Process Steps */}
              <div className="space-y-20 relative">
                {/* Step 1: EMPATHIZE */}
                <div>
                  {/* Phase Content */}
                  <div className="flex items-start">
                    <div className="hidden md:flex mr-6 h-12 w-12 rounded-full bg-teal-400 text-black items-center justify-center z-10 flex-shrink-0">
                      <i className="ri-emotion-line text-xl"></i>
                    </div>
                    <div className="flex-1">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-teal-400 text-sm font-bold tracking-wider">PHASE 01</span>
                        <h3 className="text-2xl font-bold mb-3 text-black">Empathize</h3>
                        <p className="text-black opacity-80 mb-4 text-sm leading-relaxed">
                          Discovered real problems faced by students during exam preparation.<br/>
                          Conducted 8 student interviews across India.
                        </p>
                        
                        {/* Student Interview Highlight */}
                        <div className="bg-gradient-to-br from-teal-50/80 to-teal-100/60 border-2 border-dashed border-teal-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(240, 253, 250, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                      <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3 shadow-sm">
                              <span className="text-white text-sm font-bold">A</span>
                        </div>
                        <div>
                              <p className="font-semibold text-black text-sm">Aanya Sharma</p>
                              <p className="text-xs text-black opacity-60">12th Grade Student, CBSE Board</p>
                        </div>
                      </div>
                          <p className="text-sm text-black opacity-90 italic border-l-4 border-teal-400 pl-3 bg-white/70 p-3 rounded shadow-sm">
                        "When I'm focusing on a specific concept in Physics, I might only find 2-3 relevant questions in a practice set of 50. The rest are either too easy, too advanced, or on completely different topics."
                      </p>
                        </div>
                    
                    {/* Student Interview Questions */}
                        <div className="bg-gradient-to-br from-teal-50/80 to-teal-100/60 border-2 border-dashed border-teal-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(240, 253, 250, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-questionnaire-line text-teal-500 mr-2"></i>
                        Student Interview Questions
                      </h4>
                      <div className="space-y-3">
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: How much time do you spend creating your own practice questions?</p>
                              <p className="text-xs text-black opacity-80 italic">"Nearly 40% of my study time goes into finding or creating relevant questions."</p>
                        </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: What's your biggest challenge when preparing for exams?</p>
                              <p className="text-xs text-black opacity-80 italic">"Finding questions that match exactly what I'm struggling with at my current level."</p>
                        </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: How do you know if you've mastered a concept?</p>
                              <p className="text-xs text-black opacity-80 italic">"When I can solve varied questions on it without hesitation. But finding that variety is hard."</p>
                        </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: Would you use AI to help with your studies?</p>
                              <p className="text-xs text-black opacity-80 italic">"Absolutely! Especially if it could create personalized questions from my own materials."</p>
                        </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: How do you currently organize your study materials?</p>
                              <p className="text-xs text-black opacity-80 italic">"I use notebooks, digital files, screenshots, and PDFs - it gets messy and hard to find things quickly."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: What would make you trust an AI study tool?</p>
                              <p className="text-xs text-black opacity-80 italic">"Seeing it create accurate questions about exactly what I'm learning and being able to trace where it got information from."</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Key Insights */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-teal-600">40%</p>
                            <p className="text-xs text-black opacity-70">Time finding questions</p>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-teal-600">8</p>
                            <p className="text-xs text-black opacity-70">Student interviews</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Bento Box Below */}
                  <motion.div 
                    className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src="image1.png" 
                        alt="Empathize Process Visual" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </motion.div>
                </div>
                
                {/* Step 2: DEFINE */}
                <div>
                  <div className="flex items-start">
                    <div className="hidden md:flex mr-6 h-12 w-12 rounded-full bg-blue-400 text-black items-center justify-center z-10 flex-shrink-0">
                      <i className="ri-focus-2-line text-xl"></i>
                    </div>
                    <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-400 text-sm font-bold tracking-wider">PHASE 02</span>
                        <h3 className="text-2xl font-bold mb-3 text-black">Define</h3>
                        <p className="text-black opacity-80 mb-4 text-sm leading-relaxed">
                          Created clear problem statement for personalized learning.<br/>
                          Identified time efficiency and content relevance as priorities.
                        </p>
                        
                        {/* Problem Statement */}
                        <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/60 border-2 border-dashed border-blue-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(239, 246, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-focus-3-line text-blue-500 mr-2"></i>
                            Problem Statement
                          </h4>
                          <p className="text-sm text-black opacity-90 italic border-l-4 border-blue-400 pl-3 bg-white/80 p-3 rounded shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                            "How might we help students create personalized practice questions from their own study materials to make exam preparation more efficient and targeted?"
                          </p>
                        </div>
                        
                        {/* Key User Frustrations */}
                        <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/60 border-2 border-dashed border-blue-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(239, 246, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-alert-line text-blue-500 mr-2"></i>
                            Key User Frustrations
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-time-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Time Inefficiency</p>
                              <p className="text-xs text-black opacity-70">Hours wasted rereading material</p>
                          </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-focus-3-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Lack of Focus</p>
                              <p className="text-xs text-black opacity-70">Unable to target specific chapters</p>
                          </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-file-list-3-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Generic Content</p>
                              <p className="text-xs text-black opacity-70">Non-personalized question banks</p>
                          </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-research-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Research Insight</p>
                              <p className="text-xs text-black opacity-70">80% better retention with self-testing</p>
                          </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                    <motion.div 
                    className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src="image2.png" 
                        alt="Define Process Visual" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      </div>
                    </motion.div>
                </div>
                
                {/* Step 3: IDEATE */}
                <div>
                  <div className="flex items-start">
                    <div className="hidden md:flex mr-6 h-12 w-12 rounded-full bg-purple-400 text-black items-center justify-center z-10 flex-shrink-0">
                      <i className="ri-lightbulb-flash-line text-xl"></i>
                    </div>
                    <div className="flex-1">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-purple-400 text-sm font-bold tracking-wider">PHASE 03</span>
                        <h3 className="text-2xl font-bold mb-3 text-black">Ideate</h3>
                        <p className="text-black opacity-80 mb-4 text-sm leading-relaxed">
                          Generated 48+ solution concepts for AI-powered learning.<br/>
                          Focused on content upload and question generation features.
                        </p>
                        
                        {/* Solution Concepts */}
                        <div className="bg-gradient-to-br from-purple-50/80 to-purple-100/60 border-2 border-dashed border-purple-300/50 p-5 rounded-lg mb-4 text-center" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(250, 245, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <p className="text-2xl font-bold text-purple-600">48+</p>
                          <p className="text-sm text-black opacity-80">Solution Concepts</p>
                        </div>
                        
                        {/* Key Solutions Grid */}
                        <div className="bg-gradient-to-br from-purple-50/80 to-purple-100/60 border-2 border-dashed border-purple-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(250, 245, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-lightbulb-line text-purple-500 mr-2"></i>
                            Key Solution Concepts
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-file-upload-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Content Upload</p>
                              <p className="text-xs text-black opacity-70">Upload any study material</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-ai-generate text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">AI Question Generation</p>
                              <p className="text-xs text-black opacity-70">Personalized practice questions</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-line-chart-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Analytics</p>
                              <p className="text-xs text-black opacity-70">Progress tracking & insights</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-gamepad-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Gamification</p>
                              <p className="text-xs text-black opacity-70">Engaging game elements</p>
                            </div>
                        </div>
                      </div>
                    </motion.div>
                    </div>
                  </div>
                  
                    <motion.div 
                    className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src="image1.png" 
                        alt="Ideate Process Visual" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      </div>
                    </motion.div>
                </div>
                
                {/* Step 4: PROTOTYPE & TEST */}
                <div>
                  <div className="flex items-start">
                    <div className="hidden md:flex mr-6 h-12 w-12 rounded-full bg-amber-400 text-black items-center justify-center z-10 flex-shrink-0">
                      <i className="ri-smartphone-line text-xl"></i>
                    </div>
                    <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      >
                        <span className="text-amber-400 text-sm font-bold tracking-wider">PHASE 04</span>
                        <h3 className="text-2xl font-bold mb-3 text-black">Prototype & Test</h3>
                        <p className="text-black opacity-80 mb-4 text-sm leading-relaxed">
                          Built interactive prototypes with student feedback.<br/>
                          Tested with 12 students achieving 92% success rate.
                        </p>
                        
                        {/* Prototype Evolution */}
                        <div className="bg-gradient-to-br from-amber-50/80 to-amber-100/60 border-2 border-dashed border-amber-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(255, 251, 235, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-artboard-line text-amber-500 mr-2"></i>
                            Prototype Evolution
                          </h4>
                          <div className="space-y-2">
                            <div className="bg-white/80 p-2 rounded border-l-4 border-amber-400 flex justify-between items-center shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <span className="text-xs font-semibold text-black">Figma</span>
                              <span className="text-xs text-black opacity-70">Initial wireframes and component design</span>
                        </div>
                            <div className="bg-white/80 p-2 rounded border-l-4 border-amber-400 flex justify-between items-center shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <span className="text-xs font-semibold text-black">Figma MCP (Model Context Protocol)</span>
                              <span className="text-xs text-black opacity-70">Component design system development</span>
                      </div>
                            <div className="bg-white/80 p-2 rounded border-l-4 border-amber-400 flex justify-between items-center shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <span className="text-xs font-semibold text-black">Cursor</span>
                              <span className="text-xs text-black opacity-70">Interactive prototype with real functionality</span>
                        </div>
                      </div>
                        </div>
                        
                        {/* Testing Results */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-amber-600">92%</p>
                            <p className="text-xs text-black opacity-70">Task completion</p>
                      </div>
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-amber-600">8.7</p>
                            <p className="text-xs text-black opacity-70">Satisfaction (of 10)</p>
                    </div>
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-amber-600">12</p>
                            <p className="text-xs text-black opacity-70">Student testers</p>
                    </div>
                  </div>
                        
                        {/* Student Feedback */}
                        <div className="bg-gradient-to-br from-amber-50/80 to-amber-100/60 border-2 border-dashed border-amber-300/50 p-4 rounded-lg" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(255, 251, 235, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <p className="text-xs text-black opacity-90 italic border-l-4 border-amber-400 pl-3 bg-white/80 p-3 rounded shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                            "SynapseLearn would transform how I prepare for my board exams. Being able to generate questions from specific chapters would save me time and help me focus exactly where I need to improve."
                          </p>
                          <p className="text-right text-xs text-black opacity-60 mt-2">— Student Tester</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                  {/* Two Bento Boxes in a Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1400px] mx-auto mt-6">
                    <motion.div 
                      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src="image3.png" 
                          alt="Prototype Visual 1" 
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src="image4.png" 
                          alt="Prototype Visual 2" 
                          className="w-full h-full object-cover rounded-2xl"
                        />
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-black">The Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Feature 1 */}
          <motion.div
                className="bg-blue-50 border border-blue-100 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-upload-cloud-2-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Custom Content Upload</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Students upload any study material - PDFs, textbook pages, notes - to create a personalized knowledge base.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="bg-blue-50 border border-blue-100 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-ai-generate text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">AI Question Generation</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  The platform's AI engine analyzes content and creates relevant questions that test comprehension and knowledge.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                className="bg-blue-50 border border-blue-100 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-line-chart-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Performance Analytics</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Detailed metrics show progress, identify knowledge gaps, and track improvement over time.
                </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                className="bg-blue-50 border border-blue-100 p-5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-gamepad-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Gamified Learning</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Leaderboards, achievements, and progress tracking transform studying into an engaging experience.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default SynapseLearnProcess; 