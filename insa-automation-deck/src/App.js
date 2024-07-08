import React from 'react';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import PastPerformance from './components/PastPerformance';
import Differentiators from './components/Differentiators';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main id="home">
        <section className="intro">
          <h2>Comprehensive Remote Design Solutions</h2>
          <p>We specialize in remote industrial automation and energy solutions, offering a wide range of services to optimize efficiency and sustainability across various sectors.</p>
          <p>Our focus is on remote work, delivering all needed instruments, parts, and programming.</p>
        </section>
        <Services />
        <Capabilities />
        <PastPerformance />
        <Differentiators />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
