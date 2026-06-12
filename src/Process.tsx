import React from "react";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";

const processIcons = [
  { icon: "ri-emotion-line", color: "text-rose-500", label: "Empathize" },
  { icon: "ri-focus-3-line", color: "text-violet-500", label: "Define" },
  { icon: "ri-lightbulb-flash-line", color: "text-amber-500", label: "Ideate" },
  { icon: "ri-artboard-line", color: "text-sky-500", label: "Prototype" },
  { icon: "ri-test-tube-line", color: "text-emerald-500", label: "Test" },
];

function Process() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-6">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 flex-wrap">
          {processIcons.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center">
                <i className={`${item.icon} text-2xl ${item.color}`}></i>
              </div>
              <span className="text-xs font-medium text-gray-500">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Design Methodology
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          My full design process walkthrough — from research to shipped product — is on the way.
        </p>

        <div className="inline-flex items-center gap-3 px-5 py-3 bg-orange-50 border border-orange-200 rounded-full">
          <i className="ri-time-line text-xl text-orange-500"></i>
          <span className="text-base font-semibold text-gray-800">Coming Soon</span>
          <i className="ri-calendar-line text-xl text-orange-500"></i>
        </div>
      </motion.div>
    </div>
  );
}

export default Process;
