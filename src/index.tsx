import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App, { MobileContextProvider } from './App';
import About from './About';
import ArticlePage from './ArticlePage';
import Process from './Process';
import Experience from './Experience';
import SynapseLearnProcess from './SynapseLearnProcess';
import SahayakProcess from './SahayakProcess';
import CyberSecurityProcess from './CyberSecurityProcess';
import EnterpriseDesignSystemProcess from './EnterpriseDesignSystemProcess';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MobileContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="/process" element={<Process />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/process/synapselearn" element={<SynapseLearnProcess />} />
        <Route path="/process/sahayak" element={<SahayakProcess />} />
        <Route path="/process/cybersecurity" element={<CyberSecurityProcess />} />
        <Route path="/process/enterprise-design-system" element={<EnterpriseDesignSystemProcess />} />
      </Routes>
    </Router>
    </MobileContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
