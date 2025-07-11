// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotSure from './pages/NotSure';
import BuilderChecklist from './pages/PersonalityChecklistPages/BuilderChecklist';
import PlannerChecklist from './pages/PersonalityChecklistPages/PlannerChecklist';
import ConnectorChecklist from './pages/PersonalityChecklistPages/ConnectorChecklist';
import ExplorerChecklist from './pages/PersonalityChecklistPages/ExplorerChecklist';
import Onboarding from './pages/Onboarding/Onboarding';
import CollegeGuide from './CollegeGuide';
import NotFound from './pages/NotFound';
import Quiz from './components/Quiz/Quiz';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/not-sure" element={<NotSure />} />
        <Route path="/next-steps/builder" element={<BuilderChecklist />} />
        <Route path="/next-steps/planner" element={<PlannerChecklist />} />
        <Route path="/next-steps/connector" element={<ConnectorChecklist />} />
        <Route path="/next-steps/explorer" element={<ExplorerChecklist />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default App;
