import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import faceImg from "./face.png";
import fullImg from "./full.jpg";
import { useNavigate, useLocation } from "react-router-dom";

// Import content components for modal
import Process from "./Process";
import Experience from "./Experience";
import EnterpriseDesignSystemProcess from "./EnterpriseDesignSystemProcess";
import ModalArticleContent from "./ModalArticleComponent";

// Create a context for mobile detection
type MobileContextType = {
  isMobile: boolean;
};

const MobileContext = createContext<MobileContextType>({ isMobile: false });

export const useMobile = () => useContext(MobileContext);

// MobileProvider component
const MobileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

// Export a separate MobileProvider for use in index.tsx
export const MobileContextProvider = MobileProvider;

// Expandable Modal Component
const ExpandableModal = ({
  isOpen,
  onClose,
  contentType,
  contentData,
}: {
  isOpen: boolean;
  onClose: () => void;
  contentType: string;
  contentData?: any;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState('unicourt3.png');

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.currentTarget;
    if (scrollTop > 50 && !isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Image swap effect for litigation intelligence page
  useEffect(() => {
    if (contentType === "/process/litigation-intelligence") {
      const interval = setInterval(() => {
        setCurrentImage(prev => prev === 'unicourt3.png' ? 'unicourt4.png' : 'unicourt3.png');
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [contentType]);

  const renderContent = () => {
    switch (contentType) {
      case "/process":
        return <Process />;
      case "/experience":
        return <Experience />;
      case "/process/enterprise-design-system":
        return <EnterpriseDesignSystemProcess />;
      case "/process/litigation-intelligence":
        return (
          <div className="text-black p-0 bg-white w-full">
            {/* Project Header - Two Column Layout */}
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-9 pt-3">
                {/* Left Column - Logo, Name, Description */}
                <div className="flex flex-col items-start">
                  {/* Project Name */}
                  <div className="w-full mb-6">
                    <h1 className="text-[40px] font-bold mb-1 text-black">
                      UniCourt
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-[16px] text-black opacity-80 leading-relaxed mb-6">
                      I collaborated with engineers, product managers, and the product team to redesign the UniCourt webapp, a platform for accessing litigation data, analytics, and insights. I redesigned the main flows for users to search, filter, find, and track cases without getting overwhelmed with data. By making the data simple and accessible, showing only what's important, users were able to reduce their research time by 50%, completing tasks that previously took twice as long.
                    </p>
                </div>
              </div>
            </motion.div>

            {/* Overview */}
            <section className="mb-12">
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden min-h-[600px] mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden">
                  <div className="w-full h-full overflow-hidden rounded-2xl" style={{ paddingTop: '20px', marginTop: '-20px' }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/Unicourt1.png`}
                      alt="UniCourt Platform Overview"
                      className="w-full h-auto object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-700 leading-relaxed px-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-[14px]">Problem</h3>
                    <p className="text-[14px]">
                      Legal professionals struggle with fragmented data access.<br />
                      Research workflows are slow and inefficient. Critical case insights remain hidden across multiple platforms.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Solution</h3>
                    <p>
                      AI-powered litigation intelligence platform that unifies access to 2 billion court dockets,<br />
                      enabling comprehensive research and data-driven legal strategies.
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-[20px]">Understanding Challenges</h3>
                    <h4 className="font-semibold mb-3 text-[32px]">Challenge</h4>
                    <p className="text-[16px]">
                      Design a webapp that allows legal professionals to perform a unified, AI-powered search across all case data, including dockets, documents, courts, judges, and attorneys.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Key Objectives</h3>
                    <p>
                      Create a scalable design system and platform that facilitates deep analysis, document management, and future integrations with legal practice management software and client data warehouses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reframing the problem */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16 px-8">
                {/* Left Column - Blank */}
                <div></div>
                
                {/* Right Column */}
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Reframing the problem (HMW)</h3>
                    <p>
                      How might we enable legal professionals to access and analyze 2 billion court dockets with AI-powered insights in a unified, efficient platform?
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding the existing workflow (JTBD)</h3>
                    <p>
                      Legal research was fragmented across multiple platforms and legacy systems. Legal professionals needed to switch between different tools to access dockets, documents, and case analytics, leading to inefficient workflows and missed insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Width Image 2 */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    key={currentImage}
                    src={`${process.env.PUBLIC_URL}/${currentImage}`}
                    alt="Unified Litigation Intelligence Platform Design"
                    className="w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: 1 }}
                  />
                </div>
              </motion.div>

              {/* Reframing the problem - Repeat 2 */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div></div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Reframing the problem (HMW)</h3>
                    <p>
                      How might we enable legal professionals to access and analyze 2 billion court dockets with AI-powered insights in a unified, efficient platform?
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding the existing workflow (JTBD)</h3>
                    <p>
                      Legal research was fragmented across multiple platforms and legacy systems. Legal professionals needed to switch between different tools to access dockets, documents, and case analytics, leading to inefficient workflows and missed insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Width Image 3 */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden">
                  <video
                    src={`${process.env.PUBLIC_URL}/unicourtvideo1.mp4`}
                    className="w-full h-auto object-contain rounded-2xl"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

              {/* Reframing the problem - Repeat 3 */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div></div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Reframing the problem (HMW)</h3>
                    <p>
                      How might we enable legal professionals to access and analyze 2 billion court dockets with AI-powered insights in a unified, efficient platform?
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding the existing workflow (JTBD)</h3>
                    <p>
                      Legal research was fragmented across multiple platforms and legacy systems. Legal professionals needed to switch between different tools to access dockets, documents, and case analytics, leading to inefficient workflows and missed insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Width Image 4 */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden">
                  <video
                    src={`${process.env.PUBLIC_URL}/unicourtvideo.mp4`}
                    className="w-full h-auto object-contain rounded-2xl"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

              {/* Reframing the problem - Repeat 4 */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16 px-8">
                <div></div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Reframing the problem (HMW)</h3>
                    <p>
                      How might we enable legal professionals to access and analyze 2 billion court dockets with AI-powered insights in a unified, efficient platform?
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding the existing workflow (JTBD)</h3>
                    <p>
                      Legal research was fragmented across multiple platforms and legacy systems. Legal professionals needed to switch between different tools to access dockets, documents, and case analytics, leading to inefficient workflows and missed insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Section - Repeat 3 */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden">
                  <video
                    src={`${process.env.PUBLIC_URL}/unicourtAlerts.mp4`}
                    className="w-full h-auto object-contain rounded-2xl"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

              {/* Reframing the problem - Final */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16 px-8">
                <div></div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Reframing the problem (HMW)</h3>
                    <p>
                      How might we enable legal professionals to access and analyze 2 billion court dockets with AI-powered insights in a unified, efficient platform?
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding the existing workflow (JTBD)</h3>
                    <p>
                      Legal research was fragmented across multiple platforms and legacy systems. Legal professionals needed to switch between different tools to access dockets, documents, and case analytics, leading to inefficient workflows and missed insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Placeholder Image */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-2xl">
                  <div className="text-gray-400 text-lg">Placeholder Image</div>
                </div>
              </motion.div>

            </section>
          </div>
        );
      case "/process/feedback-collaboration":
        return (
          <div className="text-black p-8 bg-white max-w-7xl mx-auto">
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
                      <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                        <i className="ri-message-3-line text-2xl text-white"></i>
                      </div>
                      <div>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-black">
                          End Feedback Chaos
                        </h1>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-black opacity-80 leading-relaxed mb-6">
                    Pin contextual comments directly on live websites for crystal-clear collaboration and accelerated team workflows.
                  </p>
                </div>

                {/* Right Column - Scope of Work and Stack */}
                <div className="flex flex-col">
                  {/* Combined Scope of Work and Stack */}
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">
                      Scope of work
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        UX Design
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                        Browser Extension
                      </span>
                      <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        Real-time Collaboration
                      </span>
                      <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                        API Integration
                      </span>
                      <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
                        Team Workflows
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-black mb-4">Stack</h3>
                    {/* Stack with Badge Style */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://cdn.simpleicons.org/figma/F24E1E" 
                          alt="Figma" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          Figma
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://cdn.simpleicons.org/react/61DAFB" 
                          alt="React" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          React
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://cdn.simpleicons.org/readthedocs/8CA1AF" 
                          alt="Documentation" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          Documentation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Placeholder Image for Documentation */}
            <motion.div
              className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="image1.png"
                  alt="End Feedback Chaos Documentation"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Introduction */}
            <section className="mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  End Feedback Chaos is a revolutionary feedback system designed to eliminate scattered communication and streamline the design-to-development handoff process. This browser extension allows teams to pin contextual comments directly on live websites, creating crystal-clear collaboration and accelerated team workflows.
                </p>
                <p>
                  As the lead designer, I conceptualized and designed the entire feedback system from scratch, focusing on seamless browser integration and intuitive user experience. The system enables designers, developers, and stakeholders to collaborate in real-time with context-aware feedback that accelerates the entire workflow.
                </p>
              </div>
            </section>

            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Overview</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Why build this?</h3>
                  <p>
                    Traditional feedback methods create chaos—comments in Slack, emails, and various tools lose context. Teams spend hours trying to understand what needs to be changed and where. Designers, developers, and stakeholders struggle to communicate effectively, leading to miscommunication, delays, and frustration. There's no unified system where feedback is contextual and actionable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">The goal</h3>
                  <p>
                    Create an intuitive feedback system that pins comments exactly where they matter, with real-time collaboration features that streamline the entire design workflow. Enable teams to communicate contextually, eliminate scattered feedback, and accelerate the design-to-development handoff process.
                  </p>
                </div>
              </div>
            </section>

            {/* Thinking Process */}
            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Thinking Process</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-lg">Things to consider</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Before building the browser extension, there were a few points to consider that needs to be looked up on:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {/* Card 1 - Blue Gradient */}
                <div 
                  className="flex flex-col rounded-[20px] p-6"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                    background: 'linear-gradient(96.12deg, #E3F2FD 29.3%, #BBDEFB 74.68%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <i className="ri-message-3-line text-2xl text-white"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Contextual Feedback</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Design a system where comments are pinned directly to specific elements on live websites, ensuring feedback is always contextual and actionable without losing visual context.
                  </p>
                </div>

                {/* Card 2 - Green Gradient */}
                <div 
                  className="flex flex-col rounded-[20px] p-6"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                    background: 'linear-gradient(96.12deg, #E8F5E9 29.3%, #C8E6C9 74.68%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <i className="ri-team-line text-2xl text-white"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Real-time Collaboration</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Enable seamless real-time collaboration where team members can see comments instantly, respond to feedback, and track resolution status across all pinned comments.
                  </p>
                </div>

                {/* Card 3 - Orange Gradient */}
                <div 
                  className="flex flex-col rounded-[20px] p-6"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                    background: 'linear-gradient(96.12deg, #FFF3E0 29.3%, #FFE0B2 74.68%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <i className="ri-file-list-3-fill text-2xl text-white"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Workflow Integration</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Create a system that integrates seamlessly into existing design and development workflows, eliminating the need to switch between multiple tools and platforms.
                  </p>
                </div>

                {/* Card 4 - Pink Gradient */}
                <div 
                  className="flex flex-col rounded-[20px] p-6"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                    background: 'linear-gradient(96.12deg, #FCE4EC 29.3%, #F8BBD0 74.68%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
                      <i className="ri-dashboard-3-line text-2xl text-white"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Status Tracking</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Build a comprehensive status tracking system that allows teams to monitor feedback resolution, assign tasks, and maintain visibility across all design iterations.
                  </p>
                </div>
              </div>
            </section>

            {/* The Designs */}
            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">The Designs</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>

              {/* Design 1: Comment Interface */}
              <div className="mb-8">
                <div className="mb-14 mt-14">
                  <h3 className="text-lg font-semibold mb-3">
                    1. Comment Interface
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The core comment interface allows users to pin feedback directly on any element of a live website with pixel-perfect precision. This interface enables contextual feedback that eliminates confusion and accelerates the design-to-development handoff process.
                  </p>
                </div>
                <motion.div
                  className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="image1.png"
                      alt="Comment Interface Design"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Design 2: Real-time Collaboration */}
              <div className="mb-8">
                <div className="mb-14 mt-14">
                  <h3 className="text-lg font-semibold mb-3">
                    2. Real-time Collaboration
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Team members can see comments in real-time, respond to feedback instantly, and track resolution status across all pinned comments. This creates a seamless collaboration experience where everyone stays in sync.
                  </p>
                </div>
                <motion.div
                  className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="image2.png"
                      alt="Real-time Collaboration Design"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Design 3: Workflow Management */}
              <div className="mb-8">
                <div className="mb-14 mt-14">
                  <h3 className="text-lg font-semibold mb-3">
                    3. Workflow Management
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive workflow management system that allows teams to organize feedback, assign tasks, and track progress across all design iterations. This ensures nothing falls through the cracks.
                  </p>
                </div>
                <motion.div
                  className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="image3.png"
                      alt="Workflow Management Design"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Design 4: Status Tracking Dashboard */}
              <div className="mb-8">
                <div className="mb-14 mt-14">
                  <h3 className="text-lg font-semibold mb-3">
                    4. Status Tracking Dashboard
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Centralized dashboard for tracking all feedback status, resolution progress, and team activity. This provides complete visibility into the feedback workflow and ensures accountability.
                  </p>
                </div>
                <motion.div
                  className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="image4.png"
                      alt="Status Tracking Dashboard Design"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Image Carousel */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-center">
                  More Screens
                </h3>
                <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden">
                  <div className="flex gap-4 animate-scroll" style={{ width: 'fit-content' }}>
                    {/* Duplicate images for seamless loop */}
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="saha2.png" alt="Screen 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="Cyber.png" alt="Screen 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="Design System.png" alt="Screen 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="future.png" alt="Screen 4" className="w-full h-full object-cover" />
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="saha2.png" alt="Screen 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="Cyber.png" alt="Screen 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="Design System.png" alt="Screen 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="future.png" alt="Screen 4" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* User Testing & Impact */}
              <section className="mb-12">
                <h2 className="text-lg font-bold mb-4">User Testing & Impact</h2>
                <div className="w-full h-px bg-gray-300 mb-6"></div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Testing the Feedback System</h3>
                    <p>
                      I developed a prototype and shared it with design teams to gather initial feedback on how they experience contextual feedback on live websites. The goal was to understand how teams perceive real-time collaboration and how contextual feedback compares to traditional scattered communication methods.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Key Insights</h3>
                    <p>
                      The feedback revealed interesting insights about how contextual feedback fundamentally changes team collaboration. Users appreciated pinning comments directly on live websites, eliminating the need to describe locations or switch between tools. They found the real-time collaboration more efficient—seeing feedback instantly and responding in context, rather than searching through Slack threads or email chains. The system reduced miscommunication and accelerated the design-to-development handoff process significantly.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Thoughts on Impact</h3>
                    <p>
                      This exploration suggests a fundamental shift in design collaboration—from scattered feedback across multiple tools to contextual, actionable feedback directly on live websites. The future of design collaboration lies in creating systems that eliminate context loss and enable seamless real-time communication. This represents a new paradigm where feedback is always contextual, actionable, and integrated into the workflow, making collaboration feel more natural and efficient.
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        );
      case "/process/mandal-minds":
        return (
          <div className="text-black p-0 bg-white w-full">
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
                        <i className="ri-user-search-line text-2xl text-white"></i>
                      </div>
                      <div>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-black">
                          Mandal Minds
                        </h1>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-black opacity-80 leading-relaxed mb-6">
                    AI-driven hiring platform that validates skills through
                    customizable interviews and connects candidates directly
                    with recruiters. Personalized placement recommendations
                    powered by AI matching algorithms.
                  </p>
                </div>

                {/* Right Column - Scope of Work and Stack */}
                <div className="flex flex-col">
                  {/* Combined Scope of Work and Stack */}
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">
                      Scope of work
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                        UX Design
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        AI Interviews
                      </span>
                      <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        Skill Assessment
                      </span>
                      <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                        Matchmaking
                      </span>
                      <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
                        User Research
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-black mb-4">Stack</h3>
                    {/* Stack with Badge Style */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://cdn.simpleicons.org/figma/F24E1E" 
                          alt="Figma" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          Figma
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://cdn.simpleicons.org/openai/412991" 
                          alt="AI/ML" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          AI/ML
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://cdn.simpleicons.org/readthedocs/8CA1AF" 
                          alt="Documentation" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          Documentation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Overview */}
            <section className="mb-12">
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="mandal.png"
                    alt="Mandal Minds Overview"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-700 leading-relaxed">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Problem</h3>
                    <p>
                      Slow, biased hiring processes.<br />
                      Candidates struggle to demonstrate skills. Recruiters waste time on unqualified applicants.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Solution</h3>
                    <p>
                      AI-powered hiring ecosystem that assesses skills, eliminates bias,<br />
                      and connects candidates with opportunities faster.
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding Challenges</h3>
                    <p>
                      Design an AI-driven hiring platform that conducts customizable interviews, validates skills in real-time, and connects candidates with recruiters through intelligent matching.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Key Objectives</h3>
                    <p>
                      Build an intelligent system that reduces hiring bias, accelerates the recruitment process, and ensures better candidate-recruiter matches through AI-powered assessments and matching algorithms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Width Image */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="image1.png"
                    alt="Mandal Minds Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Reframing the problem */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Left Column - Blank */}
                <div></div>
                
                {/* Right Column */}
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Reframing the problem (HMW)</h3>
                    <p>
                      How might we enable automotive inventory managers to place bulk parts orders with fewer staff and in less time?
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding the existing workflow (JTBD)</h3>
                    <p>
                      Issuing parts, estimating prices, and negotiations were manually handled by inventory managers on paper slips. As orders increased, limited inventory visibility, limited staff availability, and the manual workflow led to frequent booking errors, miscommunication, and delayed order completion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Width Image 2 */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="image2.png"
                    alt="Mandal Minds Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Reframing the problem - Repeat 2 */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div></div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Reframing the problem (HMW)</h3>
                    <p>
                      How might we enable automotive inventory managers to place bulk parts orders with fewer staff and in less time?
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding the existing workflow (JTBD)</h3>
                    <p>
                      Issuing parts, estimating prices, and negotiations were manually handled by inventory managers on paper slips. As orders increased, limited inventory visibility, limited staff availability, and the manual workflow led to frequent booking errors, miscommunication, and delayed order completion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Width Image 3 */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="image3.png"
                    alt="Mandal Minds Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Reframing the problem - Repeat 3 */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div></div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Reframing the problem (HMW)</h3>
                    <p>
                      How might we enable automotive inventory managers to place bulk parts orders with fewer staff and in less time?
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding the existing workflow (JTBD)</h3>
                    <p>
                      Issuing parts, estimating prices, and negotiations were manually handled by inventory managers on paper slips. As orders increased, limited inventory visibility, limited staff availability, and the manual workflow led to frequent booking errors, miscommunication, and delayed order completion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Width Image 4 */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="image4.png"
                    alt="Mandal Minds Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Reframing the problem - Repeat 4 */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div></div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Reframing the problem (HMW)</h3>
                    <p>
                      How might we enable automotive inventory managers to place bulk parts orders with fewer staff and in less time?
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Understanding the existing workflow (JTBD)</h3>
                    <p>
                      Issuing parts, estimating prices, and negotiations were manually handled by inventory managers on paper slips. As orders increased, limited inventory visibility, limited staff availability, and the manual workflow led to frequent booking errors, miscommunication, and delayed order completion.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        );
      case "/process/shop-os":
        return (
          <div className="text-black p-8 bg-white max-w-7xl mx-auto">
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
                      <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                        <i className="ri-shopping-bag-line text-2xl text-white"></i>
                      </div>
                      <div>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-black">
                          Shop OS
                        </h1>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-black opacity-80 leading-relaxed mb-6">
                    Shop OS is a vision and design exploration for an AI agentic native ecosystem—a multi-agent workspace where multiple agents can collaborate, execute tasks, and build products for users. Currently focused on shopping environments, this project explores how an operating system for AI agentic workflows will look and function. As a solo UX designer, I crafted the entire flow and designed a working prototype. The system enables users to ask agents to handle everything from product research to purchasing, creating a seamless experience where AI agents work together to fulfill user needs.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex items-center bg-black hover:bg-gray-900 transition-colors text-white text-sm px-4 py-2 rounded-lg border border-gray-700">
                      <i className="ri-external-link-line mr-2"></i>
                      View Prototype
                    </button>
                  </div>
                </div>

                {/* Right Column - Scope of Work and Stack */}
                <div className="flex flex-col">
                  {/* Scope of Work */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-black mb-4">
                      Scope of work
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        UI Design
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        UX Design
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                        Agentic Interaction
                      </span>
                      <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                        Intelligent Flow
                      </span>
                      <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
                        Chat Box Experience
                      </span>
                      <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">
                        Audio
                      </span>
                      <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                        AI Prototype
                      </span>
                    </div>
                  </div>

                  {/* Stack */}
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">Stack</h3>

                    {/* Stack with Badge Style */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://cdn.simpleicons.org/figma/F24E1E" 
                          alt="Figma" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          Figma
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://cdn.simpleicons.org/openai/412991" 
                          alt="AI Agents" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          AI Agents
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://cdn.simpleicons.org/readthedocs/8CA1AF" 
                          alt="Documentation" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          Documentation
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img 
                          src="https://api.iconify.design/simple-icons:cursor.svg?color=%23000000" 
                          alt="Cursor" 
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = 'https://cdn.simpleicons.org/vscode/007ACC';
                          }}
                        />
                        <span className="text-black text-sm font-medium">
                          Cursor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Placeholder Image for Documentation */}
            <motion.div
              className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px] mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="image1.png"
                  alt="Figma AI Agents Documentation"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Introduction */}
            <section className="mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Shop OS is a vision and design exploration for an AI agentic native ecosystem—a multi-agent workspace where multiple agents can collaborate, execute tasks, and build products for users. Currently focused on shopping environments, this project explores how an operating system for AI agentic workflows will look and function.
                </p>
                <p>
                  As a solo UX designer, I crafted the entire flow and designed a working prototype. The system enables users to ask agents to handle everything from product research to purchasing, creating a seamless experience where AI agents work together to fulfill user needs.
                </p>
              </div>
            </section>

            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Overview</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Why build an ecosystem?</h3>
                  <p>
                    Current AI tools operate in isolation. Users switch between different platforms to complete tasks. Shopping workflows are fragmented across countless platforms. Users manually research, compare prices, read reviews, and track orders. There's no unified system where multiple AI agents collaborate. Agents can handle complex workflows autonomously. The vision is to create a native ecosystem. Agents work together seamlessly. Users ask for what they need. Agents handle the entire workflow from discovery to fulfillment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">The goal</h3>
                  <p>
                    Design an AI agentic native ecosystem—a multi-agent workspace where multiple agents collaborate, execute tasks, and build products for users. Create a unified operating system for AI agentic workflows that enables seamless collaboration, starting with shopping environments as the initial use case.
                  </p>
                </div>
              </div>
            </section>

            {/* Thinking Process */}
            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Thinking Process</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-lg">Things to consider</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Before building the the Webapp, there were a few points to consider that needs to be looked up on:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {/* Card 1 - Blue Gradient */}
                <div 
                  className="flex flex-col rounded-[20px] p-6"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                    background: 'linear-gradient(96.12deg, #E3F2FD 29.3%, #BBDEFB 74.68%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <i className="ri-team-line text-2xl text-white"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Agent Collaboration</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Design seamless agent-to-agent handoffs where multiple AI agents collaborate autonomously, passing context and tasks between each other without user intervention.
                  </p>
                </div>

                {/* Card 2 - Green Gradient */}
                <div 
                  className="flex flex-col rounded-[20px] p-6"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                    background: 'linear-gradient(96.12deg, #E8F5E9 29.3%, #C8E6C9 74.68%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <i className="ri-user-voice-line text-2xl text-white"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Human-Like UX</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Create intelligent human-mimicking interaction patterns where agents understand context, remember preferences, and adapt their communication style to feel natural and conversational.
                  </p>
                </div>

                {/* Card 3 - Orange Gradient */}
                <div 
                  className="flex flex-col rounded-[20px] p-6"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                    background: 'linear-gradient(96.12deg, #FFF3E0 29.3%, #FFE0B2 74.68%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <i className="ri-dashboard-3-line text-2xl text-white"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Workflow Visualization</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Build a new UX paradigm for agentic workflows that visualizes multi-step processes, agent states, and progress in real-time, making complex agent operations transparent and understandable.
                  </p>
                </div>

                {/* Card 4 - Pink Gradient */}
                <div 
                  className="flex flex-col rounded-[20px] p-6"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                    background: 'linear-gradient(96.12deg, #FCE4EC 29.3%, #F8BBD0 74.68%)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
                      <i className="ri-stack-line text-2xl text-white"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Scalable System</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Establish a design system that scales across agent types and use cases, with shared components and patterns that enable engineers to build on a unified multi-platform foundation.
                  </p>
                </div>
              </div>
            </section>

            {/* The Designs */}
            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">The Designs</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>

              {/* Design 1: AI Shopping Agent Interface */}
              <div className="mb-8">
                <div className="mb-14 mt-14">
                  <h3 className="text-lg font-semibold mb-3">
                    1. AI Shopping Agent Interface
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Intelligent shopping agents that understand user preferences and autonomously research products, compare prices, and make purchasing recommendations. The interface enables natural conversation with AI agents that handle complex multi-step shopping workflows, from product discovery to purchase completion.
                  </p>
                </div>
                <motion.div
                  className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="image1.png"
                      alt="AI Shopping Agent Design"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Design 2: Agentic Workflow Automation */}
              <div className="mb-8">
                <div className="mb-14 mt-14">
                  <h3 className="text-lg font-semibold mb-3">
                    2. Agentic Workflow Automation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Visual workflow builder where users design agentic processes that autonomously execute across multiple shopping platforms and services. This interface allows users to create, visualize, and manage complex multi-agent workflows where different AI agents collaborate to complete shopping tasks.
                  </p>
                </div>
                <motion.div
                  className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="image2.png"
                      alt="Workflow Automation Design"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Design 3: Intelligent Product Discovery */}
              <div className="mb-8">
                <div className="mb-14 mt-14">
                  <h3 className="text-lg font-semibold mb-3">
                    3. Intelligent Product Discovery
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    AI-powered product discovery interface that leverages multiple agents to research, compare, and recommend products based on user preferences. Agents autonomously gather information from various sources, analyze reviews, compare prices, and present personalized recommendations.
                  </p>
                </div>
                <motion.div
                  className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="image3.png"
                      alt="Product Discovery Design"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Design 4: Unified Order Management */}
              <div className="mb-8">
                <div className="mb-14 mt-14">
                  <h3 className="text-lg font-semibold mb-3">
                    4. Unified Order Management
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Centralized dashboard for managing all shopping orders across different platforms. AI agents track order status, delivery updates, and handle customer service interactions, providing a unified view of all shopping activities in one place.
                  </p>
                </div>
                <motion.div
                  className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="image4.png"
                      alt="Order Management Design"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Design 5: Multi-Agent Dashboard */}
              <div className="mb-8">
                <div className="mb-14 mt-14">
                  <h3 className="text-lg font-semibold mb-3">
                    5. Multi-Agent Dashboard
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Centralized control center for monitoring and managing multiple AI agents simultaneously. View agent status, task assignments, collaboration flows, and system performance metrics in real-time across the entire agentic ecosystem.
                  </p>
                </div>
                <motion.div
                  className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <img 
                      src="https://via.placeholder.com/1400x600/E5E7EB/9CA3AF?text=Multi-Agent+Dashboard+Design" 
                      alt="Multi-Agent Dashboard Design" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Image Carousel */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-center">
                  More Screens
                </h3>
                <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden">
                  <div className="flex gap-4 animate-scroll" style={{ width: 'fit-content' }}>
                    {/* Duplicate images for seamless loop */}
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="saha2.png" alt="Screen 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="Cyber.png" alt="Screen 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="Design System.png" alt="Screen 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="future.png" alt="Screen 4" className="w-full h-full object-cover" />
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="saha2.png" alt="Screen 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="Cyber.png" alt="Screen 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="Design System.png" alt="Screen 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-shrink-0 w-[910px] h-[400px] rounded-xl overflow-hidden">
                      <img src="future.png" alt="Screen 4" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* User Testing & Impact */}
              <section className="mb-12">
                <h2 className="text-lg font-bold mb-4">User Testing & Impact</h2>
                <div className="w-full h-px bg-gray-300 mb-6"></div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Testing the Agentic Experience</h3>
                    <p>
                      I developed a prototype and shared it with a few people to gather initial feedback on how they experience AI agentic interactions. The goal was to understand how people perceive agent-to-agent collaboration and how natural language interfaces compare to traditional click-and-navigate systems.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Key Insights</h3>
                    <p>
                      The feedback revealed interesting insights about how future design can evolve into more intelligent intent-based systems rather than traditional click-and-navigate systems. Users appreciated expressing their intent naturally and letting agents handle complex workflows, rather than manually navigating through multiple screens and steps. They found the agentic approach more intuitive—simply stating what they need and watching agents collaborate to fulfill the request.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Thoughts on Impact</h3>
                    <p>
                      This exploration suggests a fundamental shift in UX design—from interfaces that require users to learn navigation patterns to intelligent systems that understand intent and context. The future of design lies in creating agentic ecosystems where multiple AI agents work together seamlessly, moving beyond click-based interactions to intent-driven experiences. This represents a new paradigm where the interface becomes an intelligent system that anticipates needs and executes tasks proactively, making interactions feel more natural and effortless.
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        );
      case "/article/prototyping-with-custom-design-systems":
      case "/article/automating-design-system-testing":
      case "/article/future-of-design-ai-interfaces":
      case "/article/ai-prototyping-workflow":
        return <ModalArticleContent articlePath={contentType} />;
      default:
        return <div className="text-white p-4">Content not found</div>;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="expandable-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          className={`modal-content ${isExpanded ? "expanded" : ""}`}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <i className="ri-close-line"></i>
          </button>

          <div className="modal-scroll-container" onScroll={handleScroll}>
            {renderContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// MobileMenu component for small screens
const MobileMenu = ({
  isOpen,
  onClose,
  navOptions,
  activeTab,
  handleNavigation,
}: {
  isOpen: boolean;
  onClose: () => void;
  navOptions: any[];
  activeTab: string;
  handleNavigation: (item: any, e: React.MouseEvent) => void;
}) => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    exit: { opacity: 0, y: -20 },
  };

  const socialLinks = [
    { name: "GitHub", icon: "ri-github-line" },
    { name: "LinkedIn", icon: "ri-linkedin-line" },
    { name: "Instagram", icon: "ri-instagram-line" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu-overlay fixed inset-0 z-[60] flex items-center justify-center"
          style={{ backgroundColor: "rgba(19, 19, 19, 0.98)" }}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button
            className="mobile-menu-close absolute top-6 right-6 bg-white bg-opacity-10 rounded-full p-2 hover:bg-opacity-20 transition-all"
            onClick={onClose}
          >
            <i className="ri-close-line text-xl text-white"></i>
          </button>

          <div className="flex flex-col items-center justify-center h-full">
            {navOptions.map((item, i) => (
              <motion.div
                key={item.name}
                className="mobile-menu-item"
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.a
                  href={item.href}
                  className={`text-white text-lg font-medium flex items-center mb-6 ${
                    activeTab === item.name ? "selected-tab" : "inactive-tab"
                  }`}
                  onClick={(e) => {
                    handleNavigation(item, e);
                    onClose();
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <i className={`${item.icon} main-nav-icon mr-3`}></i>
                    {item.badge && (
                      <span className="new-badge">{item.badge}</span>
                    )}
                  </div>
                  <span>{item.name}</span>
                </motion.a>
              </motion.div>
            ))}

            <motion.div
              className="mobile-menu-item mt-8 pt-4 border-t border-white border-opacity-20"
              custom={navOptions.length}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex space-x-6 mt-2">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={`https://${social.name.toLowerCase()}.com`}
                    className="text-white opacity-80 hover:opacity-100"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${social.icon} text-2xl`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showStory, setShowStory] = useState(true);
  const [hoveredItems, setHoveredItems] = useState(false);
  const [clickedCard, setClickedCard] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalData, setModalData] = useState(null);
  const { isMobile } = useMobile();

  const location = useLocation();

  // Animation controls
  const controls = useAnimation();

  const storyText =
    "I'm Ajay, a designer specializing in **ed tech**, **legal tech**, and **interview tech**. I deliver user-centered solutions and focus on driving meaningful business results through innovative design and development processes for impactful solutions.";

  // Projects
  const projectProcessCards = [
    {
      id: 1,
      title: "Enterprise Design System",
      image: "Design System.png",
      link: "/process/enterprise-design-system",
      metrics:
        "A comprehensive design system with Figma documentation, components, and structure for multiple projects",
      tools: ["Auto Layout", "Variables", "Interactive Components"],
    },
    {
      id: 7,
      title: "Unified Litigation Intelligence Platform",
      image: "unicourtthumb.png",
      link: "/process/litigation-intelligence",
      metrics:
        "Delivering AI-powered access to 2 billion court dockets, analytics, and insights for legal innovation.",
      tools: ["AI Analytics", "Legal Tech", "Data Intelligence"],
    },
    {
      id: 8,
      title: "End Feedback Chaos",
      image: "noathumb.png",
      link: "/process/feedback-collaboration",
      metrics:
        "Pin contextual comments directly on live websites for crystal-clear collaboration and accelerated team workflows.",
      tools: ["Collaboration Tools", "Live Website Comments", "Team Workflows"],
    },
    {
      id: 9,
      title: "Mandal Minds: AI-Driven Hiring & Personalized Placement",
      image: "mandal.png",
      link: "/process/mandal-minds",
      metrics:
        "Customizable AI interviews validate skills, connecting you directly with recruiters for your dream job.",
      tools: ["AI Interviews", "Skill Validation", "Recruiter Matching"],
    },
    {
      id: 10,
      title: "Shop OS: AI Agentic Native Ecosystem for Multi-Agent Workspace",
      image: "shopos.png",
      link: "/process/shop-os",
      metrics:
        "Intelligent OS ecosystem for agentic workflows everything related to shopping.",
      tools: ["Agentic Workflows", "Shopping Intelligence", "OS Ecosystem"],
    },
  ];

  // Sample blog posts with added skills
  const blogPosts = [
    {
      id: 1,
      title:
        "Prototyping with Custom Design Systems Without Losing Consistency",
      excerpt:
        "How to overcome Figma's limitations by creating a seamless workflow between Figma components and Cursor for building real, interactive prototypes.",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: "AI-Prototyping.png",
      skills: ["Figma", "Cursor", "Design Systems"],
      type: "article",
      link: "/article/prototyping-with-custom-design-systems",
    },
    {
      id: 2,
      title: "Automating Design System Implementation and Testing",
      excerpt:
        "A revolutionary approach to validating design system implementation using Cypress tests and JSON specifications to ensure visual consistency.",
      date: "April 22, 2023",
      readTime: "7 min read",
      image: "autofix.png",
      skills: ["Cypress", "JSON", "Automation"],
      type: "article",
      link: "/article/automating-design-system-testing",
    },
    {
      id: 3,
      title: "The Future of Design: When AI Makes Interfaces Optional",
      excerpt:
        "Exploring how AI is transforming interfaces from necessity to preference, and how 'UI on Intent' will reshape how we interact with technology.",
      date: "June 15, 2023",
      readTime: "6 min read",
      image: "future.png",
      skills: ["AI", "Future of UI", "Voice Interfaces"],
      type: "article",
      link: "/article/future-of-design-ai-interfaces",
    },
    {
      id: 4,
      title: "Video Tutorial: Figma to Cursor Workflow",
      excerpt:
        "Step-by-step guide showing how to import Figma components to Cursor and create interactive prototypes that maintain design consistency.",
      date: "Coming Soon",
      readTime: "15 min video",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Video Tutorial", "Figma", "Cursor"],
      type: "video",
      link: "#",
    },
    {
      id: 5,
      title: "Video Tutorial: Automated Design System Testing",
      excerpt:
        "Learn how to set up Cypress tests to automatically validate your design system implementation and generate reports with auto-fix commands.",
      date: "Coming Soon",
      readTime: "18 min video",
      image:
        "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Video Tutorial", "Cypress", "Testing"],
      type: "video",
      link: "#",
    },
    {
      id: 6,
      title: "AI Prototyping Workflow",
      excerpt:
        "Revolutionary AI-powered prototyping system that bridges design and development seamlessly",
      date: "June 30, 2023",
      readTime: "8 min read",
      image: "AI-Prototyping.png",
      skills: ["AI Integration", "Rapid Prototyping", "Design-to-Code"],
      type: "article",
      link: "/article/ai-prototyping-workflow",
    },
  ];

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Navigation options with icons
  const navOptions = [
    {
      name: "Projects",
      icon: "ri-archive-fill",
      href: "#projects",
      isPage: false,
    },
    {
      name: "Articles & Tutorials",
      icon: "ri-file-list-3-fill",
      href: "#articles",
      isPage: false,
    },
    {
      name: "Process",
      icon: "ri-swap-2-fill",
      href: "#process",
      isPage: false,
    },
    {
      name: "Experience",
      icon: "ri-suitcase-fill",
      href: "#experience",
      isPage: false,
    },
  ];

  // Social media links - removed Dribbble and Behance
  const socialLinks = [
    { name: "GitHub", icon: "ri-github-line" },
    { name: "LinkedIn", icon: "ri-linkedin-line" },
    { name: "Instagram", icon: "ri-instagram-line" },
  ];

  useEffect(() => {
    // Start animation when component mounts
    controls.start("visible");
  }, [controls]);

  // Check for URL parameters to set active tab
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get("tab");
    if (tab) {
      // Decode the URL parameter
      const decodedTab = decodeURIComponent(tab);
      const validTabs = ["Projects", "Articles & Tutorials"];
      if (validTabs.includes(decodedTab)) {
        setActiveTab(decodedTab);
      }
    }
  }, [location]);

  // Function to handle tab changes
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);

    // Trigger animation when tab changes
    controls
      .start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.2 },
      })
      .then(() => {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
      });
  };

  // Get page title based on active tab
  const getPageTitle = () => {
    switch (activeTab) {
      case "Projects":
        return "Projects";
      case "Articles & Tutorials":
        return "Design & Product Management Articles";
      default:
        return "Portfolio";
    }
  };

  // Click handler for links (both internal and external)
  const handleCardClick = (link?: string | null, data?: any) => {
    if (link) {
      if (link.startsWith("/")) {
        // Internal navigation - open in modal
        setModalContent(link);
        setModalData(data);
        setModalOpen(true);
      } else {
        // External link
        window.open(link, "_blank");
      }
    }
  };

  // Close modal handler
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent("");
    setModalData(null);
  };

  // Function to handle tab changes or navigation
  const handleNavigation = (item: any, e: React.MouseEvent) => {
    e.preventDefault();

    // Always treat as tab change - render content in right column instead of modal
    handleTabChange(item.name);
  };

  const handleImageClick = () => {
    setClickedCard(!clickedCard);
    if (!clickedCard) {
      setShowInfo(true);
      setTimeout(() => setShowStory(true), 800);
    } else {
      setShowStory(false);
      setShowInfo(false);
    }
  };

  // Function to format text with bold and colored industry highlights
  const formatText = (text: string) => {
    // Split by **bold** markers and \n for line breaks
    const paragraphs = text.split("\n\n");

    return paragraphs.map((paragraph, paragraphIndex) => (
      <p key={paragraphIndex} className={paragraphIndex > 0 ? "mt-4" : ""}>
        {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            const boldText = part.slice(2, -2);

            // Color code different industries
            let color = "#222222";
            let borderColor = "transparent";

            if (boldText.includes("ed tech")) {
              color = "#16a34a"; // green
              borderColor = "#16a34a";
            } else if (boldText.includes("legal tech")) {
              color = "#2563eb"; // blue
              borderColor = "#2563eb";
            } else if (boldText.includes("interview tech")) {
              color = "#9333ea"; // purple
              borderColor = "#9333ea";
            }

            return (
              <span
                key={index}
                className="font-bold"
                style={{
                  color: color,
                  borderBottom: `2px solid ${borderColor}`,
                  paddingBottom: "1px",
                }}
              >
                {boldText}
              </span>
            );
          }
          return part;
        })}
      </p>
    ));
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundColor: "#FFFFFF",
        color: "#222222",
      }}
    >
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navOptions={navOptions}
        activeTab={activeTab}
        handleNavigation={handleNavigation}
      />

      {/* Main Content - Two Column Layout */}
      <div
        className="min-h-screen pt-[18px]"
        style={{ backgroundColor: "#F6F8FC" }}
      >
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-[18px] min-h-screen">
          {/* Left Column - Bio + Value Proposition - 25% width */}
          <div className="w-full lg:w-[25%] min-w-[350px] flex flex-col lg:h-screen pl-[18px] pr-[18px]">
            {/* Main Content Container - Flex 1 to push footer down */}
            <div className="flex-1 space-y-6">
              {/* Mobile Hamburger Menu */}
              <div className="lg:hidden flex justify-end">
                <motion.button
                  className="p-2"
                  onClick={() => setMobileMenuOpen(true)}
                  whileTap={{ scale: 0.95 }}
                  style={{ color: "#222222" }}
                >
                  <i className="ri-menu-line text-2xl"></i>
                </motion.button>
              </div>

              {/* Profile Info */}
              <div className="flex items-center">
                <motion.img
                  src={faceImg}
                  alt="Profile"
                  className="w-8 h-8 rounded object-cover mr-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                />
                <motion.span
                  className="text-sm font-bold text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  AJAY L MANATH
                </motion.span>
              </div>

              {/* Bio Content */}
              <div className="text-left relative">
                {/* Story text */}
                <AnimatePresence>
                  {showStory && (
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div
                        className="opacity-90 text-left text-sm sm:text-base leading-relaxed"
                        style={{ color: "#222222" }}
                      >
                        <p>{formatText(storyText)}</p>
                      </div>

                      <div className="mt-4 sm:mt-6 flex justify-start space-x-4">
                        <motion.a
                          href="https://drive.google.com/file/d/1gn-B1XpCOImjmRdAIimFgtW9_Sb5jdI8/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-xs sm:text-sm bg-black border border-black rounded-full px-4 py-2 flex items-center hover:bg-gray-800 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="ri-download-line mr-2 text-white"></i>
                          <span>See Full Resume</span>
                        </motion.a>

                        <motion.a
                          href="mailto:ajaymanath96@gmail.com"
                          className="text-black text-xs sm:text-sm bg-black bg-opacity-10 border border-black border-opacity-20 rounded-full px-4 py-2 flex items-center"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(0, 0, 0, 0.15)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="ri-mail-line mr-2"></i>
                          <span>Contact</span>
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Default state when story is not shown */}
                <AnimatePresence>
                  {!showStory && (
                    <motion.div
                      className="opacity-90 text-left text-sm sm:text-base leading-relaxed pt-8"
                      style={{ color: "#222222" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <p>{formatText(storyText)}</p>

                      <div className="mt-4 sm:mt-6 flex justify-start space-x-4">
                        <motion.a
                          href="https://drive.google.com/file/d/1gn-B1XpCOImjmRdAIimFgtW9_Sb5jdI8/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-xs sm:text-sm bg-black border border-black rounded-full px-4 py-2 flex items-center hover:bg-gray-800 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="ri-download-line mr-2 text-white"></i>
                          <span>See Full Resume</span>
                        </motion.a>

                        <motion.a
                          href="mailto:ajaymanath96@gmail.com"
                          className="text-black text-xs sm:text-sm bg-black bg-opacity-10 border border-black border-opacity-20 rounded-full px-4 py-2 flex items-center"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(0, 0, 0, 0.15)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="ri-mail-line mr-2"></i>
                          <span>Contact</span>
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* What can I do for your company? Section */}
              <div className="text-left">
                {/* Section Heading */}
                <h2
                  className="main-heading mb-6"
                  style={{
                    fontFamily: "Open Sans, PingFang SC, Arial, sans-serif",
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#222222",
                  }}
                >
                  What can I do for your company?
                </h2>

                {/* Responsive Grid - 1 col on mobile, 2 cols on tablet+, max 2 per row on laptop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                  {/* Faster Delivery AI Workflows Card */}
                  <div className="w-full">
                    <div
                      className="flex items-center px-3 py-2 rounded-lg w-full"
                      style={{
                        backgroundColor: "#F8F9FA",
                        border: "2px dotted #D1D5DB",
                        borderRadius: "12px",
                        boxShadow:
                          "inset 0 0 0 4px #F8F9FA, inset 0 0 0 6px #D1D5DB",
                      }}
                    >
                      <i
                        className="ri-magic-line text-base mr-2 flex-shrink-0"
                        style={{ color: "#1A2749" }}
                      ></i>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "#222222" }}
                      >
                        {" "}
                        AI Workflows
                      </p>
                    </div>
                  </div>

                  {/* Dev Bridge Card */}
                  <div className="w-full">
                    <div
                      className="flex items-center px-3 py-2 rounded-lg w-full"
                      style={{
                        backgroundColor: "#F8F9FA",
                        border: "2px dotted #D1D5DB",
                        borderRadius: "12px",
                        boxShadow:
                          "inset 0 0 0 4px #F8F9FA, inset 0 0 0 6px #D1D5DB",
                      }}
                    >
                      <i
                        className="ri-links-line text-base mr-2 flex-shrink-0"
                        style={{ color: "#1A2749" }}
                      ></i>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "#222222" }}
                      >
                        Design to code
                      </p>
                    </div>
                  </div>

                  {/* Founding Designer Card */}
                  <div className="w-full">
                    <div
                      className="flex items-center px-3 py-2 rounded-lg w-full"
                      style={{
                        backgroundColor: "#F8F9FA",
                        border: "2px dotted #D1D5DB",
                        borderRadius: "12px",
                        boxShadow:
                          "inset 0 0 0 4px #F8F9FA, inset 0 0 0 6px #D1D5DB",
                      }}
                    >
                      <i
                        className="ri-building-line text-base mr-2 flex-shrink-0"
                        style={{ color: "#1A2749" }}
                      ></i>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "#222222" }}
                      >
                        AI Prototyping
                      </p>
                    </div>
                  </div>

                  {/* Design System Card */}
                  <div className="w-full">
                    <div
                      className="flex items-center px-3 py-2 rounded-lg w-full"
                      style={{
                        backgroundColor: "#F8F9FA",
                        border: "2px dotted #D1D5DB",
                        borderRadius: "12px",
                        boxShadow:
                          "inset 0 0 0 4px #F8F9FA, inset 0 0 0 6px #D1D5DB",
                      }}
                    >
                      <i
                        className="ri-settings-3-line text-base mr-2 flex-shrink-0"
                        style={{ color: "#1A2749" }}
                      ></i>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "#222222" }}
                      >
                        Design System
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer in Left Column - Sticky to bottom */}
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={`https://${social.name.toLowerCase()}.com`}
                      className="text-black opacity-80 hover:text-black hover:opacity-100 flex items-center mb-2 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <i className={`${social.icon} regular-nav-icon`}></i>
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation + Content - 75% width with white background */}
          <div className="w-full lg:w-[75%] bg-white relative">
            {/* Fixed Navigation Menu */}
            <div className="sticky top-0 bg-white z-20 p-6 lg:pl-[18px] lg:pr-[18px] lg:py-[18px]">
              <div className="flex justify-center lg:justify-start">
                <div className="flex space-x-6">
                  {navOptions.map((item, index) => {
                    // Different colors for each navigation item
                    const colors = ["#16a34a", "#f97316", "#9333ea", "#2563eb"]; // green, orange, purple, blue
                    const activeColor = colors[index % colors.length];

                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className={`text-lg font-medium flex flex-col items-center justify-center whitespace-nowrap transition-colors duration-300 ${
                          activeTab === item.name
                            ? "" // Color will be set via style
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                        style={
                          activeTab === item.name ? { color: activeColor } : {}
                        }
                        onClick={(e) => handleNavigation(item, e)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative mb-2">
                          <i
                            className={`${item.icon} text-3xl`}
                            style={
                              activeTab === item.name
                                ? { color: activeColor }
                                : {}
                            }
                          ></i>
                        </div>
                        <span
                          className="text-sm"
                          style={
                            activeTab === item.name
                              ? { color: activeColor }
                              : {}
                          }
                        >
                          {item.name}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="content-container pt-0 pb-6 pl-[18px] pr-[18px] overflow-y-auto max-h-[calc(100vh-120px)]">
              {/* Projects Tab Content */}
              <div
                className={`tab-content ${
                  activeTab === "Projects" ? "active" : ""
                }`}
              >
                <motion.div
                  className="space-y-5"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={activeTab === "Projects" ? "visible" : "hidden"}
                >
                  {/* Projects - Artasaka Style */}
                  <div>
                    <div className="artasaka-grid">
                      {projectProcessCards.map((design, index) => (
                        <motion.div
                          key={design.id}
                          className={`artasaka-card ${
                            design.link ? "cursor-pointer" : ""
                          }`}
                          style={{ height: "80vh" }}
                          variants={fadeInUp}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleCardClick(design.link)}
                        >
                          {/* Project Image - Full Height with Title Overlay */}
                          <div className="artasaka-card-image-full relative group overflow-hidden">
                            {design.id === 1 ? (
                              /* Custom backdrop for "Enterprise Design System" card with green/white gradient */
                              <div
                                className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative flex items-center justify-center"
                                style={{
                                  background: `linear-gradient(135deg, #22c55e 0%, #4ade80 30%, #86efac 60%, #bbf7d0 80%, #ffffff 100%)`,
                                }}
                              >
                                {/* Net mesh pattern - centered and fading out */}
                                <div 
                                  className="absolute inset-0"
                                  style={{
                                    backgroundImage: `
                                      repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.15) 50px, rgba(255,255,255,0.15) 51px),
                                      repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.15) 50px, rgba(255,255,255,0.15) 51px)
                                    `,
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                                  }}
                                ></div>
                                
                                {/* Grid text in the middle with icons on both sides */}
                                <div className="flex items-center justify-center gap-6 relative z-10">
                                  {/* Left icon - Foundations */}
                                  <i className="ri-layout-grid-fill text-5xl text-black"></i>
                                  {/* Grid text */}
                                  <h2 className="text-6xl font-bold text-black">
                                    Grid
                                  </h2>
                                  {/* Right icon - Components */}
                                  <i className="ri-stack-fill text-5xl text-black"></i>
                                </div>
                              </div>
                            ) : design.id === 7 ? (
                              /* Custom backdrop for "Unified Litigation Intelligence Platform" card */
                              <div
                                className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative"
                                style={{
                                  background: `
                                        radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 60%, rgba(134,239,172,0.4) 80%, rgba(20,107,133,0.7) 90%, #146b85 100%),
                                        linear-gradient(135deg, #146b85, #0f5f75)
                                      `,
                                }}
                              >
                                {/* Unicourt SVG Logo at center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  <img
                                    src="unicourt.svg"
                                    alt="Unicourt Logo"
                                    className="h-24 w-auto opacity-90"
                                  />
                                </div>
                              </div>
                            ) : design.id === 8 ? (
                              /* Aurora gradient backdrop for "End Feedback Chaos" card */
                              <div
                                className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative overflow-hidden"
                                style={{
                                  backgroundColor: "#fafafa",
                                }}
                              >
                                {/* Blue aurora blob - top left */}
                                <div
                                  className="absolute"
                                  style={{
                                    top: "-10%",
                                    left: "-10%",
                                    width: "500px",
                                    height: "500px",
                                    background:
                                      "radial-gradient(circle at center, rgba(147, 197, 253, 0.3) 0%, transparent 70%)",
                                    filter: "blur(120px)",
                                    opacity: 0.8,
                                  }}
                                ></div>

                                {/* Green aurora blob - top center behind logo */}
                                <div
                                  className="absolute"
                                  style={{
                                    top: "-10%",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "700px",
                                    height: "700px",
                                    background:
                                      "radial-gradient(circle at center, #10b981 0%, transparent 70%)",
                                    filter: "blur(120px)",
                                    opacity: 0.8,
                                  }}
                                ></div>

                                {/* NOA Thumb SVG scaled to card width */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 z-10">
                                  <img
                                    src="noathumb.svg"
                                    alt="Noa Thumbnail"
                                    className="w-full h-auto opacity-90"
                                  />
                                </div>
                              </div>
                            ) : design.id === 9 ? (
                              /* Custom backdrop for "Mandal Minds" card */
                              <div
                                className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative"
                                style={{
                                  background: `linear-gradient(to bottom, #EFEFFF, #FFE1F1, #FFF6F5)`,
                                }}
                              >
                                {/* Mandal Logo at center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  <img
                                    src="mandal.png"
                                    alt="Mandal Logo"
                                    className="h-24 w-auto opacity-90"
                                  />
                                </div>
                              </div>
                            ) : design.id === 10 ? (
                              /* Custom backdrop for "Shop OS" card with light green gradient */
                              <div
                                className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative"
                                style={{
                                  background: `linear-gradient(135deg, #FFFEF0 0%, #F1F8E9 30%, #E8F5E9 60%, #C8E6C9 80%, #A5D6A7 100%)`,
                                }}
                              >
                                {/* Shop OS Logo and Text at center */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                  <div className="flex items-center justify-center gap-2 mb-3">
                                    <span className="text-6xl font-bold text-black leading-none">
                                      Shop
                                    </span>
                                    <div className="relative inline-flex items-center justify-center">
                                      <i className="ri-shopping-cart-2-fill text-6xl text-black leading-none"></i>
                                      <span
                                        className="absolute text-2xl font-bold text-white"
                                        style={{
                                          top: "50%",
                                          left: "50%",
                                          transform: "translate(-50%, -50%)",
                                        }}
                                      >
                                        +
                                      </span>
                                    </div>
                                    <span className="text-6xl font-bold text-black leading-none">
                                      S
                                    </span>
                                  </div>
                                  <p className="text-base text-black opacity-70 font-medium">
                                    Welcome to Shop OS
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <img
                                src={design.image}
                                alt={design.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            )}
                            {/* Dark overlay that appears on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Title that appears on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="text-white text-xl font-bold leading-tight mb-2">
                                {design.title}
                              </h3>
                              <p className="text-gray-200 text-sm">
                                {design.metrics}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Articles & Tutorials Tab Content */}
              <div
                className={`tab-content ${
                  activeTab === "Articles & Tutorials" ? "active" : ""
                }`}
              >
                <motion.div
                  className="space-y-5"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={
                    activeTab === "Articles & Tutorials" ? "visible" : "hidden"
                  }
                >
                  <div className="artasaka-grid">
                    {blogPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        className={`artasaka-card ${
                          post.type === "article" ? "cursor-pointer" : ""
                        }`}
                        variants={fadeInUp}
                        transition={{ delay: index * 0.1 }}
                        onClick={() =>
                          post.type === "article"
                            ? handleCardClick(post.link, post)
                            : null
                        }
                      >
                        {/* Article Image - Full Height with Title Overlay */}
                        <div className="artasaka-card-image-full relative group overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Dark overlay that appears on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          {/* Title that appears on hover */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white text-xl font-bold leading-tight mb-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-200 text-sm">
                              {post.readTime} • {post.date}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Process Tab Content */}
              <div
                className={`tab-content ${
                  activeTab === "Process" ? "active" : ""
                }`}
              >
                <motion.div
                  className="space-y-5"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={activeTab === "Process" ? "visible" : "hidden"}
                >
                  <Process />
                </motion.div>
              </div>

              {/* Experience Tab Content */}
              <div
                className={`tab-content ${
                  activeTab === "Experience" ? "active" : ""
                }`}
              >
                <motion.div
                  className="space-y-5"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={activeTab === "Experience" ? "visible" : "hidden"}
                >
                  <Experience />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Modal */}
      <ExpandableModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        contentType={modalContent}
        contentData={modalData}
      />
    </div>
  );
}

// Export the App component directly
export default App;
