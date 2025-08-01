import React from 'react';

export const MBTI_MAP = {
  INTJ: {
    vibe: "You're a strategic mastermind who loves solving complex problems with logic and innovation.",
    strengths: ["Strategic", "Analytical", "Independent"],
    careers: [
      { 
        title: "Software Developer", 
        education: "Bachelor’s degree", 
        salary: "$132,270", // Median annual wage (2023)
        outlook: "Much faster than average (25% growth, 2022-2032)",
        description: "Ideal for your logical approach to creating and building systems." 
      },
      { 
        title: "Architect", 
        education: "Bachelor’s degree in Architecture", 
        salary: "$95,490", // Median annual wage (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Perfect for designing complex structures with precision and vision." 
      },
      { 
        title: "Data Scientist", 
        education: "Bachelor’s or Master’s in Data Science, Statistics, or CS", 
        salary: "$108,700", // Median annual wage (2023)
        outlook: "Much faster than average (35% growth, 2022-2032)",
        description: "Suits your analytical mind in uncovering insights from data." 
      }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree"
  },
  INTP: {
    vibe: "You're a curious and innovative thinker, always dissecting ideas and exploring new theories.",
    strengths: ["Logical", "Innovative", "Curious"],
    careers: [
      { 
        title: "Academic Researcher", 
        education: "Master’s or Ph.D.", 
        salary: "$84,380", // Median annual wage for Postsecondary Teachers (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Fits your desire to delve deep into subjects and uncover new knowledge." 
      },
      { 
        title: "Engineer", 
        education: "Bachelor’s degree in Engineering", 
        salary: "$100,830", // Median annual wage for Mechanical Engineers (2023)
        outlook: "Faster than average (10% growth, 2022-2032)",
        description: "Great for applying logical principles to design and build solutions." 
      },
      { 
        title: "Philosopher", 
        education: "Ph.D.", 
        salary: "$84,380", // Median annual wage for Postsecondary Teachers (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Matches your love for exploring fundamental questions and concepts." 
      }
    ],
    recommendedNextStep: "Master’s or Ph.D."
  },
  ENTJ: {
    vibe: "You're a natural-born leader, decisive and efficient, who thrives on achieving ambitious goals.",
    strengths: ["Decisive", "Efficient", "Leadership-oriented"],
    careers: [
      { 
        title: "Business Executive", 
        education: "Bachelor's or Master's degree", 
        salary: "$99,100", // Median annual wage for Top Executives (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Ideal for steering organizations and implementing strategic visions." 
      },
      { 
        title: "Lawyer", 
        education: "Juris Doctor (J.D.)", 
        salary: "$145,760", // Median annual wage (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Suits your argumentative skill and ability to lead complex cases." 
      },
      { 
        title: "Management Consultant", 
        education: "Bachelor's degree (often MBA preferred)", 
        salary: "$99,440", // Median annual wage for Management Analysts (2023)
        outlook: "Faster than average (10% growth, 2022-2032)",
        description: "Perfect for analyzing businesses and guiding them to success." 
      }
    ],
    recommendedNextStep: "Bachelor's, Master's, or J.D. Degree"
  },
  ENTP: {
    vibe: "You're an energetic and inventive debater, always seeking new challenges and innovative solutions.",
    strengths: ["Energetic", "Inventive", "Quick-witted"],
    careers: [
      { 
        title: "Entrepreneur", 
        education: "Varies (often Bachelor's in Business)", 
        salary: "$118,500", // Median annual wage for Management Occupations (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Great for taking initiative and building new ventures from the ground up." 
      },
      { 
        title: "Marketing Strategist", 
        education: "Bachelor’s degree in Marketing or related field", 
        salary: "$146,800", // Median annual wage for Marketing Managers (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Fits your creative mind in developing compelling campaigns." 
      },
      { 
        title: "Creative Director", 
        education: "Bachelor’s in Art, Design, or Marketing", 
        salary: "$108,290", // Median annual wage for Art Directors (2023)
        outlook: "Slower than average (2% growth, 2022-2032)",
        description: "Ideal for leading artistic visions and inspiring creative teams." 
      }
    ],
    recommendedNextStep: "Bachelor's Degree"
  },
  INFJ: {
    vibe: "You're an insightful and compassionate advocate, driven by your values to make a meaningful difference.",
    strengths: ["Insightful", "Compassionate", "Value-driven"],
    careers: [
      { 
        title: "Psychologist", 
        education: "Doctoral degree (Ph.D. or Psy.D.)", 
        salary: "$94,010", // Median annual wage (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Suits your deep understanding of human behavior and desire to help." 
      },
      { 
        title: "Nonprofit Director", 
        education: "Bachelor's degree (Master's often preferred)", 
        salary: "$76,700", // Median annual wage for Social and Community Service Managers (2023)
        outlook: "Faster than average (9% growth, 2022-2032)",
        description: "Perfect for leading initiatives that align with your strong values." 
      },
      { 
        title: "Writer", 
        education: "Bachelor’s in English, Journalism, or Communications", 
        salary: "$73,150", // Median annual wage for Writers and Authors (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Ideal for expressing complex ideas and emotions through storytelling." 
      }
    ],
    recommendedNextStep: "Bachelor's or Doctoral Degree"
  },
  INFP: {
    vibe: "You're a creative and idealistic dreamer, driven by your personal values and a desire for harmony.",
    strengths: ["Creative", "Compassionate", "Idealistic"],
    careers: [
      { 
        title: "Author", 
        education: "Bachelor’s in English, Creative Writing, or related field", 
        salary: "$73,150", // Median annual wage for Writers and Authors (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Fits your imaginative spirit in crafting compelling narratives and worlds." 
      },
      { 
        title: "Therapist", 
        education: "Master’s degree", 
        salary: "$57,070", // Median annual wage for Marriage and Family Therapists (2023)
        outlook: "Much faster than average (15% growth, 2022-2032)",
        description: "Great for connecting deeply with others and guiding them to well-being." 
      },
      { 
        title: "Art Director", 
        education: "Bachelor’s in Art, Design, or Marketing", 
        salary: "$108,290", // Median annual wage (2023)
        outlook: "Slower than average (2% growth, 2022-2032)",
        description: "Perfect for bringing artistic visions to life and inspiring creative teams." 
      }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree"
  },
  ENFJ: {
    vibe: "You're a charismatic and empathetic leader, inspiring others and building strong, positive connections.",
    strengths: ["Charismatic", "Empathetic", "Inspiring"],
    careers: [
      { 
        title: "Teacher", 
        education: "Bachelor’s in Education + State Teaching Credential", 
        salary: "$65,220", // Median annual wage for High School Teachers (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Ideal for guiding and motivating students with your natural warmth." 
      },
      { 
        title: "Public Relations Specialist", 
        education: "Bachelor’s degree in Public Relations, Journalism, or Communications", 
        salary: "$70,050", // Median annual wage (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Suits your ability to connect with people and manage public image." 
      },
      { 
        title: "HR Manager", 
        education: "Bachelor's degree", 
        salary: "$136,890", // Median annual wage for Human Resources Managers (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Perfect for fostering a positive work environment and supporting employees." 
      }
    ],
    recommendedNextStep: "Bachelor's Degree"
  },
  ENFP: {
    vibe: "You're an imaginative and energetic enthusiast, always seeking new possibilities and exciting experiences.",
    strengths: ["Imaginative", "Energetic", "Empathetic"],
    careers: [
      { 
        title: "Actor", 
        education: "Varies; talent and experience are key", 
        salary: "Varies widely ($27.97/hour, 2023)", // Median hourly wage for Actors (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Great for expressing yourself creatively and connecting with audiences." 
      },
      { 
        title: "Journalist", 
        education: "Bachelor’s degree in Journalism or Communications", 
        salary: "$55,960", // Median annual wage for Reporters and Correspondents (2023)
        outlook: "Little or no change (-2% decline, 2022-2032)",
        description: "Fits your curiosity and ability to tell compelling stories." 
      },
      { 
        title: "Social Entrepreneur", 
        education: "Varies (often Bachelor's in Business, Social Work, or related field)", 
        salary: "$64,360", // Median annual wage for Fundraisers (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Ideal for combining your innovative ideas with a passion for social impact." 
      }
    ],
    recommendedNextStep: "Bachelor's Degree or Relevant Training/Experience"
  },
  ISTJ: {
    vibe: "You're a responsible and detail-oriented organizer, valuing structure and dependable execution.",
    strengths: ["Responsible", "Detail-Oriented", "Practical"],
    careers: [
      { 
        title: "Accountant", 
        education: "Bachelor's degree in accounting", 
        salary: "$79,880", // Median annual wage (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Perfect for your precision and focus on maintaining order in finances." 
      },
      { 
        title: "Police Officer", 
        education: "High school diploma + Police Academy", 
        salary: "$72,280", // Median annual wage for Police and Detectives (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Suits your strong sense of duty and commitment to upholding rules." 
      },
      { 
        title: "Engineer", 
        education: "Bachelor’s degree in Engineering", 
        salary: "$100,830", // Median annual wage for Mechanical Engineers (2023)
        outlook: "Faster than average (10% growth, 2022-2032)",
        description: "Ideal for designing and overseeing essential infrastructure projects." 
      }
    ],
    recommendedNextStep: "Bachelor's Degree or Police Academy Training"
  },
  ISFJ: {
    vibe: "You're a nurturing and reliable supporter, always ready to care for others and maintain harmony.",
    strengths: ["Nurturing", "Reliable", "Supportive"],
    careers: [
      { 
        title: "Nurse", 
        education: "Bachelor’s in Nursing (BSN) + RN license", 
        salary: "$86,070", // Median annual wage for Registered Nurses (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Great for providing direct care and support to those in need." 
      },
      { 
        title: "Librarian", 
        education: "Master’s in Library and Information Science (MLIS)", 
        salary: "$64,320", // Median annual wage (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Fits your organized nature and desire to provide accessible information." 
      },
      { 
        title: "Elementary Teacher", 
        education: "Bachelor’s in Education + State Teaching Credential", 
        salary: "$63,680", // Median annual wage (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Perfect for patiently guiding young learners and creating a supportive environment." 
      }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree"
  },
  ESTJ: {
    vibe: "You're an organized and practical leader, focused on efficiency and getting things done effectively.",
    strengths: ["Organized", "Practical", "Leadership-oriented"],
    careers: [
      { 
        title: "Operations Manager", 
        education: "Bachelor’s in Business or related field", 
        salary: "$94,920", // Median annual wage for Operations Research Analysts (2023)
        outlook: "Much faster than average (23% growth, 2022-2032)",
        description: "Ideal for overseeing processes and ensuring smooth execution." 
      },
      { 
        title: "School Principal", 
        education: "Master's degree + administrative license", 
        salary: "$103,100", // Median annual wage for Education Administrators, K-12 (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Suits your leadership skills in guiding educational institutions." 
      },
      { 
        title: "Project Manager", 
        education: "Bachelor’s in Business or related field", 
        salary: "$104,700", // Median annual wage for Construction Managers (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Perfect for planning, executing, and closing projects efficiently." 
      }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree"
  },
  ESFJ: {
    vibe: "You're a social and caring individual, excelling at connecting with people and organizing community efforts.",
    strengths: ["Social", "Caring", "Organized"],
    careers: [
      { 
        title: "Event Planner", 
        education: "Bachelor's degree", 
        salary: "$55,460", // Median annual wage (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Great for organizing memorable experiences and delighting guests." 
      },
      { 
        title: "Nurse Educator", 
        education: "Master's or doctoral degree in nursing", 
        salary: "$84,380", // Median annual wage for Postsecondary Teachers (2023)
        outlook: "Faster than average (8% growth, 2022-2032)",
        description: "Fits your nurturing side in teaching and guiding future healthcare professionals." 
      },
      { 
        title: "Customer Success Manager", 
        education: "Bachelor's degree", 
        salary: "$99,440", // Median annual wage for Management Analysts (2023)
        outlook: "Faster than average (10% growth, 2022-2032)",
        description: "Ideal for building strong relationships and ensuring client satisfaction." 
      }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree"
  },
  ISTP: {
    vibe: "You're a tactical and observant problem-solver, excelling at hands-on tasks and figuring out how things work.",
    strengths: ["Tactical", "Observant", "Efficient"],
    careers: [
      { 
        title: "Mechanic", 
        education: "High school diploma or equivalent; postsecondary training", 
        salary: "$49,150", // Median annual wage for Automotive Technicians (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Perfect for your practical skills in diagnosing and fixing mechanical issues." 
      },
      { 
        title: "Pilot", 
        education: "Bachelor's degree (often) + flight training", 
        salary: "$119,770", // Median annual wage for Commercial Pilots (2023)
        outlook: "Average (4% growth, 2022-2032)",
        description: "Suits your calm under pressure and precision in operating complex machinery." 
      },
      { 
        title: "Technician", 
        education: "Associate’s degree or postsecondary non-degree award", 
        salary: "$64,320", // Median annual wage for Electrical and Electronics Repairers (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Ideal for hands-on troubleshooting and maintaining technical systems." 
      }
    ],
    recommendedNextStep: "Postsecondary Training or Bachelor's Degree"
  },
  ISFP: {
    vibe: "You're an artistic and sensitive free spirit, expressing yourself creatively and enjoying the present moment.",
    strengths: ["Artistic", "Sensitive", "Easygoing"],
    careers: [
      { 
        title: "Graphic Designer", 
        education: "Bachelor’s degree", 
        salary: "$63,770", // Median annual wage (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Great for blending your artistic eye with practical digital skills." 
      },
      { 
        title: "Veterinary Technician", 
        education: "Associate’s degree or postsecondary non-degree award", 
        salary: "$43,760", // Median annual wage (2023)
        outlook: "Much faster than average (21% growth, 2022-2032)",
        description: "Fits your compassionate nature in caring for animals." 
      },
      { 
        title: "Florist", 
        education: "High school diploma or equivalent", 
        salary: "$33,620", // Median annual wage (2023)
        outlook: "Slower than average (2% growth, 2022-2032)",
        description: "Perfect for your artistic touch in creating beautiful arrangements." 
      }
    ],
    recommendedNextStep: "High School Diploma, Associate's, or Bachelor's Degree"
  },
  ESTP: {
    vibe: "You're an energetic and practical adventurer, thriving in dynamic environments and hands-on situations.",
    strengths: ["Energetic", "Practical", "Adventurous"],
    careers: [
      { 
        title: "Sales Representative", 
        education: "High school diploma or equivalent", 
        salary: "$66,660", // Median annual wage for Wholesale and Manufacturing Sales Reps (2023)
        outlook: "Slower than average (2% growth, 2022-2032)",
        description: "Ideal for your persuasive communication and quick thinking on the go." 
      },
      { 
        title: "Paramedic", 
        education: "EMT certification or Associate’s degree in Paramedicine", 
        salary: "$49,020", // Median annual wage for EMTs and Paramedics (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Suits your ability to act swiftly and decisively in emergency situations." 
      },
      { 
        title: "Construction Supervisor", 
        education: "High school diploma + apprenticeship or associate degree", 
        salary: "$104,700", // Median annual wage for Construction Managers (2023)
        outlook: "Average (5% growth, 2022-2032)",
        description: "Perfect for leading teams and managing hands-on building projects." 
      }
    ],
    recommendedNextStep: "High School Diploma with Training, or Associate's Degree"
  },
  ESFP: {
    vibe: "You're a fun-loving and warm performer, bringing joy and energy to every situation.",
    strengths: ["Fun-Loving", "Energetic", "Warm"],
    careers: [
      { 
        title: "Performer", 
        education: "Varies; talent and experience are key", 
        salary: "Varies widely ($27.97/hour, 2023)", // Median hourly wage for Actors (2023)
        outlook: "Slower than average (3% growth, 2022-2032)",
        description: "Great for your expressive nature and ability to entertain audiences." 
      },
      { 
        title: "Recreation Coordinator", 
        education: "Bachelor's degree", 
        salary: "$32,600", // Median annual wage for Recreation Workers (2023)
        outlook: "Faster than average (6% growth, 2022-2032)",
        description: "Fits your enthusiasm for organizing fun activities and events." 
      },
      { 
        title: "Hospitality Manager", 
        education: "High school diploma or Bachelor's in Hospitality", 
        salary: "$68,960", // Median annual wage for Lodging Managers (2023)
        outlook: "Slower than average (1% growth, 2022-2032)",
        description: "Ideal for creating welcoming experiences and leading service teams." 
      }
    ],
    recommendedNextStep: "Varies (Experience, High School, or Bachelor's Degree)"
  }
};
