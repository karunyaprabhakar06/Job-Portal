const JOBS = [
  {
    id: 1, title: "Software Engineer Intern", company: "Zoho Corporation",
    logo: "ZO", logoColor: "#dbeafe", logoText: "#1e40af",
    location: "Chennai", type: "Internship", cat: "tech",
    roles: ["Software Engineer"], salary: "₹25,000/mo", salaryNum: 25000,
    stipend: true, remote: false, isNew: true, posted: 0, deadlineDays: 12,
    skills: ["Python", "Django", "SQL", "REST APIs"],
    desc: "Join Zoho's core engineering team to build scalable SaaS products used by millions worldwide.",
    responsibilities: ["Develop and maintain REST APIs", "Write clean, testable code", "Collaborate with cross-functional teams", "Participate in code reviews"],
    requirements: ["B.E/B.Tech in CS or related field", "Strong Python fundamentals", "Knowledge of SQL", "Good communication skills"]
  },
  {
    id: 2, title: "Data Analyst", company: "Infosys BPO",
    logo: "IN", logoColor: "#dcfce7", logoText: "#166534",
    location: "Bangalore", type: "Full-time", cat: "tech",
    roles: ["Data Analyst"], salary: "₹6.5 LPA", salaryNum: 65000,
    stipend: false, remote: false, isNew: false, posted: 2, deadlineDays: 20,
    skills: ["Excel", "Power BI", "SQL", "Python"],
    desc: "Analyse large datasets to extract actionable insights for global clients.",
    responsibilities: ["Build Power BI dashboards", "Clean and transform datasets", "Present findings to stakeholders", "Automate reporting pipelines"],
    requirements: ["Graduation in any stream", "Proficiency in Excel and SQL", "Experience with BI tools", "Strong analytical mindset"]
  },
  {
    id: 3, title: "UI/UX Designer", company: "Freshworks",
    logo: "FW", logoColor: "#ede9fe", logoText: "#5b21b6",
    location: "Chennai", type: "Full-time", cat: "design",
    roles: ["UI/UX Designer"], salary: "₹8 LPA", salaryNum: 80000,
    stipend: false, remote: false, isNew: true, posted: 1, deadlineDays: 15,
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    desc: "Design intuitive experiences for Freshworks' B2B SaaS products.",
    responsibilities: ["Lead end-to-end product design", "Create wireframes and prototypes", "Conduct user research", "Maintain the design system"],
    requirements: ["Portfolio of digital product design", "Proficiency in Figma", "Strong visual design skills", "Collaborative mindset"]
  },
  {
    id: 4, title: "Product Manager", company: "BYJU'S",
    logo: "BY", logoColor: "#fef3c7", logoText: "#92400e",
    location: "Bangalore", type: "Full-time", cat: "business",
    roles: ["Product Manager"], salary: "₹12 LPA", salaryNum: 120000,
    stipend: false, remote: true, isNew: false, posted: 3, deadlineDays: 8,
    skills: ["Product Strategy", "Agile", "Analytics", "Roadmapping"],
    desc: "Drive product vision and roadmap for BYJU's online learning platform.",
    responsibilities: ["Define and own the product roadmap", "Write detailed PRDs", "Coordinate with engineering and design", "Analyse product metrics"],
    requirements: ["MBA or B.Tech with 1-2 years exp", "Strong analytical skills", "Experience with Agile", "Excellent communication"]
  },
  {
    id: 5, title: "Marketing Executive", company: "Swiggy",
    logo: "SW", logoColor: "#fee2e2", logoText: "#991b1b",
    location: "Mumbai", type: "Full-time", cat: "marketing",
    roles: ["Marketing"], salary: "₹5 LPA", salaryNum: 50000,
    stipend: false, remote: false, isNew: false, posted: 5, deadlineDays: 25,
    skills: ["Social Media", "Content Writing", "SEO", "Analytics"],
    desc: "Drive brand awareness and growth campaigns for Swiggy's food delivery business.",
    responsibilities: ["Plan digital marketing campaigns", "Manage social media channels", "Write compelling copy", "Track campaign performance"],
    requirements: ["Degree in Marketing or Communications", "Strong writing skills", "Familiarity with digital tools", "0-2 years experience"]
  },
  {
    id: 6, title: "Finance Analyst Intern", company: "HDFC Bank",
    logo: "HD", logoColor: "#dcfce7", logoText: "#14532d",
    location: "Mumbai", type: "Internship", cat: "finance",
    roles: ["Finance"], salary: "₹20,000/mo", salaryNum: 20000,
    stipend: true, remote: false, isNew: true, posted: 0, deadlineDays: 10,
    skills: ["Excel", "Financial Modelling", "Tally", "MIS Reporting"],
    desc: "Support the corporate finance team with financial modelling and MIS reporting.",
    responsibilities: ["Assist in MIS reporting", "Build financial models in Excel", "Support month-end closing", "Research industry trends"],
    requirements: ["B.Com / MBA Finance", "Strong MS Excel skills", "Basic accounting knowledge", "Attention to detail"]
  },
  {
    id: 7, title: "Backend Developer", company: "Ola Electric",
    logo: "OL", logoColor: "#dbeafe", logoText: "#1e3a8a",
    location: "Bangalore", type: "Full-time", cat: "tech",
    roles: ["Software Engineer"], salary: "₹10 LPA", salaryNum: 100000,
    stipend: false, remote: true, isNew: false, posted: 4, deadlineDays: 18,
    skills: ["Node.js", "MongoDB", "AWS", "Docker"],
    desc: "Build robust backend services for Ola Electric's EV platform.",
    responsibilities: ["Design and build microservices", "Optimise database performance", "Integrate with IoT devices", "Write technical documentation"],
    requirements: ["B.E/B.Tech CS", "2+ years with Node.js", "Experience with cloud platforms", "Strong problem-solving ability"]
  },
  {
    id: 8, title: "Content Strategist", company: "Times Internet",
    logo: "TI", logoColor: "#fef3c7", logoText: "#78350f",
    location: "Delhi", type: "Contract", cat: "marketing",
    roles: ["Marketing"], salary: "₹40,000/mo", salaryNum: 40000,
    stipend: false, remote: true, isNew: false, posted: 6, deadlineDays: 30,
    skills: ["Content Strategy", "SEO", "Editorial Planning", "Analytics"],
    desc: "Develop content strategies for Times Internet's digital media properties.",
    responsibilities: ["Build editorial calendars", "Write SEO-optimised articles", "Manage freelance writers", "Track content performance"],
    requirements: ["Degree in Journalism or English", "3+ years content experience", "Strong SEO knowledge", "Portfolio of published work"]
  }
];
export default JOBS;
