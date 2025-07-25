// src/components/MilitaryAcademiesGuide.js
import React from 'react';

const MilitaryAcademiesGuide = () => (
  <div className="military-academies-container">
    <h2>Considering a Path of Leadership and Service?</h2>
    <p>If you're drawn to a highly structured environment, rigorous academics, physical challenge, and a commitment to serving your country as a commissioned officer, then a U.S. Military Academy or an ROTC program might be the right fit for you. This path is demanding but offers incredible opportunities for personal growth, leadership development, and a guaranteed career upon graduation.</p>
    <p className="emphasis"><strong>Important First Step:</strong> This path should ultimately be what **YOU** want to do, not just what mom and dad (or others) suggest. Your commitment is key!</p>

    ---

    <section className="what-academies-are-section">
      <h3>What Military Academies Are</h3>
      <p>U.S. Military Service Academies are highly selective, tuition-free federal institutions that prepare future officers for the United States Armed Forces. They offer a unique blend of world-class academics, rigorous physical training, and intensive leadership development, all within a structured military environment. Unlike traditional colleges, every graduate earns a Bachelor of Science degree and is commissioned as an officer in their respective service branch, committing to a period of active duty.</p>
      <div className="academy-list">
        <div className="academy-item">
            <h4>United States Naval Academy (USNA)</h4>
            <p>Trains officers for the U.S. Navy and Marine Corps.</p>
            <p><a href="http://www.usna.edu/Admissions/Steps-for-Admission/" target="_blank" rel="noopener noreferrer">Admission Steps &rightarrow;</a></p>
        </div>
        <div className="academy-item">
            <h4>United States Air Force Academy (USAFA)</h4>
            <p>Develops leaders for the U.S. Air Force and U.S. Space Force.</p>
            <p><a href="http://www.academyadmissions.com/admissions/the-application-process/application-steps/" target="_blank" rel="noopener noreferrer">Application Process &rightarrow;</a></p>
        </div>
        <div className="academy-item">
            <h4>United States Coast Guard Academy (USCGA)</h4>
            <p>Trains officers for the U.S. Coast Guard. <strong>Unique Feature: No congressional nomination is needed for admission!</strong></p>
            <p><a href="http://www.cga.edu/admissions2.aspx?id=60" target="_blank" rel="noopener noreferrer">Admissions Information &rightarrow;</a></p>
        </div>
        <div className="academy-item">
            <h4>United States Merchant Marine Academy (USMMA)</h4>
            <p>Educates leaders for the U.S. Merchant Marine and armed forces.</p>
            <p><a href="http://www.usmma.edu/admissions/admissions-a-to-z" target="_blank" rel="noopener noreferrer">Admissions A to Z &rightarrow;</a></p>
        </div>
        <div className="academy-item">
            <h4>United States Military Academy (USMA - West Point)</h4>
            <p>Prepares future officers for the U.S. Army.</p>
            <p><a href="http://www.usma.edu/admissions/SitePages/Steps.aspx" target="_blank" rel="noopener noreferrer">Admission Steps &rightarrow;</a></p>
        </div>
      </div>
    </section>

    ---

    <section className="application-process-section">
      <h3>The Application Process</h3>
      <p>Applying to a military academy is far more involved than a typical college application. It’s a multi-step process that assesses your academic, physical, and leadership potential.</p>
      <h4>Key Steps and Important Differences:</h4>
      <ul>
        <li><strong>Early Start:</strong> You should apply between **April of your Junior year and January of your Senior year**. The earlier you start, the better your chances!</li>
        <li><strong>Congressional Nomination:</strong> For most academies (except the Coast Guard Academy), you'll need a nomination from a U.S. Senator, Representative, or the Vice President. This is a competitive process in itself.</li>
        <li><strong>Physical Requirements:</strong> You'll undergo a **Candidate Fitness Assessment (CFA)** and a thorough **Department of Defense Medical Examination Review Board (DoDMERB)** medical exam. Physical fitness and medical qualifications are non-negotiable.</li>
        <li><strong>Interviews:</strong> Expect interviews that delve into your leadership experience, motivation, and understanding of military service.</li>
        <li><strong>Rigorous Academic Review:</strong> Your high school transcript, standardized test scores (SAT/ACT), and extracurricular activities are heavily scrutinized.</li>
      </ul>
    </section>

    ---

    <section className="key-requirements-section">
      <h3>Key Requirements</h3>
      <p>While specific criteria can vary slightly by academy, general requirements for admission include:</p>
      <ul>
        <li><strong>Age:</strong> Generally, you must be at least 17 but not have passed your 23rd birthday by July 1st of the year of admission.</li>
        <li><strong>Citizenship:</strong> U.S. Citizen (some exceptions for international students sponsored by their government).</li>
        <li><strong>Academic Standing:</strong> Strong performance in challenging high school courses, especially in math and science. Competitive SAT/ACT scores.</li>
        <li><strong>Leadership Potential:</strong> Demonstrated involvement in extracurricular activities, sports, community service, and leadership roles.</li>
        <li><strong>Physical Fitness:</strong> Ability to pass the Candidate Fitness Assessment (CFA) and meet medical standards.</li>
        <li><strong>Character:</strong> High moral character and integrity.</li>
      </ul>
    </section>

    ---

    <section className="life-at-academy-section">
      <h3>Life at an Academy</h3>
      <p>Life at a military academy is unlike a typical college experience. It’s highly structured and demanding, focusing on developing the whole person: mind, body, and character.</p>
      <ul>
        <li><strong>Academics:</strong> Expect a rigorous academic curriculum, often with a strong emphasis on STEM fields.</li>
        <li><strong>Military Training:</strong> Daily routines include military drills, physical training, and leadership exercises. You'll learn discipline, teamwork, and strategic thinking.</li>
        <li><strong>Structured Environment:</strong> Cadets and Midshipmen live on campus in barracks, adhering to strict rules and a demanding schedule. Your time will be highly managed, from reveille to taps.</li>
        <li><strong>Summer Training:</strong> Summers are not for vacation; they involve intensive military training, such as basic training for incoming plebes (freshmen), field training, or specialized programs.</li>
      </ul>
    </section>

    ---

    <section className="post-graduation-section">
      <h3>Post-Graduation</h3>
      <p>Upon successfully completing your four years at a military academy, you'll receive your Bachelor of Science degree and a commission as an officer in your respective branch of the U.S. Armed Forces.</p>
      <ul>
        <li><strong>Commissioning:</strong> Graduates are typically commissioned as Second Lieutenants (Army, Air Force, Marine Corps, Space Force) or Ensigns (Navy, Coast Guard).</li>
        <li><strong>Service Commitment:</strong> You'll have a minimum service obligation, usually five years of active duty, depending on your branch and specific career path. This is your commitment for the full scholarship and education you received.</li>
        <li><strong>Career Path:</strong> You'll enter a guaranteed career with immediate leadership responsibilities, competitive pay, and comprehensive benefits.</li>
      </ul>
    </section>

    ---

    <section className="rotc-distinction-section">
      <h3>ROTC (Reserve Officer Training Corps): Another Route to Officer</h3>
      <p>If you're not selected for an academy or prefer a more traditional college experience, **ROTC** is another excellent path to becoming a commissioned officer after college.</p>

      <h4>How ROTC Works:</h4>
      <ul>
        <li>You attend a regular civilian college that offers an ROTC program for your desired branch (Army, Navy, Air Force, Marine Corps options available; Coast Guard does not have a traditional ROTC program but offers similar commissioning programs).</li>
        <li>You participate in military science courses, physical training, and leadership development alongside your academic studies.</li>
        <li>ROTC programs can offer scholarships that help cover tuition and other expenses.</li>
      </ul>

      <h4>Becoming an Officer Through ROTC:</h4>
      <p>Not all students who join ROTC become officers. A selective process occurs, typically after your sophomore year:</p>
      <ul>
        <li><strong>Get Noticed:</strong> Volunteer for everything within the program and demonstrate strong commitment. Even if an activity is optional, it is mandatory if you want to become an officer. If you show that you volunteer for everything and do a good job, the higher-ups will know you're fully committed. They are the ones that nominate you.</li>
        <li><strong>Grades Matter:</strong> Maintain strong academic performance.</li>
        <li><strong>Leadership & Performance:</strong> Show consistent leadership potential and perform well in all ROTC activities.</li>
        <li><strong>Selection:</strong> Once you are picked for the summer program between your sophomore and junior year of college and go to basic training, as long as you keep up your grades and good work, you will become an officer after you graduate college.</li>
        <li><strong>Reimbursement:</strong> Once you graduate college and are an officer, the military branch you are in will typically reimburse all of your college expenses (tuition, room, and board) and it will be free, provided that you serve the military for at least 4 years. Up until that point, everything comes out of your pocket, and plan on paying it back after you graduate if you choose that the military route is not for you.</li>
      </ul>

      <h4>Your Next Steps for ROTC:</h4>
      <ul>
        <li>Review the list of colleges you are considering (or have chosen) and see if they offer an ROTC program for the military branch you are interested in (Army, Navy, Air Force, Marines).</li>
        <li>Contact the recruiting officer there when you visit the college campuses.</li>
        <li>Find out what you have to do in order to join the ROTC program.</li>
        <li>Get a business card and a link to their website to find out more about them.</li>
      </ul>
    </section>

    ---

    <section className="academies-vs-rotc-section">
      <h3>Academies vs. ROTC: Key Differences</h3>
      <p>While both paths lead to becoming a commissioned officer, they offer very different collegiate and training experiences:</p>
      <ul>
        <li><strong>Military Academies:</strong> Immerse you in a full-time military environment from day one. You are a cadet or midshipman on active duty, and your entire college experience is structured by the military. Your tuition, room, and board are completely covered.</li>
        <li><strong>ROTC:</strong> You attend a traditional civilian college as a regular student. Your military training is integrated into your college life as additional courses and activities. You are generally responsible for your college expenses (though scholarships are often available) until you commission after graduation. You are not active duty until you graduate and commission.</li>
      </ul>
    </section>

    ---

    <section className="resources-section">
      <h3>Resources</h3>
      <p>Ready to explore further? Here are some official links to the academies to get you started:</p>
      <ul>
        <li><strong>United States Naval Academy:</strong> <a href="http://www.usna.edu/" target="_blank" rel="noopener noreferrer">usna.edu</a></li>
        <li><strong>United States Air Force Academy:</strong> <a href="http://www.af.edu/" target="_blank" rel="noopener noreferrer">af.edu</a> (often redirects to academyadmissions.com for application)</li>
        <li><strong>United States Coast Guard Academy:</strong> <a href="http://www.cga.edu/" target="_blank" rel="noopener noreferrer">cga.edu</a></li>
        <li><strong>United States Merchant Marine Academy:</strong> <a href="http://www.usmma.edu/" target="_blank" rel="noopener noreferrer">usmma.edu</a></li>
        <li><strong>United States Military Academy (West Point):</strong> <a href="http://www.westpoint.edu/" target="_blank" rel="noopener noreferrer">westpoint.edu</a></li>
      </ul>
      <p>You can also find more information on ROTC programs directly through each service branch's main website or by searching for "ROTC" on the websites of colleges you're interested in.</p>
    </section>
  </div>
);

export default MilitaryAcademiesGuide;
