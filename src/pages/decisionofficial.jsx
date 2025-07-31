// src/pages/DecisionOfficialGuide.js
import React from 'react';
import '../styles/global.css';

const DecisionOfficial = () => (
  <div className="page-container">
    <h1 tabIndex="0">✅ Making Your Decision Official: From Acceptance to Enrollment</h1>
    <p>
      Congratulations! You've explored your options, you've gotten acceptances, and now you're almost ready to commit to your next big adventure after high school. This stage is exciting, but it also comes with important deadlines and details. Let's make sure you nail the next steps, no matter which path you've chosen.
    </p>

    <section>
      <h2>Understanding & Comparing Your Offers (College & Trade School)</h2>
      <p>
        If you've applied to multiple places, you might have different offers on the table. It's time to compare apples to apples (and sometimes, apples to oranges!).
      </p>
      <ul>
        <li>
          <strong>Review the "Award Letter":</strong> For colleges, this outlines your financial aid package. Look at grants vs. loans, and understand the "net price" (cost minus grants/scholarships).
        </li>
        <li>
          <strong>Consider the Total Cost:</strong> Beyond tuition, factor in housing, meal plans, fees, books, and living expenses.
        </li>
        <li>
          <strong>Think Beyond Money:</strong> Which program truly excites you? Where do you feel you'll thrive? What are the career outcomes?
        </li>
        <li>
          <strong>Don't Be Afraid to Ask Questions:</strong> If something in an offer letter is unclear, contact the admissions or financial aid office directly.
        </li>
      </ul>
      <p className="emphasis">
        <strong>Wise Tip:</strong> Create a simple spreadsheet to list out the costs and aid offers from each institution. It helps visualize the differences!
      </p>
    </section>

    <section>
      <h2>Confirming Your Commitment: Deposits & Deadlines</h2>
      <p>
        Once you've made your final decision, it's time to officially accept your spot. Pay close attention to the deadlines!
      </p>
      <ul>
        <li>
          <strong>Acceptance Deposit (College/Trade School):</strong> Most institutions require a non-refundable deposit to secure your spot. This often also reserves your housing.
        </li>
        <li>
          <strong>Enrollment Agreement (Trade School/Military/Work):</strong> Trade schools or military branches will have specific paperwork or enlistment contracts to sign. For a direct entry job, this might be your initial offer letter and onboarding documents.
        </li>
        <li>
          <strong>"Candidate Reply Date" (Typically May 1st for College):</strong> This is a common deadline to accept college offers, but always check your specific acceptance letter.
        </li>
        <li>
          <strong>Notify Other Schools/Programs:</strong> It's good etiquette (and sometimes required) to let other institutions know you won't be attending, freeing up a spot for another student. A simple email is usually sufficient.
        </li>
      </ul>
    </section>

    <section>
      <h2>What Comes Next? Preparing for the Transition</h2>
      <p>
        You've made it official – now what? Each path has its own set of immediate next steps.
      </p>
      <ul>
        <li>
          <strong>For College:</strong>
          <ul>
            <li><strong>Housing:</strong> Apply for on-campus housing or start looking for off-campus options.</li>
            <li><strong>Orientation:</strong> Sign up for new student orientation, which is crucial for course registration and getting to know campus.</li>
            <li><strong>Course Registration:</strong> Work with an advisor to pick your first classes.</li>
            <li><strong>Final Transcripts:</strong> Ensure your high school sends your final transcript to your chosen institution.</li>
          </ul>
        </li>
        <li>
          <strong>For Trade School:</strong>
          <ul>
            <li><strong>Orientation/Welcome:</strong> Attend any required orientation sessions.</li>
            <li><strong>Tool Kits/Supplies:</strong> Find out if specific tools or materials are required for your program and how to acquire them.</li>
            <li><strong>Schedule:</strong> Get your class schedule and understand the daily routine.</li>
          </ul>
        </li>
        <li>
          <strong>For Military Service:</strong>
          <ul>
            <li><strong>MEPS & Enlistment:</strong> Complete the Military Entrance Processing Station (MEPS) process and formally enlist.</li>
            <li><strong>Basic Training Dates:</strong> You'll get your ship date for basic training.</li>
            <li><strong>Preparations:</strong> Your recruiter will guide you on what to do before basic training (physical fitness, paperwork).</li>
          </ul>
        </li>
        <li>
          <strong>For Direct Entry Job:</strong>
          <ul>
            <li><strong>Onboarding Paperwork:</strong> Complete HR documents (W-4, I-9, direct deposit).</li>
            <li><strong>Training:</strong> Understand any initial training or probationary periods.</li>
            <li><strong>Start Date:</strong> Confirm your official first day and what to expect.</li>
          </ul>
        </li>
      </ul>
      <p>
        Taking these next steps calmly and deliberately will set you up for a smooth and successful transition into your chosen future. You've got this!
      </p>
    </section>
  </div>
);

export default DecisionOfficial;
