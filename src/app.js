import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Navbar from './components/navbar';
import Contact from './pages/contact';
import Explore from './pages/explore';
import About from './pages/about';
import Careers from './pages/careers';
import Trade from '.pages/tradeschoolguide;
import TalkTemplates from './pages/talktemplates';
import Home from './pages/home';
import NotSure from './pages/notsure';
import PreferenceQuiz from './components/quiz/preference';
import CollegeGuide from './pages/collegeguide';
import NotFound from './pages/notfound';
import Quiz from './components/quiz/quiz';
import ResultBadge from './components/quiz/resultbadge';

const App = () => (
  <Router basename="/Myhscounselor">
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/not-sure" element={<NotSure />} />
        <Route path="/explore-careers" element={<Explore />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/preferences" element={<PreferenceQuiz />} />
        <Route path="/results" element={<ResultBadge />} />

        {/* Resources */}
        <Route path="/college-guide" element={<CollegeGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/direct-entry-careers" element={<Careers />} />
        <Route path="/talk-templates" element={<TalkTemplates />} />
        <Route path="/trade" element={<Trade />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
