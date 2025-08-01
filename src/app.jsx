import React, { lazy, Suspense } from 'react'; // Import lazy and Suspense
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import NotFound from './pages/notfound';

// Lazily loaded page components
const NotSure = lazy(() => import('./pages/notsure'));
const Explore = lazy(() => import('./pages/explore'));
const About = lazy(() => import('./pages/about'));
const Careers = lazy(() => import('./pages/careers'));
const Military = lazy(() => import('./pages/military'));
const Trade = lazy(() => import('./pages/tradeschoolguide'));
const TalkTemplates = lazy(() => import('./pages/talktemplates'));
const PreferenceQuiz = lazy(() => import('./components/quiz/preference'));
const CollegeGuide = lazy(() => import('./pages/collegeguide'));
const Quiz = lazy(() => import('./components/quiz/quiz'));
const ResultBadge = lazy(() => import('./components/quiz/resultbadge'));
const FinancialAid = lazy(() => import('./pages/financialaid'));
const DecisionOfficial = lazy(() => import('./pages/decisionofficial'));
const JobSearch = lazy(() => import('./pages/jobsearch'));
const FirstMonths = lazy(() => import('./pages/firstmonths'));
const GapYear = lazy(() => import('./pages/gapyear'));
const TwoYear = lazy(() => import('./pages/twoyear'));
const Contact = lazy(() => import('./pages/contact'));


const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}> {/* Add Suspense wrapper here */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/not-sure" element={<NotSure />} />
          <Route path="/explore-careers" element={<Explore />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/preferences" element={<PreferenceQuiz />} />
          <Route path="/results" element={<ResultBadge />} />

          {/* Explore My Path */}
          <Route path="/college-guide" element={<CollegeGuide />} />
          <Route path="/two-year" element={<TwoYear />} />
          <Route path="/military" element={<Military />} />
          <Route path="/direct-entry-careers" element={<Careers />} />
          <Route path="/trade" element={<Trade />} />

          {/* Resources */}
          <Route path="/talk-templates" element={<TalkTemplates />} />
          <Route path="/financial-aid" element={<FinancialAid />} />
          <Route path="/decision-official" element={<DecisionOfficial />} />
          <Route path="/job-search" element={<JobSearch />} />
          <Route path="/first-months" element={<FirstMonths />} />
          <Route path="/gap-year" element={<GapYear />} />

          {/* About Us */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense> {/* Close Suspense */}
  </Router>
);

export default App;
