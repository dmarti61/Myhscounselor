// src/components/CollegeGuide.js
import React from 'react';
import '../styles/collegeguide.css'; // Assuming this path is correct for your styles

const CollegeGuide = () => (
  <div className="college-guide-container">
    <h2>🎓 How to Apply to College (U.S.)</h2>

    <p className="intro">
      Applying to college can feel overwhelming — but we’re got you! Here’s a clear path with resources,
      checklists, and tips for every step of the journey. Take it one step at a time, and remember, your hard work will pay off!
    </p>

    {/* Note about Military Academies - kept for cross-referencing */}
    <p className="military-interest-note">
      While this guide focuses on traditional civilian colleges, if you're interested in a path that combines higher education with military service and leadership, you might want to explore U.S. Military Service Academies or ROTC programs. These offer a distinct experience with unique application processes. For detailed information, please visit our dedicated <a href="/military" rel="noopener noreferrer">Military Academies & ROTC Guide</a>.
    </p>

    <hr /> {/* Replaced '---' with <hr /> for proper HTML */}

    <h3>Junior Year: Laying the Foundation</h3>

    <h4>Fall (September - December)</h4>
    <ul>
      <li>**Explore Majors & Careers:** Start researching fields that genuinely interest you. What subjects do you enjoy? What problems do you want to solve? This helps narrow down college choices.</li>
      <li>**Research Colleges (Initial Dive):** Begin exploring different types of colleges (large vs. small, public vs. private, urban vs. rural). Look at academic programs that align with your interests.
        <p className="why-it-matters">This helps you understand the vast landscape of higher education and what might be a great fit for *you*.</p> {/* Removed italics */}
      </li>
      <li>**Keep Your Grades Strong & Challenge Yourself:** Continue to excel in your classes. If your school offers AP, IB, or Dual Enrollment courses, consider taking them, especially in subjects you're strong in.
        <p className="why-it-matters">Colleges want to see that you can handle rigorous coursework and are prepared for college-level academics.</p> {/* Removed italics, softened language */}
      </li>
      <li>**PSAT/Practice Exams:** Take the PSAT (if you haven't already). This is great practice for the SAT and can qualify you for National Merit Scholarships.
        <p className="why-it-matters">Early exposure helps you understand the test format and identify areas for improvement.</p> {/* Removed italics */}
      </li>
      <li>**Get Involved & Lead:** Deepen your involvement in extracurricular activities, school clubs, or sports. **Volunteering** is an excellent way to gain real-world experience, develop new skills, and demonstrate commitment to your community. Look for roles where you can take initiative or leadership.
        <p className="why-it-matters">Colleges look for well-rounded students who contribute to their communities and show initiative outside of academics. Sustained involvement and leadership are key!</p> {/* Removed italics */}
      </li>
    </ul>

    <h4>Spring (January - May)</h4>
    <ul>
      <li>**First Official SAT or ACT:** Take your first official standardized test. Analyze your scores to see where you can improve. Don't stress too much about this first one – it's a learning experience!
        <p className="why-it-matters">Many colleges still consider these scores, even if they are "test-optional." Knowing your baseline helps you plan for future attempts.</p> {/* Removed italics */}
      </li>
      <li>**Deeper College Research:** Refine your college list. Look into specific departments, faculty, student-to-faculty ratio, and campus culture. Create a preliminary list with a mix of "safety," "target," and "reach" schools.
        <p className="why-it-matters">A balanced list increases your chances of acceptance while still aiming high.</p> {/* Removed italics */}
      </li>
      <li>**Attend College Fairs/Info Sessions:** Engage with admissions representatives. Ask questions about programs, campus life, and specific application requirements.
        <p className="why-it-matters">It shows demonstrated interest to some colleges and helps you gather specific information.</p> {/* Removed italics */}
      </li>
      <li>**Start Your Résumé/Brag Sheet:** Begin compiling a detailed list of all your extracurriculars, awards, work experience, and **volunteering hours/roles**. Include dates and brief descriptions of your responsibilities and achievements.
        <p className="why-it-matters">This document is essential for applications and helps teachers write strong letters of recommendation.</p> {/* Removed italics */}
      </li>
      <li>**Identify Recommendation Letter Writers:** Start thinking about 2-3 teachers (ideally from core subjects you excelled in during junior year) and your counselor who know you well and can speak positively about you.
        <p className="why-it-matters">Strong recommendations can highlight your character, work ethic, and unique qualities to admissions committees.</p> {/* Removed italics */}
      </li>
    </ul>

    <h4>Summer (June - August)</h4>
    <ul>
      <li>**SAT/ACT Retake (Optional):** If you want to improve your scores, plan for a retake. Many students see score increases on their second or third attempt.
        <p className="why-it-matters">Higher scores can open more doors or qualify you for more scholarships.</p> {/* Removed italics */}
      </li>
      <li>**Summer Enrichment:** Consider summer college programs, internships, or a job related to your interests. **Dedicated volunteering** during the summer can also be a significant resume booster, showcasing sustained commitment and passion.
        <p className="why-it-matters">These experiences show colleges your initiative, passion, and ability to take on challenges outside the classroom.</p> {/* Removed italics */}
      </li>
      <li>**Brainstorm Essay Topics:** The summer before senior year is ideal for this. Think about unique stories, challenges you've overcome, or significant experiences (including volunteering!) that have shaped you.
        <p className="why-it-matters">The essay is your chance to show your personality and communicate who you are beyond grades and test scores.</p> {/* Removed italics */}
      </li>
      <li>**Visit Campuses:** If possible, visit colleges on your list. Pay attention to the "vibe," talk to students, and imagine yourself there. Virtual tours are also a great option!
        <p className="why-it-matters">A campus visit helps you get a real feel for the school and can confirm or change your interest.</p> {/* Removed italics */}
      </li>
    </ul>

    <hr /> {/* Replaced '---' with <hr /> for proper HTML */}

    <h3>Choosing Your Colleges: Location, Cost & Fit</h3>
    <p>This is where your research really pays off. Don't just pick colleges based on reputation; think about where you'll be happiest and most successful.</p>
    <div className="choice-considerations">
      <h4>Finding Your Fit (and First Job!):</h4>
      <p>When you're looking at colleges for your major, remember to consider if the college's network or career services align with where you'd like to work after graduation. It's smart to pick a place where you can see yourself thriving for the next 5-6 years after you graduate high school, both academically and professionally.</p>
      <p className="advice-box">
        While many students land their first job in the region they graduate from, remember that career opportunities can be found far and wide! Focus on schools that offer strong programs in your field and have good connections to industries you're interested in, no matter the location.
      </p>

      <h4>Understanding Tuition & Scholarships:</h4>
      <p>Let's be real about college costs. Out-of-state tuition and in-state private college tuition can be significantly higher than in-state public universities. For example, out-of-state and in-state private college tuition can be roughly almost $30,000 a year, compared to an in-state (public) Texas university at only around $10,000.</p>
      <p className="advice-box">
        Don't let the "sticker price" of a college scare you away right off the bat! Many private and out-of-state schools offer generous financial aid and scholarships that can make them surprisingly affordable, sometimes even comparable to in-state public options. Always use a college's "net price calculator" on their website to get a more accurate idea of what *you* might actually pay after grants and scholarships. Full scholarships are competitive, but definitely worth applying for if you're a strong candidate. Remember, you might need to take out some loans, so focus on making that debt worth the degree.
      </p>
    </div>

    <h4>Your Application List: The "5 Colleges" Strategy</h4>
    <p>Once you've got your major and location in mind, it's time to build your application list. Aim for at least **5 colleges** to apply to:</p>
    <ul>
      <li>**1 Dream College:** This is your ideal school – reach for the stars!</li>
      <li>**3 Realistic Colleges:** These are schools where you wouldn't mind attending and feel confident about your chances.</li>
      <li>**1 Fail-Safe College:** This is a school where you exceed all requirements, and while it might not be your top choice, you're almost guaranteed admission. It ensures you're definitely going to college.</li>
    </ul>
    <p className="why-it-matters">This mix provides a good balance of aspiration and security.</p> {/* Removed italics */}
    <p>Once you've picked these 5, make sure to **visit them** (in person or virtually) to ensure you can see yourself being happy there and imagine yourself starting your career from that location.</p>

    <hr /> {/* Replaced '---' with <hr /> for proper HTML */}

    <h3>Senior Year: Application Season</h3>

    <h4>Fall (September - November)</h4>
    <ul>
      <li>**Set Up Application Accounts:** Create accounts on Common App, Coalition App, or specific university portals. Get familiar with their interfaces.
        <p className="why-it-matters">These are the main gateways to submitting your applications.</p> {/* Removed italics */}
      </li>
      <li>**Finalize College List:** Confirm your "safety," "target," and "reach" schools. Make sure you genuinely like every school on your list.
        <p className="why-it-matters">A well-balanced list maximizes your chances of acceptance while ensuring you have good options.</p> {/* Removed italics */}
      </li>
      <li>**Review Admissions Requirements:** Now that you've got your 5 colleges, head to the admissions page on each of their websites. Find out exactly what you need to have before you can apply. This often includes:
        <ul>
          <li>Completed online application form.</li>
          <li>Official High School transcript(s); or official GED scores.</li>
          <li>Official transcripts from all accredited colleges and university attended (if applicable).</li>
          <li>Official ACT or SAT scores.</li>
          <li>A non-refundable application fee (usually around $20).</li>
        </ul>
      </li>
      <li>**Texas Specific Application:** Lucky for you, all Texas public schools use one system called <a href="https://www.applytexas.org" target="_blank" rel="noopener noreferrer">www.applytexas.org</a>. It's one big application that you can use to apply to ALL Texas public schools. For out-of-state schools, you'll need to go to their individual university websites to find out what application platform they use (e.g., Common App, Coalition App, or their own specific portal).</li>
      <li>**Essays & Resumes:** Most schools will require essays, but it depends on the specific colleges you're applying for. Write your essays ahead of time and have your English teacher (or a trusted adult like me!) look them over before you submit. **NEVER submit an essay without someone else looking at it first!** You'll also need a resume, which is a document that highlights all your achievements, extracurriculars, and work during high school. Again, have your English teacher or a trusted adult review it.</li>
      <li>**Final Application Review:** Before you hit that submit button, have someone else look over your entire application! The fee is usually small (around $20, give or take) so don't let that stop you from applying.</li> {/* Softened fee comment */}
      <li>**Standardized Testing (ACT/SAT):** Somewhere in the middle of all this (ideally Junior year, but definitely by Fall Senior year), you should have taken both the ACT and the SAT.
        <ul>
          <li>**SAT:** <a href="http://sat.collegeboard.org/register/" target="_blank" rel="noopener noreferrer">sat.collegeboard.org/register/</a></li>
          <li>**ACT:** <a href="http://www.actstudent.org/regist/" target="_blank" rel="noopener noreferrer">actstudent.org/regist/</a></li>
        </ul>
        <p className="advice-box">
          Take both because you'll use the higher score of the two for your applications. On the application, they don't need to know you took both; just submit the one where you got your highest score. For example, if you score a 33 on the ACT and a 1530 on the SAT, go with the ACT because the highest you can get is a 36. If you think you can score even higher on the ACT, study harder and take just that one again, don't worry about the SAT.
        </p>
        <p>The ACT and SAT both require you to send scores to your prospective colleges. They typically allow you to send scores to up to 5 schools for free. Anything after that, you have to pay. Don't worry about sending them the day of the test; you can do it online after you find out which score you're going to use.</p>
      </li>
      <li>**Request Transcripts & LoRs:** Formally ask your high school counselor or registrar to send your official high school transcripts to your 5 (or more) schools that you used for your applications. For recommendations, provide your teachers and counselor with your brag sheet, a list of colleges, and clear deadlines. Give them plenty of notice (at least 2-4 weeks).
        <p className="why-it-matters">These are critical components of your application that are outside your direct control, so prompt requests are crucial.</p> {/* Removed italics */}
      </li>
      <li>**Write & Edit Essays:** Dedicate significant time to your personal statement and supplemental essays. Tailor supplemental essays to *each* specific college. Get feedback from teachers, counselors, or trusted adults.
        <p className="why-it-matters">Your essays are your voice in the application; they help colleges understand your personality, motivations, and what you'd bring to their campus. Avoid generic essays!</p> {/* Removed italics */}
      </li>
      <li>**Submit Early Applications:** If you're applying Early Decision (binding) or Early Action (non-binding), submit these applications well before their deadlines (often November 1st or 15th).
        <p className="why-it-matters">Applying early can sometimes increase your chances of admission and provides earlier decisions.</p> {/* Removed italics */}
      </li>
    </ul>

    <h4>Winter (December - February)</h4>
    <ul>
      <li>**Submit Regular Decision Apps:** Ensure all your regular decision applications are submitted before their deadlines. Don't wait until the last minute!
        <p className="why-it-matters">Missing a deadline means missing an opportunity.</p> {/* Removed italics */}
      </li>
      <li>**Continue Scholarship Search:** Don't stop applying for scholarships! New opportunities arise constantly.
      </li>
      <li>**Monitor Application Portals:** Regularly check each college's application portal to ensure all materials (transcripts, recommendations, test scores) have been received. Follow up if anything is missing.
        <p className="why-it-matters">An incomplete application won't be reviewed.</p> {/* Removed italics */}
      </li>
      <li>**CSS Profile (if needed):** Some private colleges require the CSS Profile for non-federal financial aid. Complete this if any of your schools require it.
        <p className="why-it-matters">It helps colleges determine your eligibility for their institutional aid.</p> {/* Removed italics */}
      </li>
      <li>**Prepare for Interviews:** If offered, prepare for and attend college interviews. Be ready to discuss your interests, experiences (including volunteer work), and why you're interested in that specific college.
        <p className="why-it-matters">Interviews can demonstrate your enthusiasm and provide a personal touch to your application.</p> {/* Removed italics */}
      </li>
    </ul>

    <h4>Spring (March - May)</h4>
    <ul>
      <li>**Review Offers:** Carefully compare acceptance letters and financial aid packages. Look at the "net price" (cost after grants/scholarships) rather than just the sticker price.
        <p className="why-it-matters">This helps you make an informed financial decision and compare the true cost of attendance.</p> {/* Removed italics */}
      </li>
      <li>**Waitlist Strategies:** If you're waitlisted, understand the process. Sending a "letter of continued interest" and updating the college on new achievements (grades, awards, volunteering) can sometimes help.</li>
      <li>**Make Your Final Decision:** By the **National Candidate Reply Date** (typically May 1st), commit to your chosen college. Submit your enrollment deposit to secure your spot.
        <p className="why-it-matters">This is the official step to enrolling in your chosen school!</p> {/* Removed italics */}
      </li>
      <li>**Notify Other Colleges:** Politely inform other colleges that accepted you of your decision.
        <p className="why-it-matters">It's good etiquette and opens up spots for other students.</p> {/* Removed italics */}
      </li>
      <li>**Celebrate!** You've worked hard! Take a moment to acknowledge your achievements.</li>
    </ul>

    <hr /> {/* Replaced '---' with <hr /> for proper HTML */}

    <h3>Understanding Financial Aid: FAFSA, Loans & Work-Study</h3>
    <p>This is where things can get a little complicated, but understanding financial aid is key to making college affordable.</p>
    <ul>
      <li>**FAFSA (Free Application for Federal Student Aid):** This is the main way to unlock federal financial aid, including grants, work-study, and federal student loans.
        <ul>
          <li><strong>It's Essential (and Might Require Some Nudging):</strong> You're going to need your parents' tax information to fill this out. It can be a bit of a process, so be prepared to work with them and remind them about it!</li> {/* Softened FAFSA language */}
          <li><strong>Deadline:</strong> To qualify for scholarships, work-study, and loans, you have to have this filled out by **March 1st**. The reason by March 1st is because that's when they first open up, and the faster you get your name in the pool, the more likely you will get first pick and be able to secure those funds.</li>
          <li><strong>Website:</strong> <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer">studentaid.gov/h/apply-for-aid/fafsa</a> (Note: The official FAFSA website changed from fafsa.ed.gov to studentaid.gov)</li>
        </ul>
      </li>
      <li>**Work-Study:** If you qualify for work-study (which you'll find out after FAFSA), that's GREAT! You'll be able to get a job on-campus (much sought after) and support yourself a little bit with gas and groceries.
        <p className="advice-box">
          If you don't qualify, don't worry. Make sure you have some money saved up before college, because otherwise, it'll be tough to leave campus or get groceries. Try to get a job while going to school, because college will be a lot harder without income. Things cost money! On-campus work-study jobs are highly sought after because they are more flexible with your schedule, and being on-campus means no travel or wasted gas. They also help build your resume and connect you with people who might help you land your first job. Ideally, you want to work with a company where you want your first full-time job; you'll have already worked with the people and have a better shot at being offered a job after you graduate.
        </p>
      </li>
      <li>**Student Loans:** Everyone qualifies for loans.
        <ul>
          <li><strong>Parent PLUS Loans:</strong> These are federal loans taken out by your parents. It's crucial to have an open conversation with your family about the responsibilities of this loan before considering it. Always prioritize grants, scholarships, and federal student loans in your own name first.</li> {/* More nuanced Parent PLUS advice */}
          <li><strong>Subsidized vs. Unsubsidized:</strong> Go for subsidized loans over unsubsidized. Subsidized means the government pays the interest while you're in school, so you deal with less interest after you graduate. You'll probably have both, and that's not a big deal.</li>
          <li><strong>Repayment:</strong> You will be able to afford the payments as long as you secure a job after you graduate within 6 months. After the 6th month from when you graduate, you will have to start making payments. You've got this!</li> {/* Softened payment comment */}
        </ul>
      </li>
    </ul>

    <hr /> {/* Replaced '---' with <hr /> for proper HTML */}

    <h3>Thriving in College: Tips for Success</h3>
    <p>Once you've been accepted and are ready to go, CONGRATS!!! I KNEW YOU COULD DO IT!!! Now, let's talk about making the most of your time.</p>
    <ul>
      <li>**Finish Strong (15-18 Credit Hours):** Aim to finish your degree efficiently. Taking around 15-18 credit hours per semester (about 5-6 classes) is totally doable for many students as long as you work hard and manage your time well. It's a great way to stay on track or even graduate early, which can mean less time accumulating loan interest and a quicker start to your dream job!</li> {/* Revised advisor comment */}
      <li>**Strategic Minoring:** A minor can be a great way to explore another interest, gain complementary skills, or even strengthen your resume for specific career paths. Consider something that genuinely interests you or adds to your major.</li> {/* More nuanced minor advice */}
      <li>**Owning Your Schedule:** You are responsible for scheduling your classes and making sure they fit your degree plan. Don't freak out about this too much. Just make sure you take them in the correct order and give yourself plenty of time to get to each class. A schedule of 3 classes Monday-Wednesday-Friday between 9 AM and 3 PM, and 3 classes Tuesday-Thursday between 9 AM and 3 PM, works pretty well, but that also depends on what job you have and what hours you have to work.</li>
    </ul>

    <hr /> {/* Replaced '---' with <hr /> for proper HTML */}

    <h3>🛠️ Tools & Resources</h3>
    <ul>
      <li><a href="https://www.commonapp.org" target="_blank" rel="noopener noreferrer">Common App</a> — Apply to 1,000+ colleges with one common application.</li>
      <li><a href="https://www.coalitionforcollegeaccess.org" target="_blank" rel="noopener noreferrer">Coalition App</a> — Another application platform used by many colleges.</li>
      <li><a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer">FAFSA</a> — Apply for federal student aid (grants, loans, work-study). Required for virtually all federal aid.</li>
      <li><a href="https://cssprofile.collegeboard.org/" target="_blank" rel="noopener noreferrer">CSS Profile</a> — Used by some private colleges to award non-federal financial aid. Check if your schools require it!</li>
      <li><a href="https://www.fastweb.com" target="_blank" rel="noopener noreferrer">Fastweb</a> — Comprehensive scholarship search engine.</li>
      <li><a href="https://www.scholarships.com" target="_blank" rel="noopener noreferrer">Scholarships.com</a> — Another popular scholarship database.</li>
      <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer">College Board</a> — Resources for SAT, AP, and college planning. Also has "BigFuture" for college search.</li>
      <li><a href="https://www.act.org" target="_blank" rel="noopener noreferrer">ACT.org</a> — Resources for the ACT exam.</li>
      <li><a href="https://www.applytexas.org" target="_blank" rel="noopener noreferrer">ApplyTexas</a> — Portal for applying to Texas public universities.</li>
      <li><a href="https://www.volunteermatch.org/" target="_blank" rel="noopener noreferrer">VolunteerMatch</a> — Find local volunteering opportunities tailored to your interests.</li>
      <li><a href="https://www.idealist.org/" target="_blank" rel="noopener noreferrer">Idealist</a> — Search for non-profit jobs, internships, and volunteer opportunities.</li>
      <li>**College Websites:** Always check each individual college's admissions and financial aid pages for the most accurate and up-to-date information.</li>
    </ul>

    <hr /> {/* Replaced '---' with <hr /> for proper HTML */}

    <h3>✍️ Essay Pro Tips</h3>
    <ul>
      <li>**Start Early:** Procrastination is the enemy of a good essay! Give yourself weeks, not days.</li>
      <li>**Be Authentic:** Your unique voice and perspective are what colleges want to see. Don't try to be someone you're not.</li>
      <li>**Show, Don't Just Tell:** Instead of saying "I am persistent," tell a story where your persistence is evident (e.g., a challenging volunteer project, a difficult class).
        <p className="example"><em>Example:</em> Instead of "I learned a lot from my volunteering," describe a specific interaction at the animal shelter that taught you empathy.</p>
      </li>
      <li>**Avoid Clichés:** Stay away from overused topics (e.g., "winning the big game" unless you have a truly unique angle).</li>
      <li>**Get Feedback:** Have teachers, counselors, or trusted adults review your drafts for clarity, grammar, and overall impact. Multiple eyes catch more.</li>
      <li>**Proofread Meticulously:** Read your essay aloud to catch awkward phrasing and typos. A fresh pair of eyes (or even a spelling/grammar checker) is crucial.</li>
    </ul>

    <hr /> {/* Replaced '---' with <hr /> for proper HTML */}

    <h3>💡 Bonus Tips </h3>
    <ul>
      <li>**Stay Organized!** Create a spreadsheet with each college, its application type (Common App, direct), all deadlines (application, financial aid, scholarships), and required materials (essay prompts, LoRs, test scores). This is a lifesaver.</li>
      <li>**Don't Overextend Yourself:** It's better to be deeply involved in a few activities (including volunteering!) than superficially involved in many. Quality over quantity.</li>
      <li>**Talk to Your Counselor:** Your high school counselor is a valuable resource. Schedule regular check-ins to discuss your progress, concerns, and college list.</li>
      <li>**Manage Stress:** The college application process can be stressful. Remember to take breaks, engage in activities you enjoy, and talk to friends, family, or your counselor if you feel overwhelmed.</li>
      <li>**It's YOUR Choice:** Ultimately, this is your future. Choose a college that feels right for *you*, not just one that others expect you to attend.</li>
    </ul>

    <hr /> {/* Replaced '---' with <hr /> for proper HTML */}

    <h3>🚫 Common Mistakes to Avoid</h3>
    <ul>
      <li>**Missing Deadlines:** This is the #1 application killer. Always aim to submit a few days early.</li>
      <li>**Generic Essays:** Don't use the same essay for every college unless the prompt is identical and you've verified it's okay.</li>
      <li>**Not Proofreading:** Typos and grammatical errors can make you seem careless.</li>
      <li>**Waiting Until the Last Minute:** This leads to rushed work and increased stress.</li>
      <li>**Not Asking for Help:** Your teachers, counselors, and family are there to support you. Don't be afraid to ask questions.</li>
    </ul>

    <blockquote className="quote-block">
      “The future belongs to those who prepare for it today.” — Malcolm X
    </blockquote>
  </div>
);

export default CollegeGuide;
