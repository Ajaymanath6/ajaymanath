import React from 'react';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function SahayakProcess() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">

      {/* Reduced spacer */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-3 sm:px-4 py-8 sm:py-16">

        {/* Sahayak Process Content */}
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
                    <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-robot-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-black">
                        Sahayak
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
                  Sahayak reached out to us for a full redesign of their AI teaching assistant platform. 
                  Over a few months, we worked together to create a new system that helps India's teachers 
                  save time and deliver personalized education in local languages. We made sure everything 
                  looked fresh, consistent, and worked smoothly across all devices. Even with the complexities 
                  of multilingual education, we kept the design easy to use and accessible for teachers in 
                  rural and urban areas alike.
                </p>
                
                {/* Action Buttons */}
              <div className="flex space-x-3">
                <a 
                  href="https://sahayak-b85697.gitlab.io/home" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                    className="flex items-center bg-teal-600 hover:bg-teal-700 transition-colors text-white text-sm px-4 py-2 rounded-lg"
                >
                    <i className="ri-external-link-line mr-2"></i>
                  View Live Project
                </a>
                <a 
                  href="https://www.figma.com/file/sahayak-design" 
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
                    <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Website Design</span>
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Product Design</span>
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">AI Prototyping</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Development</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Localization</span>
                    <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">User Research</span>
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
                          We identified key challenges in multi-grade classrooms.<br/>
                          Conducted 12 teacher interviews across India.
                        </p>
                        
                        {/* Teacher Interview Highlight */}
                        <div className="bg-gradient-to-br from-teal-50/80 to-teal-100/60 border-2 border-dashed border-teal-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(240, 253, 250, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                      <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3 shadow-sm">
                              <span className="text-white text-sm font-bold">S</span>
                        </div>
                        <div>
                              <p className="font-semibold text-black text-sm">Sunita Patil</p>
                              <p className="text-xs text-black opacity-60">Primary Teacher, Karnataka</p>
                        </div>
                      </div>
                          <p className="text-sm text-black opacity-90 italic border-l-4 border-teal-400 pl-3 bg-white/70 p-3 rounded shadow-sm">
                        "I spend hours creating materials for different grades. With students at multiple levels, it's impossible to give everyone personalized attention without proper tools."
                      </p>
                        </div>
                    
                    {/* Teacher Interview Questions */}
                        <div className="bg-gradient-to-br from-teal-50/80 to-teal-100/60 border-2 border-dashed border-teal-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(240, 253, 250, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-questionnaire-line text-teal-500 mr-2"></i>
                        Teacher Interview Questions
                      </h4>
                      <div className="space-y-3">
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: How much time do you spend preparing materials for different grade levels?</p>
                              <p className="text-xs text-black opacity-80 italic">"Around 3-4 hours daily, often working late into the night."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: What's your biggest challenge in a multi-grade classroom?</p>
                              <p className="text-xs text-black opacity-80 italic">"Creating differentiated materials quickly enough to meet everyone's needs."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: How important is having content in local languages?</p>
                              <p className="text-xs text-black opacity-80 italic">"Critical. Many students struggle with English, but quality materials in languages like Kannada are scarce."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: Would you use AI to help with teaching preparation?</p>
                              <p className="text-xs text-black opacity-80 italic">"Absolutely, if it's simple to use and produces quality materials in our local language."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: What specific teaching materials take the most time to create?</p>
                              <p className="text-xs text-black opacity-80 italic">"Multi-level worksheets and visual aids that work for the blackboard."</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-teal-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <p className="text-xs font-semibold text-black mb-1">Q: How do you currently manage weekly lesson planning?</p>
                              <p className="text-xs text-black opacity-80 italic">"It's extremely time-consuming - I have to plan separate activities for each grade simultaneously."</p>
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
                            <p className="text-lg font-bold text-teal-600">3-4hrs</p>
                            <p className="text-xs text-black opacity-70">Daily prep time</p>
                        </div>
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-teal-600">12</p>
                            <p className="text-xs text-black opacity-70">Teacher interviews</p>
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
                          Created clear problem statement for multi-grade teaching.<br/>
                          Identified time savings and local language priorities.
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
                            "Teachers in multi-grade classrooms across India need a way to quickly create personalized, multi-level teaching materials in local languages to save preparation time and provide better education to students across different learning levels."
                          </p>
                        </div>
                        
                        {/* Key Pain Points */}
                        <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/60 border-2 border-dashed border-blue-300/50 p-5 rounded-lg mb-4" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(239, 246, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <h4 className="font-semibold text-black text-sm mb-3 flex items-center">
                            <i className="ri-alert-line text-blue-500 mr-2"></i>
                            Key Pain Points
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-time-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Time-consuming material preparation</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-stack-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Lack of multi-level resources</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-translate-2 text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Limited materials in local languages</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-blue-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-calendar-todo-line text-blue-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Complex scheduling across grades</p>
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
                          Generated 40+ solution concepts for teaching challenges.<br/>
                          Focused on multi-language support and visual aids.
                        </p>
                        
                        {/* Solution Concepts */}
                        <div className="bg-gradient-to-br from-purple-50/80 to-purple-100/60 border-2 border-dashed border-purple-300/50 p-5 rounded-lg mb-4 text-center" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(250, 245, 255, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <p className="text-2xl font-bold text-purple-600">40+</p>
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
                              <i className="ri-translate text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Multi-Language Support</p>
                              <p className="text-xs text-black opacity-70">Local Indian languages</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-file-list-3-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Multi-Level Worksheets</p>
                              <p className="text-xs text-black opacity-70">Different grades</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-calendar-todo-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Lesson Planner</p>
                              <p className="text-xs text-black opacity-70">AI-powered planning</p>
                            </div>
                            <div className="bg-white/80 p-3 rounded border-l-4 border-purple-400 shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <i className="ri-image-line text-purple-500 text-lg mb-1 block"></i>
                              <p className="text-xs font-semibold text-black">Visual Aid Creator</p>
                              <p className="text-xs text-black opacity-70">Blackboard-friendly</p>
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
                          Built interactive prototypes with teacher feedback.<br/>
                          Tested with 15 teachers achieving 88% success rate.
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
                              <span className="text-xs text-black opacity-70">Wireframes & UI flows</span>
                            </div>
                            <div className="bg-white/80 p-2 rounded border-l-4 border-amber-400 flex justify-between items-center shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <span className="text-xs font-semibold text-black">Component Library</span>
                              <span className="text-xs text-black opacity-70">Multi-language components</span>
                            </div>
                            <div className="bg-white/80 p-2 rounded border-l-4 border-amber-400 flex justify-between items-center shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                              <span className="text-xs font-semibold text-black">Interactive Prototype</span>
                              <span className="text-xs text-black opacity-70">High-fidelity interactions</span>
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
                            <p className="text-lg font-bold text-amber-600">88%</p>
                            <p className="text-xs text-black opacity-70">Task completion</p>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-amber-600">9.1</p>
                            <p className="text-xs text-black opacity-70">Satisfaction (of 10)</p>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border-2 border-dashed border-gray-300/50 p-4 rounded-lg text-center" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107, 114, 128, 0.1) 1px, transparent 0)', 
                            backgroundSize: '15px 15px',
                            backgroundColor: 'rgba(249, 250, 251, 0.5)',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                          }}>
                            <p className="text-lg font-bold text-amber-600">15</p>
                            <p className="text-xs text-black opacity-70">Teacher testers</p>
                    </div>
                  </div>
                  
                        {/* Teacher Feedback */}
                        <div className="bg-gradient-to-br from-amber-50/80 to-amber-100/60 border-2 border-dashed border-amber-300/50 p-4 rounded-lg" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.1) 1px, transparent 0)', 
                          backgroundSize: '20px 20px',
                          backgroundColor: 'rgba(255, 251, 235, 0.4)',
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
                        }}>
                          <p className="text-xs text-black opacity-90 italic border-l-4 border-amber-400 pl-3 bg-white/80 p-3 rounded shadow-sm" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02)'}}>
                            "This would save me hours every week. The ability to create worksheets in Kannada for different grades simultaneously is exactly what I need."
                          </p>
                          <p className="text-right text-xs text-black opacity-60 mt-2">— Teacher Tester, Karnataka</p>
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
                  <div className="bg-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-translate text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Local and Multi-Lingual Content</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Generate culturally relevant lessons and materials in 12+ Indian languages, including Hindi, Marathi, Tamil, and more.
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
                  <div className="bg-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-file-list-3-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Multi-Level Instant Worksheets</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Take a photo of any textbook page and instantly create differentiated worksheets for multiple grade levels.
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
                  <div className="bg-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-image-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">Easy Visual Aid Creation</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Generate simple line-art drawings that can be easily copied onto a blackboard or used as visual aids.
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
                  <div className="bg-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <i className="ri-calendar-check-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-black">AI-Powered Weekly Lesson Planner</h4>
                </div>
                <p className="text-sm text-black opacity-90">
                  Structure an entire week's activities for different grades in minutes, saving valuable planning time.
                </p>
              </motion.div>
            </div>
          </motion.div>
          

        </div>
      </main>
    </div>
  );
}

export default SahayakProcess; 