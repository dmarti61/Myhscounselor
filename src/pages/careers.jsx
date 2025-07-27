import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/careers.css'; // Assuming you'll have specific styles for this page

const Careers = () => {
  return (
    <section className="no-college-degree-careers-container">
      <h1>Jumpstart Your Career: No College Degree Needed!</h1>
      <p className="intro">
        Think a four-year degree is the *only* path to a great job? Think again! High school graduates have tons of opportunities to build strong, rewarding careers right out of the gate. All it takes is determination, a willingness to learn, and a smart game plan.
      </p>
      <p className="intro">
        Explore these fields where you can start working with just your diploma, and discover paths that lead to growth and success.
      </p>

      <div className="career-section">
        <h2>🛠️ Skilled Trades & Apprenticeships</h2>
        <p>
          Love working with your hands? Enjoy solving practical problems? The **skilled trades** offer excellent pay and high demand. Many roles start with an **apprenticeship**, where you earn while you learn directly on the job.
        </p>
        <ul>
          <li>**Start as:** Apprentice or helper in fields like plumbing, electrical work, HVAC, welding, or carpentry.</li>
          <li>**Skills:** Reliability, physical stamina, problem-solving, and a keen eye for detail.</li>
          <li>**Training:** Hands-on experience, often alongside certified professionals; formal apprenticeships can last several years.</li>
          <li>**Pathways:** Grow into specialized roles, become a journeyman, or even start your own business.</li>
        </ul>
        <p className="cta-link">
          <NavLink to="/trade">
            **Discover more about Trade School & Direct Entry Careers here!**
          </NavLink>
        </p>
      </div>

      <div className="career-section">
        <h2>🚚 Logistics & Transportation</h2>
        <p>
          The world of **logistics** is always moving, and it needs people to keep things flowing! If you're organized, reliable, and comfortable on the go, there are many entry points.
        </p>
        <ul>
          <li>**Start as:** Warehouse associate, package sorter, local delivery driver (non-CDL), or forklift operator.</li>
          <li>**Skills:** Time management, attention to detail, physical capability, basic tech use, and a good driving record (for drivers).</li>
          <li>**Training:** Often provided on the job; certifications like forklift operation are commonly offered by employers.</li>
          <li>**Pathways:** Move into supervisory roles, specialized equipment operation, or pursue a Commercial Driver's License (CDL) for higher-paying truck driving jobs.</li>
        </ul>
      </div>

      <div className="career-section">
        <h2>💼 Administrative & Office Support</h2>
        <p>
          Every business needs organized and efficient people to keep things running smoothly. If you're detail-oriented and enjoy supporting a team, **office roles** can be a great starting point.
        </p>
        <ul>
          <li>**Start as:** Administrative assistant, office clerk, receptionist, or data entry specialist.</li>
          <li>**Skills:** Strong organization, computer proficiency (Microsoft Office Suite is a big plus!), communication, and a professional attitude.</li>
          <li>**Training:** Typically on-the-job training; some roles might benefit from short courses in specific software or office procedures.</li>
          <li>**Pathways:** Advance to executive assistant, office manager, or specialize in areas like human resources or accounting support.</li>
        </ul>
      </div>

      <div className="career-section">
        <h2>🛒 Customer Service & Sales</h2>
        <p>
          If you enjoy interacting with people and have a knack for problem-solving, **customer-facing roles** are plentiful and offer valuable experience.
        </p>
        <ul>
          <li>**Start as:** Retail sales associate, customer service representative (call center or in-person), or bank teller.</li>
          <li>**Skills:** Excellent communication, patience, active listening, problem-solving, and a friendly demeanor.</li>
          <li>**Training:** Primarily on-the-job training; some companies offer structured customer service or sales training programs.</li>
          <li>**Pathways:** Move into team lead roles, sales management, or specialize in product knowledge and customer relations.</li>
        </ul>
      </div>

      <div className="career-section">
        <h2>❤️ Healthcare Support</h2>
        <p>
          Want to make a difference in people's lives? Many essential roles in **healthcare** don't require a four-year degree and offer a direct path to employment after high school, often with short-term certifications.
        </p>
        <ul>
          <li>**Start as:** Certified Nursing Assistant (CNA), Medical Assistant (entry-level), or Home Health Aide.</li>
          <li>**Skills:** Compassion, empathy, strong communication, attention to detail, and a willingness to learn medical procedures.</li>
          <li>**Training:** CNAs and Medical Assistants typically require a short certification program (weeks to months) after high school. Home Health Aides often receive on-the-job training.</li>
          <li>**Pathways:** Gain experience and potentially pursue further education to become a Licensed Practical Nurse (LPN) or Registered Nurse (RN).</li>
        </ul>
      </div>

      <div className="career-section">
        <h2>💻 Tech & Digital Skills</h2>
        <p>
          The digital world offers exciting opportunities if you're tech-savvy and enjoy creating or managing online content. Many roles can be learned through self-study and online courses.
        </p>
        <ul>
          <li>**Start as:** Freelance web designer (basic sites), social media manager (entry-level), or digital content creator.</li>
          <li>**Skills:** Creativity, basic software proficiency, good communication, self-discipline, and a desire to learn new technologies.</li>
          <li>**Training:** Online courses (Coursera, Udemy, Skillshare), YouTube tutorials, coding bootcamps (some are short-term), and building a portfolio of your work.</li>
          <li>**Pathways:** Specialize in web development, digital marketing, cybersecurity support, or expand your freelance business.</li>
        </ul>
      </div>

      <div className="career-section">
        <h2>👮 Government & Public Service</h2>
        <p>
          Serve your community directly through a variety of roles that provide stability and valuable benefits. Many of these positions offer comprehensive training.
        </p>
        <ul>
          <li>**Start as:** Corrections officer, postal service worker, or military enlistee.</li>
          <li>**Skills:** Strong sense of responsibility, good communication, ability to follow procedures, and passing relevant background checks and exams.</li>
          <li>**Training:** Extensive on-the-job training provided by the specific agency or branch of service.</li>
          <li>**Pathways:** Opportunities for advancement, specialized training, and career-long stability and benefits.</li>
        </ul>
      </div>

    </section>
  );
};

export default Careers;
