// NotSure.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for internal routing

const NotSure = () => {
  return (
    <div className="not-sure-page-container">
      <h2>🔍 Feeling Unsure About Your Next Step? That's Totally Normal!</h2>
      <p className="intro">
        It’s completely okay to feel unsure about your path after high school. You’re not behind—and you’re definitely not alone. The truth is, most people don't have it all figured out, especially at your age! This page is here to help you slow down, explore your options without pressure, and find some calm amidst the big decisions.
      </p>

      <hr />

      <h3>🧠 Taking a Deep Breath: Actionable Steps to Calm Down</h3>
      <p>When you're feeling overwhelmed, the first step is to recognize that feeling and then give yourself permission to pause. Here are some strategies that can help you find your calm:</p>

      <ul>
        <li>**Acknowledge and Name Your Feelings:** It's okay to feel stressed, confused, or anxious. Don't fight it. Just say to yourself, "I'm feeling overwhelmed right now, and that's a normal response to a big decision." This simple act can actually reduce the power the feeling has over you.</li>
        <li>**Take a Physical Break:** Sometimes the best thing you can do is step away from the screen and do something completely different.
          <ul>
            <li>**Move Your Body:** Go for a walk, stretch, do some jumping jacks, or dance to your favorite song. Physical activity is a huge stress reliever.</li>
            <li>**Mindful Breathing:** Take a few slow, deep breaths. Inhale slowly through your nose, hold for a few seconds, and then exhale slowly through your mouth. Repeat this 5-10 times. It helps calm your nervous system.</li>
            <li>**Engage Your Senses:** Listen to calming music, light a scented candle (if allowed), sip a warm drink, or step outside and notice the sounds and smells around you.</li>
          </ul>
        </li>
      </ul>

      <hr />

      <h3>🔍 Regrouping: Actionable Steps for Exploration</h3>
      <p>Once you feel a bit calmer, you can start exploring your options without so much pressure. These steps are designed to be small, manageable, and help you gather information at your own pace.</p>

      <ul>
        <li>
          **Revisit Your Quiz Answers (and don't overthink it!):** You took the quiz for a reason! Go back and look at what you chose. Don't try to change answers or second-guess yourself. Just **reflect on the patterns** you see. What careers or fields did you lean towards? What preferences popped up consistently? Sometimes, just seeing your initial thoughts laid out can spark new insights.
          <p className="action-tip">**Action:** Spend 5-10 minutes looking over your quiz results. What's the main takeaway?</p>
        </li>
        <li>
          **Browse Our Career Explorer Toolkit (No Pressure to Commit!):** Think of this as window shopping for your future.
          <p className="action-tip">**Action:** Spend just **10-15 minutes** Browse our <NavLink to="/explore-careers">Career Explorer Toolkit</NavLink>. Click on a few careers that sound even mildly interesting. Do any of them spark a tiny bit of curiosity? Even a "not for me" is valuable information!</p>
        </li>
        <li>
          **Talk with Trusted Adults or Mentors (Just for Listening):** This isn't about getting told what to do. It's about sharing what's on your mind.
          <p className="action-tip">**Action:** Pick one adult you trust (a parent, relative, teacher, counselor, coach). Simply tell them how you're feeling. You don't need advice unless you ask for it. Sometimes just saying it out loud helps.</p>
        </li>
        <li>
          **Quickly Compare Pathways: College, Trade, Direct Entry, Military:** Don't dive into the nitty-gritty applications right now. Just get a general sense of each path your website covers.
          <ul>
            <li>**College:** What's the typical time commitment for a 4-year degree? (Check out our <NavLink to="/college-guide">College Guide</NavLink>).</li>
            <li>**Skilled Trades:** How long do trade programs or apprenticeships usually take? (See our <NavLink to="/trade">Trade School Guide</NavLink>).</li>
            <li>**Direct Entry Careers:** What kind of jobs can you get right after high school without further training? (Explore our <NavLink to="/direct-entry-careers">Direct Entry Careers</NavLink> page).</li>
            <li>**Military:** What are the basic options and timeframes for joining? (Visit our <NavLink to="/military">Military Academies & ROTC Guide</NavLink>).</li>
          </ul>
          <p className="action-tip">**Action:** Spend 5-10 minutes on each of these pages. Focus on the **timelines** and **general descriptions**. The goal here is not to make a decision, but to simply **understand the different structures** of these paths.</p>
        </li>
        <li>
          **Find Local Career Centers or Job Shadow Programs (Zero Commitment):** This is about getting a tiny taste of the real world.
          <p className="action-tip">**Action:** Do a quick online search for "career centers near [your city/region]" or "job shadow programs for high school students [your city/region]". See what resources are available. You don't have to sign up for anything, just knowing what's out there can feel empowering.</p>
        </li>
      </ul>

      <hr />

      <h3>✨ Remember: You're in Control</h3>
      <p>You're not behind, you're just taking a different path—one that prioritizes thoughtfulness over rushing. Every step you take, even just pausing to breathe, is progress. You've got time, support, and a world of choices. Keep exploring, keep learning about yourself, and return to these resources whenever it feels right. You've got this!</p>
    </div>
  );
};

export default NotSure;
