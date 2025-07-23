// src/components/quiz/mbtimap.js

export const MBTI_MAP = {
  INTJ: {
    vibe: "You're a strategic mastermind who loves solving complex problems with logic and innovation.",
    strengths: ["Strategic", "Analytical", "Independent"],
    careers: [
      { name: "Software Developer", pathway: "college", description: "Ideal for your logical approach to creating and building systems." },
      { name: "Architect", pathway: "college", description: "Perfect for designing complex structures with precision and vision." },
      { name: "Data Scientist", pathway: "college", description: "Suits your analytical mind in uncovering insights from data." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Computer Science", "Engineering", "Mathematics", "Physics", "Economics"]
  },
  INTP: {
    vibe: "You're a curious and innovative thinker, always dissecting ideas and exploring new theories.",
    strengths: ["Logical", "Innovative", "Curious"],
    careers: [
      { name: "Academic Researcher", pathway: "college", description: "Fits your desire to delve deep into subjects and uncover new knowledge." },
      { name: "Engineer", pathway: "college", description: "Great for applying logical principles to design and build solutions." },
      { name: "Philosopher", pathway: "college", description: "Matches your love for exploring fundamental questions and concepts." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Computer Science", "Engineering", "Physics", "Philosophy", "Mathematics"]
  },
  ENTJ: {
    vibe: "You're a natural-born leader, decisive and efficient, who thrives on achieving ambitious goals.",
    strengths: ["Decisive", "Efficient", "Leadership-oriented"],
    careers: [
      { name: "Business Executive", pathway: "college", description: "Ideal for steering organizations and implementing strategic visions." },
      { name: "Lawyer", pathway: "college", description: "Suits your argumentative skill and ability to lead complex cases." },
      { name: "Management Consultant", pathway: "college", description: "Perfect for analyzing businesses and guiding them to success." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Business Administration", "Finance", "Economics", "Political Science", "Law"]
  },
  ENTP: {
    vibe: "You're an energetic and inventive debater, always seeking new challenges and innovative solutions.",
    strengths: ["Energetic", "Inventive", "Quick-witted"],
    careers: [
      { name: "Entrepreneur", pathway: "job", description: "Great for taking initiative and building new ventures from the ground up." },
      { name: "Marketing Strategist", pathway: "college", description: "Fits your creative mind in developing compelling campaigns." },
      { name: "Creative Director", pathway: "college", description: "Ideal for leading artistic visions and inspiring creative teams." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Marketing", "Business", "Communications", "Psychology", "Journalism"]
  },
  INFJ: {
    vibe: "You're an insightful and compassionate advocate, driven by your values to make a meaningful difference.",
    strengths: ["Insightful", "Compassionate", "Value-driven"],
    careers: [
      { name: "Psychologist", pathway: "college", description: "Suits your deep understanding of human behavior and desire to help." },
      { name: "Nonprofit Director", pathway: "college", description: "Perfect for leading initiatives that align with your strong values." },
      { name: "Writer", pathway: "college", description: "Ideal for expressing complex ideas and emotions through storytelling." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Psychology", "Sociology", "Social Work", "English Literature", "Theology"]
  },
  INFP: {
    vibe: "You're a creative and idealistic dreamer, driven by your personal values and a desire for harmony.",
    strengths: ["Creative", "Compassionate", "Idealistic"],
    careers: [
      { name: "Author", pathway: "college", description: "Fits your imaginative spirit in crafting compelling narratives and worlds." },
      { name: "Therapist", pathway: "college", description: "Great for connecting deeply with others and guiding them to well-being." },
      { name: "Art Director", pathway: "college", description: "Perfect for bringing artistic visions to life and inspiring creative teams." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Creative Writing", "Art", "Psychology", "English", "Liberal Arts"]
  },
  ENFJ: {
    vibe: "You're a charismatic and empathetic leader, inspiring others and building strong, positive connections.",
    strengths: ["Charismatic", "Empathetic", "Inspiring"],
    careers: [
      { name: "Teacher", pathway: "college", description: "Ideal for guiding and motivating students with your natural warmth." },
      { name: "Public Relations Specialist", pathway: "college", description: "Suits your ability to connect with people and manage public image." },
      { name: "HR Manager", pathway: "college", description: "Perfect for fostering a positive work environment and supporting employees." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Education", "Communications", "Psychology", "Human Resources", "Social Work"]
  },
  ENFP: {
    vibe: "You're an imaginative and energetic enthusiast, always seeking new possibilities and exciting experiences.",
    strengths: ["Imaginative", "Energetic", "Empathetic"],
    careers: [
      { name: "Actor", pathway: "college", description: "Great for expressing yourself creatively and connecting with audiences." },
      { name: "Journalist", pathway: "college", description: "Fits your curiosity and ability to tell compelling stories." },
      { name: "Social Entrepreneur", pathway: "job", description: "Ideal for combining your innovative ideas with a passion for social impact." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Communications", "Marketing", "Psychology", "Theater Arts", "Journalism"]
  },
  ISTJ: {
    vibe: "You're a responsible and detail-oriented organizer, valuing structure and dependable execution.",
    strengths: ["Responsible", "Detail-Oriented", "Practical"],
    careers: [
      { name: "Accountant", pathway: "college", description: "Perfect for your precision and focus on maintaining order in finances." },
      { name: "Police Officer", pathway: "college", description: "Suits your strong sense of duty and commitment to upholding rules." },
      { name: "Civil Engineer", pathway: "college", description: "Ideal for designing and overseeing essential infrastructure projects." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Accounting", "Finance", "Engineering", "Criminal Justice", "Computer Science"]
  },
  ISFJ: {
    vibe: "You're a nurturing and reliable supporter, always ready to care for others and maintain harmony.",
    strengths: ["Nurturing", "Reliable", "Supportive"],
    careers: [
      { name: "Nurse", pathway: "college", description: "Great for providing direct care and support to those in need." },
      { name: "Librarian", pathway: "college", description: "Fits your organized nature and desire to provide accessible information." },
      { name: "Elementary Teacher", pathway: "college", description: "Perfect for patiently guiding young learners and creating a supportive environment." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Nursing", "Education", "Social Work", "Psychology", "Library Science"]
  },
  ESTJ: {
    vibe: "You're an organized and practical leader, focused on efficiency and getting things done effectively.",
    strengths: ["Organized", "Practical", "Leadership-oriented"],
    careers: [
      { name: "Operations Manager", pathway: "college", description: "Ideal for overseeing processes and ensuring smooth execution." },
      { name: "School Principal", pathway: "college", description: "Suits your leadership skills in guiding educational institutions." },
      { name: "Project Manager", pathway: "college", description: "Perfect for planning, executing, and closing projects efficiently." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Business Administration", "Management", "Education", "Political Science", "Public Administration"]
  },
  ESFJ: {
    vibe: "You're a social and caring individual, excelling at connecting with people and organizing community efforts.",
    strengths: ["Social", "Caring", "Organized"],
    careers: [
      { name: "Event Planner", pathway: "college", description: "Great for organizing memorable experiences and delighting guests." },
      { name: "Nurse Educator", pathway: "college", description: "Fits your nurturing side in teaching and guiding future healthcare professionals." },
      { name: "Customer Success Manager", pathway: "college", description: "Ideal for building strong relationships and ensuring client satisfaction." }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Education", "Nursing", "Hospitality Management", "Communications", "Sociology"]
  },
  ISTP: {
    vibe: "You're a tactical and observant problem-solver, excelling at hands-on tasks and figuring out how things work.",
    strengths: ["Tactical", "Observant", "Efficient"],
    careers: [
      { name: "Mechanic", pathway: "trade", description: "Perfect for your practical skills in diagnosing and fixing mechanical issues." },
      { name: "Pilot", pathway: "trade", description: "Suits your calm under pressure and precision in operating complex machinery." },
      { name: "Technician", pathway: "trade", description: "Ideal for hands-on troubleshooting and maintaining technical systems." }
    ],
    recommendedNextStep: "Trade School"
  },
  ISFP: {
    vibe: "You're an artistic and sensitive free spirit, expressing yourself creatively and enjoying the present moment.",
    strengths: ["Artistic", "Sensitive", "Easygoing"],
    careers: [
      { name: "Graphic Designer", pathway: "college", description: "Great for blending your artistic eye with practical digital skills." }, // Can be college or trade
      { name: "Veterinary Technician", pathway: "trade", description: "Fits your compassionate nature in caring for animals." },
      { name: "Florist", pathway: "trade", description: "Perfect for your artistic touch in creating beautiful arrangements." }
    ],
    recommendedNextStep: "Trade School"
  },
  ESTP: {
    vibe: "You're an energetic and practical adventurer, thriving in dynamic environments and hands-on situations.",
    strengths: ["Energetic", "Practical", "Adventurous"],
    careers: [
      { name: "Sales Representative", pathway: "job", description: "Ideal for your persuasive communication and quick thinking on the go." },
      { name: "Paramedic", pathway: "trade", description: "Suits your ability to act swiftly and decisively in emergency situations." },
      { name: "Construction Supervisor", pathway: "trade", description: "Perfect for leading teams and managing hands-on building projects." }
    ],
    recommendedNextStep: "Trade School"
  },
  ESFP: {
    vibe: "You're a fun-loving and warm performer, bringing joy and energy to every situation.",
    strengths: ["Fun-Loving", "Energetic", "Warm"],
    careers: [
      { name: "Performer", pathway: "college", description: "Great for your expressive nature and ability to entertain audiences." }, // Can be college or direct entry
      { name: "Recreation Coordinator", pathway: "job", description: "Fits your enthusiasm for organizing fun activities and events." },
      { name: "Hospitality Manager", pathway: "college", description: "Ideal for creating welcoming experiences and leading service teams." } // Can be college or direct entry
    ],
    recommendedNextStep: "Direct Entry"
  }
};
