import React from 'react';
import logo from './logo.svg';
import './App.css';
// import YoutubeVideo from "./features/Youtube/YoutubeVideo"\
import VideoSection from "./features/VideoSection/VideoSection";
import Navigation from "./features/Navigation/Navigation";
import Hero from "./features/Hero/Hero"

const App: React.FC  = () => {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <VideoSection />
    </div>
  );
}

export default App;
