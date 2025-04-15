// Sample data for the career courses
const careerData = [
    {
        id: 1,
        title: "Automotive Engineering",
        category: "automotive",
        description: "Learn the fundamentals of automotive design, manufacturing, and maintenance.",
        difficulty: "intermediate",
        duration: "6 months",
        roadmap: [
            {
                step: 1,
                title: "Mechanical Fundamentals",
                description: "Build a strong foundation in mechanical engineering principles, including dynamics, thermodynamics, and materials science.",
                resources: ["Introduction to Mechanical Engineering", "Materials Science for Automotive Applications", "Thermodynamics and Heat Transfer"]
            },
            {
                step: 2,
                title: "Vehicle Systems",
                description: "Study automotive systems including powertrains, suspension, steering, and braking systems.",
                resources: ["Automotive Powertrain Systems", "Vehicle Dynamics and Control", "Brake and Suspension Design"]
            },
            {
                step: 3,
                title: "Electric and Hybrid Vehicles",
                description: "Explore electric vehicle technology, battery systems, and hybrid powertrains.",
                resources: ["Electric Vehicle Systems", "Battery Technology and Management", "Hybrid Powertrain Design"]
            },
            {
                step: 4,
                title: "Advanced Manufacturing",
                description: "Learn modern automotive manufacturing techniques and quality control processes.",
                resources: ["Automotive Manufacturing Processes", "Quality Control in Vehicle Production", "Lean Manufacturing for Automotive"]
            },
            {
                step: 5,
                title: "Industry Experience",
                description: "Complete an internship or project with automotive manufacturers or suppliers.",
                resources: ["Industry Placement Services", "Automotive Design Projects", "Manufacturing Internships"]
            }
        ]
    },
    {
        id: 2,
        title: "Chemical Engineering",
        category: "chemicals",
        description: "Master the principles of chemical processes, manufacturing, and product development.",
        difficulty: "advanced",
        duration: "12 months",
        roadmap: [
            {
                step: 1,
                title: "Chemical Engineering Fundamentals",
                description: "Study the core principles of chemical engineering, including thermodynamics, kinetics, and transport phenomena.",
                resources: ["Chemical Engineering Principles", "Process Thermodynamics", "Transport Phenomena"]
            },
            {
                step: 2,
                title: "Process Design",
                description: "Learn to design chemical processes and equipment for industrial applications.",
                resources: ["Chemical Process Design", "Unit Operations", "Process Control Systems"]
            },
            {
                step: 3,
                title: "Specialty Chemical Development",
                description: "Explore the development and manufacturing of specialty chemicals and products.",
                resources: ["Specialty Chemical Production", "Formulation Science", "Chemical Product Design"]
            },
            {
                step: 4,
                title: "Safety and Environmental Compliance",
                description: "Master safety protocols, environmental regulations, and sustainable practices in chemical engineering.",
                resources: ["Chemical Process Safety", "Environmental Regulations", "Sustainable Chemical Engineering"]
            },
            {
                step: 5,
                title: "Industry Application",
                description: "Apply your knowledge through advanced projects or internships in the chemical industry.",
                resources: ["Industry Partnerships", "Chemical Plant Design Projects", "Research and Development Experience"]
            }
        ]
    },
    {
        id: 3,
        title: "Computer Hardware Engineering",
        category: "computer_hardware",
        description: "Develop expertise in designing and developing computer systems and components.",
        difficulty: "advanced",
        duration: "9 months",
        roadmap: [
            {
                step: 1,
                title: "Digital Logic Design",
                description: "Learn the fundamentals of digital circuits, logic design, and hardware description languages.",
                resources: ["Digital Circuit Design", "Logic Systems", "VHDL and Verilog"]
            },
            {
                step: 2,
                title: "Computer Architecture",
                description: "Study processor design, memory systems, and computer organization principles.",
                resources: ["Computer Organization", "Processor Architecture", "Memory System Design"]
            },
            {
                step: 3,
                title: "Embedded Systems",
                description: "Develop skills in designing and programming embedded systems and microcontrollers.",
                resources: ["Embedded Systems Programming", "Microcontroller Design", "Real-time Operating Systems"]
            },
            {
                step: 4,
                title: "Hardware Verification",
                description: "Master testing methodologies and verification techniques for hardware designs.",
                resources: ["Hardware Testing Methods", "Verification Techniques", "FPGA Prototyping"]
            },
            {
                step: 5,
                title: "Industry Project",
                description: "Complete a capstone project in computer hardware design or optimization.",
                resources: ["Hardware Design Projects", "Industry Mentorship", "Prototype Development"]
            }
        ]
    },
    {
        id: 4,
        title: "Software Development",
        category: "computer_software",
        description: "Master modern software development techniques, languages, and frameworks.",
        difficulty: "intermediate",
        duration: "8 months",
        roadmap: [
            {
                step: 1,
                title: "Programming Fundamentals",
                description: "Build strong foundations in programming logic, data structures, and algorithms.",
                resources: ["Introduction to Programming", "Data Structures and Algorithms", "Problem Solving Techniques"]
            },
            {
                step: 2,
                title: "Web Development",
                description: "Learn frontend and backend technologies for creating web applications.",
                resources: ["Frontend Development (HTML, CSS, JavaScript)", "Backend Technologies", "Database Systems"]
            },
            {
                step: 3,
                title: "Mobile Development",
                description: "Explore mobile app development for iOS and Android platforms.",
                resources: ["Mobile App Architecture", "iOS/Android Development", "Cross-platform Frameworks"]
            },
            {
                step: 4,
                title: "Software Engineering Practices",
                description: "Master software design patterns, testing methodologies, and development workflows.",
                resources: ["Software Architecture", "Test-Driven Development", "CI/CD Pipelines"]
            },
            {
                step: 5,
                title: "Capstone Project",
                description: "Build a complete software application demonstrating your skills and knowledge.",
                resources: ["Project Management", "System Design", "Deployment Strategies"]
            }
        ]
    },
    {
        id: 5,
        title: "Education Leadership",
        category: "education_management",
        description: "Develop the skills needed to lead educational institutions and programs effectively.",
        difficulty: "intermediate",
        duration: "10 months",
        roadmap: [
            {
                step: 1,
                title: "Educational Theory and Practice",
                description: "Study modern educational theories, pedagogical approaches, and learning science.",
                resources: ["Contemporary Educational Theories", "Evidence-Based Teaching Methods", "Learning Psychology"]
            },
            {
                step: 2,
                title: "Leadership and Management",
                description: "Develop leadership skills specific to educational contexts and institutions.",
                resources: ["Educational Leadership Principles", "School Management", "Change Management in Education"]
            },
            {
                step: 3,
                title: "Curriculum Development",
                description: "Learn to design, implement, and evaluate effective educational curricula.",
                resources: ["Curriculum Design Principles", "Assessment Strategies", "Educational Program Evaluation"]
            },
            {
                step: 4,
                title: "Educational Policy and Administration",
                description: "Understand education policies, regulations, and administrative best practices.",
                resources: ["Education Policy Analysis", "School Law", "Administrative Leadership"]
            },
            {
                step: 5,
                title: "Practical Leadership Experience",
                description: "Apply leadership skills through a supervised practicum or educational leadership project.",
                resources: ["Leadership Practicum", "Action Research", "Educational Innovation Projects"]
            }
        ]
    },
    {
        id: 6,
        title: "Entertainment Production",
        category: "entertainment",
        description: "Learn to produce, manage, and market entertainment content across various media.",
        difficulty: "intermediate",
        duration: "7 months",
        roadmap: [
            {
                step: 1,
                title: "Entertainment Industry Fundamentals",
                description: "Understand the structure, business models, and key players in the entertainment industry.",
                resources: ["Introduction to Entertainment Business", "Media Industry Analysis", "Content Distribution Systems"]
            },
            {
                step: 2,
                title: "Content Development",
                description: "Learn techniques for developing compelling stories, scripts, and entertainment concepts.",
                resources: ["Storytelling Techniques", "Script Development", "Content Ideation Methods"]
            },
            {
                step: 3,
                title: "Production Fundamentals",
                description: "Master the basics of producing content for film, television, gaming, or digital platforms.",
                resources: ["Production Planning", "Budget Management", "Production Technologies"]
            },
            {
                step: 4,
                title: "Marketing and Distribution",
                description: "Explore strategies for marketing, promoting, and distributing entertainment content.",
                resources: ["Entertainment Marketing", "Audience Development", "Distribution Channels"]
            },
            {
                step: 5,
                title: "Industry Project",
                description: "Develop and pitch an original entertainment project or production plan.",
                resources: ["Project Development", "Pitch Preparation", "Industry Networking"]
            }
        ]
    },
    {
        id: 7,
        title: "Financial Analysis",
        category: "financial_services",
        description: "Develop expertise in financial analysis, investment strategies, and market research.",
        difficulty: "advanced",
        duration: "11 months",
        roadmap: [
            {
                step: 1,
                title: "Financial Accounting and Reporting",
                description: "Master the principles of financial accounting, reporting standards, and financial statement analysis.",
                resources: ["Financial Accounting Principles", "Financial Statement Analysis", "Accounting Standards"]
            },
            {
                step: 2,
                title: "Investment Analysis",
                description: "Learn techniques for evaluating investments, securities, and portfolio management.",
                resources: ["Security Analysis", "Investment Valuation Methods", "Portfolio Theory"]
            },
            {
                step: 3,
                title: "Financial Modeling",
                description: "Develop skills in building financial models for forecasting, valuation, and decision-making.",
                resources: ["Financial Modeling Essentials", "Excel for Financial Analysis", "Valuation Models"]
            },
            {
                step: 4,
                title: "Risk Management",
                description: "Understand principles of risk assessment, mitigation strategies, and compliance.",
                resources: ["Risk Assessment Techniques", "Financial Risk Management", "Regulatory Compliance"]
            },
            {
                step: 5,
                title: "Applied Financial Analysis",
                description: "Complete a comprehensive financial analysis project applying advanced techniques.",
                resources: ["Case Studies in Financial Analysis", "Industry Research Methods", "Financial Reporting Projects"]
            }
        ]
    },
    {
        id: 8,
        title: "Academic Research",
        category: "higher_education",
        description: "Develop skills for conducting rigorous academic research and scholarly publishing.",
        difficulty: "advanced",
        duration: "12 months",
        roadmap: [
            {
                step: 1,
                title: "Research Methodologies",
                description: "Study qualitative and quantitative research methods applicable to your field.",
                resources: ["Research Design", "Methods in Academic Inquiry", "Data Collection Techniques"]
            },
            {
                step: 2,
                title: "Data Analysis",
                description: "Learn statistical analysis and data interpretation techniques for academic research.",
                resources: ["Statistical Analysis for Researchers", "Qualitative Data Analysis", "Research Software Tools"]
            },
            {
                step: 3,
                title: "Academic Writing",
                description: "Develop skills in scholarly writing, citation, and publishing standards.",
                resources: ["Academic Writing Principles", "Citation and Reference Management", "Journal Publication Process"]
            },
            {
                step: 4,
                title: "Grant Writing and Funding",
                description: "Master techniques for securing research funding and writing effective grant proposals.",
                resources: ["Grant Proposal Writing", "Research Funding Sources", "Budget Development"]
            },
            {
                step: 5,
                title: "Research Project",
                description: "Complete an original research project including literature review, data collection, and analysis.",
                resources: ["Literature Review Methods", "Research Ethics", "Research Presentation Skills"]
            }
        ]
    },
    {
        id: 9,
        title: "Healthcare Administration",
        category: "hospital_health_care",
        description: "Prepare for leadership roles in healthcare facilities and organizations.",
        difficulty: "intermediate",
        duration: "9 months",
        roadmap: [
            {
                step: 1,
                title: "Healthcare Systems and Policy",
                description: "Understand healthcare delivery systems, policies, and regulatory frameworks.",
                resources: ["Healthcare System Overview", "Health Policy Analysis", "Regulatory Compliance"]
            },
            {
                step: 2,
                title: "Healthcare Operations Management",
                description: "Learn techniques for managing healthcare facilities, staffing, and patient flow.",
                resources: ["Hospital Operations", "Healthcare Staffing Models", "Patient Flow Optimization"]
            },
            {
                step: 3,
                title: "Healthcare Finance",
                description: "Master healthcare financial management, reimbursement systems, and budgeting.",
                resources: ["Healthcare Financial Management", "Reimbursement Models", "Healthcare Budgeting"]
            },
            {
                step: 4,
                title: "Healthcare Technology and Informatics",
                description: "Explore health information systems, electronic health records, and healthcare IT.",
                resources: ["Health Information Systems", "EHR Implementation", "Healthcare Data Analytics"]
            },
            {
                step: 5,
                title: "Leadership in Healthcare",
                description: "Develop leadership skills specific to healthcare environments and challenges.",
                resources: ["Healthcare Leadership", "Change Management in Healthcare", "Quality Improvement Methodologies"]
            }
        ]
    },
    {
        id: 10,
        title: "HR Management",
        category: "human_resources",
        description: "Develop expertise in managing human resources and organizational development.",
        difficulty: "intermediate",
        duration: "8 months", 
        roadmap: [
            {
                step: 1,
                title: "HR Fundamentals",
                description: "Learn core HR functions including recruitment, selection, and compensation.",
                resources: ["HR Management Principles", "Talent Acquisition Strategies", "Compensation and Benefits"]
            },
            {
                step: 2,
                title: "Employee Relations and Development",
                description: "Study techniques for employee engagement, performance management, and development.",
                resources: ["Employee Engagement", "Performance Management Systems", "Training and Development"]
            },
            {
                step: 3,
                title: "HR Analytics",
                description: "Develop skills in using data analytics for HR decision-making and workforce planning.",
                resources: ["HR Metrics and Analytics", "Workforce Planning", "HR Data Interpretation"]
            },
            {
                step: 4,
                title: "Employment Law and Compliance",
                description: "Understand legal requirements, regulations, and compliance in human resources.",
                resources: ["Employment Law Essentials", "Workplace Compliance", "Policy Development"]
            },
            {
                step: 5,
                title: "Strategic HR Management",
                description: "Learn to align HR strategies with organizational goals and business objectives.",
                resources: ["Strategic HR Planning", "Organizational Development", "Change Management"]
            }
        ]
    },
    // Continuing from previous code
    {
        id: 11,
        title: "IT Infrastructure Management",
        category: "information_technology_services",
        description: "Master the skills needed to manage and optimize IT infrastructure and services.",
        difficulty: "intermediate",
        duration: "10 months",
        roadmap: [
            {
                step: 1,
                title: "IT Fundamentals",
                description: "Build a strong foundation in IT systems, networking, and infrastructure components.",
                resources: ["IT Systems Overview", "Network Fundamentals", "Infrastructure Components"]
            },
            {
                step: 2,
                title: "Cloud Computing",
                description: "Learn cloud architecture, deployment models, and management techniques.",
                resources: ["Cloud Architecture Principles", "Cloud Service Models", "Multi-cloud Management"]
            },
            {
                step: 3,
                title: "IT Service Management",
                description: "Master ITIL frameworks, service delivery, and operational excellence.",
                resources: ["ITIL Framework", "Service Desk Operations", "IT Process Improvement"]
            },
            {
                step: 4,
                title: "Cybersecurity Fundamentals",
                description: "Understand security principles, threat management, and compliance requirements.",
                resources: ["Security Architecture", "Threat Detection and Response", "Compliance Frameworks"]
            },
            {
                step: 5,
                title: "IT Strategy and Governance",
                description: "Develop IT governance frameworks, strategic planning, and technology roadmaps.",
                resources: ["IT Governance Models", "Strategic IT Planning", "Technology Portfolio Management"]
            }
        ]
    },
    {
        id: 12,
        title: "Insurance Underwriting",
        category: "insurance",
        description: "Develop expertise in risk assessment, policy underwriting, and insurance management.",
        difficulty: "intermediate",
        duration: "8 months",
        roadmap: [
            {
                step: 1,
                title: "Insurance Fundamentals",
                description: "Learn the principles of insurance, risk management, and different types of coverage.",
                resources: ["Introduction to Insurance", "Risk Management Principles", "Insurance Products"]
            },
            {
                step: 2,
                title: "Underwriting Principles",
                description: "Develop skills in risk assessment, policy pricing, and coverage determination.",
                resources: ["Underwriting Fundamentals", "Risk Analysis", "Policy Evaluation"]
            },
            {
                step: 3,
                title: "Specialty Insurance Lines",
                description: "Explore specialized insurance markets such as life, health, property, and liability.",
                resources: ["Life Insurance Underwriting", "Property and Casualty", "Commercial Risk Assessment"]
            },
            {
                step: 4,
                title: "Insurance Analytics",
                description: "Master data analysis techniques for underwriting decisions and portfolio management.",
                resources: ["Predictive Analytics for Insurance", "Portfolio Risk Management", "Claims Data Analysis"]
            },
            {
                step: 5,
                title: "Regulatory Compliance",
                description: "Understand insurance regulations, compliance requirements, and ethical practices.",
                resources: ["Insurance Regulations", "Compliance Frameworks", "Ethics in Insurance"]
            }
        ]
    },
    {
        id: 13,
        title: "Digital Marketing",
        category: "internet",
        description: "Master digital marketing strategies, tools, and analytics for online business growth.",
        difficulty: "intermediate",
        duration: "7 months",
        roadmap: [
            {
                step: 1,
                title: "Digital Marketing Fundamentals",
                description: "Learn the core principles of digital marketing and online customer acquisition.",
                resources: ["Digital Marketing Introduction", "Customer Journey Mapping", "Marketing Channels Overview"]
            },
            {
                step: 2,
                title: "Search Engine Optimization",
                description: "Develop skills in optimizing content and websites for search engine visibility.",
                resources: ["SEO Fundamentals", "Keyword Research", "On-page and Off-page Optimization"]
            },
            {
                step: 3,
                title: "Social Media Marketing",
                description: "Master strategies for marketing on social platforms and building online communities.",
                resources: ["Social Media Strategy", "Content Planning", "Community Management"]
            },
            {
                step: 4,
                title: "Digital Advertising",
                description: "Learn to create, manage, and optimize paid advertising campaigns across platforms.",
                resources: ["PPC Fundamentals", "Ad Creative Development", "Campaign Optimization"]
            },
            {
                step: 5,
                title: "Marketing Analytics",
                description: "Develop skills in measuring campaign performance and deriving actionable insights.",
                resources: ["Marketing Metrics", "Analytics Tools", "Performance Reporting"]
            }
        ]
    },
    {
        id: 14,
        title: "Legal Practice Management",
        category: "law_practice",
        description: "Develop skills in managing a successful legal practice and client relationships.",
        difficulty: "advanced",
        duration: "9 months",
        roadmap: [
            {
                step: 1,
                title: "Legal Practice Fundamentals",
                description: "Understand the business aspects of running a legal practice or department.",
                resources: ["Legal Business Models", "Practice Management Systems", "Client Service Models"]
            },
            {
                step: 2,
                title: "Client Acquisition and Management",
                description: "Learn strategies for client development, retention, and relationship management.",
                resources: ["Legal Marketing", "Client Intake Processes", "Client Relationship Management"]
            },
            {
                step: 3,
                title: "Legal Technology",
                description: "Master legal software, case management systems, and practice technology.",
                resources: ["Legal Technology Overview", "Case Management Systems", "Document Automation"]
            },
            {
                step: 4,
                title: "Financial Management",
                description: "Develop skills in billing, financial management, and profitability analysis.",
                resources: ["Legal Billing Practices", "Financial Analysis for Law Firms", "Profitability Models"]
            },
            {
                step: 5,
                title: "Strategic Practice Growth",
                description: "Learn to develop and implement strategic plans for practice growth and development.",
                resources: ["Strategic Planning for Legal Practices", "Practice Expansion", "Succession Planning"]
            }
        ]
    },
    {
        id: 15,
        title: "Legal Research and Writing",
        category: "legal_services",
        description: "Master the skills of legal research, analysis, and persuasive legal writing.",
        difficulty: "advanced",
        duration: "6 months",
        roadmap: [
            {
                step: 1,
                title: "Legal Research Fundamentals",
                description: "Learn to navigate legal databases, find relevant precedents, and analyze legal sources.",
                resources: ["Legal Research Methodology", "Case Law Analysis", "Statutory Interpretation"]
            },
            {
                step: 2,
                title: "Legal Writing Principles",
                description: "Develop skills in clear, concise, and persuasive legal writing for various contexts.",
                resources: ["Legal Writing Fundamentals", "Structure and Organization", "Legal Citation Methods"]
            },
            {
                step: 3,
                title: "Advocacy Writing",
                description: "Master the art of persuasive writing for briefs, memoranda, and legal arguments.",
                resources: ["Persuasive Legal Writing", "Brief Writing", "Argument Development"]
            },
            {
                step: 4,
                title: "Contract and Transactional Drafting",
                description: "Learn techniques for drafting contracts, agreements, and other legal documents.",
                resources: ["Contract Drafting Principles", "Transactional Document Types", "Negotiation Language"]
            },
            {
                step: 5,
                title: "Advanced Research Applications",
                description: "Apply research and writing skills to complex legal problems and specialized areas.",
                resources: ["Specialized Legal Research", "Complex Legal Analysis", "Interdisciplinary Research"]
            }
        ]
    },
    {
        id: 16,
        title: "Management Consulting",
        category: "management_consulting",
        description: "Develop the analytical and advisory skills needed for management consulting.",
        difficulty: "advanced",
        duration: "10 months",
        roadmap: [
            {
                step: 1,
                title: "Consulting Fundamentals",
                description: "Learn the core principles of management consulting and client engagement.",
                resources: ["Introduction to Management Consulting", "Consulting Methodologies", "Client Engagement Models"]
            },
            {
                step: 2,
                title: "Business Analysis",
                description: "Develop skills in analyzing business problems, processes, and opportunities.",
                resources: ["Business Analysis Frameworks", "Process Mapping", "Root Cause Analysis"]
            },
            {
                step: 3,
                title: "Strategic Consulting",
                description: "Master frameworks for strategic analysis, planning, and implementation.",
                resources: ["Strategic Analysis Tools", "Competitive Assessment", "Strategic Implementation"]
            },
            {
                step: 4,
                title: "Change Management",
                description: "Learn approaches for facilitating organizational change and transformation.",
                resources: ["Change Management Models", "Stakeholder Engagement", "Change Implementation"]
            },
            {
                step: 5,
                title: "Client Project",
                description: "Apply consulting skills through a comprehensive client project or case study.",
                resources: ["Project Management", "Client Communication", "Deliverable Development"]
            }
        ]
    },
    {
        id: 17,
        title: "Digital Advertising",
        category: "marketing_advertising",
        description: "Master digital advertising strategies, campaign management, and performance optimization.",
        difficulty: "intermediate",
        duration: "8 months",
        roadmap: [
            {
                step: 1,
                title: "Advertising Fundamentals",
                description: "Learn the principles of advertising, messaging, and audience targeting.",
                resources: ["Advertising Principles", "Brand Messaging", "Audience Segmentation"]
            },
            {
                step: 2,
                title: "Digital Ad Platforms",
                description: "Master major digital advertising platforms and their unique features.",
                resources: ["Search Advertising", "Social Media Ads", "Programmatic Advertising"]
            },
            {
                step: 3,
                title: "Creative Development",
                description: "Develop skills in creating compelling ad creative and content for digital channels.",
                resources: ["Ad Creative Best Practices", "Copywriting for Ads", "Visual Ad Design"]
            },
            {
                step: 4,
                title: "Campaign Management",
                description: "Learn to plan, execute, and manage multi-channel digital advertising campaigns.",
                resources: ["Campaign Planning", "Budget Allocation", "Campaign Execution"]
            },
            {
                step: 5,
                title: "Performance Optimization",
                description: "Master techniques for analyzing and optimizing ad performance and ROI.",
                resources: ["Ad Performance Metrics", "A/B Testing", "Campaign Optimization Techniques"]
            }
        ]
    },
    {
        id: 18,
        title: "Mental Health Counseling",
        category: "mental_health_care",
        description: "Develop skills in providing mental health counseling and therapeutic support.",
        difficulty: "advanced",
        duration: "12 months",
        roadmap: [
            {
                step: 1,
                title: "Counseling Foundations",
                description: "Learn the fundamental theories and approaches to mental health counseling.",
                resources: ["Counseling Theories", "Therapeutic Approaches", "Ethical Practice"]
            },
            {
                step: 2,
                title: "Assessment and Diagnosis",
                description: "Develop skills in mental health assessment, diagnosis, and treatment planning.",
                resources: ["Mental Health Assessment", "Diagnostic Criteria", "Treatment Planning"]
            },
            {
                step: 3,
                title: "Counseling Techniques",
                description: "Master evidence-based counseling techniques and therapeutic interventions.",
                resources: ["Therapeutic Interventions", "Cognitive-Behavioral Techniques", "Crisis Intervention"]
            },
            {
                step: 4,
                title: "Specialized Populations",
                description: "Learn approaches for working with specific populations and mental health conditions.",
                resources: ["Child and Adolescent Counseling", "Trauma-Informed Care", "Substance Use Counseling"]
            },
            {
                step: 5,
                title: "Professional Practice",
                description: "Prepare for professional practice including supervision, documentation, and self-care.",
                resources: ["Clinical Documentation", "Professional Supervision", "Counselor Self-Care"]
            }
        ]
    },
    {
        id: 19,
        title: "Music Production",
        category: "music",
        description: "Master the art and technology of music production and sound engineering.",
        difficulty: "intermediate",
        duration: "9 months",
        roadmap: [
            {
                step: 1,
                title: "Music Production Fundamentals",
                description: "Learn the basics of digital audio workstations, recording, and sound principles.",
                resources: ["DAW Fundamentals", "Audio Recording Basics", "Sound Theory"]
            },
            {
                step: 2,
                title: "Recording Techniques",
                description: "Develop skills in recording various instruments, vocals, and sound sources.",
                resources: ["Microphone Techniques", "Studio Recording", "Field Recording"]
            },
            {
                step: 3,
                title: "Mixing and Processing",
                description: "Master techniques for mixing tracks, sound processing, and audio effects.",
                resources: ["Mixing Fundamentals", "Audio Effects", "Signal Processing"]
            },
            {
                step: 4,
                title: "Music Composition and Arrangement",
                description: "Learn approaches to music composition, arrangement, and production techniques.",
                resources: ["Music Theory for Producers", "Arrangement Techniques", "Production Styles"]
            },
            {
                step: 5,
                title: "Professional Production Project",
                description: "Complete a professional-quality music production project from concept to final master.",
                resources: ["Project Planning", "Production Workflow", "Mastering Techniques"]
            }
        ]
    },
    {
        id: 20,
        title: "Scientific Research Methods",
        category: "research",
        description: "Develop expertise in scientific research methodologies and techniques.",
        difficulty: "advanced",
        duration: "11 months",
        roadmap: [
            {
                step: 1,
                title: "Research Fundamentals",
                description: "Learn the principles of scientific inquiry, methodology, and research design.",
                resources: ["Scientific Method", "Research Paradigms", "Study Design Principles"]
            },
            {
                step: 2,
                title: "Data Collection Methods",
                description: "Master various techniques for collecting research data across disciplines.",
                resources: ["Quantitative Data Collection", "Qualitative Methods", "Mixed Methods Approaches"]
            },
            {
                step: 3,
                title: "Data Analysis",
                description: "Develop skills in analyzing and interpreting research data using various tools.",
                resources: ["Statistical Analysis", "Qualitative Data Analysis", "Research Software Tools"]
            },
            {
                step: 4,
                title: "Research Communication",
                description: "Learn to communicate research findings through publications and presentations.",
                resources: ["Scientific Writing", "Research Publication", "Conference Presentations"]
            },
            {
                step: 5,
                title: "Research Project",
                description: "Conduct a complete research project applying rigorous methodology.",
                resources: ["Research Planning", "Ethics Approval", "Project Execution"]
            }
        ]
    },
    {
        id: 21,
        title: "Tech Product Management",
        category: "technology",
        description: "Master the skills needed to manage the development and success of technology products.",
        difficulty: "advanced",
        duration: "10 months",
        roadmap: [
            {
                step: 1,
                title: "Product Management Fundamentals",
                description: "Learn the core principles and frameworks of product management.",
                resources: ["Product Management Principles", "Product Lifecycle", "Product Strategy"]
            },
            {
                step: 2,
                title: "User Research and Requirements",
                description: "Develop skills in user research, market analysis, and requirements definition.",
                resources: ["User Research Methods", "Market Analysis", "Product Requirements"]
            },
            {
                step: 3,
                title: "Product Development Process",
                description: "Master agile development methodologies, roadmapping, and prioritization.",
                resources: ["Agile Product Development", "Roadmap Planning", "Prioritization Frameworks"]
            },
            {
                step: 4,
                title: "Product Analytics",
                description: "Learn to use data and analytics to inform product decisions and measure success.",
                resources: ["Product Metrics", "User Analytics", "Data-Driven Decision Making"]
            },
            {
                step: 5,
                title: "Product Launch and Growth",
                description: "Develop strategies for successful product launches and sustainable growth.",
                resources: ["Go-to-Market Strategy", "Product Marketing", "Growth Techniques"]
            }
        ]
    },
    {
        id: 22,
        title: "Telecommunications Engineering",
        category: "telecommunications",
        description: "Master the design, implementation, and management of telecommunications systems.",
        difficulty: "advanced",
        duration: "12 months",
        roadmap: [
            {
                step: 1,
                title: "Telecommunications Fundamentals",
                description: "Learn the principles of telecommunications, signals, and network architecture.",
                resources: ["Telecommunications Principles", "Signal Theory", "Network Architecture"]
            },
            {
                step: 2,
                title: "Wireless Communications",
                description: "Study wireless technologies, mobile networks, and radio frequency systems.",
                resources: ["Wireless Systems", "Mobile Network Architecture", "RF Engineering"]
            },
            {
                step: 3,
                title: "Network Design and Implementation",
                description: "Develop skills in designing and implementing telecommunications networks.",
                resources: ["Network Design Principles", "Implementation Methodologies", "Network Security"]
            },
            {
                step: 4,
                title: "Emerging Technologies",
                description: "Explore advanced and emerging telecommunications technologies and standards.",
                resources: ["5G Technologies", "IoT Communications", "Satellite Systems"]
            },
            {
                step: 5,
                title: "Telecommunications Project",
                description: "Complete a comprehensive telecommunications design or implementation project.",
                resources: ["Project Planning", "System Testing", "Performance Optimization"]
            }
        ]
    },
    {
        id: 23,
        title: "Veterinary Practice Management",
        category: "veterinary",
        description: "Develop the skills to effectively manage veterinary practices and animal care facilities.",
        difficulty: "intermediate",
        duration: "8 months",
        roadmap: [
            {
                step: 1,
                title: "Veterinary Practice Fundamentals",
                description: "Learn the business aspects of veterinary practice and animal healthcare.",
                resources: ["Veterinary Business Models", "Practice Operations", "Animal Healthcare Systems"]
            },
            {
                step: 2,
                title: "Client Relations and Communication",
                description: "Develop skills in client service, communication, and relationship management.",
                resources: ["Veterinary Client Communication", "Customer Service", "Pet Owner Education"]
            },
            {
                step: 3,
                title: "Veterinary Practice Operations",
                description: "Master operational aspects including scheduling, inventory, and facility management.",
                resources: ["Scheduling Systems", "Inventory Management", "Facility Operations"]
            },
            {
                step: 4,
                title: "Financial Management",
                description: "Learn veterinary-specific financial management, billing, and profitability.",
                resources: ["Veterinary Financial Management", "Pricing Strategies", "Insurance Processing"]
            },
            {
                step: 5,
                title: "Practice Growth and Development",
                description: "Develop strategies for practice growth, marketing, and service expansion.",
                resources: ["Veterinary Marketing", "Service Development", "Practice Growth Strategies"]
            }
        ]
    }
];

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const categoryFilters = document.getElementById('categoryFilters');
    const coursesGrid = document.getElementById('coursesGrid');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const roadmapModal = document.getElementById('roadmapModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const roadmapContainer = document.getElementById('roadmapContainer');
    
    // Extract unique categories
    const categories = [...new Set(careerData.map(course => course.category))];
    
    // Create category filters
    categories.forEach(category => {
        const formattedCategory = formatCategoryName(category);
        const filterButton = document.createElement('button');
        filterButton.className = 'category-filter';
        filterButton.setAttribute('data-category', category);
        filterButton.textContent = formattedCategory;
        categoryFilters.appendChild(filterButton);
    });
    
    // Format category name (convert snake_case to Title Case)
    function formatCategoryName(category) {
        return category
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    // Display courses
    function displayCourses(courses) {
        // Clear courses grid
        coursesGrid.innerHTML = '';
        
        if (courses.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No courses found matching your criteria. Please try a different search.';
            coursesGrid.appendChild(noResults);
            return;
        }
        
        // Create course cards
        courses.forEach(course => {
            const courseCard = createCourseCard(course);
            coursesGrid.appendChild(courseCard);
        });
    }
    
    // Create a course card
    function createCourseCard(course) {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.setAttribute('data-id', course.id);
        
        const difficultyLevel = course.difficulty === 'beginner' ? 1 : course.difficulty === 'intermediate' ? 2 : 3;
        
        card.innerHTML = `
            <div class="course-image">
                <i class="course-icon">${course.title.charAt(0)}</i>
            </div>
            <div class="course-content">
                <span class="course-category">${formatCategoryName(course.category)}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-info">
                    <div class="course-difficulty">
                        <span>Difficulty:</span>
                        <div class="difficulty-dot ${difficultyLevel >= 1 ? 'active' : ''}"></div>
                        <div class="difficulty-dot ${difficultyLevel >= 2 ? 'active' : ''}"></div>
                        <div class="difficulty-dot ${difficultyLevel >= 3 ? 'active' : ''}"></div>
                    </div>
                    <span>${course.duration}</span>
                </div>
            </div>
        `;
        
        // Add click event to show roadmap
        card.addEventListener('click', function() {
            showRoadmap(course);
        });
        
        return card;
    }
    
    // Show roadmap in modal
    function showRoadmap(course) {
        modalTitle.textContent = course.title;
        modalSubtitle.textContent = `Industry: ${formatCategoryName(course.category)}`;
        
        // Clear roadmap container
        roadmapContainer.innerHTML = '<div class="roadmap-line"></div>';
        
        // Add roadmap steps
        course.roadmap.forEach(step => {
            const roadmapItem = document.createElement('div');
            roadmapItem.className = 'roadmap-item';
            
            roadmapItem.innerHTML = `
                <div class="roadmap-step">${step.step}</div>
                <div class="roadmap-content">
                    <h3 class="roadmap-title">${step.title}</h3>
                    <p class="roadmap-description">${step.description}</p>
                    <div class="roadmap-resources">
                        <h4 class="roadmap-resources-title">Recommended Resources:</h4>
                        <ul class="resources-list">
                            ${step.resources.map(resource => `<li>${resource}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            
            roadmapContainer.appendChild(roadmapItem);
        });
        
        // Show modal
        roadmapModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
    }
    
    // Close modal
    closeModal.addEventListener('click', function() {
        roadmapModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close modal when clicking outside content
    roadmapModal.addEventListener('click', function(e) {
        if (e.target === roadmapModal) {
            roadmapModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Filter courses by category
    categoryFilters.addEventListener('click', function(e) {
        if (e.target.classList.contains('category-filter')) {
            // Remove active class from all filters
            document.querySelectorAll('.category-filter').forEach(filter => {
                filter.classList.remove('active');
            });
            
            // Add active class to clicked filter
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-category');
            const searchQuery = searchInput.value.toLowerCase().trim();
            
            filterCourses(category, searchQuery);
        }
    });
    
    // Search courses
    searchButton.addEventListener('click', function() {
        const category = document.querySelector('.category-filter.active').getAttribute('data-category');
        const searchQuery = searchInput.value.toLowerCase().trim();
        
        filterCourses(category, searchQuery);
    });
    
    // Search on Enter key
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            const category = document.querySelector('.category-filter.active').getAttribute('data-category');
            const searchQuery = searchInput.value.toLowerCase().trim();
            
            filterCourses(category, searchQuery);
        }
    });
    
    // Filter courses based on category and search query
    function filterCourses(category, searchQuery) {
        let filteredCourses = [...careerData];
        
        // Filter by category
        if (category !== 'all') {
            filteredCourses = filteredCourses.filter(course => course.category === category);
        }
        
        // Filter by search query
        if (searchQuery) {
            filteredCourses = filteredCourses.filter(course => {
                return (
                    course.title.toLowerCase().includes(searchQuery) ||
                    course.description.toLowerCase().includes(searchQuery) ||
                    course.category.toLowerCase().includes(searchQuery)
                );
            });
        }
        
        // Display filtered courses
        displayCourses(filteredCourses);
    }
    
    // Simulate loading
    setTimeout(function() {
        // Initial display of all courses
        displayCourses(careerData);
    }, 1000);
});