import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout';
import Navbar from './components/navbar';
import Contact from './pages/contact';
import About from './pages/about';
import Careers from './pages/careers';
import Home from './pages/home';
import NotSure from './pages/notsure';
import BuilderChecklist from './pages/personalitychecklistpages/builderchecklist';
import PlannerChecklist from './pages/personalitychecklistpages/plannerchecklist';
import ConnectorChecklist from './pages/personalitychecklistpages/connectorchecklist';
import ExplorerChecklist from './pages/personalitychecklistpages/explorerchecklist';
import Onboarding from './pages/onboarding/onboarding';
import CollegeGuide from './pages/collegeguide';
import NotFound from './pages/notfound';
import Quiz from './components/quiz/quiz';
import ResultBadge from './components/quiz/resultbadge';

const App = () => (
  <Router>
    <Routes>
      {/* Wrap main routes in Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/not-sure" element={<NotSure />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<ResultBadge />} />

        {/* personality-type checklists */}
        <Route path="/builder" element={<BuilderChecklist />} />
        <Route path="/planner" element={<PlannerChecklist />} />
        <Route path="/connector" element={<ConnectorChecklist />} />
        <Route path="/explorer" element={<ExplorerChecklist />} />

        {/* resources */}
        <Route path="/college-guide" element={<CollegeGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/direct-entry-careers" element={<Careers />} />
        {/* catch-all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
