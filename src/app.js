// src/app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
