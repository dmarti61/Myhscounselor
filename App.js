// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotSure from './pages/NotSure';
import BuilderChecklist from './pages/PersonalityChecklistPages/BuilderChecklist';
import PlannerChecklist from './pages/PersonalityChecklistPages/PlannerChecklist';
import ConnectorChecklist from './pages/PersonalityChecklistPages/ConnectorChecklist';
import ExplorerChecklist from './pages/PersonalityChecklistPages/ExplorerChecklist';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/not-sure" element={<NotSure />} />
        <Route path="/next-steps/builder" element={<BuilderChecklist />} />
        <Route path="/next-steps/planner" element={<PlannerChecklist />} />
        <Route path="/next-steps/connector" element={<ConnectorChecklist />} />
        <Route path="/next-steps/explorer" element={<ExplorerChecklist />} />
      </Routes>
    </Router>
  );
};

export default App;
