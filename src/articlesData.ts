// Article content types
type ParagraphBlock = {
  type: 'paragraph';
  text: string;
};

type HeadingBlock = {
  type: 'heading';
  level: number;
  text: string;
};

type ListBlock = {
  type: 'list';
  items: string[];
};

type CodeBlock = {
  type: 'code';
  language: string;
  code: string;
};

type QuoteBlock = {
  type: 'quote';
  text: string;
};

type ImageBlock = {
  type: 'image';
  src: string;
  alt?: string;
  caption?: string;
};

export type ContentBlock = ParagraphBlock | HeadingBlock | ListBlock | CodeBlock | QuoteBlock | ImageBlock;

export type Article = {
  title: string;
  date: string;
  readTime: string;
  author: string;
  heroImage: string;
  content: ContentBlock[];
  skills: string[];
  relatedLinks: {
    title: string;
    url: string;
  }[];
};

// Article data - simplified version for modal
export const articlesData: Record<string, Article> = {
  "prototyping-with-custom-design-systems": {
    title: "Prototyping with Custom Design Systems Without Losing Consistency",
    date: "May 15, 2023", 
    readTime: "6 min read",
    author: "Ajay Manath",
    heroImage: "/AI-Prototyping.png",
    content: [
      {
        type: "paragraph",
        text: "Traditional design systems excel at maintaining consistency across static designs, but they often fall short when it comes to rapid prototyping and testing. This is where my AI-powered workflow comes in, bridging the gap between Figma's design system capabilities and real, interactive prototypes."
      },
      {
        type: "heading",
        level: 2,
        text: "The Problem with Traditional Prototyping"
      },
      {
        type: "paragraph",
        text: "Most design teams face a fundamental disconnect: their design system lives in Figma, but their prototypes need to be built with real code to test interactions, data flows, and technical feasibility."
      },
      {
        type: "paragraph", 
        text: "What if we could give AI tools a perfect understanding of our design system's DNA? This is where our method comes in, leveraging the power of Figma MCP (Model Context Protocol) and Cursor to ensure perfect consistency."
      },
      {
        type: "heading",
        level: 2,
        text: "Step 1: Extract Design System DNA"
      },
      {
        type: "paragraph",
        text: "The first step is to create a structured representation of your design system that AI can understand:"
      },
      {
        type: "list",
        items: [
          "Use a Figma MCP (Model Context Protocol) that extracts design tokens and properties to JSON",
          "Manually copy component properties from Figma and ask an AI like Gemini or ChatGPT to structure them as JSON"
        ]
      },
      {
        type: "heading",
        level: 3,
        text: "Step 2: Import Components via Figma MCP (Model Context Protocol) to Cursor"
      },
      {
        type: "paragraph",
        text: "Once you have your design system DNA extracted, the next step is to bring your components into a development environment:"
      },
      {
        type: "list",
        items: [
          "Use a Figma MCP (Model Context Protocol) to export your component as code (React, Vue, etc.)",
          "Import this component into your Cursor editor",
          "The component will come with its visual structure, but might not perfectly match your design system yet"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "The AI Consistency Engine"
      },
      {
        type: "paragraph",
        text: "Here's where the magic happens. With your design system JSON and imported components, you can create an AI-powered consistency engine that ensures every prototype maintains design system fidelity."
      },
      {
        type: "code",
        language: "json",
        code: `{
  "button": {
    "primary": {
      "background": "#3B82F6",
      "color": "#FFFFFF", 
      "padding": "12px 24px",
      "borderRadius": "4px",
      "fontSize": "16px",
      "fontWeight": "500"
    }
  }
}`
      },
      {
        type: "paragraph",
        text: "This workflow has transformed how I approach design system implementation, reducing prototype-to-production inconsistencies by over 80% while maintaining the speed and flexibility needed for rapid iteration."
      }
    ],
    skills: ["Figma", "Cursor", "Design Systems"],
    relatedLinks: [
      {
        title: "Automating Design System Testing",
        url: "/article/automating-design-system-testing"
      }
    ]
  },
  "automating-design-system-testing": {
    title: "Automating Design System Implementation and Testing",
    date: "April 22, 2023",
    readTime: "7 min read", 
    author: "Ajay Manath",
    heroImage: "/autofix.png",
    content: [
      {
        type: "paragraph",
        text: "In my previous article, we explored how to maintain design system consistency when using AI-powered prototyping tools. Now, let's tackle another critical challenge: ensuring that consistency is maintained throughout the development process and into production."
      },
      {
        type: "heading",
        level: 2,
        text: "The Challenge: Manual UI Verification"
      },
      {
        type: "paragraph",
        text: "Despite our best efforts to create comprehensive design systems, inconsistencies still find their way into production. Buttons with incorrect padding, dropdowns with misaligned elements, or form inputs with inconsistent styling—these issues often slip through manual reviews."
      },
      {
        type: "quote",
        text: "Consistency is the foundation of user experience, but manual verification is the enemy of consistency at scale."
      },
      {
        type: "heading",
        level: 2,
        text: "Automated Component Testing: The JSON Reference Method"
      },
      {
        type: "paragraph",
        text: "Building on the JSON token method from my previous article, we can create an automated testing framework that verifies every component against your design system before it reaches production."
      },
      {
        type: "code",
        language: "javascript",
        code: `// Automated component verification
const verifyComponent = (element, designSystemRef) => {
  const computedStyles = getComputedStyle(element);
  const violations = [];
  
  // Check padding
  if (computedStyles.padding !== designSystemRef.padding) {
    violations.push('Incorrect padding');
  }
  
  // Check colors
  if (computedStyles.backgroundColor !== designSystemRef.background) {
    violations.push('Incorrect background color');
  }
  
  return violations;
};`
      },
      {
        type: "paragraph",
        text: "This automated approach has helped teams catch 95% of design system violations before they reach production, dramatically improving consistency across their products."
      }
    ],
    skills: ["Cypress", "JSON", "Automation"],
    relatedLinks: [
      {
        title: "Future of Design AI Interfaces", 
        url: "/article/future-of-design-ai-interfaces"
      }
    ]
  },
  "future-of-design-ai-interfaces": {
    title: "The Future of Design: When AI Makes Interfaces Optional",
    date: "June 15, 2023",
    readTime: "6 min read",
    author: "Ajay Manath", 
    heroImage: "/future.png",
    content: [
      {
        type: "paragraph",
        text: "We're approaching a fundamental shift in how humans interact with technology. The era of clicking through menus, filling forms, and navigating complex interfaces is evolving into something more natural: intent-based interaction."
      },
      {
        type: "heading",
        level: 2,
        text: "From Interface-First to Intent-First"
      },
      {
        type: "paragraph",
        text: "Traditional UI design assumes users need to learn our interface patterns. But what if technology could understand our intent directly, making the interface a choice rather than a necessity?"
      },
      {
        type: "quote",
        text: "The best interface is no interface. The best interaction is the one that happens naturally, without thinking about the mechanics."
      },
      {
        type: "paragraph",
        text: "Consider voice assistants, AI chatbots, and emerging gesture-based controls. These represent the beginning of 'UI on Intent'—where the interface appears only when needed and disappears when the task is complete."
      },
      {
        type: "heading",
        level: 2,
        text: "Designing for Intent Recognition"
      },
      {
        type: "paragraph",
        text: "As designers, we need to shift from asking 'How do users navigate this interface?' to 'What are users trying to accomplish?'"
      },
      {
        type: "list",
        items: [
          "Map user intents rather than user journeys",
          "Design contextual interfaces that appear based on predicted needs",
          "Create fallback UI patterns for when AI interpretation fails",
          "Build trust through transparent AI decision-making"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "The Designer's Role in an AI-First World"
      },
      {
        type: "paragraph",
        text: "This doesn't mean the end of visual design. Instead, it represents an evolution toward designing the intelligence layer—the system that understands context, predicts needs, and serves the right interface at the right moment."
      },
      {
        type: "paragraph",
        text: "The future of design lies in crafting these intelligent, adaptive experiences that feel less like using software and more like having a thoughtful conversation with technology."
      }
    ],
    skills: ["AI", "Future of UI", "Voice Interfaces"],
    relatedLinks: [
      {
        title: "Prototyping with Custom Design Systems",
        url: "/article/prototyping-with-custom-design-systems"
      }
    ]
  }
};