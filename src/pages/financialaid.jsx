import React from 'react';
import '../styles/global.css'; // Assuming you have a global CSS for consistent styling

const FinancialAid = () => (
  <div className="page-container">
    <h1 tabIndex="0">💰 Understanding Financial Aid & Funding Your Future</h1>
    <p>
      Thinking about college or trade school, but wondering how to pay for it? You're not alone! Figuring out financial aid can seem like a puzzle, but it's totally manageable. Let's break down the key ways to fund your education.
    </p>

    <section>
      <h2>What is FAFSA and Why It's Crucial</h2>
      <p>
        The **Free Application for Federal Student Aid (FAFSA)** is your gateway to most financial assistance from the government and many schools. It's not just for loans; it determines your eligibility for grants, scholarships, and work-study programs too.
      </p>
      <ul>
        <li><strong>It's FREE:</strong> Don't pay anyone to help you fill it out.</li>
        <li><strong>Open Early:</strong> The FAFSA opens on October 1st each year for the following academic year. The earlier you apply, the better, as some aid is first-come, first-served!</li>
        <li><strong>Everyone Should Apply:</strong> Even if you think your family makes too much money, apply! Many schools use FAFSA data for their own aid, and sometimes you're eligible for more than you think.</li>
        <li><strong>Requires Parent Info:</strong> If you're a dependent student, your parents will need to provide their financial information.</li>
      </ul>
      <p className="emphasis">
        <strong>Wise Tip:</strong> Gather all necessary financial documents (tax returns, W-2s, bank statements) for both you and your parents (if applicable) before you start. It makes the process much smoother!
      </p>
      <p>
        <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer">
          <strong>Start your FAFSA application here.</strong>
        </a>
      </p>
      <p>
        For many private colleges, you'll also need to complete the{" "}
        <a href="https://cssprofile.collegeboard.org/" target="_blank" rel="noopener noreferrer">
          <strong>CSS Profile.</strong>
        </a>
      </p>
    </section>

    <section>
      <h2>Navigating the Different Types of Aid</h2>
      <p>
        Not all money for school needs to be paid back. It's super important to understand the difference!
      </p>
      <ul>
        <li>
          <strong>Grants:</strong> This is free money, usually based on financial need. You don't have to pay it back! Examples include the Pell Grant.
        </li>
        <li>
          <strong>Scholarships:</strong> Also free money, but typically awarded based on merit (academics, talents), specific criteria (e.g., leadership, ethnicity), or community involvement. You apply for these directly from various organizations, not just your school.
        </li>
        <li>
          <strong>Federal Student Loans:</strong> Money you borrow from the government that you *do* have to pay back, usually with interest, after you finish school.
          <ul>
            <li>
              <strong>Subsidized Loans:</strong> The government pays the interest while you're in school and during grace periods. These are better!
            </li>
            <li>
              <strong>Unsubsidized Loans:</strong> Interest starts accruing as soon as the loan is disbursed, even while you're in school.
            </li>
          </ul>
          <p className="emphasis">
            <strong>Mentor Advice:</strong> Always aim for grants and scholarships first! If you need to borrow, federal loans are generally safer than private loans, but only borrow what you truly need.
          </p>
        </li>
        <li>
          <strong>Work-Study:</strong> A federal program that allows you to work part-time, usually on campus, to help pay for educational expenses. It's a great way to earn money and gain experience.
        </li>
      </ul>
    </section>

    <section>
      <h2>Smart Strategies for Scholarship Searching</h2>
      <p>
        Scholarships are out there for almost everything! It just takes a bit of focused effort.
      </p>
      <ul>
        <li><strong>Start Local:</strong> Check with your high school counselor, local community foundations, churches, and civic organizations. Local scholarships often have less competition.</li>
        <li><strong>Online Databases:</strong> Websites like{" "}
          <a href="https://www.fastweb.com/" target="_blank" rel="noopener noreferrer">Fastweb</a>,{" "}
          <a href="https://bigfuture.collegeboard.org/scholarship-search" target="_blank" rel="noopener noreferrer">College Board's BigFuture</a>,{" "}
          <a href="https://www.niche.com/colleges/scholarships/" target="_blank" rel="noopener noreferrer">Niche</a>, and{" "}
          <a href="https://www.scholarships.com/" target="_blank" rel="noopener noreferrer">Scholarships.com</a> are great starting points, but be prepared to filter.
        </li>
        <li><strong>Your College/Trade School's Website:</strong> Many institutions have their own scholarships for admitted students.</li>
        <li><strong>Match Your Passions & Background:</strong> Look for scholarships related to your intended major, hobbies, volunteer work, ethnicity, or unique talents.</li>
        <li><strong>Essay Tips:</strong> Reuse and adapt essays for multiple applications. Proofread carefully!</li>
      </ul>
      <p>
        Finding money for your education is an investment in your future. Take it step-by-step, and don't hesitate to ask your high school counselor or college financial aid office for help!
      </p>
    </section>
  </div>
);

export default FinancialAid;
