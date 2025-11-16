"use client";

import CategoryFilter from '@/app/components/CategoryFilter';
import SkillCard from '@/app/components/SkillCard';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FiMail, FiMapPin, FiMessageSquare, FiPhone, FiSend, FiUser } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");
  const [isSent, setIsSent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: ""
  });
  const form = useRef<HTMLFormElement>(null);

  const texts = ["Insight Mining", "GA4", "Marketing Analytics", "GTM", "Looker Studio", "Data Visualization", "Salesforce"];

  // Certifications data
  const certifications = [
    {
      name: "Marketing Analytics",
      issuer: "EY",
      status: "In Progress",
      date: "Current"
    },
    {
      name: "Project Management",
      issuer: "EY",
      status: "In Progress",
      date: "Current"
    },
    {
      name: "Advanced Google Analytics 4 Implementation with Tag Manager",
      issuer: "Udemy",
      status: "Completed",
      date: "2023"
    },
    {
      name: "Marketing Analytics Mastery",
      issuer: "Udemy",
      status: "Completed",
      date: "2023"
    },
    {
      name: "SEO Training",
      issuer: "Udemy",
      status: "Completed",
      date: "2023"
    },
    {
      name: "Google Ads Display Certification",
      issuer: "Google",
      status: "Completed",
      date: "2022"
    },
    {
      name: "Google Ads Search Certification",
      issuer: "Google",
      status: "Completed",
      date: "2022"
    },
    {
      name: "Google Ads Video Certification",
      issuer: "Google",
      status: "Completed",
      date: "2022"
    },
    {
      name: "Google Digital Marketing & E-commerce Professional Certificate",
      issuer: "Google",
      status: "Completed",
      date: "2022"
    },
    {
      name: "Six Sigma Green Belt",
      issuer: "KPMG",
      status: "Completed",
      date: "2021"
    },
    {
      name: "Become a Product Manager",
      issuer: "Udemy",
      status: "Completed",
      date: "2021"
    }
  ];

  // Awards data
  const awards = [
    {
      title: "High-Five Award",
      description: "Recognition from Google Operations for outstanding performance and contribution to team success",
      date: "2023"
    },
    {
      title: "Star Business Award (Q1 FY'20)",
      description: "Accenture Encore award for excellence in business delivery and client satisfaction",
      date: "2020"
    },
    {
      title: "Unstoppable Award",
      description: "Recognition from multiple clients for consistent high performance and dedication to excellence",
      date: "2022"
    },
    {
      title: "Rockstar Award",
      description: "Recognition from multiple clients for exceptional contribution to projects and innovation",
      date: "2022"
    },
    {
      title: "Best Performance Recognition",
      description: "Recognized for Best Performance in terms of Quality and Productivity in the Team",
      date: "2021"
    },
    {
      title: "55-requests Recognition",
      description: "Appreciation award for processing the 55 requests in a single shift (9hrs)",
      date: "2021"
    },
    {
      title: "Client Appreciations",
      description: "Multiple client appreciations for quality work and timely delivery",
      date: "2020-2022"
    }
  ];

  // Experience data
  const experiences = [
    {
      company: "GUS Education India",
      role: "Senior Manager, Insight Mining",
      period: "Apr 2024 – Present",
      achievements: [
        "Leading the Insight Mining & Marketing Performance Management team to optimize multi-brand digital marketing performance across paid, organic, and social channels",
        "Driving data accuracy and alignment between marketing and sales teams through Salesforce-based performance tracking, ensuring consistent lead attribution and funnel visibility",
        "Collaborating with cross-functional teams (Sales, Marketing, Analytics, and MIS) to identify data discrepancies and implement process improvements for unified reporting",
        "Spearheading dashboard automation and advanced analytics initiatives using Google Looker Studio, enabling actionable insights for decision-making across global education brands",
        "Leading a cross-brand analysis initiative that improved lead-to-application conversion visibility by 30%, supporting senior management with insights for budget allocation and campaign planning"
      ],
      tools: ["GA4", "GTM", "Looker Studio", "Salesforce", "Attribution Modeling"]
    },
    {
      company: "GUS Education India",
      role: "Lead Consultant, Digital Marketing",
      period: "Jan 2023 – Mar 2024",
      achievements: [
        "Led a strategic project to implement a unified measurement framework across brands, improving reporting efficiency by 20% and data accuracy by 25%",
        "Collaborated with marketing teams across regions to enhance data capture, tracking, and conversion reporting using GA4, GTM, and Salesforce",
        "Supported the creation of Google Looker Studio dashboards for leadership reporting, enabling data-driven marketing decisions"
      ],
      tools: ["GA4", "GTM", "Looker Studio", "Salesforce", "Digital Marketing Strategy"]
    },
    {
      company: "Experis IT",
      role: "Digital Analytics Lead",
      period: "Nov 2021 – Jun 2022",
      achievements: [
        "Managed a team of five analytics professionals at client end (GTM/GA4 developers), aligning deliverables with business goals and achieving a 15% improvement in turnaround time",
        "Oversaw tagging implementation for 75+ websites, ensuring comprehensive and accurate marketing data capture",
        "Handled administrative functions including team assessments, rostering, and leave management",
        "Trained and mentored new hires in digital marketing tools and best practices, including pixel/Adtag implementation, Google Ads, BART, GA4, GTM and Google's internal tools"
      ],
      tools: ["GA4", "GTM", "Team Leadership", "Training & Mentoring"]
    },
    {
      company: "Lynk",
      role: "Digital Marketing Engineer",
      period: "May 2020 – Oct 2021",
      achievements: [
        "Designed and executed Go-To-Market (GTM) strategies for SaaS B2B products, driving improvements in MQL and SQL generation",
        "Managed paid, social, and SEO campaigns leading to a 20% traffic increase through on-page and technical optimization",
        "Created KPI frameworks and dashboards to measure marketing effectiveness",
        "Implemented a Go-To-Market strategy for a SaaS B2B product, refining product positioning, value propositions, and managing performance marketing to drive MQLs and SQLs",
        "Optimized digital marketing campaigns across paid channels, achieving improved lead generation and engagement"
      ],
      tools: ["SEO", "SEM", "Digital Marketing Strategy", "KPI Frameworks", "Campaign Optimization"]
    },
    {
      company: "Google Operations Center",
      role: "Senior Associate",
      period: "Jul 2017 – May 2020",
      achievements: [
        "Led a team of 10 associates, ensuring 100% SLA compliance via effective planning, performance tracking, and shift management",
        "Oversaw campaign tracking setup for Display, Search, Smart, and Discovery campaigns, achieving a 30% performance lift for key accounts",
        "Recognized with multiple awards for quality, productivity, and leadership excellence",
        "Set up tracking and analytics for Display, Search, Smart, and Discovery campaigns, leading to a 30% increase in performance and revenue for key accounts",
        "Handled administrative responsibilities such as rostering, resource management, and leave approvals, ensuring smooth day-to-day operations"
      ],
      tools: ["Google Ads", "Campaign Management", "Team Leadership", "Performance Tracking"]
    },
    {
      company: "Accenture Solutions",
      role: "Digital Marketing Associate (Client: Google)",
      period: "Aug 2019 – Aug 2021",
      achievements: [
        "Executed digital marketing campaigns and contributed to optimization of Google Ads performance across multiple accounts",
        "Provided QA and campaign reporting support ensuring alignment with client goals",
        "Led end-to-end digital marketing projects, from campaign execution to reporting and optimization, ensuring timely delivery and alignment with business goals"
      ],
      tools: ["Google Ads", "Campaign Execution", "QA & Reporting"]
    }
  ];

  // Education data
  const educationData = [
    {
      degree: "MBA (IT)",
      institution: "Gondwana University, Gadchiroli",
      grade: "9.07/10",
      period: "Aug 2019 - Aug 2021",
      description: "Specialization in Information Technology"
    },
    {
      degree: "B.E. (CSE)",
      institution: "Gondwana University, Gadchiroli",
      grade: "9.28/10",
      period: "July 2012 - July 2016",
      description: "Computer Science and Engineering"
    }
  ];

  // Skills data
  const [activeFilter, setActiveFilter] = useState('all');
  
  const skills = [
    // Leadership and Management
    { name: 'Team Leadership', category: 'leadership', level: 95, description: 'Leading cross-functional teams to achieve business objectives' },
    { name: 'Resource Planning', category: 'leadership', level: 90, description: 'Strategic allocation of human and technical resources' },
    { name: 'Recruitment & Training', category: 'leadership', level: 92, description: 'Building teams through effective hiring and onboarding processes' },
    { name: 'Performance Management', category: 'leadership', level: 90, description: 'Setting KPIs and evaluating team performance' },
    { name: 'Process Optimization', category: 'leadership', level: 88, description: 'Streamlining workflows for improved efficiency' },
    { name: 'Mentoring', category: 'leadership', level: 93, description: 'Guiding junior team members for professional growth' },
    { name: 'Strategic Planning', category: 'leadership', level: 87, description: 'Developing long-term business strategies' },
    
    // Digital Marketing & Analytics
    { name: 'Google Analytics 4 (GA4)', category: 'analytics', level: 98, description: 'Advanced implementation and analysis of user behavior' },
    { name: 'Google Tag Manager (GTM)', category: 'analytics', level: 96, description: 'Complex tagging strategies for comprehensive tracking' },
    { name: 'Google Looker Studio', category: 'analytics', level: 95, description: 'Creating interactive dashboards for stakeholders' },
    { name: 'Salesforce', category: 'analytics', level: 90, description: 'CRM data analysis and reporting' },
    { name: 'SEO', category: 'marketing', level: 92, description: 'On-page and technical optimization for search engines' },
    { name: 'SEM', category: 'marketing', level: 88, description: 'Paid search campaign management and optimization' },
    { name: 'E-commerce Strategy', category: 'marketing', level: 85, description: 'Driving online sales through digital marketing' },
    { name: 'Display Advertising', category: 'marketing', level: 90, description: 'Managing banner and rich media ad campaigns' },
    { name: 'Pixel/Tag Implementation', category: 'marketing', level: 94, description: 'Tracking user interactions across platforms' },
    { name: 'Third-party Ads Serving', category: 'marketing', level: 87, description: 'Managing ad serving technologies like DCM' },
    { name: 'Marketing Analytics', category: 'analytics', level: 96, description: 'Measuring ROI and campaign effectiveness' },
    { name: 'Data Visualization', category: 'analytics', level: 93, description: 'Presenting complex data in understandable formats' },
    { name: 'Attribution Modeling', category: 'analytics', level: 91, description: 'Understanding customer journey touchpoints' },
    { name: 'Customer Journey Analytics', category: 'analytics', level: 92, description: 'Mapping and optimizing user pathways' },
    
    // Web Technologies
    { name: 'HTML', category: 'webtech', level: 85, description: 'Semantic markup for accessible web experiences' },
    { name: 'CSS', category: 'webtech', level: 82, description: 'Responsive design and modern layout techniques' },
    { name: 'JavaScript (Basic)', category: 'webtech', level: 75, description: 'Client-side scripting for interactive elements' },
    { name: 'Webflow', category: 'webtech', level: 80, description: 'Visual web design and development platform' },
    { name: 'WordPress', category: 'webtech', level: 78, description: 'Content management system customization' },
    { name: 'Strapi (CMS)', category: 'webtech', level: 75, description: 'Headless CMS for flexible content delivery' },
    
    // Tools
    { name: 'Google Search Console', category: 'tools', level: 90, description: 'Monitoring and maintaining site health' },
    { name: 'Google Marketing Suite', category: 'tools', level: 88, description: 'Enterprise advertising and analytics platform' },
    { name: 'Microsoft Office', category: 'tools', level: 95, description: 'Advanced Excel, PowerPoint, and data analysis' },
    { name: 'Tableau', category: 'tools', level: 82, description: 'Business intelligence and data visualization' },
    { name: 'BigQuery', category: 'tools', level: 85, description: 'Large-scale data analysis and querying' }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'leadership', name: 'Leadership', description: 'Team management and strategic planning expertise' },
    { id: 'analytics', name: 'Analytics', description: 'Data analysis and visualization tools proficiency' },
    { id: 'marketing', name: 'Marketing', description: 'Digital marketing strategies and campaign management' },
    { id: 'webtech', name: 'Web Tech', description: 'Frontend development and web technologies' },
    { id: 'tools', name: 'Tools', description: 'Specialized software and platform proficiencies' }
  ];

  const skillLevels = [
    { name: 'Google Analytics 4 (GA4)', level: 98, description: 'Expert in implementation, configuration, and advanced analysis' },
    { name: 'Google Tag Manager (GTM)', level: 96, description: 'Proficient in complex tagging strategies and troubleshooting' },
    { name: 'Google Looker Studio', level: 95, description: 'Skilled in creating interactive dashboards and reports' },
    { name: 'Salesforce', level: 90, description: 'Competent in CRM data analysis and reporting' },
    { name: 'SEO', level: 92, description: 'Experienced in on-page optimization and technical SEO' },
    { name: 'Google Ads', level: 88, description: 'Knowledgeable in SEM campaign management' }
  ];

  // Projects data
  const projects = [
    {
      title: "Cross-Brand Measurement Framework",
      description: "Implemented unified measurement framework across 5 education brands, improving lead-to-application conversion visibility by 30%",
      tools: ["GA4", "GTM", "BigQuery"],
      link: "#"
    },
    {
      title: "GA4 Implementation & Migration",
      description: "Led enterprise-wide GA4 implementation for Fortune 500 client, reducing data discrepancies by 60%",
      tools: ["GA4", "Data Layer", "Looker Studio"],
      link: "#"
    },
    {
      title: "Salesforce Integration Dashboard",
      description: "Created executive dashboard connecting marketing touchpoints to CRM outcomes, increasing marketing ROI visibility",
      tools: ["Salesforce", "Looker Studio", "API Integration"],
      link: "#"
    }
  ];

  // Expertise data
  const expertiseAreas = [
    {
      title: "Leadership & Strategy",
      description: "Experienced in leading cross-functional teams and developing data-driven strategies that align with business objectives.",
      skills: ["Team Leadership", "Strategic Planning", "Mentoring", "Project Management"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Digital Analytics",
      description: "Expertise in implementing and optimizing analytics solutions to drive measurable business outcomes.",
      skills: ["GA4", "GTM", "Looker Studio", "BigQuery", "Attribution Modeling"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Marketing Technology",
      description: "Deep understanding of marketing technology stack and how to leverage it for optimal performance.",
      skills: ["SEO/SEM", "Salesforce", "Marketing Automation", "CRM Integration"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Data Visualization",
      description: "Creating compelling visual narratives that transform complex data into actionable insights.",
      skills: ["Looker Studio", "Tableau", "Data Storytelling", "Dashboard Design"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const tools = [
    { name: "Google Analytics 4", category: "Analytics" },
    { name: "Google Tag Manager", category: "Analytics" },
    { name: "Looker Studio", category: "Visualization" },
    { name: "Salesforce", category: "CRM" },
    { name: "BigQuery", category: "Data Warehouse" },
    { name: "Tableau", category: "Visualization" },
    { name: "Google Ads", category: "Advertising" },
    { name: "Facebook Ads", category: "Advertising" },
    { name: "SEO Tools", category: "Optimization" },
    { name: "Hotjar", category: "UX Analytics" },
    { name: "Adobe Analytics", category: "Analytics" },
    { name: "Mixpanel", category: "Analytics" }
  ];

  // Get unique icon for each tool
  const getToolIcon = (toolName: string) => {
    switch (toolName) {
      case "Google Analytics 4":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case "Google Tag Manager":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
        );
      case "Looker Studio":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case "Salesforce":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "BigQuery":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case "Tableau":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "Google Ads":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        );
      case "Facebook Ads":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
      case "SEO Tools":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case "Hotjar":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case "Adobe Analytics":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case "Mixpanel":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
    }
  };

  useEffect(() => {
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        // Remove characters
        setTypedText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        // Add characters
        setTypedText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
      
      // Check if word is complete
      if (!isDeleting && charIndex === currentText.length) {
        // Word is complete, pause before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        // Word is deleted, move to next word
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast.error("Please fill in all required fields", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    if (!form.current) return;

    // Use environment variables for EmailJS configuration
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_e8mupry";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_uoy59yi";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "1XDsoCkEZO48q7ekK";

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        () => {
          setIsSent(true);
          if (form.current) {
            form.current.reset();
          }
          setFormData({
            user_email: "",
            user_name: "",
            subject: "",
            message: ""
          });
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Get category description for active filter
  const getCategoryDescription = () => {
    const category = categories.find(cat => cat.id === activeFilter);
    return category ? category.description : '';
  };

  return (
    <main className="min-h-screen">
      <ToastContainer />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            className="absolute w-96 h-96 bg-primary-light rounded-full filter blur-3xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          {/* Additional floating shapes for more depth */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          {/* Additional decorative elements */}
          <motion.div 
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-accent/30 rounded-full filter blur-2xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-primary/30 rounded-full filter blur-2xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              className="flex justify-center order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-primary to-purple-700 p-2 pulse-glow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden glow">
                    <Image
                      src="/images/Gemini_Generated_Image_irkmkvirkmkvirkm.png"
                      alt="Diksha Anand"
                      width={384}
                      height={384}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg float-parallax"
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white shadow-lg float-parallax"
                  animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.div>
                
                {/* Additional floating elements */}
                <motion.div 
                  className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg float-parallax"
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/3 -left-8 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-lg float-parallax"
                  animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                
                {/* Additional decorative elements */}
                <motion.div 
                  className="absolute top-1/4 -left-12 w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-white shadow-lg float-parallax"
                  animate={{ y: [0, -8, 0], x: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/4 -right-12 w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center text-white shadow-lg float-parallax"
                  animate={{ y: [0, 8, 0], x: [0, 3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 1.5 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Text Content */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span className="block text-on-light-bg text-gradient">DIKSHA</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-700 animate-pulse-slow">ANAND</span>
              </motion.h1>
              
              <motion.div 
                className="text-xl text-gray-700 mb-8 h-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <span className="text-primary font-medium">{typedText}</span>
                <span className="ml-1 inline-block w-1 h-8 bg-primary animate-pulse"></span>
              </motion.div>
              
              <motion.p 
                className="text-lg text-on-light-bg mb-10 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                Senior Manager, Insights Mining — Driving data-backed digital marketing decisions with GA4, GTM, Looker Studio & Salesforce.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              >
                <motion.a 
                  href="https://github.com/dikshaanand02/Portfolio/blob/main/public/Resume/Diksha%20Anand%20-%20COE%20Lead%20IM%20Resume.pdf" 
                  className="btn-primary px-8 py-4 rounded-xl font-bold text-text-dark bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(176, 101, 155, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Resume
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="px-8 py-4 rounded-xl font-bold text-primary border-2 border-primary hover:bg-primary hover:text-text-dark transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "var(--text-dark)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-purple-400/5 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, delay: 1 }}
          />
          {/* Additional decorative elements */}
          <motion.div 
            className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl"
            animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 14, repeat: Infinity, delay: 1.5 }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="section-title">About Me</h2>
            <div className="section-subtitle mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h2 
                className="text-3xl font-bold text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Professional Summary
              </motion.h2>
              <motion.p 
                className="text-lg text-on-light-bg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I build measurement systems and dashboards that make digital marketing decisions obvious — GA4, GTM, Looker Studio & Salesforce. With over a decade of experience in digital analytics and insights mining, I specialize in creating data-driven frameworks that empower marketing teams to make informed decisions.
              </motion.p>
              <motion.p 
                className="text-lg text-on-light-bg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Currently leading insights mining initiatives at GUS Education India, I focus on optimizing customer journey analytics, attribution modeling, and performance marketing measurement. My expertise spans across implementing enterprise-grade analytics solutions and mentoring cross-functional teams.
              </motion.p>
              <motion.p 
                className="text-lg text-on-light-bg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I'm passionate about transforming complex data into actionable insights that drive business growth and improve customer experiences. My approach combines technical expertise with strategic thinking to deliver measurable results.
              </motion.p>
            </motion.div>
            
            <motion.div
              className="card p-8 card-hover glow"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-primary mb-6 text-gradient"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Key Highlights
              </motion.h2>
              <ul className="space-y-4 mb-8">
                {[
                  { text: "8+ years of experience in digital analytics and insights mining", highlight: "8+ years" },
                  { text: "Expertise in GA4, GTM, Looker Studio, Salesforce and other analytics tools", highlight: "GA4, GTM, Looker Studio, Salesforce" },
                  { text: "Proven track record of 15% improvement in project turnaround time", highlight: "15% improvement" },
                  { text: "Implemented analytics solutions across 75+ websites", highlight: "75+ websites" },
                  { text: "Achieved 30% performance lift through data-driven optimizations", highlight: "30% performance lift" }
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1"
                      whileHover={{ scale: 1.3, rotate: 15 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <span className="text-gray-900 group-hover:text-primary transition-colors duration-300">
                      <strong className="text-primary font-bold">{item.highlight}</strong> {item.text.replace(item.highlight, '')}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.a 
                href="https://github.com/dikshaanand02/Portfolio/blob/main/public/Resume/Diksha%20Anand%20-%20COE%20Lead%20IM%20Resume.pdf" 
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Recognition Section (Certifications & Awards) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mb-20 relative"
          >
            {/* Decorative element */}
            <motion.div 
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-primary/10 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            <motion.h2 
              className="text-3xl font-bold text-primary mb-8 text-center relative z-10 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Recognition
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Decorative element */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-primary/10 blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                <motion.h3 
                  className="text-2xl font-bold text-primary mb-6 text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Certifications
                </motion.h3>
                <div className="space-y-4 relative z-10">
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={index} 
                      className="card p-6 flex items-center card-hover glow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4 
                          className="font-bold text-primary text-lg"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        >
                          {cert.name}
                        </motion.h4>
                        <motion.p 
                          className="text-gray-900 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        >
                          {cert.issuer} • {cert.date}
                        </motion.p>
                      </div>
                      <motion.div 
                        className="ml-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      >
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          cert.status === "Completed" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {cert.status}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Awards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Decorative element */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-purple-400/10 blur-xl"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 9, repeat: Infinity, delay: 1 }}
                />
                
                <motion.h3 
                  className="text-2xl font-bold text-primary mb-6 text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Awards & Recognition
                </motion.h3>
                <div className="space-y-4 relative z-10">
                  {awards.map((award, index) => (
                    <motion.div 
                      key={index} 
                      className="card p-6 card-hover glow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <div className="flex items-start">
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"
                          whileHover={{ scale: 1.2, rotate: -10 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </motion.div>
                        <div>
                          <motion.h4 
                            className="font-bold text-primary text-lg"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                          >
                            {award.title}
                          </motion.h4>
                          <motion.p 
                            className="text-gray-900 text-sm mb-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                          >
                            {award.date}
                          </motion.p>
                          <motion.p 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                          >
                            {award.description}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="journey" className="py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, 25, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 16, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-400/5 blur-3xl"
            animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 18, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            <motion.h2 
              className="section-title text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Professional Journey
            </motion.h2>
            <div className="section-subtitle mx-auto"></div>
          </motion.div>

          {/* Tab Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-10 relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-8 left-1/4 w-16 h-16 rounded-full bg-primary/20 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-8 right-1/4 w-16 h-16 rounded-full bg-purple-400/20 blur-xl"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />
            
            <div className="relative inline-flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg w-full max-w-md z-10">
              {/* Animated background for active tab */}
              {activeTab === "experience" ? (
                <motion.div
                  className="absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[48%] rounded-lg bg-gradient-to-r from-primary to-purple-700"
                  layoutId="tabIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : (
                <motion.div
                  className="absolute top-1 right-1 h-[calc(100%-0.5rem)] w-[48%] rounded-lg bg-gradient-to-r from-primary to-purple-700"
                  layoutId="tabIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <motion.button
                onClick={() => setActiveTab("experience")}
                className={`relative z-10 px-4 py-3 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 w-1/2 ${
                  activeTab === "experience" 
                    ? "text-white shadow-lg" 
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTab("education")}
                className={`relative z-10 px-4 py-3 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 w-1/2 ${
                  activeTab === "education" 
                    ? "text-white shadow-lg" 
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Education
              </motion.button>
            </div>
          </motion.div>

          {/* Content based on active tab */}
          <div className="transition-all duration-300">
            {activeTab === "experience" ? (
              // Experience Content
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  {/* Timeline */}
                  <div className="absolute left-4 sm:left-6 top-0 w-1 bg-gradient-to-b from-primary via-purple-400 to-primary h-full rounded-full"></div>

                  {experiences.map((exp, index) => (
                    <motion.div
                      key={`${exp.company}-${exp.role}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex mb-10"
                    >
                      {/* Timeline circle */}
                      <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary border-4 border-gray-900 flex items-center justify-center z-10 mt-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                      </div>

                      {/* Card */}
                      <div className="ml-4 sm:ml-6 w-full">
                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md shadow-lg glow">
                          {/* Top row */}
                          <div className="text-center sm:text-left">
                            <motion.h3 
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-lg sm:text-xl font-bold text-white text-gradient"
                            >
                              {exp.role}
                            </motion.h3>
                            <motion.h4 
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              className="text-base sm:text-lg text-primary mt-1 font-medium"
                            >
                              {exp.company}
                            </motion.h4>
                            <motion.p 
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="text-gray-100 mt-2 text-sm sm:text-base"
                            >
                              {exp.period}
                            </motion.p>
                          </div>

                          {/* Details */}
                          <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-4"
                          >
                            <ul className="space-y-3 mt-3">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li 
                                  key={i} 
                                  className="flex items-start group"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                                  whileHover={{ x: 5 }}
                                >
                                  <motion.div 
                                    className="text-primary mr-2 flex-shrink-0"
                                    whileHover={{ scale: 1.3 }}
                                  >
                                    •
                                  </motion.div>
                                  <span className="text-gray-50 text-sm sm:text-base group-hover:text-primary transition-colors duration-300">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                          
                          {/* Skills */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-4"
                          >
                            <h5 className="font-bold text-white text-sm sm:text-base mb-2">Skills:</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.tools.map((tool, toolIndex) => (
                                <motion.span
                                  key={toolIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: 0.7 + toolIndex * 0.05 }}
                                  className="bg-gray-800/50 text-gray-100 px-2 py-1 text-xs sm:text-sm rounded-full border border-gray-600"
                                >
                                  {tool}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Education Content
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  {/* Timeline */}
                  <div className="absolute left-4 sm:left-6 top-0 w-1 bg-gradient-to-b from-primary via-purple-400 to-primary h-full rounded-full"></div>

                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex mb-10"
                    >
                      {/* Timeline circle */}
                      <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary border-4 border-gray-900 flex items-center justify-center z-10 mt-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                      </div>

                      {/* Card */}
                      <div className="ml-4 sm:ml-6 w-full">
                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md shadow-lg">
                          {/* Top row */}
                          <div className="text-center sm:text-left">
                            <motion.h3 
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-lg sm:text-xl font-bold text-white"
                            >
                              {edu.institution}
                            </motion.h3>
                            <motion.h4 
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              className="text-base sm:text-lg text-primary mt-1"
                            >
                              {edu.degree}
                            </motion.h4>
                            <motion.p 
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="text-gray-100 mt-2 text-sm sm:text-base"
                            >
                              {edu.period}
                            </motion.p>
                          </div>

                          {/* Details */}
                          <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-4"
                          >
                            <p className="mt-3 text-gray-50 text-sm sm:text-base leading-relaxed">
                              {edu.description}
                            </p>
                            <div className="flex justify-center mt-4">
                              <span className="text-accent font-bold text-lg">{edu.grade}</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 22, repeat: Infinity, delay: 1 }}
          />
          {/* Additional decorative elements */}
          <motion.div 
            className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 18, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 20, repeat: Infinity, delay: 1.5 }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-8 left-1/3 w-20 h-20 rounded-full bg-primary/20 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-8 right-1/3 w-20 h-20 rounded-full bg-purple-400/20 blur-xl"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />
            
            <motion.h2 
              className="section-title text-gradient relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Skills & Proficiency
            </motion.h2>
            <div className="section-subtitle mx-auto"></div>
            <motion.p 
              className="text-white mt-6 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My specialized skills and knowledge areas that drive value in digital analytics and marketing.
            </motion.p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Category Filters */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CategoryFilter 
                category="All"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <CategoryFilter 
                category="Analytics"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <CategoryFilter 
                category="Marketing"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </motion.div>

            {/* Skills Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>

            <motion.p 
              className="text-white mt-6 text-lg max-w-3xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-400/5 blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 27, repeat: Infinity, delay: 1.5 }}
          />
          {/* Additional decorative elements */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 22, repeat: Infinity, delay: 0.8 }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 24, repeat: Infinity, delay: 1.2 }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-8 left-1/4 w-20 h-20 rounded-full bg-primary/20 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-8 right-1/4 w-20 h-20 rounded-full bg-purple-400/20 blur-xl"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />
            
            <motion.h2 
              className="section-title text-gradient relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Projects
            </motion.h2>
            <div className="section-subtitle mx-auto"></div>
            <motion.p 
              className="text-white mt-6 text-lg max-w-3xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Explore my featured projects showcasing expertise in digital analytics, data visualization, and marketing technology.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="card card-hover glow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -20, scale: 1.03 }}
              >
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-on-light-bg mb-3 text-gradient"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-700 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    {project.tools.map((tool, toolIndex) => (
                      <motion.span 
                        key={tool} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.8 + index * 0.1 + toolIndex * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "var(--text-dark)" }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, 25, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-400/5 blur-3xl"
            animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 22, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Core Expertise</h2>
            <div className="section-subtitle mx-auto"></div>
            <motion.p 
              className="text-white mt-6 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My specialized skills and knowledge areas that drive value in digital analytics and marketing.
            </motion.p>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="card p-8 text-center h-full card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -15 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {area.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {area.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-700 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  {area.description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap justify-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {area.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skill} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "var(--text-dark)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20 relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-8 left-1/3 w-24 h-24 rounded-full bg-primary/10 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-8 right-1/3 w-24 h-24 rounded-full bg-purple-400/10 blur-xl"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 9, repeat: Infinity, delay: 1 }}
            />
            
            <motion.h2 
              className="text-3xl font-bold text-primary mb-8 text-center relative z-10 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Tools & Technologies
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="card p-6 flex items-center group card-hover glow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  whileHover={{ y: -12, scale: 1.05 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg pulse-glow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {getToolIcon(tool.name)}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="font-bold text-xl text-gray-800 mb-1"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                    >
                      {tool.name}
                    </motion.h3>
                    <motion.p 
                      className="text-primary font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.1 + index * 0.05 }}
                    >
                      {tool.category}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-primary mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              My Approach
            </motion.h2>
            <motion.div 
              className="max-w-4xl mx-auto card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Measure", 
                    description: "Implement robust measurement frameworks to capture meaningful data",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    )
                  },
                  { 
                    title: "Analyze", 
                    description: "Transform data into actionable insights through advanced analytics",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )
                  },
                  { 
                    title: "Optimize", 
                    description: "Drive performance improvements through data-driven optimizations",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={step.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                    >
                      {step.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-700"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 22, repeat: Infinity, delay: 1 }}
          />
          {/* Additional decorative elements */}
          <motion.div 
            className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
            animate={{ x: [0, 25, 0], y: [0, -25, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 18, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 20, repeat: Infinity, delay: 1.5 }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-8 left-1/4 w-20 h-20 rounded-full bg-primary/20 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-8 right-1/4 w-20 h-20 rounded-full bg-purple-400/20 blur-xl"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />
            
            <motion.h2 
              className="section-title text-gradient relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get In Touch
            </motion.h2>
            <div className="section-subtitle mx-auto"></div>
            <motion.p 
              className="text-white mt-6 text-lg max-w-3xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-12 grid md:grid-cols-2 gap-8 items-stretch w-full max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl card-hover glow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center pulse-glow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FiSend className="w-5 h-5 text-purple-600" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-on-light-bg text-gradient"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  Send a Message
                </motion.h3>
              </div>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Name Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  whileHover={{ y: -2 }}
                >
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <FiUser size={20} />
                    </div>
                    <input
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl pl-10 px-4 py-3 bg-gray-50 border-2 border-gray-200 transition-all duration-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-sm hover:border-purple-300"
                      required
                    />
                    {formData.user_name && (
                      <motion.div 
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <FiMail size={20} />
                    </div>
                    <input
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      type="email"
                      className="w-full rounded-xl pl-10 px-4 py-3 bg-gray-50 border-2 border-gray-200 transition-all duration-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-sm"
                      required
                    />
                    {formData.user_email && formData.user_email.includes('@') && (
                      <motion.div 
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Subject Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <FiMessageSquare size={20} />
                    </div>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      className="w-full rounded-xl pl-10 px-4 py-3 bg-gray-50 border-2 border-gray-200 transition-all duration-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-sm"
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-3 flex items-start pointer-events-none text-gray-400">
                      <FiMessageSquare size={20} />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your requirements, questions, or feedback..."
                      rows={6}
                      className="w-full rounded-xl pl-10 px-4 py-3 bg-gray-50 border-2 border-gray-200 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none focus:outline-none focus:ring-0 focus:border-purple-500 shadow-sm"
                      required
                    />
                    {formData.message && formData.message.length > 10 && (
                      <motion.div 
                        className="absolute right-3 top-3"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </motion.div>
                    )}
                  </div>
                  <motion.div 
                    className="mt-1 text-xs text-gray-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1 }}
                  >
                    {formData.message.length}/500 characters
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={!formData.user_name || !formData.user_email || !formData.message}
                  className="w-full relative overflow-hidden rounded-xl px-6 py-4 font-bold text-gray-900 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(147, 51, 234, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  <FiSend className="w-5 h-5" />
                  <span>Send Message</span>
                  {!formData.user_name || !formData.user_email || !formData.message ? (
                    <span className="text-xs ml-2 text-purple-100">(Please fill all required fields)</span>
                  ) : null}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl card-hover glow"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center pulse-glow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <FiPhone className="w-5 h-5 text-purple-600" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-on-light-bg text-gradient"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  Reach Me
                </motion.h3>
              </div>
              
              <motion.p 
                className="text-sm text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                I usually respond within 24 hours. Feel free to reach out through any of these channels.
              </motion.p>

              <div className="space-y-4 mb-8">
                <motion.a
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  href="mailto:diksha.g.anand@guseducationindia.com"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shadow-sm pulse-glow"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FiMail className="w-5 h-5 text-purple-600" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-on-light-bg">Email Me</div>
                    <div className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                      diksha.g.anand@guseducationindia.com
                    </div>
                  </div>
                </motion.a>
                
                <motion.a
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  href="tel:+918698390756"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shadow-sm pulse-glow"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FiPhone className="w-5 h-5 text-purple-600" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-on-light-bg">Call Me</div>
                    <div className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                      (+91) 869-839-0756
                    </div>
                  </div>
                </motion.a>
                
                <motion.a
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/search/?api=1&query=Hyderabad,+Telangana,+India"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shadow-sm pulse-glow"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FiMapPin className="w-5 h-5 text-purple-600" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-on-light-bg">Location</div>
                    <div className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                      Hyderabad, Telangana, India
                    </div>
                  </div>
                </motion.a>
              </div>

              <motion.div 
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div>
                  <motion.div 
                    className="font-bold text-purple-700 mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.3 }}
                  >
                    Let's Connect
                  </motion.div>
                  <motion.p 
                    className="text-sm text-gray-700 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.4 }}
                  >
                    I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and innovation.
                  </motion.p>
                </div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="mt-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-4 left-1/3 w-12 h-12 rounded-full bg-primary/20 blur-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -top-4 right-1/3 w-12 h-12 rounded-full bg-purple-400/20 blur-lg"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                />
                
                <motion.p 
                  className="text-gray-700 mb-4 text-center relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                >
                  Connect with me on
                </motion.p>
                <motion.div 
                  className="flex justify-center gap-6 relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.5 }}
                >
                  <motion.a 
                    href="https://www.linkedin.com/in/diksha-anand-digital-analytics/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-purple-600 transition-colors duration-300"
                    whileHover={{ y: -8, scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="bg-gray-100 p-3 rounded-full border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all duration-300 pulse-glow">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

