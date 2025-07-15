import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function Process() {
  return (
    <div className="min-h-screen bg-custom-dark text-white flex flex-col">
      {/* Header with back button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link to="/" className="text-white flex items-center bg-black bg-opacity-50 px-4 py-2 rounded-lg backdrop-blur-sm">
            <i className="ri-arrow-left-line mr-2"></i>
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </div>

      {/* Reduced spacer */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-4 py-16">
        {/* Spider Web Background - same as in About.tsx */}
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
            
            <g className="rotate-animation" style={{ animationDuration: '20s' }}>
              <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="85.36%" y2="14.64%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="85.36%" y2="85.36%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="14.64%" y2="85.36%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="0%" y2="50%" stroke="url(#webGradient)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="14.64%" y2="14.64%" stroke="url(#webGradient)" strokeWidth="1" />
            </g>
            
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
            
            <g className="float-animation">
              <circle cx="50%" cy="50%" r="3" fill="rgba(255, 255, 255, 0.5)" />
            </g>
            
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

        {/* Process Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-2" 
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(192,192,192,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              Design Methodology
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ 
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)' 
            }}></div>
          </motion.div>

          {/* Process content */}
          <motion.div 
            className="grid gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Process description */}
            <div className="text-center text-lg text-white opacity-90">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">AI-Augmented Design Thinking</h2>
                <p className="text-lg mb-8 text-left">
                  My design methodology maintains the <strong>traditional design process</strong> while enhancing it with cutting-edge <strong>AI tools</strong>. This blend creates a workflow that <strong>accelerates innovation</strong> while preserving essential <strong>human-centered principles</strong>.
                </p>
              </div>

              {/* Process Steps */}
              <div className="space-y-16">
                {/* Step 1: Empathize */}
                <motion.div 
                  className="process-step"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="process-icon-container">
                        <i className="ri-emotion-line text-4xl"></i>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-left">
                      <h3 className="text-2xl font-bold mb-4" style={{
                        background: "linear-gradient(90deg, rgba(255,255,255,1), rgba(220,220,220,0.9))", 
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                      }}>1. Empathize with AI</h3>
                      <p className="text-white opacity-90 mb-4">
                        I follow traditional <strong>user research methods</strong> but accelerate insights using AI. Claude and Gemini help analyze <strong>interview data</strong>, identify patterns, and create personas in hours instead of weeks.
                      </p>
                      <div className="flex items-center mb-2">
                        <i className="ri-user-voice-line mr-3 text-xl text-teal-400"></i>
                        <p>AI-powered data synthesis with <strong>human validation</strong></p>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-heart-pulse-line mr-3 text-xl text-teal-400"></i>
                        <p>Deeper empathy through combined human-AI understanding</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2: Define */}
                <motion.div 
                  className="process-step"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="process-icon-container">
                        <i className="ri-focus-3-line text-4xl"></i>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-left">
                      <h3 className="text-2xl font-bold mb-4" style={{
                        background: "linear-gradient(90deg, rgba(255,255,255,1), rgba(220,220,220,0.9))", 
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                      }}>2. Define with Precision</h3>
                      <p className="text-white opacity-90 mb-4">
                        I maintain the critical step of <strong>problem framing</strong>, using AI to create more comprehensive PRDs that identify <strong>edge cases</strong> traditional approaches might miss.
                      </p>
                      <div className="flex items-center mb-2">
                        <i className="ri-file-list-3-line mr-3 text-xl text-teal-400"></i>
                        <p>Transform <strong>vague requirements</strong> into clear problem statements</p>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-question-answer-line mr-3 text-xl text-teal-400"></i>
                        <p>AI-enhanced <strong>"How Might We"</strong> statements that invite innovation</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3: Ideate */}
                <motion.div 
                  className="process-step"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="process-icon-container">
                        <i className="ri-lightbulb-flash-line text-4xl"></i>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-left">
                      <h3 className="text-2xl font-bold mb-4" style={{
                        background: "linear-gradient(90deg, rgba(255,255,255,1), rgba(220,220,220,0.9))", 
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                      }}>3. Ideate & Amplify</h3>
                      <p className="text-white opacity-90 mb-4">
                        Using <strong>traditional ideation techniques</strong> supercharged with Cursor AI to explore <strong>divergent thinking</strong> paths in parallel, combining human creativity with machine efficiency.
                      </p>
                      <div className="flex items-center mb-2">
                        <i className="ri-spectrum-line mr-3 text-xl text-teal-400"></i>
                        <p>Balance <strong>AI-generated concepts</strong> with human creative vision</p>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-braces-line mr-3 text-xl text-teal-400"></i>
                        <p>Solutions that are <strong>technically sound</strong> and emotionally resonant</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 4: Prototype */}
                <motion.div 
                  className="process-step"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="process-icon-container">
                        <i className="ri-code-box-line text-4xl"></i>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-left">
                      <h3 className="text-2xl font-bold mb-4" style={{
                        background: "linear-gradient(90deg, rgba(255,255,255,1), rgba(220,220,220,0.9))", 
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                      }}>4. Prototype at Lightning Speed</h3>
                      <p className="text-white opacity-90 mb-4">
                        Bringing together <strong>design principles</strong> and technical execution with Figma MCP and Cursor to create <strong>working prototypes</strong> faster than traditional methods.
                      </p>
                      <div className="flex items-center mb-2">
                        <i className="ri-stack-line mr-3 text-xl text-teal-400"></i>
                        <p>Components with <strong>properties stored in JSON</strong> for seamless translation</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <i className="ri-speed-line mr-3 text-xl text-teal-400"></i>
                        <p><strong>Rapid iteration</strong> for accelerated feedback cycles</p>
                      </div>
                      <div className="mt-2">
                        <Link to="/articles/cursor-mcp-workflow" className="cursor-mcp-link flex items-center" style={{
                          background: "linear-gradient(90deg, #4ade80, #22d3ee)", 
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          textShadow: "0 0 15px rgba(74, 222, 128, 0.4)"
                        }}>
                          <span>Learn more about my Cursor MCP workflow</span>
                          <i className="ri-arrow-right-line ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 5: Test */}
                <motion.div 
                  className="process-step"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="process-icon-container">
                        <i className="ri-test-tube-line text-4xl"></i>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-left">
                      <h3 className="text-2xl font-bold mb-4" style={{
                        background: "linear-gradient(90deg, rgba(255,255,255,1), rgba(220,220,220,0.9))", 
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                      }}>5. Test with Real Users & Data</h3>
                      <p className="text-white opacity-90 mb-4">
                        Maintaining <strong>traditional user testing</strong> while adding <strong>automated Cypress tests</strong> to validate consistency and collect quantitative metrics alongside qualitative insights.
                      </p>
                      <div className="flex items-center mb-2">
                        <i className="ri-checkbox-multiple-line mr-3 text-xl text-teal-400"></i>
                        <p><strong>Component validation</strong> against JSON schemas with auto-fixing capabilities</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <i className="ri-dashboard-line mr-3 text-xl text-teal-400"></i>
                        <p>Dual approach ensures both <strong>usability</strong> and technical excellence</p>
                      </div>
                      <div className="mt-2">
                        <Link to="/articles/cypress-testing" className="cypress-testing-link flex items-center" style={{
                          background: "linear-gradient(90deg, #4ade80, #22d3ee)", 
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          textShadow: "0 0 15px rgba(74, 222, 128, 0.4)"
                        }}>
                          <span>Explore my Cypress testing approach</span>
                          <i className="ri-arrow-right-line ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 6: Implementation & Iteration */}
                <motion.div 
                  className="process-step"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="process-icon-container">
                        <i className="ri-loop-left-line text-4xl"></i>
                      </div>
                    </div>
                    <div className="md:w-2/3 text-left">
                      <h3 className="text-2xl font-bold mb-4" style={{
                        background: "linear-gradient(90deg, rgba(255,255,255,1), rgba(220,220,220,0.9))", 
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                      }}>6. Implementation & Continuous Iteration</h3>
                      <p className="text-white opacity-90 mb-4">
                        Extending beyond traditional design cycles with <strong>GitLab deployments</strong> and <strong>continuous integration</strong> for seamless iteration based on ongoing user feedback.
                      </p>
                      <div className="flex items-center mb-2">
                        <i className="ri-git-merge-line mr-3 text-xl text-teal-400"></i>
                        <p>Fully functional, <strong>production-ready prototypes</strong> for stakeholders</p>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-refresh-line mr-3 text-xl text-teal-400"></i>
                        <p>Design as a <strong>continuous improvement cycle</strong>, not a single phase</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Conclusion */}
              <motion.div 
                className="mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="p-8 rounded-lg" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 className="text-2xl font-bold mb-6 text-center" style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,1), rgba(220,220,220,0.9))", 
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                  }}>The Perfect Blend: Human Creativity & AI Efficiency</h3>
                  <div className="flex items-center justify-center mb-6">
                    <i className="ri-ai-generate mr-3 text-3xl text-teal-400"></i>
                    <i className="ri-add-line mx-3 text-xl"></i>
                    <i className="ri-user-heart-line ml-3 text-3xl text-purple-400"></i>
                  </div>
                  <p className="text-lg opacity-90">
                    My approach respects <strong>established design methodologies</strong> while strategically applying AI to enhance—not replace—the human elements. This creates a workflow that produces more <strong>innovative, thoroughly-tested solutions</strong> in less time.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link to="/" className="px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg flex items-center transition-all">
                      <span>See the results in my portfolio</span>
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
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

export default Process; 