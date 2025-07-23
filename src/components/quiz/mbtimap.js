// src/components/quiz/mbtimap.js

export const MBTI_MAP = {
  INTJ: {
    strengths: ["Strategic", "Analytical", "Independent"],
    careers: [
      { name: "Software Developer", pathway: "STEM & Tech" },
      { name: "Architect", pathway: "STEM & Tech" },
      { name: "Data Scientist", pathway: "STEM & Tech" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Computer Science", "Engineering", "Mathematics", "Physics", "Economics"]
  },
  INTP: {
    strengths: ["Logical", "Innovative", "Curious"],
    careers: [
      { name: "Academic Researcher", pathway: "STEM & Tech" },
      { name: "Engineer", pathway: "STEM & Tech" },
      { name: "Philosopher", pathway: "College & Research" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Computer Science", "Engineering", "Physics", "Philosophy", "Mathematics"]
  },
  ENTJ: {
    strengths: ["Decisive", "Efficient", "Leadership-oriented"],
    careers: [
      { name: "Business Executive", pathway: "Business & Law" },
      { name: "Lawyer", pathway: "Business & Law" },
      { name: "Management Consultant", pathway: "Business & Law" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Business Administration", "Finance", "Economics", "Political Science", "Law"]
  },
  ENTP: {
    strengths: ["Energetic", "Inventive", "Quick-witted"],
    careers: [
      { name: "Entrepreneur", pathway: "Business & Law" },
      { name: "Marketing Strategist", pathway: "Communication & Media" },
      { name: "Creative Director", pathway: "Creative Arts" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Marketing", "Business", "Communications", "Psychology", "Journalism"]
  },
  INFJ: {
    strengths: ["Insightful", "Compassionate", "Value-driven"],
    careers: [
      { name: "Psychologist", pathway: "Education & Human Services" },
      { name: "Nonprofit Director", pathway: "Education & Human Services" },
      { name: "Writer", pathway: "Creative Arts" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Psychology", "Sociology", "Social Work", "English Literature", "Theology"]
  },
  INFP: {
    strengths: ["Creative", "Compassionate", "Idealistic"],
    careers: [
      { name: "Author", pathway: "Creative Arts" },
      { name: "Therapist", pathway: "Education & Human Services" },
      { name: "Art Director", pathway: "Creative Arts" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Creative Writing", "Art", "Psychology", "English", "Liberal Arts"]
  },
  ENFJ: {
    strengths: ["Charismatic", "Empathetic", "Inspiring"],
    careers: [
      { name: "Teacher", pathway: "Education & Human Services" },
      { name: "Public Relations Specialist", pathway: "Communication & Media" },
      { name: "HR Manager", pathway: "Business & Law" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Education", "Communications", "Psychology", "Human Resources", "Social Work"]
  },
  ENFP: {
    strengths: ["Imaginative", "Energetic", "Empathetic"],
    careers: [
      { name: "Actor", pathway: "Creative Arts" },
      { name: "Journalist", pathway: "Communication & Media" },
      { name: "Social Entrepreneur", pathway: "Business & Law" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Communications", "Marketing", "Psychology", "Theater Arts", "Journalism"]
  },
  ISTJ: {
    strengths: ["Responsible", "Detail-Oriented", "Practical"],
    careers: [
      { name: "Accountant", pathway: "Business & Law" },
      { name: "Police Officer", pathway: "Public Service & Safety" },
      { name: "Civil Engineer", pathway: "STEM & Tech" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Accounting", "Finance", "Engineering", "Criminal Justice", "Computer Science"]
  },
  ISFJ: {
    strengths: ["Nurturing", "Reliable", "Supportive"],
    careers: [
      { name: "Nurse", pathway: "Health & Wellness" },
      { name: "Librarian", pathway: "Education & Human Services" },
      { name: "Elementary Teacher", pathway: "Education & Human Services" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Nursing", "Education", "Social Work", "Psychology", "Library Science"]
  },
  ESTJ: {
    strengths: ["Organized", "Practical", "Leadership-oriented"],
    careers: [
      { name: "Operations Manager", pathway: "Business & Law" },
      { name: "School Principal", pathway: "Education & Human Services" },
      { name: "Project Manager", pathway: "Business & Law" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Business Administration", "Management", "Education", "Political Science", "Public Administration"]
  },
  ESFJ: {
    strengths: ["Social", "Caring", "Organized"],
    careers: [
      { name: "Event Planner", pathway: "Communication & Media" },
      { name: "Nurse Educator", pathway: "Education & Human Services" },
      { name: "Customer Success Manager", pathway: "Business & Law" }
    ],
    recommendedNextStep: "College",
    relevantMajors: ["Education", "Nursing", "Hospitality Management", "Communications", "Sociology"]
  },
  ISTP: {
    strengths: ["Tactical", "Observant", "Efficient"],
    careers: [
      { name: "Mechanic", pathway: "Skilled Trades & Hands-On Careers" },
      { name: "Pilot", pathway: "Skilled Trades & Hands-On Careers" },
      { name: "Technician", pathway: "Skilled Trades & Hands-On Careers" }
    ],
    recommendedNextStep: "Trade School",
    // No relevantMajors for Trade School
  },
  ISFP: {
    strengths: ["Artistic", "Sensitive", "Easygoing"],
    careers: [
      { name: "Graphic Designer", pathway: "Creative Arts" },
      { name: "Veterinary Technician", pathway: "Health & Wellness" },
      { name: "Florist", pathway: "Creative Arts" }
    ],
    recommendedNextStep: "Trade School",
    // No relevantMajors for Trade School
  },
  ESTP: {
    strengths: ["Energetic", "Practical", "Adventurous"],
    careers: [
      { name: "Sales Representative", pathway: "Business & Law" },
      { name: "Paramedic", pathway: "Health & Wellness" },
      { name: "Construction Supervisor", pathway: "Skilled Trades & Hands-On Careers" }
    ],
    recommendedNextStep: "Trade School",
    // No relevantMajors for Trade School
  },
  ESFP: {
    strengths: ["Fun-Loving", "Energetic", "Warm"],
    careers: [
      { name: "Performer", pathway: "Creative Arts" },
      { name: "Recreation Coordinator", pathway: "Health & Wellness" },
      { name: "Hospitality Manager", pathway: "Business & Law" }
    ],
    recommendedNextStep: "Direct Entry",
    // No relevantMajors for Direct Entry
  }
};
