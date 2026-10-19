// Portfolio projects data with unified entries, dates, tech stacks, and architecture responsibilities
export const projectsData = [
  {
    id: "posgrestore",
    projectTitle: "POSGRESTORE - E-Commerce Inventory Dashboard",
    date: "August 2026 - Present",
    category: ["fullstack", "frontend"],
    imgPath: "Images/14.png",
    description:
      "Full-stack inventory dashboard with serverless SQL aggregations, secured REST APIs, and real-time product metrics.",
    problemStatement:
      "Retail operations required a single unified dashboard to track stock levels, calculate sales metrics in real time, and manage product media without slow client-side compute or vulnerable APIs.",
    fullDescription:
      "A production-grade inventory and e-commerce management platform combining a React 19 frontend with a Node.js/Express API layer on Neon serverless PostgreSQL, built for fast catalog workflows, real-time analytics, and secure multi-user inventory operations.",
    responsibilities: [
      "Engineered zero-latency dashboard metrics using SQL aggregations and optimized queries on Neon serverless PostgreSQL.",
      "Hardened REST endpoints with Arcjet rate limiting, bot detection, Helmet HTTP headers, and JWT-authenticated routes.",
      "Integrated Cloudinary media upload pipelines with automated CDN caching and format optimization for product assets.",
      "Implemented streaming endpoints for fast, server-side CSV data exports without blocking the Node.js event loop."
    ],
    challenges:
      "Synchronizing real-time inventory updates across concurrent sessions while blocking automated scraping and bot abuse through layered API security shields.",
    techStack: [
      "Serverless PostgreSQL (Neon DB)",
      "Node.js",
      "Express",
      "React 19",
      "Zustand",
      "Tailwind CSS",
      "Arcjet",
      "Helmet",
      "JWT",
      "Cloudinary CDN"
    ],
    githubLink: "https://github.com/breskella/posgrestore",
    demoLink: "https://posgrestore.vercel.app"
  },
  {
    id: "kevta",
    projectTitle: "Kevta Task & Board Management Platform",
    date: "March 2026 - Present",
    category: ["fullstack"],
    imgPath: "Images/9.png",
    description:
      "Scalable multi-tenant task and board management platform with real-time collaboration features.",
    problemStatement:
      "Distributed engineering teams required a collaborative task board where workspace data stays strictly isolated, changes sync live across users, and API behavior is rigorously validated before deployment.",
    fullDescription:
      "A scalable task and board management backend (Kevta) supporting agile workflows, tenant-scoped PostgreSQL data models, authenticated REST APIs, and real-time collaboration events for live board synchronization.",
    responsibilities: [
      "Designed relational schemas for multi-tenant workspace isolation with strict row-level data segregation.",
      "Built Express REST APIs for boards, tasks, and workspace membership with granular authorization middleware.",
      "Implemented Socket.io/WebSocket event broadcasting for bidirectional, low-latency board updates.",
      "Authored comprehensive Jest and Supertest E2E suites covering login flows, authorization boundaries, and core user journeys."
    ],
    challenges:
      "Preventing cross-tenant data leakage under high concurrency while keeping real-time board latency low during peak collaborative editing.",
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io",
      "WebSockets",
      "Jest",
      "Supertest",
      "JWT"
    ],
    githubLink: "https://github.com/matrixmindsit-eg/todo-list",
    demoLink: "https://kevta.app"
  },
  {
    id: "bucketer-house-expenses",
    projectTitle: "Bucketer - House Expenses Application",
    date: "May 2026 - Present",
    category: ["fullstack"],
    imgPath: "Images/bucketer.png",
    description:
      "Mobile house expenses tracking and bucketer application built with Node.js, Express, NestJS, and MongoDB, with Jest E2E coverage for core expense workflows and data management.",
    problemStatement:
      "Users and households needed an organized way to allocate financial buckets, track shared house expenses, and maintain reliable data durability without transaction discrepancies.",
    fullDescription:
      "A mobile house expenses tracking and bucketer management application. Its backend combines Node.js, Express, and NestJS with MongoDB data storage, supported by Jest End-to-End (E2E) tests for core expense workflows, data management, accurate category allocations, and secure user isolation.",
    responsibilities: [
      "Architected backend modules with Node.js, Express, and NestJS for core expense tracking, category bucket allocations, and recurring bill schedules.",
      "Designed MongoDB data models and indexed queries for rapid expense filtering and reporting.",
      "Authored Jest End-to-End (E2E) tests covering expense creation, updates, budget threshold alerts, and user authentication workflows.",
      "Validated expense records, bucket allocations, and related data management flows to protect household financial data integrity.",
      "Optimized query performance and connection pooling to ensure seamless response times for mobile client sync."
    ],
    challenges:
      "Ensuring financial transaction integrity and concurrency safety when updating multiple expense buckets simultaneously across shared household accounts.",
    techStack: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "Jest",
      "RESTful APIs"
    ],
    githubLink: "https://github.com/matrixmindsit-eg/bucketer",
    demoLink: ""
  },
  {
    id: "food-delivery",
    projectTitle: "Full-Stack Food Delivery Application",
    date: "May 2026 - June 2026",
    category: ["fullstack", "frontend"],
    imgPath: "Images/8.png",
    description:
      "Full-stack ordering platform with secure authentication, Stripe payment processing, and optimized RESTful APIs.",
    problemStatement:
      "Customers and restaurant managers needed an intuitive platform to browse menus, build orders, and complete card checkouts securely with instant order status updates.",
    fullDescription:
      "An end-to-end food ordering and delivery management system providing real-time order tracking, menu browsing, cart state management, and Stripe payment integration.",
    responsibilities: [
      "Architected backend REST APIs for product catalog, shopping cart state, and order lifecycle management.",
      "Integrated Stripe payment gateway with webhook verification for secure transaction settlement.",
      "Implemented JWT authentication and role-based access control (RBAC) separating customers and admins."
    ],
    challenges:
      "Handling asynchronous payment webhooks reliably to ensure idempotency and prevent duplicate order fulfillment.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Stripe API",
      "JWT"
    ],
    githubLink: "https://github.com/breskella/food_delivery",
    demoLink: ""
  },
  {
    id: "portfolio",
    projectTitle: "My Personal Portfolio",
    date: "Feb 2026 - Present",
    category: ["frontend"],
    imgPath: "Images/7.png",
    description:
      "Modern, responsive portfolio built with React and Framer Motion, featuring dynamic filtering and interactive modals.",
    problemStatement:
      "Needed a high-performance, aesthetically refined developer portfolio to showcase backend engineering expertise, production projects, and verified credentials.",
    fullDescription:
      "A showcase portfolio engineered for optimal aesthetic presentation, responsive layouts, accessibility, and high-performance interactive components with Framer Motion animations.",
    responsibilities: [
      "Built responsive, accessible UI components with fluid micro-interactions and Framer Motion transitions.",
      "Implemented dynamic client-side category filtering and interactive project inspection modals.",
      "Engineered theme persistence and optimized asset delivery for fast initial load times."
    ],
    challenges:
      "Balancing rich animations and glassmorphism styling with high rendering performance and clean cross-device responsiveness.",
    techStack: [
      "React",
      "Framer Motion",
      "Vanilla CSS",
      "Vite"
    ],
    githubLink: "https://github.com/breskella/my_portfolio",
    demoLink: ""
  },
  {
    id: "image-filter",
    projectTitle: "Advanced Image Filter Studio",
    date: "2025",
    category: ["python"],
    imgPath: "Images/10.png",
    description:
      "Desktop application for image processing, allowing users to apply custom filters and matrix transformations.",
    problemStatement:
      "Users needed a simple desktop utility to apply matrix-based transformations and image enhancements without heavy commercial photo editors.",
    fullDescription:
      "A Python desktop tool that provides graphical controls to manipulate images, execute convolution kernels, and apply advanced visual transformations.",
    responsibilities: [
      "Implemented matrix-based image manipulation filters including blur, sharpen, emboss, and edge detection.",
      "Designed a responsive processing pipeline to prevent UI freezes during large image calculations.",
      "Provided lossless export capabilities supporting multiple image formats (PNG, JPEG)."
    ],
    challenges:
      "Accelerating mathematical convolution algorithms on high-resolution image matrices within a single-threaded GUI context.",
    techStack: [
      "Python",
      "Pillow (PIL)",
      "NumPy",
      "Tkinter GUI"
    ],
    githubLink: "https://github.com/breskella/advanced-image-filter-studio",
    demoLink: ""
  },
  {
    id: "password-generator",
    projectTitle: "Strong Password Generator",
    date: "2025",
    category: ["python"],
    imgPath: "Images/11.png",
    description:
      "Security tool designed to generate cryptographically complex passwords with customizable parameters.",
    problemStatement:
      "Needed an offline, unhackable generator to create high-entropy passwords tailored to distinct security rules.",
    fullDescription:
      "A desktop security utility designed to generate high-entropy passwords, evaluate passphrase strength, and protect against brute-force vulnerabilities.",
    responsibilities: [
      "Engineered cryptographic randomization routines for high-entropy character selection.",
      "Built intuitive GUI controls for custom character sets, symbols, and length parameters.",
      "Implemented clipboard integration with auto-clearing and real-time password strength evaluation."
    ],
    challenges:
      "Enforcing unbiased entropy across mixed character pools while maintaining simple, user-friendly configuration options.",
    techStack: [
      "Python",
      "Tkinter",
      "Cryptography",
      "Security Algorithms"
    ],
    githubLink: "https://github.com/breskella/strong_pass_generator",
    demoLink: ""
  },
  {
    id: "translator",
    projectTitle: "Smart Translator Application",
    date: "2025",
    category: ["python"],
    imgPath: "Images/12.png",
    description:
      "Desktop translation app that leverages language APIs to provide real-time multilingual text translation.",
    problemStatement:
      "Required a lightweight desktop utility to instantly translate text between global languages without browser overhead.",
    fullDescription:
      "A desktop translation tool utilizing language detection APIs to deliver instant, bidirectional translations across dozens of global languages.",
    responsibilities: [
      "Integrated asynchronous translation APIs with automatic source language detection.",
      "Engineered real-time input debouncing and local response caching to minimize API usage.",
      "Designed a clean user interface supporting bidirectional text orientation."
    ],
    challenges:
      "Handling intermittent network latency and rate limits gracefully with retry strategies and fallback error messaging.",
    techStack: [
      "Python",
      "REST APIs",
      "Googletrans",
      "Tkinter"
    ],
    githubLink: "https://github.com/breskella/translator_app",
    demoLink: ""
  },
  {
    id: "task-manager",
    projectTitle: "JSON-Based Task Manager",
    date: "2025",
    category: ["python"],
    imgPath: "Images/13.png",
    description:
      "Productivity tool using atomic JSON file serialization for reliable multi-session data persistence.",
    problemStatement:
      "Users needed an offline task organizer that guarantees data durability without requiring external database setups.",
    fullDescription:
      "A robust task and productivity tracker featuring status tagging, priority queues, and atomic JSON file persistence.",
    responsibilities: [
      "Designed atomic JSON file serialization and deserialization routines for data durability.",
      "Implemented task lifecycle states (pending, in-progress, completed) and priority filtering.",
      "Engineered comprehensive input validation and exception handling against file corruption."
    ],
    challenges:
      "Preventing race conditions and file corruption when saving rapid successive state updates.",
    techStack: [
      "Python",
      "JSON",
      "CLI / GUI",
      "File I/O"
    ],
    githubLink: "https://github.com/breskella/todolist-app",
    demoLink: ""
  },
  {
    id: "crud-management",
    projectTitle: "CRUD Management System",
    date: "2024 - 2025",
    category: ["css"],
    imgPath: "Images/3.jpg",
    description:
      "A comprehensive product management system for handling CRUD operations with real-time total calculations.",
    problemStatement:
      "Small retail stores needed an instantaneous, zero-install product inventory system capable of real-time calculations.",
    fullDescription:
      "A client-side product catalog system with instant live price computing, item search, category filtering, and local data persistence.",
    responsibilities: [
      "Engineered full CRUD workflows with efficient client-side state manipulation.",
      "Implemented real-time pricing, tax, and discount calculation algorithms.",
      "Integrated LocalStorage persistence with instant search and multi-criteria filtering."
    ],
    challenges:
      "Maintaining fast search and filter responsiveness without external database dependencies.",
    techStack: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "LocalStorage"
    ],
    githubLink: "https://github.com/breskella/crud-products-management",
    demoLink: ""
  },
  {
    id: "avatar-landing",
    projectTitle: "Avatar Movie Landing Page",
    date: "2024",
    category: ["css"],
    imgPath: "Images/4.png",
    description:
      "A visually engaging landing page with a modern dark theme layout featuring responsive design.",
    problemStatement:
      "Showcasing high-impact cinematic promotional content with deep colors and fluid CSS keyframe animations.",
    fullDescription:
      "A cinematic web experience showcasing the Avatar franchise with rich visuals, dark aesthetics, and fluid CSS animations.",
    responsibilities: [
      "Built immersive dark-mode visual theme with custom CSS keyframe animations and hover effects.",
      "Created fully responsive layout adaptable across mobile, tablet, and desktop viewports."
    ],
    challenges:
      "Ensuring smooth animation frame rates across mobile devices with complex background layers.",
    techStack: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "Animations"
    ],
    githubLink: "https://github.com/breskella/avatar-landing-page",
    demoLink: ""
  },
  {
    id: "bondi-bootstrap",
    projectTitle: "Bondi Bootstrap Design",
    date: "2024",
    category: ["css"],
    imgPath: "Images/6.png",
    description:
      "A professional landing page built with Bootstrap, featuring a clean service grid and modern layout.",
    problemStatement:
      "Demonstrating clean corporate branding, grid responsiveness, and reusable UI sections with Bootstrap 5.",
    fullDescription:
      "A corporate landing page developed using Bootstrap 5, featuring a clean service grid, portfolio showcase, and responsive navigation.",
    responsibilities: [
      "Crafted responsive grid layouts using Bootstrap 5 utility classes and components.",
      "Engineered cross-browser compatible navigation headers and interactive sections.",
      "Structured semantic HTML5 markup optimized for accessibility."
    ],
    challenges:
      "Customizing Bootstrap default component themes to achieve a distinct, modern identity.",
    techStack: [
      "Bootstrap 5",
      "HTML5",
      "CSS3",
      "Responsive Design"
    ],
    githubLink: "https://github.com/breskella/my-bootstrap",
    demoLink: ""
  },
  {
    id: "contact-form",
    projectTitle: "Professional Contact Form",
    date: "2024",
    category: ["css"],
    imgPath: "Images/5.png",
    description:
      "A clean and modern contact form featuring custom styling, responsive input fields, and submission validation.",
    problemStatement:
      "Providing users with an accessible, aesthetic contact module with instant input feedback.",
    fullDescription:
      "A responsive contact interface featuring client-side field validation, glassmorphic card styling, and interactive input states.",
    responsibilities: [
      "Created client-side form validation with real-time visual feedback and error messaging.",
      "Implemented modern aesthetic with glassmorphic cards and responsive styling."
    ],
    challenges:
      "Ensuring accessible field focus management and clean validation logic across all browsers.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Form Validation"
    ],
    githubLink: "https://github.com/breskella/contact-form",
    demoLink: ""
  },
  {
    id: "apple-landing",
    projectTitle: "Apple Product Landing Page",
    date: "2024",
    category: ["css"],
    imgPath: "Images/1.png",
    description:
      "An interactive landing page featuring dynamic UI theme switching based on product selection.",
    problemStatement:
      "Creating an interactive e-commerce product showcase where page theme accents dynamically adapt to product selection.",
    fullDescription:
      "An interactive product showcase page with dynamic theme color switching based on selected phone finishes.",
    responsibilities: [
      "Engineered dynamic UI theme color switching tied to product model selection.",
      "Developed smooth CSS transitions for product showcases and image transitions."
    ],
    challenges:
      "Coordinating synchronized CSS variable transitions with JavaScript event handlers.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM Manipulation"
    ],
    githubLink: "https://github.com/breskella/phones-page",
    demoLink: ""
  }
];

export const myProjects = projectsData;
export default projectsData;
