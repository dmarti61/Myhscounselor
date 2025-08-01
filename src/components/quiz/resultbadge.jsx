import React from 'react';

// Helper function to get more user-friendly names for pathways
export const getPathwayDisplay = (path) => {
  switch (path) {
    case "college":
      return "**College**";
    case "community":
      return "**Community College**";
    case "trade":
      return "**Trade School**";
    case "job":
      return "**Direct Job Entry**";
    default:
      return path; // Fallback for any unexpected paths
  }
};

// Function to generate the recommended next step phrase dynamically
export const generateNextStepPhrase = (mbtiTypeData) => {
  const pathways = new Set();
  mbtiTypeData.careers.forEach((career) => {
    // Ensure postSchoolPath exists before adding
    if (career.postSchoolPath) {
      pathways.add(career.postSchoolPath.toLowerCase()); // Store in lowercase for consistency
    }
  });

  let phrase = "Your journey could involve ";
  // Sort pathways for consistent output order (e.g., college, community, job, trade)
  // This custom sort order places 'college' first, then 'community', 'trade', 'job'.
  const sortedPathways = Array.from(pathways).sort((a, b) => {
    const order = { "college": 1, "community": 2, "trade": 3, "job": 4 };
    return (order[a] || 99) - (order[b] || 99); // Use 99 for unknown paths to push them to end
  });

  if (sortedPathways.length === 0) {
    phrase = "No specific post-school paths are listed for this type. Consider exploring various educational and career avenues.";
  } else if (sortedPathways.length === 1) {
    phrase += getPathwayDisplay(sortedPathways[0]);
  } else if (sortedPathways.length === 2) {
    phrase += `${getPathwayDisplay(sortedPathways[0])} or ${getPathwayDisplay(sortedPathways[1])}`;
  } else { // More than two pathways
    const lastPathway = getPathwayDisplay(sortedPathways.pop()); // Remove and get the last one
    phrase += `${sortedPathways.map((p) => getPathwayDisplay(p)).join(", ")}, or ${lastPathway}`;
  }

  phrase += ".";
  return phrase;
};

// Function to generate the recommended next step link dynamically based on the primary pathway
export const generateNextStepLink = (mbtiTypeData) => {
  const pathways = new Set();
  mbtiTypeData.careers.forEach((career) => {
    if (career.postSchoolPath) {
      pathways.add(career.postSchoolPath.toLowerCase());
    }
  });

  // Determine a primary link based on the most common or highest "level" pathway
  if (pathways.has("college")) {
    return "/college-guide";
  } else if (pathways.has("community")) {
    return "/two-year"; // Or a specific community college guide
  } else if (pathways.has("trade")) {
    return "/trade-school-guide"; // Or a specific trade school guide
  } else if (pathways.has("job")) {
    return "/direct-entry-careers";
  }
  return "/education-paths"; // A general fallback link
};


export const MBTI_MAP = {
  INTJ: {
    vibe: "You're a strategic mastermind who loves solving complex problems with logic and innovation.",
    strengths: ["Strategic", "Analytical", "Independent"],
    careers: [
      {
        title: "Software Developer",
        pathway: "Technology",
        postSchoolPath: "college",
        education: "Bachelor’s degree",
        salary: "$132,270", // Median annual wage (2023)
        outlook: "Much faster than average (25% growth, 2022-2032)",
        description: "Ideal for your logical approach to creating and building systems."
      },
      {
        title: "Architect",
        pathway: "Art & Design",
        postSchoolPath: "college",
        education: "Bachelor’s degree in Architecture",
        salary: "$95,490", // Median annual wage (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Perfect for designing complex structures with precision and vision."
      },
      {
        title: "Data Scientist",
        pathway: "Technology",
        postSchoolPath: "college",
        education: "Bachelor’s or Master’s in Data Science, Statistics, or CS",
        salary: "$108,700", // Median annual wage (2023)
        outlook: "Much faster than average (35% growth, 2022-2032)",
        description: "Suits your analytical mind in uncovering insights from data."
      },
      {
        title: "IT Support Specialist", // Added for 'community' or 'trade'
        pathway: "Technology",
        postSchoolPath: "community",
        education: "Associate's degree or certification",
        salary: "$59,660", // Median annual wage for Computer Support Specialists (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Applies problem-solving skills to technical issues, often through structured training."
      },
      {
        title: "Technical Writer", // Added for 'job' (can often start with strong writing skills)
        pathway: "Communications",
        postSchoolPath: "job",
        education: "Bachelor's degree (preferred) or strong portfolio",
        salary: "$79,160", // Median annual wage (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Translates complex technical information into clear, concise documentation."
      }
    ],
    relevantMajors: ["Computer Science", "Engineering", "Mathematics", "Architecture", "Information Technology"]
  },
  INTP: {
    vibe: "You're a curious and innovative thinker, always dissecting ideas and exploring new theories.",
    strengths: ["Logical", "Innovative", "Curious"],
    careers: [
      {
        title: "Academic Researcher",
        pathway: "Research & Academia",
        postSchoolPath: "college",
        education: "Master’s or Ph.D.",
        salary: "$84,380", // Median annual wage for Postsecondary Teachers (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Fits your desire to delve deep into subjects and uncover new knowledge."
      },
      {
        title: "Engineer (R&D)",
        pathway: "Engineering",
        postSchoolPath: "college",
        education: "Bachelor’s degree in Engineering",
        salary: "$100,830", // Median annual wage for Mechanical Engineers (2023)
        outlook: "Faster than average (10% growth, 2022-2032)",
        description: "Great for applying logical principles to design and build solutions."
      },
      {
        title: "Philosopher/Theorist",
        pathway: "Research & Academia",
        postSchoolPath: "college",
        education: "Ph.D.",
        salary: "$84,380", // Median annual wage for Postsecondary Teachers (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Matches your love for exploring fundamental questions and concepts."
      },
      {
        title: "Lab Technician", // Added for 'community'
        pathway: "Science & Research",
        postSchoolPath: "community",
        education: "Associate's degree or certificate",
        salary: "$53,880", // Median annual wage for Medical and Clinical Laboratory Technologists (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Conducts experiments and analyses, supporting scientific research."
      },
      {
        title: "Scientific Journalist", // Added for 'job' (with strong writing/research)
        pathway: "Journalism & Media",
        postSchoolPath: "job",
        education: "Bachelor's degree (preferred) or strong portfolio",
        salary: "$55,960", // Median annual wage for Reporters and Correspondents (2023)
        outlook: "Little or no change (-2% decline, 2022-2032)",
        description: "Communicates complex scientific concepts to a general audience."
      }
    ],
    relevantMajors: ["Physics", "Philosophy", "Computer Science", "Engineering", "Chemistry", "Biology"]
  },
  ENTJ: {
    vibe: "You're a natural-born leader, decisive and efficient, who thrives on achieving ambitious goals.",
    strengths: ["Decisive", "Efficient", "Leadership-oriented"],
    careers: [
      {
        title: "Business Executive",
        pathway: "Business & Management",
        postSchoolPath: "college",
        education: "Bachelor's or Master's degree",
        salary: "$99,100", // Median annual wage for Top Executives (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Ideal for steering organizations and implementing strategic visions."
      },
      {
        title: "Lawyer",
        pathway: "Legal",
        postSchoolPath: "college",
        education: "Juris Doctor (J.D.)",
        salary: "$145,760", // Median annual wage (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Suits your argumentative skill and ability to lead complex cases."
      },
      {
        title: "Management Consultant",
        pathway: "Consulting",
        postSchoolPath: "college",
        education: "Bachelor's degree (often MBA preferred)",
        salary: "$99,440", // Median annual wage for Management Analysts (2023)
        outlook: "Faster than average (10% growth, 2022-2032)",
        description: "Perfect for analyzing businesses and guiding them to success."
      },
      {
        title: "Construction Manager", // Added for 'trade' (can start with experience/apprenticeship)
        pathway: "Construction & Trades",
        postSchoolPath: "trade",
        education: "High school diploma + extensive experience or associate degree",
        salary: "$104,700", // Median annual wage (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Oversees building projects, ensuring efficiency and timely completion."
      },
      {
        title: "Sales Director", // Added for 'job' (can advance from sales roles)
        pathway: "Marketing & Sales",
        postSchoolPath: "job",
        education: "Bachelor's degree (often preferred) or extensive sales experience",
        salary: "$146,800", // Median annual wage for Sales Managers (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Leads sales teams and develops strategies to achieve revenue goals."
      }
    ],
    relevantMajors: ["Business Administration", "Law", "Economics", "Management", "Finance"]
  },
  ENTP: {
    vibe: "You're an energetic and inventive debater, always seeking new challenges and innovative solutions.",
    strengths: ["Energetic", "Inventive", "Quick-witted"],
    careers: [
      {
        title: "Entrepreneur",
        pathway: "Business & Management",
        postSchoolPath: "college", // Can be direct entry, also college for training
        education: "Varies (often Bachelor's in Business)",
        salary: "$118,500", // Median annual wage for Management Occupations (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Great for taking initiative and building new ventures from the ground up."
      },
      {
        title: "Marketing Strategist",
        pathway: "Marketing & Sales",
        postSchoolPath: "college",
        education: "Bachelor’s degree in Marketing or related field",
        salary: "$146,800", // Median annual wage for Marketing Managers (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Fits your creative mind in developing compelling campaigns."
      },
      {
        title: "Creative Director",
        pathway: "Art & Design",
        postSchoolPath: "college",
        education: "Bachelor’s in Art, Design, or Marketing",
        salary: "$108,290", // Median annual wage for Art Directors (2023)
        outlook: "Slower than average (2% growth, 2022-2032)",
        description: "Ideal for leading artistic visions and inspiring creative teams."
      },
      {
        title: "Patent Agent", // Added for 'community' (often involves technical background + certification)
        pathway: "Legal",
        postSchoolPath: "community",
        education: "Bachelor's in science/engineering + patent bar exam",
        salary: "$135,000", // Average for Patent Agents
        outlook: "Faster than average (8% growth, 2022-2032 for Lawyers)",
        description: "Combines technical understanding with legal principles to draft patent applications."
      },
      {
        title: "Innovations Consultant", // Added for 'job' (experience-based)
        pathway: "Consulting",
        postSchoolPath: "job",
        education: "Varies; strong problem-solving and industry experience",
        salary: "$99,440", // Median annual wage for Management Analysts (2023)
        outlook: "Faster than average (10% growth, 2022-2032)",
        description: "Helps businesses develop and implement new ideas and technologies."
      }
    ],
    relevantMajors: ["Business", "Marketing", "Communications", "Design", "Innovation", "Engineering"]
  },
  INFJ: {
    vibe: "You're an insightful and compassionate advocate, driven by your values to make a meaningful difference.",
    strengths: ["Insightful", "Compassionate", "Value-driven"],
    careers: [
      {
        title: "Psychologist",
        pathway: "Healthcare",
        postSchoolPath: "college",
        education: "Doctoral degree (Ph.D. or Psy.D.)",
        salary: "$94,010", // Median annual wage (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Suits your deep understanding of human behavior and desire to help."
      },
      {
        title: "Nonprofit Director",
        pathway: "Community & Social Services",
        postSchoolPath: "college",
        education: "Bachelor's degree (Master's often preferred)",
        salary: "$76,700", // Median annual wage for Social and Community Service Managers (2023)
        outlook: "Faster than average (9% growth, 2022-2032)",
        description: "Perfect for leading initiatives that align with your strong values."
      },
      {
        title: "Writer/Editor",
        pathway: "Art & Design",
        postSchoolPath: "college",
        education: "Bachelor’s in English, Journalism, or Communications",
        salary: "$73,150", // Median annual wage for Writers and Authors (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Ideal for expressing complex ideas and emotions through storytelling."
      },
      {
        title: "Social Worker Assistant", // Added for 'community' or 'job'
        pathway: "Community & Social Services",
        postSchoolPath: "community",
        education: "Associate's degree or certificate",
        salary: "$37,270", // Median annual wage for Social and Human Service Assistants (2023)
        outlook: "Faster than average (9% growth, 2022-2032)",
        description: "Provides direct support to individuals and families, helping them access resources."
      },
      {
        title: "Community Organizer", // Added for 'job' (can be experience-based)
        pathway: "Community & Social Services",
        postSchoolPath: "job",
        education: "High school diploma or Bachelor's (preferred)",
        salary: "$49,420", // Median annual wage for Community Health Workers (2023)
        outlook: "Much faster than average (14% growth, 2022-2032)",
        description: "Mobilizes communities to advocate for social change and address local issues."
      }
    ],
    relevantMajors: ["Psychology", "Social Work", "English", "Sociology", "Counseling"]
  },
  INFP: {
    vibe: "You're a creative and idealistic dreamer, driven by your personal values and a desire for harmony.",
    strengths: ["Creative", "Compassionate", "Idealistic"],
    careers: [
      {
        title: "Author/Novelist",
        pathway: "Art & Design",
        postSchoolPath: "college",
        education: "Bachelor’s in English, Creative Writing, or related field",
        salary: "$73,150", // Median annual wage for Writers and Authors (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Fits your imaginative spirit in crafting compelling narratives and worlds."
      },
      {
        title: "Therapist/Counselor",
        pathway: "Healthcare",
        postSchoolPath: "college",
        education: "Master’s degree",
        salary: "$57,070", // Median annual wage for Marriage and Family Therapists (2023)
        outlook: "Much faster than average (15% growth, 2022-2032)",
        description: "Great for connecting deeply with others and guiding them to well-being."
      },
      {
        title: "Art Director",
        pathway: "Art & Design",
        postSchoolPath: "college",
        education: "Bachelor’s in Art, Design, or Marketing",
        salary: "$108,290", // Median annual wage (2023)
        outlook: "Slower than average (2% growth, 2022-2032)",
        description: "Perfect for bringing artistic visions to life and inspiring creative teams."
      },
      {
        title: "Librarian Assistant", // Added for 'community'
        pathway: "Education & Training",
        postSchoolPath: "community",
        education: "Associate's degree or certificate",
        salary: "$38,400", // Median annual wage for Library Technicians and Assistants (2023)
        outlook: "Slower than average (-2% decline, 2022-2032)",
        description: "Supports library operations, helping patrons and organizing resources."
      },
      {
        title: "Freelance Artist", // Added for 'job'
        pathway: "Art & Design",
        postSchoolPath: "job",
        education: "Varies; strong portfolio and self-discipline",
        salary: "Varies widely",
        outlook: "Varies",
        description: "Creates visual art for clients across various mediums, expressing unique vision."
      }
    ],
    relevantMajors: ["Creative Writing", "Fine Arts", "Psychology", "Counseling", "Liberal Arts"]
  },
  ENFJ: {
    vibe: "You're a charismatic and empathetic leader, inspiring others and building strong, positive connections.",
    strengths: ["Charismatic", "Empathetic", "Inspiring"],
    careers: [
      {
        title: "Teacher (K-12)",
        pathway: "Education & Training",
        postSchoolPath: "college",
        education: "Bachelor’s in Education + State Teaching Credential",
        salary: "$65,220", // Median annual wage for High School Teachers (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Ideal for guiding and motivating students with your natural warmth."
      },
      {
        title: "Public Relations Specialist",
        pathway: "Marketing & Sales",
        postSchoolPath: "college",
        education: "Bachelor’s degree in Public Relations, Journalism, or Communications",
        salary: "$70,050", // Median annual wage (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Suits your ability to connect with people and manage public image."
      },
      {
        title: "HR Manager",
        pathway: "Business & Management",
        postSchoolPath: "college",
        education: "Bachelor's degree",
        salary: "$136,890", // Median annual wage for Human Resources Managers (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Perfect for fostering a positive work environment and supporting employees."
      },
      {
        title: "Youth Program Coordinator", // Added for 'community' or 'job'
        pathway: "Community & Social Services",
        postSchoolPath: "community",
        education: "Associate's degree or relevant experience",
        salary: "$32,600", // Median annual wage for Recreation Workers (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Organizes and leads activities that foster positive development in young people."
      },
      {
        title: "Flight Attendant", // Added for 'job' (direct entry with training)
        pathway: "Travel & Hospitality",
        postSchoolPath: "job",
        education: "High school diploma + airline training",
        salary: "$68,760", // Median annual wage (2023)
        outlook: "Faster than average (11% growth, 2022-2032)",
        description: "Ensures passenger safety and comfort, excelling in service and communication."
      }
    ],
    relevantMajors: ["Education", "Communications", "Human Resources", "Marketing", "Social Sciences"]
  },
  ENFP: {
    vibe: "You're an imaginative and energetic enthusiast, always seeking new possibilities and exciting experiences.",
    strengths: ["Imaginative", "Energetic", "Empathetic"],
    careers: [
      {
        title: "Actor/Performer",
        pathway: "Art & Design",
        postSchoolPath: "job",
        education: "Varies; talent and experience are key",
        salary: "Varies widely ($27.97/hour, 2023)", // Median hourly wage for Actors (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Great for your expressive nature and ability to entertain audiences."
      },
      {
        title: "Journalist/Reporter",
        pathway: "Journalism & Media",
        postSchoolPath: "college",
        education: "Bachelor’s degree in Journalism or Communications",
        salary: "$55,960", // Median annual wage for Reporters and Correspondents (2023)
        outlook: "Little or no change (-2% decline, 2022-2032)",
        description: "Fits your curiosity and ability to tell compelling stories."
      },
      {
        title: "Social Entrepreneur",
        pathway: "Community & Social Services",
        postSchoolPath: "college", // Often involves a degree
        education: "Varies (often Bachelor's in Business, Social Work, or related field)",
        salary: "$64,360", // Median annual wage for Fundraisers (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Ideal for combining your innovative ideas with a passion for social impact."
      },
      {
        title: "Event Coordinator", // Added for 'community'
        pathway: "Hospitality & Events",
        postSchoolPath: "community",
        education: "Associate's degree or certification",
        salary: "$55,460", // Median annual wage for Meeting, Convention, and Event Planners (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Organizes and manages events, bringing creative concepts to life."
      },
      {
        title: "Tour Guide", // Added for 'job'
        pathway: "Travel & Hospitality",
        postSchoolPath: "job",
        education: "High school diploma or equivalent",
        salary: "$34,220", // Median annual wage (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Shares knowledge and enthusiasm about places of interest with groups."
      }
    ],
    relevantMajors: ["Drama", "Journalism", "Communications", "Business", "Marketing"]
  },
  ISTJ: {
    vibe: "You're a responsible and detail-oriented organizer, valuing structure and dependable execution.",
    strengths: ["Responsible", "Detail-Oriented", "Practical"],
    careers: [
      {
        title: "Accountant",
        pathway: "Business & Finance",
        postSchoolPath: "college",
        education: "Bachelor's degree in accounting",
        salary: "$79,880", // Median annual wage (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Perfect for your precision and focus on maintaining order in finances."
      },
      {
        title: "Police Officer",
        pathway: "Public Service",
        postSchoolPath: "trade",
        education: "High school diploma + Police Academy",
        salary: "$72,280", // Median annual wage for Police and Detectives (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Suits your strong sense of duty and commitment to upholding rules."
      },
      {
        title: "Civil Engineer", // Specific type of Engineer
        pathway: "Engineering",
        postSchoolPath: "college",
        education: "Bachelor’s degree in Civil Engineering",
        salary: "$96,330", // Median annual wage (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Ideal for designing and overseeing essential infrastructure projects."
      },
      {
        title: "Paralegal", // Added for 'community'
        pathway: "Legal",
        postSchoolPath: "community",
        education: "Associate's degree or postsecondary certificate",
        salary: "$60,900", // Median annual wage (2023)
        outlook: "Faster than average (7% growth, 2022-2032)",
        description: "Assists lawyers with legal research, documentation, and case preparation."
      },
      {
        title: "Bookkeeper", // Added for 'job' (can be entry-level with training)
        pathway: "Business & Finance",
        postSchoolPath: "job",
        education: "High school diploma; some postsecondary coursework preferred",
        salary: "$47,440", // Median annual wage for Bookkeeping, Accounting, and Auditing Clerks (2023)
        outlook: "Little or no change (-2% decline, 2022-2032)",
        description: "Maintains financial records, ensuring accuracy and compliance."
      }
    ],
    relevantMajors: ["Accounting", "Criminal Justice", "Engineering", "Business Administration", "Paralegal Studies"]
  },
  ISFJ: {
    vibe: "You're a nurturing and reliable supporter, always ready to care for others and maintain harmony.",
    strengths: ["Nurturing", "Reliable", "Supportive"],
    careers: [
      {
        title: "Registered Nurse (RN)",
        pathway: "Healthcare",
        postSchoolPath: "college",
        education: "Bachelor’s in Nursing (BSN) + RN license",
        salary: "$86,070", // Median annual wage for Registered Nurses (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Great for providing direct care and support to those in need."
      },
      {
        title: "Librarian",
        pathway: "Education & Training",
        postSchoolPath: "college",
        education: "Master’s in Library and Information Science (MLIS)",
        salary: "$64,320", // Median annual wage (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Fits your organized nature and desire to provide accessible information."
      },
      {
        title: "Elementary School Teacher",
        pathway: "Education & Training",
        postSchoolPath: "college",
        education: "Bachelor’s in Education + State Teaching Credential",
        salary: "$63,680", // Median annual wage (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Perfect for patiently guiding young learners and creating a supportive environment."
      },
      {
        title: "Dental Assistant", // Added for 'community' or 'trade'
        pathway: "Healthcare",
        postSchoolPath: "trade",
        education: "High school diploma + dental assisting program/certificate",
        salary: "$46,540", // Median annual wage (2023)
        outlook: "Faster than average (7% growth, 2022-2032)",
        description: "Assists dentists during procedures, prepares patients, and manages records."
      },
      {
        title: "Child Care Worker", // Added for 'job'
        pathway: "Community & Social Services",
        postSchoolPath: "job",
        education: "High school diploma or equivalent; some postsecondary education preferred",
        salary: "$30,180", // Median annual wage for Childcare Workers (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Provides care and supervision to children in various settings."
      }
    ],
    relevantMajors: ["Nursing", "Library Science", "Education", "Social Work", "Early Childhood Education"]
  },
  ESTJ: {
    vibe: "You're an organized and practical leader, focused on efficiency and getting things done effectively.",
    strengths: ["Organized", "Practical", "Leadership-oriented"],
    careers: [
      {
        title: "Operations Manager",
        pathway: "Business & Management",
        postSchoolPath: "college",
        education: "Bachelor’s in Business or related field",
        salary: "$94,920", // Median annual wage for Operations Research Analysts (2023)
        outlook: "Much faster than average (23% growth, 2022-2032)",
        description: "Ideal for overseeing processes and ensuring smooth execution."
      },
      {
        title: "School Principal",
        pathway: "Education & Training",
        postSchoolPath: "college",
        education: "Master's degree + administrative license",
        salary: "$103,100", // Median annual wage for Education Administrators, K-12 (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Suits your leadership skills in guiding educational institutions."
      },
      {
        title: "Project Manager",
        pathway: "Business & Management",
        postSchoolPath: "college",
        education: "Bachelor’s in Business or related field",
        salary: "$104,700", // Median annual wage for Construction Managers (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Perfect for planning, executing, and closing projects efficiently."
      },
      {
        title: "Electrical Lineman", // Added for 'trade'
        pathway: "Trades & Technical",
        postSchoolPath: "trade",
        education: "High school diploma + apprenticeship",
        salary: "$88,720", // Median annual wage for Electrical Power-Line Installers and Repairers (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Installs and repairs electrical power lines, ensuring reliable power supply."
      },
      {
        title: "Office Manager", // Added for 'job' (can be experience-based)
        pathway: "Business & Management",
        postSchoolPath: "job",
        education: "High school diploma or Associate's degree",
        salary: "$61,350", // Median annual wage for Administrative Services Managers (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Oversees daily office operations, maintaining efficiency and order."
      }
    ],
    relevantMajors: ["Business Administration", "Education Leadership", "Management", "Construction Management"]
  },
  ESFJ: {
    vibe: "You're a social and caring individual, excelling at connecting with people and organizing community efforts.",
    strengths: ["Social", "Caring", "Organized"],
    careers: [
      {
        title: "Event Planner",
        pathway: "Hospitality & Events",
        postSchoolPath: "college", // Can also be experience
        education: "Bachelor's degree",
        salary: "$55,460", // Median annual wage (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Great for organizing memorable experiences and delighting guests."
      },
      {
        title: "Nurse Educator",
        pathway: "Education & Training",
        postSchoolPath: "college",
        education: "Master's or doctoral degree in nursing",
        salary: "$84,380", // Median annual wage for Postsecondary Teachers (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Fits your nurturing side in teaching and guiding future healthcare professionals."
      },
      {
        title: "Customer Success Manager",
        pathway: "Business & Management",
        postSchoolPath: "college",
        education: "Bachelor's degree",
        salary: "$99,440", // Median annual wage for Management Analysts (2023)
        outlook: "Faster than average (10% growth, 2022-2032)",
        description: "Ideal for building strong relationships and ensuring client satisfaction."
      },
      {
        title: "Medical Assistant", // Added for 'community' or 'trade'
        pathway: "Healthcare",
        postSchoolPath: "community",
        education: "Postsecondary non-degree award or Associate's degree",
        salary: "$42,000", // Median annual wage (2023)
        outlook: "Much faster than average (14% growth, 2022-2032)",
        description: "Performs administrative and clinical tasks in healthcare settings, assisting patients."
      },
      {
        title: "Retail Manager", // Added for 'job' (can be experience-based)
        pathway: "Business & Management",
        postSchoolPath: "job",
        education: "High school diploma or Associate's degree",
        salary: "$48,420", // Median annual wage for Retail Salespersons (2023)
        outlook: "Little or no change (-1% decline, 2022-2032)",
        description: "Oversees daily operations of a retail store, focusing on customer service and sales."
      }
    ],
    relevantMajors: ["Hospitality Management", "Nursing", "Business", "Communications", "Marketing"]
  },
  ISTP: {
    vibe: "You're a tactical and observant problem-solver, excelling at hands-on tasks and figuring out how things work.",
    strengths: ["Tactical", "Observant", "Efficient"],
    careers: [
      {
        title: "Automotive Mechanic", // Renamed for clarity
        pathway: "Trades & Technical",
        postSchoolPath: "trade",
        education: "High school diploma or equivalent; postsecondary training",
        salary: "$49,150", // Median annual wage for Automotive Technicians (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Perfect for your practical skills in diagnosing and fixing mechanical issues."
      },
      {
        title: "Pilot (Commercial)", // Specific type of Pilot
        pathway: "Transportation",
        postSchoolPath: "college",
        education: "Bachelor's degree (often) + flight training",
        salary: "$119,770", // Median annual wage for Commercial Pilots (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Suits your calm under pressure and precision in operating complex machinery."
      },
      {
        title: "HVAC Technician", // Added as a 'trade' option
        pathway: "Trades & Technical",
        postSchoolPath: "trade",
        education: "High school diploma + vocational training/apprenticeship",
        salary: "$59,620", // Median annual wage for Heating, Air Conditioning, and Refrigeration Mechanics and Installers (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Installs, maintains, and repairs heating, ventilation, air conditioning, and refrigeration systems."
      },
      {
        title: "Computer Repair Technician", // Added for 'community'
        pathway: "Technology",
        postSchoolPath: "community",
        education: "Associate’s degree or postsecondary non-degree award",
        salary: "$59,660", // Median annual wage for Computer Support Specialists (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Diagnoses and repairs computer hardware and software issues."
      },
      {
        title: "Machinist", // Added for 'job' (often apprenticeship/on-the-job training)
        pathway: "Manufacturing & Trades",
        postSchoolPath: "job",
        education: "High school diploma + apprenticeship or on-the-job training",
        salary: "$53,840", // Median annual wage (2023)
        outlook: "Slower than average (2% growth, 2022-2032)",
        description: "Operates machine tools to produce precision metal parts."
      }
    ],
    relevantMajors: ["Automotive Technology", "Aviation", "Electronics", "Vocational Training", "Engineering Technology"]
  },
  ISFP: {
    vibe: "You're an artistic and sensitive free spirit, expressing yourself creatively and enjoying the present moment.",
    strengths: ["Artistic", "Sensitive", "Easygoing"],
    careers: [
      {
        title: "Graphic Designer",
        pathway: "Art & Design",
        postSchoolPath: "college",
        education: "Bachelor’s degree",
        salary: "$63,770", // Median annual wage (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Great for blending your artistic eye with practical digital skills."
      },
      {
        title: "Veterinary Technician",
        pathway: "Healthcare",
        postSchoolPath: "community",
        education: "Associate’s degree or postsecondary non-degree award",
        salary: "$43,760", // Median annual wage (2023)
        outlook: "Much faster than average (21% growth, 2022-2032)",
        description: "Fits your compassionate nature in caring for animals."
      },
      {
        title: "Florist",
        pathway: "Art & Design",
        postSchoolPath: "job",
        education: "High school diploma or equivalent",
        salary: "$33,620", // Median annual wage (2023)
        outlook: "Slower than average (2% growth, 2022-2032)",
        description: "Perfect for your artistic touch in creating beautiful arrangements."
      },
      {
        title: "Ceramic Artist", // Added as a 'trade' (can be taught through workshops/vocational)
        pathway: "Art & Design",
        postSchoolPath: "trade",
        education: "Varies; studio training, workshops, or associate's degree",
        salary: "Varies widely",
        outlook: "Varies",
        description: "Creates pottery, sculpture, and other art forms from clay."
      },
      {
        title: "Photographer", // Added for 'job' (can be self-taught with portfolio)
        pathway: "Art & Design",
        postSchoolPath: "job",
        education: "Varies; strong portfolio, often self-taught or workshops",
        salary: "$44,790", // Median annual wage for Photographers (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Captures images for artistic, commercial, or journalistic purposes."
      }
    ],
    relevantMajors: ["Graphic Design", "Fine Arts", "Veterinary Technology", "Photography", "Horticulture"]
  },
  ESTP: {
    vibe: "You're an energetic and practical adventurer, thriving in dynamic environments and hands-on situations.",
    strengths: ["Energetic", "Practical", "Adventurous"],
    careers: [
      {
        title: "Sales Representative",
        pathway: "Marketing & Sales",
        postSchoolPath: "job",
        education: "High school diploma or equivalent",
        salary: "$66,660", // Median annual wage for Wholesale and Manufacturing Sales Reps (2023)
        outlook: "Slower than average (2% growth, 2022-2032)",
        description: "Ideal for your persuasive communication and quick thinking on the go."
      },
      {
        title: "Paramedic",
        pathway: "Healthcare",
        postSchoolPath: "trade",
        education: "EMT certification or Associate’s degree in Paramedicine",
        salary: "$49,020", // Median annual wage for EMTs and Paramedics (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Suits your ability to act swiftly and decisively in emergency situations."
      },
      {
        title: "Construction Supervisor",
        pathway: "Construction & Trades",
        postSchoolPath: "trade",
        education: "High school diploma + apprenticeship or associate degree",
        salary: "$104,700", // Median annual wage for Construction Managers (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Perfect for leading teams and managing hands-on building projects."
      },
      {
        title: "Firefighter", // Added for 'job' or 'community'
        pathway: "Public Service",
        postSchoolPath: "job",
        education: "High school diploma + fire academy training",
        salary: "$57,170", // Median annual wage (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Responds to emergencies, fights fires, and provides emergency medical services."
      },
      {
        title: "Recreation & Fitness Instructor", // Added for 'community' or 'job'
        pathway: "Sports & Fitness",
        postSchoolPath: "community",
        education: "Certificate or Associate's degree; relevant certifications",
        salary: "$45,910", // Median annual wage for Fitness Trainers and Instructors (2023)
        outlook: "Much faster than average (14% growth, 2022-2032)",
        description: "Leads groups in physical activities and promotes healthy lifestyles."
      }
    ],
    relevantMajors: ["Business", "Emergency Medical Services", "Construction Management", "Fire Science", "Kinesiology"]
  },
  ESFP: {
    vibe: "You're a fun-loving and warm performer, bringing joy and energy to every situation.",
    strengths: ["Fun-Loving", "Energetic", "Warm"],
    careers: [
      {
        title: "Performer/Entertainer",
        pathway: "Art & Design",
        postSchoolPath: "job",
        education: "Varies; talent and experience are key",
        salary: "Varies widely ($27.97/hour, 2023)", // Median hourly wage for Actors (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Great for your expressive nature and ability to entertain audiences."
      },
      {
        title: "Recreation Coordinator",
        pathway: "Community & Social Services",
        postSchoolPath: "college",
        education: "Bachelor's degree",
        salary: "$32,600", // Median annual wage for Recreation Workers (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Fits your enthusiasm for organizing fun activities and events."
      },
      {
        title: "Hospitality Manager",
        pathway: "Hospitality & Events",
        postSchoolPath: "job", // Can be direct entry or bachelor's
        education: "High school diploma or Bachelor's in Hospitality",
        salary: "$68,960", // Median annual wage for Lodging Managers (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Ideal for creating welcoming experiences and leading service teams."
      },
      {
        title: "Travel Agent", // Added for 'community' (certifications often from community colleges)
        pathway: "Travel & Hospitality",
        postSchoolPath: "community",
        education: "High school diploma + travel school/certificate",
        salary: "$48,190", // Median annual wage (2023)
        outlook: "Little or no change (0% growth, 2022-2032)",
        description: "Helps clients plan and book travel arrangements."
      },
      {
        title: "Hairdresser/Cosmetologist", // Added for 'trade'
        pathway: "Personal Care Services",
        postSchoolPath: "trade",
        education: "High school diploma + cosmetology program",
        salary: "$35,660", // Median annual wage for Barbers, Hairstylists, and Cosmetologists (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Uses creative skills to style hair, apply makeup, and provide beauty services."
      }
    ],
    relevantMajors: ["Theater", "Recreation Management", "Hospitality Management", "Cosmetology", "Tourism"]
  }
};
