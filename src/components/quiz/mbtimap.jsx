// src/components/quiz/mbtimap.js

export const MBTI_MAP = {
  INTJ: {
    vibe: "You're a strategic mastermind who loves solving complex problems with logic and innovation.",
    strengths: ["Strategic", "Analytical", "Independent"],
    careers: [
      { name: "Software Developer", pathway: "Bachelor’s degree", description: "Ideal for your logical approach to creating and building systems." },
      { name: "Architect", pathway: "Bachelor’s degree in Architecture", description: "Perfect for designing complex structures with precision and vision." },
      { name: "Data Scientist", pathway: "Bachelor’s or Master’s in Data Science, Statistics, or CS", description: "Suits your analytical mind in uncovering insights from data." }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree" // Reflects Data Scientist
  },
  INTP: {
    vibe: "You're a curious and innovative thinker, always dissecting ideas and exploring new theories.",
    strengths: ["Logical", "Innovative", "Curious"],
    careers: [
      { name: "Academic Researcher", pathway: "Master’s or Ph.D.", description: "Fits your desire to delve deep into subjects and uncover new knowledge." },
      { name: "Engineer", pathway: "Bachelor’s degree in Engineering", description: "Great for applying logical principles to design and build solutions." },
      { name: "Philosopher", pathway: "Ph.D.", description: "Matches your love for exploring fundamental questions and concepts." }
    ],
    recommendedNextStep: "Master’s or Ph.D." // Reflects Academic Researcher and Philosopher
  },
  ENTJ: {
    vibe: "You're a natural-born leader, decisive and efficient, who thrives on achieving ambitious goals.",
    strengths: ["Decisive", "Efficient", "Leadership-oriented"],
    careers: [
      { name: "Business Executive", pathway: "Bachelor's or Master's degree", description: "Ideal for steering organizations and implementing strategic visions." },
      { name: "Lawyer", pathway: "Juris Doctor (J.D.)", description: "Suits your argumentative skill and ability to lead complex cases." },
      { name: "Management Consultant", pathway: "Bachelor's degree (often MBA preferred)", description: "Perfect for analyzing businesses and guiding them to success." }
    ],
    recommendedNextStep: "Bachelor's, Master's, or J.D. Degree" // Reflects the range
  },
  ENTP: {
    vibe: "You're an energetic and inventive debater, always seeking new challenges and innovative solutions.",
    strengths: ["Energetic", "Inventive", "Quick-witted"],
    careers: [
      { name: "Entrepreneur", pathway: "Varies (often Bachelor's in Business)", description: "Great for taking initiative and building new ventures from the ground up." },
      { name: "Marketing Strategist", pathway: "Bachelor’s degree in Marketing or related field", description: "Fits your creative mind in developing compelling campaigns." },
      { name: "Creative Director", pathway: "Bachelor’s in Art, Design, or Marketing", description: "Ideal for leading artistic visions and inspiring creative teams." }
    ],
    recommendedNextStep: "Bachelor's Degree" // Most common pathway for listed careers
  },
  INFJ: {
    vibe: "You're an insightful and compassionate advocate, driven by your values to make a meaningful difference.",
    strengths: ["Insightful", "Compassionate", "Value-driven"],
    careers: [
      { name: "Psychologist", pathway: "Doctoral degree (Ph.D. or Psy.D.)", description: "Suits your deep understanding of human behavior and desire to help." },
      { name: "Nonprofit Director", pathway: "Bachelor's degree (Master's often preferred)", description: "Perfect for leading initiatives that align with your strong values." },
      { name: "Writer", pathway: "Bachelor’s in English, Journalism, or Communications", description: "Ideal for expressing complex ideas and emotions through storytelling." }
    ],
    recommendedNextStep: "Bachelor's or Doctoral Degree" // Reflects the range
  },
  INFP: {
    vibe: "You're a creative and idealistic dreamer, driven by your personal values and a desire for harmony.",
    strengths: ["Creative", "Compassionate", "Idealistic"],
    careers: [
      { name: "Author", pathway: "Bachelor’s in English, Creative Writing, or related field", description: "Fits your imaginative spirit in crafting compelling narratives and worlds." },
      { name: "Therapist", pathway: "Master’s degree", description: "Great for connecting deeply with others and guiding them to well-being." },
      { name: "Art Director", pathway: "Bachelor’s in Art, Design, or Marketing", description: "Perfect for bringing artistic visions to life and inspiring creative teams." }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree" // Reflects the range
  },
  ENFJ: {
    vibe: "You're a charismatic and empathetic leader, inspiring others and building strong, positive connections.",
    strengths: ["Charismatic", "Empathetic", "Inspiring"],
    careers: [
      { name: "Teacher", pathway: "Bachelor’s in Education + State Teaching Credential", description: "Ideal for guiding and motivating students with your natural warmth." },
      { name: "Public Relations Specialist", pathway: "Bachelor’s degree in Public Relations, Journalism, or Communications", description: "Suits your ability to connect with people and manage public image." },
      { name: "HR Manager", pathway: "Bachelor's degree", description: "Perfect for fostering a positive work environment and supporting employees." }
    ],
    recommendedNextStep: "Bachelor's Degree"
  },
  ENFP: {
    vibe: "You're an imaginative and energetic enthusiast, always seeking new possibilities and exciting experiences.",
    strengths: ["Imaginative", "Energetic", "Empathetic"],
    careers: [
      { name: "Actor", pathway: "Some college, no degree (often acting school/workshops)", description: "Great for expressing yourself creatively and connecting with audiences." },
      { name: "Journalist", pathway: "Bachelor’s degree in Journalism or Communications", description: "Fits your curiosity and ability to tell compelling stories." },
      { name: "Social Entrepreneur", pathway: "Varies (often Bachelor's in Business, Social Work, or related field)", description: "Ideal for combining your innovative ideas with a passion for social impact." }
    ],
    recommendedNextStep: "Bachelor's Degree or Relevant Training/Experience" // Reflects the variety
  },
  ISTJ: {
    vibe: "You're a responsible and detail-oriented organizer, valuing structure and dependable execution.",
    strengths: ["Responsible", "Detail-Oriented", "Practical"],
    careers: [
      { name: "Accountant", pathway: "Bachelor's degree in accounting", description: "Perfect for your precision and focus on maintaining order in finances." },
      { name: "Police Officer", pathway: "High school diploma + Police Academy", description: "Suits your strong sense of duty and commitment to upholding rules." },
      { name: "Engineer", pathway: "Bachelor’s degree in Engineering", description: "Ideal for designing and overseeing essential infrastructure projects." } // Used general Engineer based on the provided stats
    ],
    recommendedNextStep: "Bachelor's Degree or Police Academy Training" // Reflects the different paths
  },
  ISFJ: {
    vibe: "You're a nurturing and reliable supporter, always ready to care for others and maintain harmony.",
    strengths: ["Nurturing", "Reliable", "Supportive"],
    careers: [
      { name: "Nurse", pathway: "Bachelor’s in Nursing (BSN) + RN license", description: "Great for providing direct care and support to those in need." },
      { name: "Librarian", pathway: "Master’s in Library and Information Science (MLIS)", description: "Fits your organized nature and desire to provide accessible information." },
      { name: "Elementary Teacher", pathway: "Bachelor’s in Education + State Teaching Credential", description: "Perfect for patiently guiding young learners and creating a supportive environment." }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree" // Reflects the range
  },
  ESTJ: {
    vibe: "You're an organized and practical leader, focused on efficiency and getting things done effectively.",
    strengths: ["Organized", "Practical", "Leadership-oriented"],
    careers: [
      { name: "Operations Manager", pathway: "Bachelor’s in Business or related field", description: "Ideal for overseeing processes and ensuring smooth execution." },
      { name: "School Principal", pathway: "Master's degree + administrative license", description: "Suits your leadership skills in guiding educational institutions." },
      { name: "Project Manager", pathway: "Bachelor’s in Business or related field", description: "Perfect for planning, executing, and closing projects efficiently." }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree" // Reflects the range
  },
  ESFJ: {
    vibe: "You're a social and caring individual, excelling at connecting with people and organizing community efforts.",
    strengths: ["Social", "Caring", "Organized"],
    careers: [
      { name: "Event Planner", pathway: "Bachelor's degree", description: "Great for organizing memorable experiences and delighting guests." },
      { name: "Nurse Educator", pathway: "Master's or doctoral degree in nursing", description: "Fits your nurturing side in teaching and guiding future healthcare professionals." },
      { name: "Customer Success Manager", pathway: "Bachelor's degree", description: "Ideal for building strong relationships and ensuring client satisfaction." }
    ],
    recommendedNextStep: "Bachelor’s or Master’s Degree" // Reflects the range
  },
  ISTP: {
    vibe: "You're a tactical and observant problem-solver, excelling at hands-on tasks and figuring out how things work.",
    strengths: ["Tactical", "Observant", "Efficient"],
    careers: [
      { name: "Mechanic", pathway: "High school diploma or equivalent; postsecondary training", description: "Perfect for your practical skills in diagnosing and fixing mechanical issues." },
      { name: "Pilot", pathway: "Bachelor's degree (often) + flight training", description: "Suits your calm under pressure and precision in operating complex machinery." },
      { name: "Technician", pathway: "Associate’s degree or postsecondary non-degree award", description: "Ideal for hands-on troubleshooting and maintaining technical systems." }
    ],
    recommendedNextStep: "Postsecondary Training or Bachelor's Degree" // Reflects various trade/technical paths
  },
  ISFP: {
    vibe: "You're an artistic and sensitive free spirit, expressing yourself creatively and enjoying the present moment.",
    strengths: ["Artistic", "Sensitive", "Easygoing"],
    careers: [
      { name: "Graphic Designer", pathway: "Bachelor’s degree", description: "Great for blending your artistic eye with practical digital skills." },
      { name: "Veterinary Technician", pathway: "Associate’s degree or postsecondary non-degree award", description: "Fits your compassionate nature in caring for animals." },
      { name: "Florist", pathway: "High school diploma or equivalent", description: "Perfect for your artistic touch in creating beautiful arrangements." }
    ],
    recommendedNextStep: "High School Diploma, Associate's, or Bachelor's Degree" // Reflects the range
  },
  ESTP: {
    vibe: "You're an energetic and practical adventurer, thriving in dynamic environments and hands-on situations.",
    strengths: ["Energetic", "Practical", "Adventurous"],
    careers: [
      { name: "Sales Representative", pathway: "High school diploma or equivalent", description: "Ideal for your persuasive communication and quick thinking on the go." }, // Assuming general Sales Rep from CAREER_STATS
      { name: "Paramedic", pathway: "EMT certification or Associate’s degree in Paramedicine", description: "Suits your ability to act swiftly and decisively in emergency situations." },
      { name: "Construction Supervisor", pathway: "High school diploma + apprenticeship or associate degree", description: "Perfect for leading teams and managing hands-on building projects." }
    ],
    recommendedNextStep: "High School Diploma with Training, or Associate's Degree" // Reflects the range
  },
  ESFP: {
    vibe: "You're a fun-loving and warm performer, bringing joy and energy to every situation.",
    strengths: ["Fun-Loving", "Energetic", "Warm"],
    careers: [
      { name: "Performer", pathway: "Varies; talent and experience are key", description: "Great for your expressive nature and ability to entertain audiences." },
      { name: "Recreation Coordinator", pathway: "Bachelor's degree", description: "Fits your enthusiasm for organizing fun activities and events." },
      { name: "Hospitality Manager", pathway: "High school diploma or Bachelor's in Hospitality", description: "Ideal for creating welcoming experiences and leading service teams." }
    ],
    recommendedNextStep: "Varies (Experience, High School, or Bachelor's Degree)" // Reflects the widest range
  }
};
