// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For createRoot (initial client-side render)
import { hydrateRoot } from 'react-dom/client'; // For hydrateRoot (taking over pre-rendered HTML)
import App from './app'; // Assuming your main app component is 'App.js'
import './styles/global.css'; // Your global styles import

const rootElement = document.getElementById('root');

// This conditional rendering is crucial for react-snap.
// If the 'root' element already contains child nodes, it means react-snap (or a server)
// has already pre-rendered the HTML. In this case, we use hydrateRoot to attach React's
// event listeners and interactivity to the existing HTML.
// Otherwise, for a fresh client-side load, we use createRoot to render the app normally.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
