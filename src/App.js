import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <a
        href="#main-content"
        className="skip-to-content"
        style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
        onFocus={(e) => { e.target.style.left = '0'; e.target.style.width = 'auto'; e.target.style.height = 'auto'; e.target.style.padding = '8px 12px'; e.target.style.background = '#000'; e.target.style.color = '#fff'; }}
        onBlur={(e) => { e.target.style.left = '-10000px'; e.target.style.width = '1px'; e.target.style.height = '1px'; e.target.style.padding = '0'; e.target.style.background = 'transparent'; e.target.style.color = 'inherit'; }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Home />
      </main>
    </div>
  );
}

export default App;
