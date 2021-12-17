import React from 'react';
import logo from './logo.svg';
import './App.css';
// import YoutubeVideo from "./features/Youtube/YoutubeVideo"\
import VideoSection from "./features/VideoSection/VideoSection";
import Hero from "./features/Hero/Hero"
function App() {
  return (
    <div className="App">
      <Hero />
      <VideoSection />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
        <h2>I teach coding with javascript on youtube</h2>
        {/* <YoutubeVideo id={"jQmZ8uCJmmw"} />
        <YoutubeVideo id={"jQmZ8uCJmmw"} />
        <YoutubeVideo id={"jQmZ8uCJmmw"} /> */}
      </header>
    </div>
  );
}

export default App;
