import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import faceImg from "./face.png";
import { useLocation } from "react-router-dom";

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

const CaseStudyImagePlaceholder = ({
  label,
  description,
}: {
  label: string;
  description?: string;
}) => (
  <motion.div
    className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.01 }}
  >
    <div className="w-full h-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 m-6 rounded-xl bg-white/50">
      <i className="ri-image-add-line text-5xl text-gray-400 mb-4"></i>
      <p className="text-sm font-mono font-semibold text-gray-600">{label}</p>
      {description && (
        <p className="text-xs text-gray-500 mt-2 text-center max-w-md">
          {description}
        </p>
      )}
      <p className="text-xs text-gray-400 mt-4">Replace with your screenshot</p>
    </div>
  </motion.div>
);

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
              {/* Full Width Image 2 */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-[35%_65%] gap-16 text-gray-700 leading-relaxed px-8 py-16">
                {/* Left Column */}
                <div className="space-y-6 pr-9">
                  <div>
                    <h3 className="font-semibold mb-3 text-[14px]">Problem</h3>
                    <p className="text-[14px]">
                      Data-heavy app with unclear hierarchy and missing alerts overwhelmed users trying to search, track, bookmark, and manage cases efficiently.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-[14px]">Solution</h3>
                    <p className="text-[14px]">
                      Clear hierarchy with progressive disclosure, configurable alerts, simpler navigation, and clean search that surfaces only relevant information when needed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-[14px]">Business KPI</h3>
                    <p className="text-[14px]">
                      Business users can efficiently find cases, download documents, and use advanced filters, increasing platform usage and engagement while introducing opportunities for upselling premium products.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-[14px]">Organization</h3>
                    <p className="text-[14px]">UniCourt</p>
                  </div>
                </div>
                <div className="space-y-6 text-gray-700 leading-relaxed pr-9 break-words max-w-full">
                  <div>
                    <h3 className="font-semibold mb-2 text-[20px]">Understanding Challenges</h3>
                    <p className="mt-8 mb-8 text-[32px] leading-tight font-semibold">
                      In data-heavy platforms, interfaces that feel "comprehensive" during early stages often affect user productivity later. Why?
                    </p>
                  </div>
                  <div>
                    <p className="text-[16px] leading-relaxed mb-4">
                      Let me explain with an example.
                    </p>
                    <p className="text-[16px] leading-relaxed">
                      When building data-heavy platforms, it's common to surface all information at once to ensure nothing is missed. But what feels "comprehensive" during those early moments often comes back to affect user productivity and platform adoption.
                    </p>
                    <p className="text-[16px] leading-relaxed pt-6 pb-6">
                      Because we forget to ask: are the interfaces actually usable?
                    </p>
                    <p className="text-[16px] leading-relaxed">
                      At UniCourt, legal professionals were relying on a web app that presented too much information simultaneously, with complex navigation and unclear hierarchy. Users needed to search cases, track, bookmark, and set alerts, but the alert feature was missing and the interface overwhelmed them with information, making it difficult to efficiently access and manage case data.
                    </p>
                    <h3 className="text-[26px] font-semibold mt-8 mb-4">
                      How did this affect Business?
                    </h3>
                    <p className="text-[16px] leading-relaxed">
                      The overwhelming interface led to decreased user productivity and increased frustration, causing legal professionals to spend more time navigating than finding information. This inefficiency resulted in reduced user engagement and potential churn as users sought alternative solutions. The missing alert feature and complex navigation meant users couldn't efficiently track cases or stay updated on important developments, leading to missed opportunities and decreased platform value. This impacted customer retention and limited opportunities for upselling premium features or expanding user subscriptions.
                    </p>
                  </div>
                </div>
              </div>


              {/* Full Width Image 3 */}
              <div className="mt-16 mb-4 px-8">
                <p className="text-[16px] leading-relaxed text-gray-700 font-semibold">
                  Search flow
                </p>
              </div>
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden min-h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full min-h-full flex items-center justify-center p-4 overflow-hidden">
                  <video
                    src={`${process.env.PUBLIC_URL}/unicourtvideo1.mp4`}
                    className="w-full h-auto max-w-full object-contain rounded-2xl"
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

              {/* Two Column Grid Section */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-[35%_65%] gap-16 text-gray-700 leading-relaxed px-8 py-16">
                {/* Left Column */}
                <div className="space-y-6">
                </div>
                {/* Right Column */}
                <div className="space-y-6 text-gray-700 leading-relaxed pr-9 break-words max-w-full">
                  <div>
                    <h3 className="font-semibold mb-3 text-[20px]">Reframing the problem (HMW)</h3>
                    <p className="mt-8 mb-8 text-[32px] leading-tight font-semibold">
                      How might we enable legal professionals to efficiently search, track, and manage case data without overwhelming them with information?
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[20px] py-4">Understanding the existing workflow (JTBD)</h3>
                    <p className="text-[16px] leading-relaxed">
                      Searching cases, tracking updates, bookmarking important cases, and monitoring case developments were manually handled by legal professionals through a web app that presented all information simultaneously. As case volumes increased, limited information hierarchy, missing alert features, and the overwhelming interface led to frequent navigation errors, missed case updates, and delayed case management, making it difficult to efficiently access and manage case data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Browser Video Section */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden min-h-[600px] mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-full flex items-center justify-center py-6 px-9 overflow-hidden">
                  <video
                    src={`${process.env.PUBLIC_URL}/oldunicourt1.mp4`}
                    className="w-full h-auto max-w-full object-contain rounded-2xl"
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

              {/* Flow Chart Section */}
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden min-h-[600px] mb-8 mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center py-6 px-9 overflow-hidden">
                  <p className="text-[16px] leading-relaxed text-gray-700 mb-4 text-center">
                    The new standardized flow guides users through case search, tracking, and management with progressive disclosure.
                  </p>
                  <img
                    alt="User Workflow Flowchart"
                    src={`${process.env.PUBLIC_URL}/flow.png`}
                    className="w-full flex-1 min-h-0 object-cover rounded-2xl"
                  />
                </div>
              </motion.div>

              {/* Two Column Grid Section */}
              <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-[35%_65%] gap-16 text-gray-700 leading-relaxed px-8 py-16">
                {/* Left Column */}
                <div className="space-y-6">
                </div>
                {/* Right Column */}
                <div className="space-y-6 text-gray-700 leading-relaxed pr-9 break-words max-w-full">
                  <div>
                    <h3 className="font-semibold mb-3 text-[20px]">The Solution</h3>
                    <p className="text-[16px] leading-relaxed mb-4">
                      I standardized the user flow and redesigned the navigation system for a cleaner, more intuitive experience.
                      The interface uses progressive disclosure—users see only the details they need to progress.
                    </p>
                    <p className="text-[16px] leading-relaxed mb-4">
                      Additional actions remain hidden until users show intent, reducing cognitive load.
                      This prevents information overload and makes the interface significantly more usable.
                    </p>
                    <p className="text-[16px] leading-relaxed mb-4">
                      I introduced a new alert system with dedicated navigation options.
                      Users can now easily create and search for alerts, addressing a critical missing feature.
                    </p>
                    <p className="text-[16px] leading-relaxed">
                      Legal professionals can efficiently find cases, track updates, and manage their workflow.
                      The clear hierarchy guides users without overwhelming them with unnecessary information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Width Image 4 */}
              <div className="mt-16 mb-4 px-8">
                <p className="text-[16px] leading-relaxed text-gray-700 font-semibold">
                  Search flow
                </p>
              </div>
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden min-h-[600px] mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-full flex items-center justify-center py-6 px-9 overflow-hidden">
                  <video
                    src={`${process.env.PUBLIC_URL}/unicourtvideo.mp4`}
                    className="w-full h-auto max-w-full object-contain rounded-2xl"
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

              {/* Video Section - Repeat 3 */}
              <div className="mt-16 mb-4 px-8">
                <p className="text-[16px] leading-relaxed text-gray-700 font-semibold">
                  Alerts flow
                </p>
              </div>
              <motion.div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden min-h-[800px] mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full min-h-full flex items-center justify-center p-4 overflow-hidden">
                  <video
                    src={`${process.env.PUBLIC_URL}/unicourtAlerts.mp4`}
                    className="w-full h-auto max-w-full object-contain rounded-2xl"
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

              {/* All Projects Section */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 py-[120px] px-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Grid 1: Title */}
                <div className="text-black">
                  <h2 className="text-[34px] font-bold leading-tight">
                    All Projects
                  </h2>
                </div>

                {/* Grid 2: Project Cards */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Enterprise Design System */}
                  <motion.div
                    className="artasaka-card cursor-pointer"
                    style={{ height: "50vh" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0 }}
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        window.location.hash = "/process/enterprise-design-system";
                      }, 300);
                    }}
                  >
                    <div className="artasaka-card-image-full relative group overflow-hidden">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-xl font-bold leading-tight mb-2">
                          Enterprise Design System
                        </h3>
                        <p className="text-gray-200 text-sm">
                          A comprehensive design system with Figma documentation, components, and structure for multiple projects.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* End Feedback Chaos */}
                  <motion.div
                    className="artasaka-card cursor-pointer"
                    style={{ height: "50vh" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        window.location.hash = "/process/feedback-collaboration";
                      }, 300);
                    }}
                  >
                    <div className="artasaka-card-image-full relative group overflow-hidden">
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
                            src={`${process.env.PUBLIC_URL}/noathumb.svg`}
                            alt="Noa Thumbnail"
                            className="w-full h-auto opacity-90"
                          />
                        </div>
                        
                        {/* Coming Soon Badge */}
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-3 py-1.5 bg-orange-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                      {/* Dark overlay that appears on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* Title that appears on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-xl font-bold leading-tight mb-2">
                          End Feedback Chaos
                        </h3>
                        <p className="text-gray-200 text-sm">
                          Pin contextual comments directly on live websites for crystal-clear collaboration and accelerated team workflows.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Shop OS */}
                  <motion.div
                    className="artasaka-card cursor-pointer"
                    style={{ height: "50vh" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        window.location.hash = "/process/shop-os";
                      }, 300);
                    }}
                  >
                    <div className="artasaka-card-image-full relative group overflow-hidden">
                      <div
                        className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative"
                        style={{
                          background: `linear-gradient(135deg, #FFFEF0 0%, #F1F8E9 30%, #E8F5E9 60%, #C8E6C9 80%, #A5D6A7 100%)`,
                        }}
                      >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-6xl font-bold text-black leading-none">
                              Shop
                            </span>
                            <span className="text-6xl font-bold text-black leading-none">
                              OS
                            </span>
                          </div>
                          <p className="text-base text-black opacity-70 font-medium">
                            Welcome to Shop OS
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-xl font-bold leading-tight mb-2">
                          Shop OS: AI Agentic Native Ecosystem for Multi-Agent Workspace
                        </h3>
                        <p className="text-gray-200 text-sm">
                          Intelligent OS ecosystem for agentic workflows everything related to shopping.
                        </p>
                      </div>
                    </div>
                  </motion.div>
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
              <div>
                {/* Project Name and Description */}
                <div className="flex flex-col items-start">
                  {/* Project Name */}
                  <div className="flex items-start justify-between w-full mb-6">
                    <div className="flex items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/noa.png`}
                        alt="Noa"
                        className="w-16 h-16 mr-4 object-contain"
                      />
                      <div>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-black">
                          Noa - Notes On Anything
                        </h1>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-black opacity-80 leading-relaxed mb-6">
                    Pin contextual comments directly on live websites for crystal-clear collaboration and accelerated team workflows.
                  </p>
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
                  src={`${process.env.PUBLIC_URL}/noa1.png`}
                  alt="Noa"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Introduction */}
            <section className="mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Noa - Notes On Anything</strong> is a browser extension that allows users to <strong>pin and make notes</strong> on <strong>any website or webapp</strong> in the <strong>exact place</strong> they want, eliminating scattered communication and streamlining the design-to-development handoff process. The system integrates with favorite tools like <strong>Jira, Notion, and Todoist</strong>, enabling users to <strong>create tickets directly</strong> from notes on the surface of their critique without needing to go to Jira and make a ticket separately.
                </p>
                <p>
                  This cuts the traditional workflow by <strong>70%</strong>, allowing <strong>designers, developers, QA, and managers</strong> to easily give feedback, track progress, and create tickets and other actions all in <strong>one place</strong>. As the lead designer, I conceptualized and designed the entire feedback system from scratch, focusing on seamless browser integration and intuitive user experience that accelerates the entire collaboration workflow.
                </p>
              </div>
            </section>

            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4 text-orange-600">Overview</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-600">
                  Design a browser extension that allows<br />
                  teams to collaborate and give feedback on live websites
                </h3>
              </div>
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
              <h2 className="text-lg font-bold mb-4 text-orange-600">Thinking Process</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-lg">Things to consider</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Before building the browser extension, there were a few points to consider that needs to be looked up on:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {/* Card 1 - Blue Background */}
                <div 
                  className="flex flex-col rounded-[20px] p-6 bg-blue-50"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <i className="ri-message-3-line text-2xl text-blue-600"></i>
                    <h4 className="text-lg font-bold text-gray-900">Contextual Feedback</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Comments pinned directly to specific elements on live websites. Intuitive note interface allowing users to pin points anywhere.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    Integration with project management tools reduces feedback loop. Scalable structure supports AI, video, and audio inputs.
                  </p>
                </div>

                {/* Card 2 - Green Background */}
                <div 
                  className="flex flex-col rounded-[20px] p-6 bg-green-50"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <i className="ri-team-line text-2xl text-green-600"></i>
                    <h4 className="text-lg font-bold text-gray-900">Real-time Collaboration</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Team members see comments instantly and respond to feedback in real-time.
                  </p>
                </div>

                {/* Card 3 - Orange Background */}
                <div 
                  className="flex flex-col rounded-[20px] p-6 bg-orange-50"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <i className="ri-file-list-3-line text-2xl text-orange-600"></i>
                    <h4 className="text-lg font-bold text-gray-900">Workflow Integration</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Integrates seamlessly into existing design and development workflows.
                  </p>
                </div>

                {/* Card 4 - Pink Background */}
                <div 
                  className="flex flex-col rounded-[20px] p-6 bg-pink-50"
                  style={{
                    minWidth: '310px',
                    maxWidth: '980px',
                    width: '100%',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <i className="ri-dashboard-3-line text-2xl text-pink-600"></i>
                    <h4 className="text-lg font-bold text-gray-900">Status Tracking</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Teams monitor feedback resolution and assign tasks with full visibility.
                  </p>
                </div>
              </div>
            </section>

            {/* The Designs */}
            <section className="mb-12 relative">
              {/* Backdrop Blur Overlay with Text */}
              <div 
                className="absolute inset-0 z-50 flex items-start justify-center rounded-2xl pt-16"
                style={{
                  backdropFilter: 'blur(25px)',
                  WebkitBackdropFilter: 'blur(25px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="text-center px-8 space-y-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <motion.i 
                      className="ri-lightbulb-flash-line text-4xl sm:text-5xl text-orange-500"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.i>
                    <motion.i 
                      className="ri-heart-3-line text-4xl sm:text-5xl text-pink-500"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.i>
                    <motion.i 
                      className="ri-rocket-line text-4xl sm:text-5xl text-blue-500"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.i>
                  </div>
                  
                  <div className="space-y-6 max-w-4xl mx-auto">
                    <p 
                      className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-relaxed text-left"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      I'm a product designer who stumbled upon a problem that needed solving.
                    </p>
                    
                    <p 
                      className="text-lg sm:text-xl md:text-2xl font-normal text-gray-700 leading-relaxed text-left"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      This is my first product—built from zero to one. I designed the solution, then prototyped it with AI and Cursor to bring the exact experience we envisioned to life. This project marks my journey from product designer to product builder.
                    </p>
                    
                    <p 
                      className="text-lg sm:text-xl md:text-2xl font-normal text-gray-700 leading-relaxed text-left"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Hoping to launch by January 1st. I found 3 devs to help me make it scale and secure. This project taught me a lot about product management, managing the team, road map, and all those things.
                    </p>
                    
                    <div className="flex items-center gap-3 mt-4">
                      <i className="ri-time-line text-2xl text-orange-500"></i>
                      <span className="text-lg sm:text-xl font-semibold text-gray-800">Coming Soon</span>
                      <i className="ri-calendar-line text-2xl text-orange-500"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-lg font-bold mb-4 text-orange-600">The Designs</h2>
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
                      src="/noa2.png"
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
                      src="/image2.png"
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
                      src="/noa3.png"
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
                      src="/image4.png"
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
                <h2 className="text-lg font-bold mb-4 text-orange-600">User Testing & Impact</h2>
                <div className="w-full h-px bg-gray-300 mb-6"></div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed px-9">
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
      case "/process/carno":
        return (
          <div className="text-black p-8 bg-white max-w-7xl mx-auto">
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mr-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #ea580c, #fb923c)",
                      }}
                    >
                      <span className="text-2xl font-bold text-white">C</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-black">
                      Carno
                    </h1>
                  </div>
                  <p className="text-base text-black opacity-80 leading-relaxed mb-6">
                    Carno is a personal health project I built while following a
                    carnivore elimination diet under metabolic doctor guidance.
                    After a year of wheezing and coughing that turned out to be
                    an asthma variant, I needed to track what I ate, how I felt,
                    and share structured reports—not manage everything over
                    WhatsApp. I designed and built a ChatGPT-style experience
                    with meal logging, symptom check-ins, and LLM-generated
                    summaries my doctor could actually use.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-black mb-4">
                      Scope of work
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                        UX Design
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        UI Design
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                        Chat Interface
                      </span>
                      <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        Calorie Tracking
                      </span>
                      <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
                        LLM Reports
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">Stack</h3>
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
                          alt="LLM"
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                        />
                        <span className="text-black text-sm font-medium">
                          LLM / AI Chat
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mb-12">
              <motion.div
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <video
                  className="w-full h-full object-cover rounded-2xl"
                  src={`${process.env.PUBLIC_URL}/Carno_Image_1_Hero.webm`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  aria-label="Hero — Carno chat home / daily tracking overview"
                />
              </motion.div>
            </div>

            <section className="mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Doctors prescribed symptom management, but I wanted to find
                  root causes. A metabolic doctor put me on a carnivore
                  elimination diet and asked me to log everything I ate and how
                  it affected me—because sudden diet changes can cause early,
                  uncomfortable states that need monitoring.
                </p>
                <p>
                  For two months, tracking calories and weekly summaries over
                  WhatsApp became the real problem. Existing calorie apps
                  couldn&apos;t match the flexibility I needed, so I built Carno.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Overview</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Problem</h3>
                  <p>
                    Logging every meal, symptom, and feeling across a strict
                    elimination diet is tedious. Doctors need reliable trends;
                    patients need low-friction input during an already difficult
                    health period. WhatsApp threads and generic trackers break
                    down quickly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Outcome</h3>
                  <p>
                    A conversational tracker: log food in natural language,
                    get calories against a 2500 kcal baseline, receive timed
                    symptom prompts, and generate day/week summaries shareable
                    with your doctor via LLM-powered reports.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Thinking Process</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I researched existing calorie trackers, patient food diaries,
                and how people already use ChatGPT—then validated what had to be
                different for elimination-diet monitoring.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <strong>Timing matters:</strong> symptoms after meals need a
                  ~1.5 hour gap so insulin response and real discomfort show up.
                </li>
                <li>
                  <strong>Natural input:</strong> &quot;400g chicken&quot; or
                  &quot;7 eggs&quot; should work—not rigid food database flows.
                </li>
                <li>
                  <strong>Corrections:</strong> users must delete wrong entries
                  and restart without breaking the day&apos;s log.
                </li>
                <li>
                  <strong>Doctor-readable output:</strong> summaries must work
                  for 4 days, 1 week, or any custom range—not just daily totals.
                </li>
                <li>
                  <strong>Familiar AI UX:</strong> chat-first reduces learning
                  curve when people already expect ChatGPT-style interaction.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Solution</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>

              <div className="mb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    1. Meal logging in chat
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Users type what they eat before eating—e.g. one plate of
                    chicken, 400g chicken, one banana, or 7 eggs. A built-in
                    calorie calculator parses the input, shows a visual
                    representation of the food, and records intake against the
                    daily 2500 kcal target. Preloaded examples cover common
                    carnivore foods: animal proteins, dairy, and limited fruits.
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
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${process.env.PUBLIC_URL}/Carno_Image_2_MealLoggingChat.webm`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="Chat meal input, calorie calculation, food visuals"
                  />
                </motion.div>
              </div>

              <div className="mb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    2. Symptom check-in (~1.5 hrs later)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    When users return to chat after eating, Carno asks about
                    bloating, energy, gas, and other symptoms—plus free-form
                    notes (e.g. muscle cramps on a new diet). Users can note if
                    they had the same meal yesterday. Readings are saved;
                    wrong entries can be deleted to start fresh.
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
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${process.env.PUBLIC_URL}/Carno_Image_3_SymptomCheckIn.webm`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="Post-meal symptom prompts and notes"
                  />
                </motion.div>
              </div>

              <div className="mb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    3. Daily summary
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    End of day, users tap Summary to generate how they felt
                    across meals that day—whether 3 meals or more. Summaries can
                    be created manually or automatically at midnight and stored
                    per day.
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
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${process.env.PUBLIC_URL}/Carno_Image_4_DailySummary.webm`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="Daily summary generation and meal recap"
                  />
                </motion.div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Reporting &amp; Impact</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Reports page lets users build LLM summaries for any period—4
                days, one week, or a custom range—and share them with their
                doctor. This turns scattered meal + symptom logs into a robust
                tracking and reporting system that&apos;s easy for the patient
                and clear for clinical follow-up during diet transitions.
              </p>
              <motion.div
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/Carno_Image_5_ReportsShare.png`}
                  alt="Reports page, period selection, share with doctor"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">User Testing &amp; Impact</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">
                    Testing the conversational tracking experience
                  </h3>
                  <p>
                    I used Carno daily during my elimination diet and shared the
                    prototype with a few people managing similar health
                    tracking needs. The goal was to learn whether a ChatGPT-style
                    flow could replace rigid food diaries and WhatsApp logs—and
                    whether timed symptom check-ins felt helpful rather than
                    burdensome after meals.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Key Insights</h3>
                  <p>
                    Natural-language meal input (&quot;400g chicken,&quot;
                    &quot;7 eggs&quot;) lowered friction compared to tapping
                    through database screens. The ~1.5 hour symptom prompt made
                    sense once users understood it reflected how the body
                    responds after eating—not immediately at the table. LLM
                    summaries for custom date ranges were valued most by anyone
                    sharing progress with a clinician; scattered notes became
                    something a doctor could scan in minutes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg">
                    Thoughts on Impact
                  </h3>
                  <p>
                    Carno points to a shift in health UX—from forms and
                    spreadsheets to intent-driven logging where the system
                    calculates, reminds, and reports. For elimination diets and
                    metabolic care, the interface becomes a guide through an
                    uncomfortable transition: less cognitive load on the
                    patient, clearer signal for the doctor, and a path from
                    anecdotal &quot;I felt bad&quot; to structured, shareable
                    evidence over time.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );
      case "/process/mapmy-gig":
        return (
          <div className="text-black p-8 bg-white max-w-7xl mx-auto">
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mr-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #44403c, #92400e)",
                      }}
                    >
                      <i className="ri-map-pin-2-fill text-2xl text-white"></i>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-black">
                      MapMy Gig
                    </h1>
                  </div>
                  <p className="text-base text-black opacity-80 leading-relaxed mb-6">
                    MapMy Gig reimagines job hunting as a map-first, playful
                    experience—especially for non-tech roles and local startup
                    jobs in your area. Instead of scrolling endless lists and
                    hunting for the right career page, jobs appear as teardrop
                    pins you can explore, zoom into, and apply to directly. I
                    designed the flows for discovery, job detail, resume upload
                    with parsing, and suggestions to make local gig search feel
                    interactive and fun.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-black mb-4">
                      Scope of work
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-900 text-sm px-3 py-1 rounded-full">
                        UX Design
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        UI Design
                      </span>
                      <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        Map Interface
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                        Resume Parsing
                      </span>
                      <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                        Gamified Browse
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">Stack</h3>
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
                        <span className="text-black text-sm font-medium px-1">
                          Mobile Design
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mb-12">
              <motion.div
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <video
                  className="w-full h-full object-cover rounded-2xl"
                  src={`${process.env.PUBLIC_URL}/MapMyGig_Image_1_Hero.webm`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  aria-label="Hero — map view with job pins overview"
                />
              </motion.div>
            </div>

            <section className="mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Traditional job boards optimize for keyword search and long
                  lists—not for how people actually look for work nearby.
                  Non-tech and startup roles are often buried; applicants waste
                  time opening listings only to chase the real apply link on
                  another site.
                </p>
                <p>
                  MapMy Gig treats geography as the primary lens: see what&apos;s
                  around you, explore like a map app, and apply without the
                  friction of a separate search-and-hunt loop.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Overview</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Problem</h3>
                  <p>
                    Local and non-tech job seekers struggle to discover
                    opportunities in their area. List-based UIs hide proximity,
                    feel repetitive, and force extra steps to reach the actual
                    application page.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Outcome</h3>
                  <p>
                    A gamified, map-native job browser: teardrop pins on a map,
                    zoom and tap for details, one-tap apply to the host career
                    page, plus resume upload with auto-parsing and tailored
                    suggestions.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Thinking Process</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I looked at how people use maps for discovery (food, events,
                rides) versus how job boards present information—and asked what
                would make local gig hunting feel lighter and more exploratory.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <strong>Map = context:</strong> distance and density of roles
                  matter as much as title and salary.
                </li>
                <li>
                  <strong>Reduce apply friction:</strong> deep-link straight to
                  the job&apos;s career page—no inner-page archaeology.
                </li>
                <li>
                  <strong>Resume as input:</strong> upload once, parse
                  automatically, surface suggestions aligned to the gig.
                </li>
                <li>
                  <strong>Engagement without gimmicks:</strong> playful
                  teardrop pins and smooth zoom interactions—not noisy game
                  mechanics that distract from applying.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Solution</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>

              <div className="mb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    1. Map browse with teardrop pins
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Jobs render as teardrop markers on a map. Users pan and zoom
                    to explore their area—an interactive, spatial alternative to
                    endless scroll lists. The experience is designed to feel
                    more like discovery than database search.
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
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${process.env.PUBLIC_URL}/MapMyGig_Image_2_MapPinsBrowse.webm`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="Map with teardrop job pins, zoom and pan"
                  />
                </motion.div>
              </div>

              <div className="mb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    2. Job detail &amp; direct apply
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Tap a pin to open full job details—role, company, location,
                    and key requirements. Apply goes directly to the website
                    career page where the job was posted, so users don&apos;t
                    search for the real application link separately.
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
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${process.env.PUBLIC_URL}/MapMyGig_Image_3_JobDetailApply.webm`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="Job detail sheet and apply CTA"
                  />
                </motion.div>
              </div>

              <div className="mb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    3. Resume upload &amp; parsing
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Users upload a resume; the platform parses it automatically
                    and offers suggestions to strengthen applications for the
                    roles they&apos;re viewing—reducing repetitive form filling
                    across local listings.
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
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${process.env.PUBLIC_URL}/MapMyGig_Image_4_ResumeUploadParsing.webm`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="Resume upload, parsing, suggestions"
                  />
                </motion.div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Reporting &amp; Impact</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                MapMy Gig connects local opportunity density with a UX pattern
                people already understand from maps—making non-tech and startup
                job search faster to scan, more engaging to browse, and simpler
                to act on. The goal is fewer dead-end clicks and more
                applications that actually reach the right employer page.
              </p>
              <motion.div
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/MapMyGig_Image_5_GamifiedFlow.png`}
                  alt="MapMy Gig product overview — map-first job discovery, quick apply, AI resume parsing, and local matches"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">User Testing &amp; Impact</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">
                    Testing the map-first job hunt
                  </h3>
                  <p>
                    I shared an interactive prototype with job seekers looking
                    for local and non-tech roles. The goal was to compare
                    map-based discovery (zoom, pan, tap pins) against familiar
                    list-and-filter job boards—and to see whether direct apply
                    links and resume parsing reduced the usual hunt for the
                    &quot;real&quot; application page.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Key Insights</h3>
                  <p>
                    Participants grasped opportunity density faster on a map than
                    in long scroll lists. Teardrop pins and light gamification
                    made browsing feel exploratory rather than transactional.
                    One-tap apply to the host career page removed a common
                    pain point; resume upload with parsing was seen as a time
                    saver when applying to multiple nearby gigs in one session.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg">
                    Thoughts on Impact
                  </h3>
                  <p>
                    MapMy Gig suggests local job search can borrow from how we
                    already explore the world spatially—maps for restaurants,
                    events, rides—instead of forcing every role into a generic
                    feed. The impact is fewer dead-end clicks, quicker
                    orientation to what&apos;s actually near you, and a more
                    engaging path from curiosity to application for startup and
                    non-tech work that list UIs often bury.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );
      case "/process/promptject":
        return (
          <div className="text-black p-8 bg-white max-w-7xl mx-auto">
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mr-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #7dd3fc, #38bdf8)",
                      }}
                    >
                      <i className="ri-code-box-line text-2xl text-white"></i>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-black">
                      Promptject
                    </h1>
                  </div>
                  <p className="text-base text-black opacity-80 leading-relaxed mb-6">
                    Promptject is a UI creation engine I built to replace the
                    broken Figma-to-dev handoff. Designers prompt components
                    against their configured theme system; the engine outputs
                    proper code—not mockups—and publishes to a company-wide
                    catalog where developers search, preview in real code, copy,
                    or inject components directly from Cursor or VS Code. LangChain
                    keeps generation efficient; agents can connect to the design
                    system and autonomously pick components for new projects.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-black mb-4">
                      Scope of work
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-sky-100 text-sky-900 text-sm px-3 py-1 rounded-full">
                        UI Design
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        UX Design
                      </span>
                      <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                        Design System Architecture
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                        Prompt-to-Code
                      </span>
                      <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">
                        Catalog Library
                      </span>
                      <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                        Agent Integration
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">Stack</h3>
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
                        <span className="text-black text-sm font-medium px-1">
                          LangChain
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <img
                          src="https://api.iconify.design/simple-icons:cursor.svg?color=%23000000"
                          alt="Cursor"
                          className="w-6 h-6 mr-2 rounded-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://cdn.simpleicons.org/vscode/007ACC";
                          }}
                        />
                        <span className="text-black text-sm font-medium">
                          Cursor / VS Code
                        </span>
                      </div>
                      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                        <span className="text-black text-sm font-medium px-1">
                          Theme System
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mb-12">
              <motion.div
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <video
                  className="w-full h-full object-cover rounded-2xl"
                  src={`${process.env.PUBLIC_URL}/jetuntro.webm`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  aria-label="Promptject canvas and design system overview"
                />
              </motion.div>
            </div>

            <section className="mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The old workflow was familiar: designers build in Figma, write
                  every prop and state, hand files to developers—and developers
                  still ask where components live, which page is new, which was
                  updated, and how projections map to production. Discoverability
                  and handoff friction ate time on both sides.
                </p>
                <p>
                  Maintaining pitch-perfect Figma projections that stay in sync
                  with code was unsustainable. I planned a UI design system
                  architecture that could solve handoff, discoverability, and
                  dev-readiness together—and built Promptject as the engine
                  behind it.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Overview</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Problem</h3>
                  <p>
                    Figma-only handoffs create three gaps: designers over-spec
                    yet devs still need clarification; components and pages are
                    hard to find without asking the designer every time; and
                    keeping Figma projections accurate for implementation is
                    slow and brittle.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Outcome</h3>
                  <p>
                    A prompt-to-component engine where designers generate
                    theme-aligned code on a canvas, publish to a searchable
                    catalog, and devs self-serve—preview, copy, or inject into
                    their codebase with themes synced locally. Handoff friction
                    drops toward zero; the catalog grows autonomously as work
                    ships.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Thinking Process</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Instead of patching handoff with more Figma documentation, I
                treated the design system as runtime infrastructure—code-first,
                discoverable, and agent-ready.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <strong>Handoff:</strong> output must be production code using
                  the team&apos;s theme classes—not redlines devs reinterpret.
                </li>
                <li>
                  <strong>Discoverability:</strong> a public catalog beats
                  Slack threads; search, preview, and copy from one source of
                  truth.
                </li>
                <li>
                  <strong>Dev readiness:</strong> components render correctly
                  with configured tokens; injection into Cursor/VS Code must
                  respect local theme sync.
                </li>
                <li>
                  <strong>Efficiency:</strong> LangChain orchestration reduces
                  token use during UI generation vs. naive single-shot prompts.
                </li>
                <li>
                  <strong>Agents:</strong> connect agents to the DS so they can
                  fetch components and decide placement in other projects.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Solution</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>

              <div className="mb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    1. Prompt-to-component canvas
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Designers describe the component they need against the
                    design system they have configured. Promptject generates
                    styling and proper code that reflects theme classes and
                    tokens—not a static mock. Work happens on a canvas where
                    output is immediately inspectable as real UI.
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
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${process.env.PUBLIC_URL}/promptject-prompt-canvas.webm`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="Prompt canvas, theme-aware component generation"
                  />
                </motion.div>
              </div>

              <div className="mb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    2. Publish + catalog library
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Finished components publish to a company-wide catalog.
                    Developers search for a component or full page UI, see it
                    rendered in actual code—not Figma screenshots—and copy the
                    implementation. The catalog builds up autonomously as
                    designers ship, replacing ad-hoc Figma file archaeology.
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
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${process.env.PUBLIC_URL}/promptject-catalog-library.webm`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="Catalog search, live code preview, copy code"
                  />
                </motion.div>
              </div>

              <div className="mb-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    3. Dev injection (Cursor / VS Code)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If a dev knows the component name, they can prompt it in
                    Cursor or VS Code and inject it wherever the cursor sits—with
                    theme configuration synced to their local project. The engine
                    renders components correctly in context, closing the loop
                    between catalog and codebase without a designer in the middle.
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
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${process.env.PUBLIC_URL}/promptject-dev-code-inject.webm`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="IDE injection, component name prompt, theme sync"
                  />
                </motion.div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">Reporting &amp; Impact</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                LangChain-backed generation keeps UI creation token-efficient.
                The catalog grows as a byproduct of normal design work—no separate
                documentation sprint. Handoff to devs approaches elimination:
                discoverable, copy-ready, inject-ready components. As
                agent-as-a-service, Promptject lets connected agents pull from
                the design system and decide where components belong in new
                projects—far faster than the traditional Figma → questions →
                rebuild cycle.
              </p>
              <motion.div
                className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-[600px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/promptject-agent-integration.png`}
                  alt="Agent connected to DS, autonomous component placement"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </section>

            <section className="mb-12">
              <h2 className="text-lg font-bold mb-4">User Testing &amp; Impact</h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">
                    Testing the prompt-to-code workflow
                  </h3>
                  <p>
                    I ran the engine with designers and developers who lived
                    the old Figma handoff pain. The goal was to see whether
                    prompt-generated, theme-aligned code could replace spec
                    docs—and whether the catalog plus IDE injection removed the
                    &quot;where is this component?&quot; loop without adding new
                    tooling overhead.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Key Insights</h3>
                  <p>
                    Developers valued live code preview over Figma links—they
                    could trust what they copied. Designers liked prompting
                    against an existing theme instead of re-documenting props.
                    Catalog search cut repeated Slack questions; injection by
                    component name in Cursor felt natural to teams already using
                    AI-assisted coding. LangChain orchestration kept generation
                    fast enough for iterative canvas work.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg">
                    Thoughts on Impact
                  </h3>
                  <p>
                    Promptject reframes design systems from static libraries in
                    Figma to living infrastructure—generated, published,
                    discovered, and injected as code. Agent hooks mean the same
                    DS can serve human designers and autonomous agents building
                    new surfaces. The impact is a pipeline where handoff isn&apos;t
                    optimized—it&apos;s removed—and discoverability becomes a product
                    feature, not a meeting.
                  </p>
                </div>
              </div>
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
  const [showStory] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalData, setModalData] = useState(null);

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
      id: 10,
      title: "Shop OS: AI Agentic Native Ecosystem for Multi-Agent Workspace",
      image: "shopos.png",
      link: "/process/shop-os",
      metrics:
        "Intelligent OS ecosystem for agentic workflows everything related to shopping.",
      tools: ["Agentic Workflows", "Shopping Intelligence", "OS Ecosystem"],
    },
    {
      id: 11,
      title: "Carno",
      image: "",
      link: "/process/carno",
      metrics: "UX and product design for the Carno platform.",
      tools: ["UX Design", "UI Design", "Product Design"],
    },
    {
      id: 12,
      title: "MapMy Gig",
      image: "",
      link: "/process/mapmy-gig",
      metrics:
        "Discover and map local gigs with a clear, location-first experience.",
      tools: ["UX Design", "UI Design", "Mobile Design"],
    },
    {
      id: 13,
      title: "Promptject",
      image: "",
      link: "/process/promptject",
      metrics:
        "Prompt-to-component UI engine that eliminates Figma handoff and builds a live design system catalog.",
      tools: ["Design Systems", "LangChain", "Dev Handoff", "AI Agents"],
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
      name: "Play",
      icon: "ri-play-circle-fill",
      href: "#play",
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
                                
                                {/* Coming Soon Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                  <span className="px-3 py-1.5 bg-orange-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                    Coming Soon
                                  </span>
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
                            ) : design.id === 11 ? (
                              /* Custom backdrop for "Carno" card with orange gradient */
                              <div
                                className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative flex items-center justify-center"
                                style={{
                                  background: `linear-gradient(135deg, #c2410c 0%, #ea580c 35%, #f97316 65%, #fb923c 85%, #fdba74 100%)`,
                                }}
                              >
                                <div className="text-center relative z-10">
                                  <h2 className="text-6xl font-bold text-white leading-none">
                                    Carno
                                  </h2>
                                </div>
                              </div>
                            ) : design.id === 12 ? (
                              /* Custom backdrop for "MapMy Gig" card with brown gradient */
                              <div
                                className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative flex items-center justify-center"
                                style={{
                                  background: `linear-gradient(135deg, #292524 0%, #44403c 25%, #57534e 45%, #78350f 70%, #92400e 100%)`,
                                }}
                              >
                                <div className="text-center relative z-10">
                                  <h2 className="text-6xl font-bold text-white leading-none mb-3">
                                    MapMy
                                  </h2>
                                  <p className="text-2xl font-semibold text-white/90">
                                    Gig
                                  </p>
                                </div>
                              </div>
                            ) : design.id === 13 ? (
                              /* Custom backdrop for "Promptject" card with light sky-blue gradient */
                              <div
                                className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative flex items-center justify-center"
                                style={{
                                  background: `linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #bae6fd 60%, #7dd3fc 85%, #38bdf8 100%)`,
                                }}
                              >
                                <div className="text-center relative z-10">
                                  <h2 className="text-6xl font-bold text-slate-900 leading-none">
                                    Promptject
                                  </h2>
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

              {/* Play Tab Content */}
              <div
                className={`tab-content ${
                  activeTab === "Play" ? "active" : ""
                }`}
              >
                <motion.div
                  className="space-y-5"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={activeTab === "Play" ? "visible" : "hidden"}
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
