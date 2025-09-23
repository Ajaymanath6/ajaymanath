import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function Process() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">


      {/* Reduced spacer */}
      <div className="h-[40px]"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-3 sm:px-4 py-8 sm:py-16">
        {/* Simple Background Pattern */}
        <div className="pattern-container" style={{ mixBlendMode: 'normal', opacity: 0.05, backgroundColor: 'rgba(240, 240, 240, 0.2)' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 0, 0, 0.1)" />
                <stop offset="50%" stopColor="rgba(0, 0, 0, 0.05)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0.02)" />
              </linearGradient>
            </defs>
            
            <g>
              <circle cx="50%" cy="50%" r="10%" fill="none" stroke="rgba(0, 0, 0, 0.03)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(0, 0, 0, 0.015)" strokeWidth="1" />
            </g>
          </svg>
        </div>

        {/* Process Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Title */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Design Methodology
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ 
              background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)' 
            }}></div>
          </motion.div>

          {/* Story Introduction */}
          <motion.div 
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
                A simple approach that combines traditional design thinking with AI tools to create better products faster.
              </p>
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >

            {/* Step 1 */}
            <motion.div 
              className="bg-white rounded-lg p-6 sm:p-8 border-2 border-dashed border-gray-300 shadow-lg"
              style={{
                background: 'white',
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <i className="ri-emotion-line text-2xl text-gray-800"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">1. Empathize</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Combine traditional user research with AI to understand people faster and deeper.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• AI-powered data synthesis with human validation</li>
                    <li>• Enhanced empathy through combined insights</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="bg-white rounded-lg p-6 sm:p-8 border-2 border-dashed border-gray-300 shadow-lg"
              style={{
                background: 'white',
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <i className="ri-focus-3-line text-2xl text-gray-800"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">2. Define</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Frame the right problems with AI to see around corners and anticipate challenges.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Transform vague requirements into clear problem statements</li>
                    <li>• AI-enhanced "How Might We" questions</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="bg-white rounded-lg p-6 sm:p-8 border-2 border-dashed border-gray-300 shadow-lg"
              style={{
                background: 'white',
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <i className="ri-lightbulb-flash-line text-2xl text-gray-800"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">3. Ideate</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Explore multiple dimensions of possibility simultaneously with AI amplifying creativity.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Balance AI-generated concepts with human intuition</li>
                    <li>• Create technically sound and emotionally resonant solutions</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="bg-white rounded-lg p-6 sm:p-8 border-2 border-dashed border-gray-300 shadow-lg"
              style={{
                background: 'white',
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <i className="ri-artboard-line text-2xl text-gray-800"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">4. Prototype</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Build living, breathing prototypes from Figma to working code in minutes.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 10X faster than traditional prototype development</li>
                    <li>• <Link to="/article/prototyping-with-custom-design-systems" className="text-gray-800 hover:text-black transition-colors font-medium underline">Real working code</Link> instead of simulated interactions</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div 
              className="bg-white rounded-lg p-6 sm:p-8 border-2 border-dashed border-gray-300 shadow-lg"
              style={{
                background: 'white',
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <i className="ri-test-tube-line text-2xl text-gray-800"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">5. Test</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Automated testing workflows ensure continuous improvement and design system integrity.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• JSON-driven validation prevents inconsistencies</li>
                    <li>• <Link to="/article/automating-design-system-testing" className="text-gray-800 hover:text-black transition-colors font-medium underline">Automated testing</Link> ensures design system compliance</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <div className="text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">40-60%</div>
                  <p className="text-sm text-gray-600">Faster Development</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">10X</div>
                  <p className="text-sm text-gray-600">Prototype Speed</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}

export default Process; 