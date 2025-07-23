export const CAREER_STATS = {
  // STEM & Tech
  "Software Developer": {
    soc_code: "15-1252",
    salary: "$132,270", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Much faster than average (25%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s degree",
    skills: ["Problem-solving", "Coding", "Software Testing"],
    certifications: ["CompTIA, AWS Certified Developer"],
    environment: "Office or hybrid tech setting with strong growth potential",
  },
  "Architect": {
    soc_code: "17-1011",
    salary: "$97,270", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (5%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s degree in Architecture",
    skills: ["Design thinking", "AutoCAD/Revit", "Visualization"],
    certifications: ["State Licensure (ARE)"],
    environment: "Architecture firms, construction sites, or city planning offices",
  },
  "Data Scientist": {
    soc_code: "15-2051",
    salary: "$103,500", // Median Annual Wage, May 2022 (BLS OES) - (Most recent found in search results)
    outlook: "Much faster than average (35%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s or Master’s in Data Science, Statistics, or CS",
    skills: ["Data analysis", "Python/R", "Machine learning"],
    certifications: ["Google Data Analytics, Microsoft Certified: Data Scientist"],
    environment: "Corporate offices, tech startups, or research settings",
  },

  // College & Research
  "Academic Researcher": { // Often falls under various research categories
    soc_code: "19-3099", // Other Social Scientists (example, can vary by field)
    salary: "$63,380", // Median Annual Wage for Survey Researchers (similar field), May 2024 (BLS OOH)
    outlook: "Little or no change (0%)", // For Survey Researchers, 2023-2033 (BLS OOH) - Note: "Academic Researcher" is broad and outlook varies greatly by discipline.
    education: "Master’s or Ph.D.",
    skills: ["Research methodology", "Statistical analysis", "Academic writing"],
    certifications: [],
    environment: "Universities, research institutions, think tanks",
  },
  "Engineer": { // Broad category, using Civil Engineer (17-2051) as a common example
    soc_code: "17-2051",
    salary: "$99,590", // Median Annual Wage for Civil Engineers, May 2024 (BLS OOH)
    outlook: "Faster than average (6%)", // For Civil Engineers, 2023-2033 (BLS OOH)
    education: "Bachelor’s degree in Engineering",
    skills: ["Problem-solving", "Design", "Analytical thinking"],
    certifications: ["Professional Engineer (PE) License (for some fields)"],
    environment: "Office, lab, or fieldwork depending on specialty",
  },
  "Philosopher": {
    soc_code: "25-1126", // Philosophy and Religion Teachers, Postsecondary
    salary: "$82,060", // Median Annual Wage for Postsecondary Philosophy Teachers, May 2023 (BLS OES)
    outlook: "As fast as average (4%)", // For Postsecondary Teachers (overall), 2022-2032 (BLS OOH)
    education: "Ph.D.",
    skills: ["Critical thinking", "Logic", "Argumentation", "Writing"],
    certifications: [],
    environment: "Universities, colleges, research institutions",
  },

  // Business & Law
  "Business Executive": { // Falls under Top Executives
    soc_code: "11-1011", // Chief Executives
    salary: "$206,420", // Median Annual Wage for Chief Executives, May 2024 (BLS OOH)
    outlook: "Faster than average (6%)", // For Top Executives (overall), 2023-2033 (BLS OOH)
    education: "Bachelor's or Master's degree",
    skills: ["Strategic planning", "Financial management", "Leadership"],
    certifications: [],
    environment: "Corporate offices across various industries",
  },
  "Lawyer": {
    soc_code: "23-1011",
    salary: "$145,760", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (6%)", // 2022-2032 (BLS OOH)
    education: "Juris Doctor (J.D.)",
    skills: ["Legal research", "Argumentation", "Negotiation"],
    certifications: ["State Bar Admission"],
    environment: "Law firms, government agencies, corporate legal departments",
  },
  "Management Consultant": {
    soc_code: "13-1111", // Management Analysts
    salary: "$99,440", // Median Annual Wage for Management Analysts, May 2023 (BLS OES)
    outlook: "Faster than average (10%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree (often MBA preferred)",
    skills: ["Problem-solving", "Data analysis", "Communication"],
    certifications: ["Certified Management Consultant (CMC) (optional)"],
    environment: "Consulting firms, corporate offices",
  },
  "Entrepreneur": { // No direct SOC code, often aligns with Business Owners or Managers
    soc_code: "11-1021", // General and Operations Managers (most relevant broad category)
    salary: "$102,950", // Median Annual Wage for General and Operations Managers, May 2024 (BLS OOH)
    outlook: "Faster than average (6%)", // For Top Executives (which includes General and Operations Managers), 2023-2033 (BLS OOH)
    education: "Varies (often Bachelor's in Business)",
    skills: ["Innovation", "Risk-taking", "Networking", "Business acumen"],
    certifications: [],
    environment: "Startups, small businesses, self-employed",
  },
  "Marketing Strategist": {
    soc_code: "13-1161", // Market Research Analysts and Marketing Specialists
    salary: "$76,930", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (13%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s degree in Marketing or related field",
    skills: ["Market research", "Campaign development", "Data analysis"],
    certifications: [],
    environment: "Marketing agencies, corporate marketing departments",
  },
  "HR Manager": {
    soc_code: "11-3121",
    salary: "$140,030", // Median Annual Wage, May 2024 (BLS OOH)
    outlook: "Faster than average (6%)", // 2023-2033 (BLS OOH)
    education: "Bachelor's degree",
    skills: ["Recruitment", "Employee relations", "Conflict resolution"],
    certifications: ["SHRM-CP, SPHR (optional)"],
    environment: "Corporate human resources departments",
  },
  "Operations Manager": {
    soc_code: "11-1021", // General and Operations Managers
    salary: "$102,950", // Median Annual Wage, May 2024 (BLS OOH)
    outlook: "Faster than average (6%)", // For Top Executives (which includes General and Operations Managers), 2023-2033 (BLS OOH)
    education: "Bachelor’s in Business or related field",
    skills: ["Leadership", "Budgeting", "Communication"],
    certifications: ["PMP (Project Management Professional) (optional)"],
    environment: "Corporate settings across industries",
  },
  "Project Manager": { // Often falls under General and Operations Managers
    soc_code: "11-1021", // General and Operations Managers
    salary: "$102,950", // Median Annual Wage, May 2024 (BLS OOH)
    outlook: "Faster than average (6%)", // For Top Executives (which includes General and Operations Managers), 2023-2033 (BLS OOH)
    education: "Bachelor’s in Business or related field",
    skills: ["Leadership", "Budgeting", "Communication"],
    certifications: ["PMP (Project Management Professional)"],
    environment: "Corporate settings across industries",
  },
  "Customer Success Manager": { // No direct SOC code, often falls under Sales Managers or similar
    soc_code: "11-2022", // Sales Managers (as a close proxy)
    salary: "$136,150", // Median Annual Wage for Sales Managers, May 2023 (BLS OES)
    outlook: "As fast as average (4%)", // For Sales Managers, 2022-2032 (BLS OOH)
    education: "Bachelor's degree",
    skills: ["Relationship management", "Communication", "Problem-solving"],
    certifications: [],
    environment: "Tech companies, customer service departments",
  },
  "Hospitality Manager": {
    soc_code: "11-9051", // Lodging Managers
    salary: "$68,130", // Median Annual Wage for Lodging Managers, May 2024 (BLS OOH)
    outlook: "Faster than average (9%)", // For Lodging Managers, 2023-2033 (BLS OOH)
    education: "High school diploma or Bachelor's in Hospitality",
    skills: ["Customer service", "Operations management", "Staff supervision"],
    certifications: [],
    environment: "Hotels, resorts, event venues",
  },

  // Creative Arts
  "Creative Director": { // Often categorized as Art Directors
    soc_code: "27-1011", // Art Directors
    salary: "$111,040", // Median Annual Wage, May 2024 (BLS OOH)
    outlook: "As fast as average (5%)", // 2023-2033 (BLS OOH)
    education: "Bachelor’s in Art, Design, or Marketing",
    skills: ["Design", "Team leadership", "Creative direction"],
    certifications: ["None required, portfolio-driven"],
    environment: "Advertising agencies, studios, or media companies",
  },
  "Writer": {
    soc_code: "27-3043", // Writers and Authors
    salary: "$78,570", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in English, Journalism, or Communications",
    skills: ["Writing", "Editing", "Storytelling"],
    certifications: ["None required; portfolio is key"],
    environment: "Freelance, publishing, media, or creative agencies",
  },
  "Author": {
    soc_code: "27-3043", // Writers and Authors
    salary: "$78,570", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in English, Creative Writing, or related field",
    skills: ["Writing", "Imagination", "Discipline"],
    certifications: [],
    environment: "Freelance, publishing houses, self-published",
  },
  "Art Director": {
    soc_code: "27-1011",
    salary: "$111,040", // Median Annual Wage, May 2024 (BLS OOH)
    outlook: "As fast as average (5%)", // 2023-2033 (BLS OOH)
    education: "Bachelor’s in Art, Design, or Marketing",
    skills: ["Design", "Team leadership", "Creative direction"],
    certifications: ["None required, portfolio-driven"],
    environment: "Advertising agencies, studios, or media companies",
  },
  "Actor": {
    soc_code: "27-2011",
    salary: "$23.33/hour", // Median Hourly Wage, May 2024 (BLS OOH) - Note: Actors' pay varies greatly.
    outlook: "As fast as average (5%)", // 2023-2033 (BLS OOH)
    education: "Some college, no degree (often acting school/workshops)",
    skills: ["Performance", "Improvisation", "Audience engagement"],
    certifications: ["Acting workshops, drama school (optional)"],
    environment: "Theaters, studios, or live event venues",
  },
  "Graphic Designer": {
    soc_code: "27-1024",
    salary: "$61,300", // Median Annual Wage, May 2024 (BLS OOH)
    outlook: "Slower than average (2%)", // 2023-2033 (BLS OOH)
    education: "Bachelor’s degree",
    skills: ["Design software (Adobe Creative Suite)", "Creativity", "Communication"],
    certifications: [],
    environment: "Design studios, marketing departments, freelance",
  },
  "Florist": {
    soc_code: "41-2031", // Floral Designers
    salary: "$36,120", // Median Annual Wage, May 2024 (BLS OOH)
    outlook: "Decline (-10%)", // 2023-2033 (BLS OOH)
    education: "High school diploma or equivalent",
    skills: ["Floral design", "Customer service", "Creativity"],
    certifications: [],
    environment: "Flower shops, grocery stores, self-employed",
  },
  "Performer": { // Broad, using Entertainers and Performers, Sports and Related Workers (27-2099)
    soc_code: "27-2099",
    salary: "$26.38/hour", // Median Hourly Wage, May 2024 (BLS OOH)
    outlook: "As fast as average (5%)", // 2023-2033 (BLS OOH - for Actors, similar category)
    education: "Varies; talent and experience are key",
    skills: ["Stage presence", "Improvisation", "Audience engagement"],
    certifications: [],
    environment: "Live venues, studios, events",
  },

  // Education & Human Services
  "Psychologist": {
    soc_code: "19-3031",
    salary: "$96,100", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (6%)", // 2022-2032 (BLS OOH)
    education: "Doctoral degree (Ph.D. or Psy.D.)",
    skills: ["Therapy techniques", "Research", "Empathy"],
    certifications: ["State Licensure"],
    environment: "Private practice, hospitals, schools, government",
  },
  "Nonprofit Director": { // Often falls under Social and Community Service Managers
    soc_code: "11-9151", // Social and Community Service Managers
    salary: "$77,030", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (9%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree (Master's often preferred)",
    skills: ["Program development", "Fundraising", "Leadership"],
    certifications: [],
    environment: "Nonprofit organizations, community centers",
  },
  "Therapist": { // Broad term, using Marriage and Family Therapists (21-1013) as example
    soc_code: "21-1013",
    salary: "$63,330", // Median Annual Wage for Marriage and Family Therapists, May 2023 (BLS OES)
    outlook: "Much faster than average (15%)", // 2022-2032 (BLS OOH)
    education: "Master’s degree",
    skills: ["Empathy", "Listening", "Emotional intelligence"],
    certifications: ["State Licensure (LPC, LMFT, LCSW)"],
    environment: "Private practice, clinics, or schools",
  },
  "Teacher": { // Broad term, using Elementary School Teachers (25-2021) as primary example
    soc_code: "25-2021",
    salary: "$63,680", // Median Annual Wage for Elementary School Teachers, May 2023 (BLS OES)
    outlook: "As fast as average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Education + State Teaching Credential",
    skills: ["Communication", "Classroom management", "Creativity"],
    certifications: ["State Teacher Certification"],
    environment: "Elementary schools (public or private)",
  },
  "Librarian": {
    soc_code: "25-4022",
    salary: "$62,420", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (4%)", // 2022-2032 (BLS OOH)
    education: "Master’s in Library and Information Science (MLIS)",
    skills: ["Organization", "Information retrieval", "Tech literacy"],
    certifications: ["State Licensure (varies)"],
    environment: "Schools, universities, or public libraries",
  },
  "Elementary Teacher": { // Specific listing
    soc_code: "25-2021",
    salary: "$63,680", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Education + State Teaching Credential",
    skills: ["Communication", "Classroom management", "Creativity"],
    certifications: ["State Teacher Certification"],
    environment: "Elementary schools (public or private)",
  },
  "School Principal": {
    soc_code: "11-9032", // Education Administrators, Elementary and Secondary School
    salary: "$103,460", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (4%)", // 2022-2032 (BLS OOH)
    education: "Master's degree + administrative license",
    skills: ["Leadership", "Budgeting", "Curriculum development"],
    certifications: ["State Principal's License"],
    environment: "Elementary, middle, or high schools",
  },
  "Nurse Educator": {
    soc_code: "25-1041", // Nursing Instructors and Teachers, Postsecondary
    salary: "$84,060", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (14%)", // 2022-2032 (BLS OOH)
    education: "Master's or doctoral degree in nursing",
    skills: ["Teaching", "Clinical expertise", "Curriculum development"],
    certifications: ["RN license + Certified Nurse Educator (CNE) (optional)"],
    environment: "Colleges, universities, hospitals",
  },
  "Recreation Coordinator": {
    soc_code: "21-1092", // Recreational Therapists
    salary: "$53,610", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (7%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree",
    skills: ["Program planning", "Leadership", "Communication"],
    certifications: ["Certified Therapeutic Recreation Specialist (CTRS) (optional)"],
    environment: "Recreation centers, hospitals, nursing homes",
  },

  // Communication & Media
  "Public Relations Specialist": {
    soc_code: "13-1073",
    salary: "$74,680", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (6%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s degree in Public Relations, Journalism, or Communications",
    skills: ["Media relations", "Crisis communication", "Writing"],
    certifications: [],
    environment: "PR firms, corporate communications, non-profits",
  },
  "Journalist": {
    soc_code: "27-3022", // Reporters and Correspondents
    salary: "$55,960", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Decline (-9%)", // 2022-2032 (BLS OOH) - Note: This category faces significant industry changes.
    education: "Bachelor’s degree in Journalism or Communications",
    skills: ["Reporting", "Interviewing", "Writing", "Digital media"],
    certifications: [],
    environment: "News organizations, online media, freelance",
  },
  "Event Planner": {
    soc_code: "13-1121", // Meeting, Convention, and Event Planners
    salary: "$59,440", // Median Annual Wage, May 2024 (BLS OOH)
    outlook: "Faster than average (7%)", // 2023-2033 (BLS OOH)
    education: "Bachelor's degree",
    skills: ["Organization", "Negotiation", "Attention to detail"],
    certifications: ["Certified Meeting Professional (CMP) (optional)"],
    environment: "Event management companies, hotels, corporate events",
  },

  // Public Service & Safety
  "Police Officer": {
    soc_code: "33-3051", // Police and Sheriff's Patrol Officers
    salary: "$72,240", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (3%)", // 2022-2032 (BLS OOH)
    education: "High school diploma + Police Academy",
    skills: ["Decision-making", "Law knowledge", "Stamina"],
    certifications: ["POST Certification (varies by state)"],
    environment: "Police departments, patrol routes, or investigations",
  },

  // Health & Wellness
  "Nurse": {
    soc_code: "29-1141", // Registered Nurses
    salary: "$86,070", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (6%)", // 2022-2032 (BLS OOH)
    education: "Bachelor’s in Nursing (BSN) + RN license",
    skills: ["Patient care", "Clinical skills", "Critical thinking"],
    certifications: ["Registered Nurse (RN) License"],
    environment: "Hospitals, clinics, or home care",
  },
  "Veterinary Technician": {
    soc_code: "29-2056", // Veterinary Technologists and Technicians
    salary: "$40,770", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Much faster than average (21%)", // 2022-2032 (BLS OOH)
    education: "Associate’s degree or postsecondary non-degree award",
    skills: ["Animal care", "Medical procedures", "Customer service"],
    certifications: ["State Credential (RVT, LVT, CVT)"],
    environment: "Veterinary clinics, animal hospitals",
  },
  "Paramedic": {
    soc_code: "29-2043", // Paramedics and EMTs
    salary: "$40,260", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (5%)", // 2022-2032 (BLS OOH)
    education: "EMT certification or Associate’s degree in Paramedicine",
    skills: ["First aid", "Decision-making", "Emergency care"],
    certifications: ["NREMT Certification"],
    environment: "Ambulance services, hospitals, or emergency departments",
  },

  // Skilled Trades & Hands-On Careers
  "Mechanic": { // Using Automotive Service Technicians and Mechanics (49-3023)
    soc_code: "49-3023",
    salary: "$48,770", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (2%)", // 2022-2032 (BLS OOH)
    education: "High school diploma or equivalent; postsecondary training",
    skills: ["Diagnostic skills", "Repair", "Mechanical aptitude"],
    certifications: ["ASE Certification (optional)"],
    environment: "Automotive repair shops, dealerships",
  },
  "Pilot": { // Using Airline and Commercial Pilots (53-2012)
    soc_code: "53-2012",
    salary: "$210,000+", // Median Annual Wage for Airline Pilots, May 2023 (BLS OES) - BLS only reports "> $200,000"
    outlook: "Faster than average (6%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree (often) + flight training",
    skills: ["Flight control", "Navigation", "Decision-making"],
    certifications: ["FAA certifications (e.g., ATP)"],
    environment: "Airlines, charter services, private companies",
  },
  "Technician": { // Broad category, often Electrical and Electronics Installers and Repairers (49-2094)
    soc_code: "49-2094",
    salary: "$65,560", // Median Annual Wage for Electrical and Electronics Installers and Repairers, May 2023 (BLS OES)
    outlook: "As fast as average (3%)", // 2022-2032 (BLS OOH)
    education: "Associate’s degree or postsecondary non-degree award",
    skills: ["Troubleshooting", "Technical diagrams", "Repair"],
    certifications: [],
    environment: "Manufacturing, field service, repair shops",
  },
  "Construction Supervisor": {
    soc_code: "47-1011", // Construction Managers
    salary: "$106,980", // Median Annual Wage, May 2024 (BLS OOH)
    outlook: "Much faster than average (9%)", // 2023-2033 (BLS OOH)
    education: "High school diploma + apprenticeship or associate degree",
    skills: ["Project management", "Blueprint reading", "Construction codes"],
    certifications: ["OSHA Certification"],
    environment: "Construction sites or contracting offices",
  },

  // Other specific careers from the original list:
  "Accountant": {
    soc_code: "13-2011",
    salary: "$78,000", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "As fast as average (4%)", // 2022-2032 (BLS OOH)
    education: "Bachelor's degree in accounting",
    skills: ["Financial analysis", "Tax preparation", "Auditing"],
    certifications: ["CPA (optional)"],
    environment: "Accounting firms, corporate finance departments",
  },
  "Social Entrepreneur": { // Similar to Entrepreneur/Nonprofit Director
    soc_code: "11-9151", // Social and Community Service Managers
    salary: "$77,030", // Median Annual Wage, May 2023 (BLS OES)
    outlook: "Faster than average (9%)", // 2022-2032 (BLS OOH)
    education: "Varies (often Bachelor's in Business, Social Work, or related field)",
    skills: ["Innovation", "Community engagement", "Business development", "Impact measurement"],
    certifications: [],
    environment: "Nonprofit organizations, impact-driven businesses, community initiatives",
  },
};
