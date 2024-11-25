import React from 'react';
import Navbar from './components/Navbar.jsx';
import Bodhan from './components/Bodhan.jsx';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Global Background */}
      <div className="fixed top-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <Bodhan />
        <About />
        <Technologies />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
