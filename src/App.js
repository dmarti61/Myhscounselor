// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotSure from './pages/NotSure';
import BuilderChecklist from './pages/PersonalityChecklistPages/BuilderChecklist';
import PlannerChecklist from './pages/PersonalityChecklistPages/PlannerChecklist';
import ConnectorChecklist from './pages/PersonalityChecklistPages/ConnectorChecklist';
import ExplorerChecklist from './pages/PersonalityChecklistPages/ExplorerChecklist';
import Onboarding from './pages/Onboarding/Onboarding';
import CollegeGuide from './pages/CollegeGuide';
import NotFound from './pages/NotFound';
import Quiz from './components/Quiz/Quiz';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/not-sure" element={<NotSure />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/quiz" element={<Quiz />} />

      {/* personality-type checklists */}
      <Route path="/builder" element={<BuilderChecklist />} />
      <Route path="/planner" element={<PlannerChecklist />} />
      <Route path="/connector" element={<ConnectorChecklist />} />
      <Route path="/explorer" element={<ExplorerChecklist />} />

      {/* resources */}
      <Route path="/college-guide" element={<CollegeGuide />} />

      {/* catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
