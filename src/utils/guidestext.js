// Helper to extract text from React elements, simplifying for PDF
const extractTextFromReactNode = (node) => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join('');
  }
  if (node && typeof node === 'object' && node.props) {
    let text = '';
    // Handle specific tags for formatting
    if (node.type === 'h1' || node.type === 'h2' || node.type === 'h3' || node.type === 'h4') {
      text += `\n\n${extractTextFromReactNode(node.props.children).toUpperCase()}\n\n`;
    } else if (node.type === 'p') {
      text += `\n${extractTextFromReactNode(node.props.children)}\n`;
    } else if (node.type === 'ul') {
      text += '\n' + extractTextFromReactNode(node.props.children) + '\n';
    } else if (node.type === 'li') {
      text += `- ${extractTextFromReactNode(node.props.children)}\n`;
    } else if (node.type === 'a') {
      // For links, just show the URL in text
      text += `${extractTextFromReactNode(node.props.children)} (${node.props.href})\n`;
    } else if (node.type === 'blockquote') {
        text += `\n"${extractTextFromReactNode(node.props.children)}"\n`;
    } else {
      // For other tags, just extract their children's text
      text += extractTextFromReactNode(node.props.children);
    }
    return text;
  }
  return '';
};


// --- College Guide Text ---
// Since we can't directly render JSX in jsPDF, we'll convert the content
// of your React components into a plain text string.
// This requires manually extracting the text and formatting it.
// Note: Rich formatting (bolding, specific inline styles, complex layouts)
// will be simplified to plain text and basic line breaks/bullet points.
// Links will appear as plain URLs.
const getCollegeGuideText = () => {
  return `
🎓 How to Apply to College (U.S.)

Applying to college can feel overwhelming — but we’ve got you! Here’s a clear path with resources, checklists, and tips for every step of the journey. Take it one step at a time, and remember, your hard work will pay off!

---

JUNIOR YEAR: LAYING THE FOUNDATION

FALL (SEPTEMBER - DECEMBER)
- EXPLORE MAJORS & CAREERS: Start researching fields that genuinely interest you. What subjects do you enjoy? What problems do you want to solve? This helps narrow down college choices.
Why it matters: This helps you understand the vast landscape of higher education and what might be a good fit for you.

- RESEARCH COLLEGES (INITIAL DIVE): Begin exploring different types of colleges (large vs. small, public vs. private, urban vs. rural). Look at academic programs that align with your interests.
Why it matters: This helps you understand the vast landscape of higher education and what might be a good fit for you.

- MAINTAIN STRONG GRADES & CHALLENGING COURSES: Continue to excel in your classes. If your school offers AP, IB, or Dual Enrollment courses, consider taking them, especially in subjects you're strong in.
Why it matters: Colleges want to see that you can handle rigorous coursework and are prepared for college-level academics.

- PSAT/PRACTICE EXAMS: Take the PSAT (if you haven't already). This is great practice for the SAT and can qualify you for National Merit Scholarships.
Why it matters: Early exposure helps you understand the test format and identify areas for improvement.

- GET INVOLVED & LEAD: Deepen your involvement in extracurricular activities, school clubs, or sports. Volunteering is an excellent way to gain real-world experience, develop new skills, and demonstrate commitment to your community. Look for roles where you can take initiative or leadership.
Why it matters: Colleges look for well-rounded students who contribute to their communities and show initiative outside of academics. Sustained involvement and leadership are key!

SPRING (JANUARY - MAY)
- FIRST OFFICIAL SAT OR ACT: Take your first official standardized test. Analyze your scores to see where you can improve. Don't stress too much about this first one – it's a learning experience!
Why it matters: Many colleges still consider these scores, even if they are "test-optional." Knowing your baseline helps you plan for future attempts.

- DEEPER COLLEGE RESEARCH: Refine your college list. Look into specific departments, faculty, student-to-faculty ratio, and campus culture. Create a preliminary list with a mix of "safety," "target," and "reach" schools.
Why it matters: A balanced list increases your chances of acceptance while still aiming high.

- ATTEND COLLEGE FAIRS/INFO SESSIONS: Engage with admissions representatives. Ask questions about programs, campus life, and specific application requirements.
Why it matters: It shows demonstrated interest to some colleges and helps you gather specific information.

- START YOUR RÉSUMÉ/BRAG SHEET: Begin compiling a detailed list of all your extracurriculars, awards, work experience, and volunteering hours/roles. Include dates and brief descriptions of your responsibilities and achievements.
Why it matters: This document is essential for applications and helps teachers write strong letters of recommendation.

- IDENTIFY RECOMMENDATION LETTER WRITERS: Start thinking about 2-3 teachers (ideally from core subjects you excelled in during junior year) and your counselor who know you well and can speak positively about you.
Why it matters: Strong recommendations can highlight your character, work ethic, and unique qualities to admissions committees.

SUMMER (JUNE - AUGUST)
- SAT/ACT RETAKE (OPTIONAL): If you want to improve your scores, plan for a retake. Many students see score increases on their second or third attempt.
Why it matters: Higher scores can open more doors or qualify you for more scholarships.

- SUMMER ENRICHMENT: Consider summer college programs, internships, or a job related to your interests. Dedicated volunteering during the summer can also be a significant resume booster, showcasing sustained commitment and passion.
Why it matters: These experiences show colleges your initiative, passion, and ability to take on challenges outside the classroom.

- BRAINSTORM ESSAY TOPICS: The summer before senior year is ideal for this. Think about unique stories, challenges you've overcome, or significant experiences (including volunteering!) that have shaped you.
Why it matters: The essay is your chance to show your personality and communicate who you are beyond grades and test scores.

- VISIT CAMPUSES: If possible, visit colleges on your list. Pay attention to the "vibe," talk to students, and imagine yourself there. Virtual tours are also a great option!
Why it matters: A campus visit helps you get a real feel for the school and can confirm or change your interest.

---

SENIOR YEAR: APPLICATION SEASON

FALL (SEPTEMBER - NOVEMBER)
- SET UP APPLICATION ACCOUNTS: Create accounts on Common App, Coalition App, or specific university portals. Get familiar with their interfaces.
Why it matters: These are the main gateways to submitting your applications.

- FINALIZE COLLEGE LIST: Confirm your "safety," "target," and "reach" schools. Make sure you genuinely like every school on your list.
Why it matters: A well-balanced list maximizes your chances of acceptance while ensuring you have good options.

- REQUEST TRANSCRIPTS & LORS: Formally ask your high school counselor to send your official transcripts to your colleges. For recommendations, provide your teachers and counselor with your brag sheet, a list of colleges, and clear deadlines. Give them plenty of notice (at least 2-4 weeks).
Why it matters: These are critical components of your application that are outside your direct control, so prompt requests are crucial.

- WRITE & EDIT ESSAYS: Dedicate significant time to your personal statement and supplemental essays. Tailor supplemental essays to each specific college. Get feedback from teachers, counselors, or trusted adults.
Why it matters: Your essays are your voice in the application; they help colleges understand your personality, motivations, and what you'd bring to their campus. Avoid generic essays!

- FAFSA & SCHOLARSHIP APPLICATIONS: Complete the FAFSA as soon as it opens (October 1st). This is crucial for federal financial aid. Start aggressively searching and applying for scholarships – local, national, and niche. Many scholarships consider your volunteering and extracurricular involvement!
Why it matters: Financial aid and scholarships can significantly reduce the cost of college, making your dream school more affordable.

- SUBMIT EARLY APPLICATIONS: If you're applying Early Decision (binding) or Early Action (non-binding), submit these applications well before their deadlines (often November 1st or 15th).
Why it matters: Applying early can sometimes increase your chances of admission and provides earlier decisions.

WINTER (DECEMBER - FEBRUARY)
- SUBMIT REGULAR DECISION APPS: Ensure all your regular decision applications are submitted before their deadlines. Don't wait until the last minute!
Why it matters: Missing a deadline means missing an opportunity.

- CONTINUE SCHOLARSHIP SEARCH: Don't stop applying for scholarships! New opportunities arise constantly.

- MONITOR APPLICATION PORTALS: Regularly check each college's application portal to ensure all materials (transcripts, recommendations, test scores) have been received. Follow up if anything is missing.
Why it matters: An incomplete application won't be reviewed.

- CSS PROFILE (IF NEEDED): Some private colleges require the CSS Profile for non-federal financial aid. Complete this if any of your schools require it.
Why it matters: It helps colleges determine your eligibility for their institutional aid.

- PREPARE FOR INTERVIEWS: If offered, prepare for and attend college interviews. Be ready to discuss your interests, experiences (including volunteer work), and why you're interested in that specific college.
Why it matters: Interviews can demonstrate your enthusiasm and provide a personal touch to your application.

SPRING (MARCH - MAY)
- REVIEW OFFERS: Carefully compare acceptance letters and financial aid packages. Look at the "net price" (cost after grants/scholarships) rather than just the sticker price.
Why it matters: This helps you make an informed financial decision and compare the true cost of attendance.

- WAITLIST STRATEGIES: If you're waitlisted, understand the process. Sending a "letter of continued interest" and updating the college on new achievements (grades, awards, volunteering) can sometimes help.

- MAKE YOUR FINAL DECISION: By the National Candidate Reply Date (typically May 1st), commit to your chosen college. Submit your enrollment deposit to secure your spot.
Why it matters: This is the official step to enrolling in your chosen school!

- NOTIFY OTHER COLLEGES: Politely inform other colleges that accepted you of your decision.
Why it matters: It's good etiquette and opens up spots for other students.

- CELEBRATE! You've worked hard! Take a moment to acknowledge your achievements.

---

🛠️ TOOLS & RESOURCES
- Common App (https://www.commonapp.org) — Apply to 1,000+ colleges with one common application.
- Coalition App (https://www.coalitionforcollegeaccess.org) — Another application platform used by many colleges.
- FAFSA (https://studentaid.gov/h/apply-for-aid/fafsa) — Apply for federal student aid (grants, loans, work-study). Required for virtually all federal aid.
- CSS Profile (https://cssprofile.collegeboard.org/) — Used by some private colleges to award non-federal financial aid. Check if your schools require it!
- Fastweb (https://www.fastweb.com) — Comprehensive scholarship search engine.
- Scholarships.com (https://www.scholarships.com) — Another popular scholarship database.
- College Board (https://www.collegeboard.org) — Resources for SAT, AP, and college planning. Also has "BigFuture" for college search.
- ACT.org (https://www.act.org) — Resources for the ACT exam.
- ApplyTexas (https://www.applytexas.org) — Portal for applying to Texas public universities.
- VolunteerMatch (https://www.volunteermatch.org/) — Find local volunteering opportunities tailored to your interests.
- Idealist (https://www.idealist.org/) — Search for non-profit jobs, internships, and volunteer opportunities.
- College Websites: Always check each individual college's admissions and financial aid pages for the most accurate and up-to-date information.

---

✍️ ESSAY PRO TIPS
- START EARLY: Procrastination is the enemy of a good essay! Give yourself weeks, not days.
- BE AUTHENTIC: Your unique voice and perspective are what colleges want to see. Don't try to be someone you're not.
- SHOW, DON'T JUST TELL: Instead of saying "I am persistent," tell a story where your persistence is evident (e.g., a challenging volunteer project, a difficult class).
Example: Instead of "I learned a lot from my volunteering," describe a specific interaction at the animal shelter that taught you empathy.
- AVOID CLICHÉS: Stay away from overused topics (e.g., "winning the big game" unless you have a truly unique angle).
- GET FEEDBACK: Have teachers, counselors, or trusted adults review your drafts for clarity, grammar, and overall impact. Multiple eyes catch more.
- PROOFREAD METICULOUSLY: Read your essay aloud to catch awkward phrasing and typos. A fresh pair of eyes (or even a spelling/grammar checker) is crucial.

---

💡 BONUS TIPS
- STAY ORGANIZED! Create a spreadsheet with each college, its application type (Common App, direct), all deadlines (application, financial aid, scholarships), and required materials (essay prompts, LoRs, test scores). This is a lifesaver.
- DON'T OVEREXTEND YOURSELF: It's better to be deeply involved in a few activities (including volunteering!) than superficially involved in many. Quality over quantity.
- TALK TO YOUR COUNSELOR: Your high school counselor is a valuable resource. Schedule regular check-ins to discuss your progress, concerns, and college list.
- MANAGE STRESS: The college application process can be stressful. Remember to take breaks, engage in activities you enjoy, and talk to friends, family, or your counselor if you feel overwhelmed.
- IT'S YOUR CHOICE: Ultimately, this is your future. Choose a college that feels right for you, not just one that others expect you to attend.

---

🚫 COMMON MISTAKES TO AVOID
- MISSING DEADLINES: This is the #1 application killer. Always aim to submit a few days early.
- GENERIC ESSAYS: Don't use the same essay for every college unless the prompt is identical and you've verified it's okay.
- NOT PROOFREADING: Typos and grammatical errors can make you seem careless.
- WAITING UNTIL THE LAST MINUTE: This leads to rushed work and increased stress.
- NOT ASKING FOR HELP: Your teachers, counselors, and family are there to support you. Don't be afraid to ask questions.

"The future belongs to those who prepare for it today." — Malcolm X
`;
};

const getTradeSchoolGuideText = () => {
  return `
🛠️ How to Learn a Trade

College isn’t the only path—skilled trades offer awesome careers too!

---

🔧 STEPS TO GET STARTED
- Explore trades: welding, HVAC, electrician, plumbing, etc.
- Look for local community colleges or apprenticeships
- Apply for certification programs or vocational schools
- Join job training programs through your high school or city

---

📚 RESOURCES
- apprenticeship.gov (https://www.apprenticeship.gov)
- National Center for Construction Education (https://www.nccer.org)
- Association for Career & Technical Education (https://www.acteonline.org)
`;
};

const getDirectEntryCareersText = () => {
  return `
CAREERS YOU CAN START WITHOUT A COLLEGE DEGREE

You don’t need a diploma to build a strong future. These careers are open to you—with determination, skills, and a smart game plan.

---

🚚 DELIVERY & LOGISTICS
- Start as: Package driver or warehouse associate
- Skills: Time management, basic tech, customer service
- Certs: CDL (for driving), forklift training (optional)
- Explore: UPS, Amazon, FedEx career portals

---

🔧 SKILLED TRADES (ENTRY-LEVEL)
- Start as: Helper or apprentice in plumbing, welding, HVAC
- Skills: Reliability, tool handling, problem-solving
- Certs: Usually earned on the job or through trade programs
- Explore: Local apprenticeships or workforce centers

---

💻 TECH & FREELANCE PATHS
- Start as: Freelance web designer, social media manager
- Skills: Creativity, basic software fluency, client communication
- Training: Free courses from Coursera, YouTube, Skillshare
- Explore: Fiverr, Upwork, local coding bootcamps
`;
};

export const GUIDES_TEXT_CONTENT = {
  College: getCollegeGuideText(),
  "Trade School": getTradeSchoolGuideText(),
  "Direct Entry": getDirectEntryCareersText(),
};
