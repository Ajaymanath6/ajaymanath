import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import faceImg from './face.png';
import fullImg from './full.jpg';
import { useNavigate, useLocation } from 'react-router-dom';

// Import content components for modal
import Process from './Process';
import Experience from './Experience';
import EnterpriseDesignSystemProcess from './EnterpriseDesignSystemProcess';
import SahayakProcess from './SahayakProcess';
import CyberSecurityProcess from './CyberSecurityProcess';
import SynapseLearnProcess from './SynapseLearnProcess';
import ModalArticleContent from './ModalArticleComponent';

// Create a context for mobile detection
type MobileContextType = {
  isMobile: boolean;
};

const MobileContext = createContext<MobileContextType>({ isMobile: false });

export const useMobile = () => useContext(MobileContext);

// MobileProvider component
const MobileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
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
const ExpandableModal = ({ isOpen, onClose, contentType, contentData }: {
  isOpen: boolean;
  onClose: () => void;
  contentType: string;
  contentData?: any;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const renderContent = () => {
    switch (contentType) {
      case '/process':
        return <Process />;
      case '/experience':
        return <Experience />;
      case '/process/enterprise-design-system':
        return <EnterpriseDesignSystemProcess />;
      case '/process/sahayak':
        return <SahayakProcess />;
      case '/process/cybersecurity':
        return <CyberSecurityProcess />;
      case '/process/synapselearn':
        return <SynapseLearnProcess />;
      case '/article/prototyping-with-custom-design-systems':
      case '/article/automating-design-system-testing':
      case '/article/future-of-design-ai-interfaces':
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
          className={`modal-content ${isExpanded ? 'expanded' : ''}`}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
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
const MobileMenu = ({ isOpen, onClose, navOptions, activeTab, handleNavigation }: { 
  isOpen: boolean, 
  onClose: () => void, 
  navOptions: any[],
  activeTab: string,
  handleNavigation: (item: any, e: React.MouseEvent) => void
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
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    }),
    exit: { opacity: 0, y: -20 }
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'ri-github-line' },
    { name: 'LinkedIn', icon: 'ri-linkedin-line' },
    { name: 'Instagram', icon: 'ri-instagram-line' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu-overlay fixed inset-0 z-[60] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(19, 19, 19, 0.98)' }}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className="mobile-menu-close absolute top-6 right-6 bg-white bg-opacity-10 rounded-full p-2 hover:bg-opacity-20 transition-all" onClick={onClose}>
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
                  className={`text-white text-lg font-medium flex items-center mb-6 ${activeTab === item.name ? "selected-tab" : "inactive-tab"}`}
                  onClick={(e) => {
                    handleNavigation(item, e);
                    onClose();
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <i className={`${item.icon} main-nav-icon mr-3`}></i>
                    {item.badge && <span className="new-badge">{item.badge}</span>}
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
  const [modalContent, setModalContent] = useState('');
  const [modalData, setModalData] = useState(null);
  const { isMobile } = useMobile();

  const location = useLocation();
  
  // Animation controls
  const controls = useAnimation();
  
  const storyText = "I'm Ajay, a designer specializing in **ed tech**, **legal tech**, and **interview tech**. I deliver user-centered solutions and focus on driving meaningful business results through innovative design and development processes for impactful solutions.";

  // Projects
  const projectProcessCards = [
    {
      id: 1,
      title: "Enterprise Design System",
      image: "Design System.png",
      link: "/process/enterprise-design-system",
      metrics: "A comprehensive design system with Figma documentation, components, and structure for multiple projects",
      tools: ["Auto Layout", "Variables", "Interactive Components"]
    },
    {
      id: 2,
      title: "Sahayak Teaching Assistant",
      image: "Sahayak.png",
      link: "/process/sahayak",
      metrics: "AI-powered teaching assistant designed for multi-language education in Indian classrooms",
      tools: ["Component Properties", "Variants", "Prototyping"]
    },
    {
      id: 3,
      title: "CyberSecurity Process",
      image: "Cyber.png",
      link: "/process/cybersecurity",
      metrics: "Comprehensive cybersecurity framework and process design for enterprise-level security solutions",
      tools: ["Security Design", "Process Mapping", "Risk Assessment"]
    },
    {
      id: 4,
      title: "Synapse Learning Platform",
      image: "Synapse.png",
      link: "/process/synapselearn",
      metrics: "Advanced learning platform with AI-driven personalization and adaptive learning pathways",
      tools: ["AI Integration", "Learning Analytics", "Adaptive UI"]
    },
    {
      id: 5,
      title: "AI Prototyping Workflow",
      image: "AI-Prototyping.png",
      link: "/process/ai-prototyping",
      metrics: "Revolutionary AI-powered prototyping system that bridges design and development seamlessly",
      tools: ["AI Integration", "Rapid Prototyping", "Design-to-Code"]
    },
    {
      id: 6,
      title: "Component Library System",
      image: "Component List (1).png",
      link: "/process/component-library",
      metrics: "Comprehensive component library with automated documentation and version control",
      tools: ["Component Architecture", "Auto Documentation", "Version Control"]
    },
  ];

  // Sample blog posts with added skills
  const blogPosts = [
    {
      id: 1,
      title: "Prototyping with Custom Design Systems Without Losing Consistency",
      excerpt: "How to overcome Figma's limitations by creating a seamless workflow between Figma components and Cursor for building real, interactive prototypes.",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: "AI-Prototyping.png",
      skills: ["Figma", "Cursor", "Design Systems"],
      type: "article",
      link: "/article/prototyping-with-custom-design-systems"
    },
    {
      id: 2,
      title: "Automating Design System Implementation and Testing",
      excerpt: "A revolutionary approach to validating design system implementation using Cypress tests and JSON specifications to ensure visual consistency.",
      date: "April 22, 2023",
      readTime: "7 min read",
      image: "autofix.png",
      skills: ["Cypress", "JSON", "Automation"],
      type: "article",
      link: "/article/automating-design-system-testing"
    },
    {
      id: 3,
      title: "The Future of Design: When AI Makes Interfaces Optional",
      excerpt: "Exploring how AI is transforming interfaces from necessity to preference, and how 'UI on Intent' will reshape how we interact with technology.",
      date: "June 15, 2023",
      readTime: "6 min read",
      image: "future.png",
      skills: ["AI", "Future of UI", "Voice Interfaces"],
      type: "article",
      link: "/article/future-of-design-ai-interfaces"
    },
    {
      id: 4,
      title: "Video Tutorial: Figma to Cursor Workflow",
      excerpt: "Step-by-step guide showing how to import Figma components to Cursor and create interactive prototypes that maintain design consistency.",
      date: "Coming Soon",
      readTime: "15 min video",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Video Tutorial", "Figma", "Cursor"],
      type: "video",
      link: "#"
    },
    {
      id: 5,
      title: "Video Tutorial: Automated Design System Testing",
      excerpt: "Learn how to set up Cypress tests to automatically validate your design system implementation and generate reports with auto-fix commands.",
      date: "Coming Soon",
      readTime: "18 min video",
      image: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Video Tutorial", "Cypress", "Testing"],
      type: "video",
      link: "#"
    }
  ];

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Navigation options with icons
  const navOptions = [
    { name: "Projects", icon: "ri-archive-fill", href: "#projects", isPage: false },
    { name: "Articles & Tutorials", icon: "ri-file-list-3-fill", href: "#articles", isPage: false },
    { name: "Process", icon: "ri-swap-2-fill", href: "#process", isPage: false },
    { name: "Experience", icon: "ri-suitcase-fill", href: "#experience", isPage: false }
  ];

  // Social media links - removed Dribbble and Behance
  const socialLinks = [
    { name: 'GitHub', icon: 'ri-github-line' },
    { name: 'LinkedIn', icon: 'ri-linkedin-line' },
    { name: 'Instagram', icon: 'ri-instagram-line' }
  ];

  useEffect(() => {
    // Start animation when component mounts
    controls.start("visible");
  }, [controls]);

  // Check for URL parameters to set active tab
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
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
    controls.start({
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }).then(() => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
    });
  };

  // Get page title based on active tab
  const getPageTitle = () => {
    switch(activeTab) {
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
      if (link.startsWith('/')) {
        // Internal navigation - open in modal
        setModalContent(link);
        setModalData(data);
        setModalOpen(true);
      } else {
        // External link
        window.open(link, '_blank');
      }
    }
  };

  // Close modal handler
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent('');
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
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, paragraphIndex) => (
      <p key={paragraphIndex} className={paragraphIndex > 0 ? 'mt-4' : ''}>
        {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const boldText = part.slice(2, -2);
            
            // Color code different industries
            let color = '#222222';
            let borderColor = 'transparent';
            
            if (boldText.includes('ed tech')) {
              color = '#16a34a'; // green
              borderColor = '#16a34a';
            } else if (boldText.includes('legal tech')) {
              color = '#2563eb'; // blue  
              borderColor = '#2563eb';
            } else if (boldText.includes('interview tech')) {
              color = '#9333ea'; // purple
              borderColor = '#9333ea';
            }
            
  return (
              <span
                key={index}
                className="font-bold"
                style={{ 
                  color: color,
                  borderBottom: `2px solid ${borderColor}`,
                  paddingBottom: '1px'
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
    <div className="min-h-screen relative" style={{ 
      backgroundColor: '#FFFFFF', 
      color: '#222222' 
    }}>
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        navOptions={navOptions}
        activeTab={activeTab}
        handleNavigation={handleNavigation}
      />

      {/* Main Content - Two Column Layout */}
      <div className="min-h-screen pt-[18px]" style={{ backgroundColor: '#F6F8FC' }}>
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
                      style={{ color: '#222222' }}
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
                          style={{ color: '#222222' }}
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
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
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
                          style={{ color: '#222222' }}
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
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
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
                    <h2 className="main-heading mb-6" style={{fontFamily: 'Open Sans, PingFang SC, Arial, sans-serif', fontSize: '20px', fontWeight: '500', color: '#222222'}}>What can I do for your company?</h2>
                    
                    {/* Responsive Grid - 1 col on mobile, 2 cols on tablet+, max 2 per row on laptop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                      
                      {/* Faster Delivery AI Workflows Card */}
                      <div className="w-full">
                        <div className="flex items-center px-3 py-2 rounded-lg w-full" style={{
                          backgroundColor: '#F8F9FA',
                          border: '2px dotted #D1D5DB',
                          borderRadius: '12px',
                          boxShadow: 'inset 0 0 0 4px #F8F9FA, inset 0 0 0 6px #D1D5DB'
                        }}>
                          <i className="ri-magic-line text-base mr-2 flex-shrink-0" style={{ color: '#1A2749' }}></i>
                          <p className="text-xs font-medium" style={{ color: '#222222' }}> AI Workflows</p>
                        </div>
                      </div>

                      {/* Dev Bridge Card */}
                      <div className="w-full">
                        <div className="flex items-center px-3 py-2 rounded-lg w-full" style={{
                          backgroundColor: '#F8F9FA',
                          border: '2px dotted #D1D5DB',
                          borderRadius: '12px',
                          boxShadow: 'inset 0 0 0 4px #F8F9FA, inset 0 0 0 6px #D1D5DB'
                        }}>
                          <i className="ri-links-line text-base mr-2 flex-shrink-0" style={{ color: '#1A2749' }}></i>
                          <p className="text-xs font-medium" style={{ color: '#222222' }}>Design to code</p>
                        </div>
                      </div>

                      {/* Founding Designer Card */}
                      <div className="w-full">
                        <div className="flex items-center px-3 py-2 rounded-lg w-full" style={{
                          backgroundColor: '#F8F9FA',
                          border: '2px dotted #D1D5DB',
                          borderRadius: '12px',
                          boxShadow: 'inset 0 0 0 4px #F8F9FA, inset 0 0 0 6px #D1D5DB'
                        }}>
                          <i className="ri-building-line text-base mr-2 flex-shrink-0" style={{ color: '#1A2749' }}></i>
                          <p className="text-xs font-medium" style={{ color: '#222222' }}>AI Prototyping</p>
                        </div>
                      </div>

                      {/* Design System Card */}
                      <div className="w-full">
                        <div className="flex items-center px-3 py-2 rounded-lg w-full" style={{
                          backgroundColor: '#F8F9FA',
                          border: '2px dotted #D1D5DB',
                          borderRadius: '12px',
                          boxShadow: 'inset 0 0 0 4px #F8F9FA, inset 0 0 0 6px #D1D5DB'
                        }}>
                          <i className="ri-settings-3-line text-base mr-2 flex-shrink-0" style={{ color: '#1A2749' }}></i>
                          <p className="text-xs font-medium" style={{ color: '#222222' }}>Design System</p>
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
                        const colors = ['#16a34a', '#f97316', '#9333ea', '#2563eb']; // green, orange, purple, blue
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
                            style={activeTab === item.name ? { color: activeColor } : {}}
                            onClick={(e) => handleNavigation(item, e)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="relative mb-2">
                              <i className={`${item.icon} text-3xl`} style={activeTab === item.name ? { color: activeColor } : {}}></i>
                            </div>
                            <span className="text-sm" style={activeTab === item.name ? { color: activeColor } : {}}>{item.name}</span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="content-container pt-0 pb-6 pl-[18px] pr-[18px] overflow-y-auto max-h-[calc(100vh-120px)]">


        {/* Projects Tab Content */}
        <div className={`tab-content ${activeTab === "Projects" ? "active" : ""}`}>
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
                    className={`artasaka-card ${design.link ? 'cursor-pointer' : ''}`}
                    style={{ height: '80vh' }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleCardClick(design.link)}
              >
                              {/* Project Image - Full Height */}
                              <div className="artasaka-card-image-full">
                                <img 
                                  src={design.image} 
                                  alt={design.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
              </motion.div>
            ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Articles & Tutorials Tab Content */}
        <div className={`tab-content ${activeTab === "Articles & Tutorials" ? "active" : ""}`}>
          <motion.div 
            className="space-y-5"
            variants={staggerContainer}
            initial="hidden"
            animate={activeTab === "Articles & Tutorials" ? "visible" : "hidden"}
          >
            <div className="artasaka-grid">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                  className={`artasaka-card ${post.type === "article" ? 'cursor-pointer' : ''}`}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                  onClick={() => post.type === "article" ? handleCardClick(post.link, post) : null}
                >
                            {/* Article Image - Full Height */}
                            <div className="artasaka-card-image-full">
                              <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
            </motion.div>
          ))}
            </div>
          </motion.div>
        </div>

        {/* Process Tab Content */}
        <div className={`tab-content ${activeTab === "Process" ? "active" : ""}`}>
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
        <div className={`tab-content ${activeTab === "Experience" ? "active" : ""}`}>
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