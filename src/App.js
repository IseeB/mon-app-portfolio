import logo from './piggy.png';
import './App.css';
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";


export default function App() {
  return (
    <main>
    {/* <Navbar /> */}
    <About />
    {/* <Projects />
    <Skills /> */}
    <Contact />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </main>
  );
}
