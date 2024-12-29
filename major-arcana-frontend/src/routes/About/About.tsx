import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './About.css';
import axios from "axios";


function About(props: any){

const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

return (
    <div className="AboutPage">
      <img className="logo-img2" alt="logo" src="https://i.imgur.com/9fTXRNl.png"/>
      <section className="section">
        <h2>Who We Are</h2>
        <p>MajorArcana was founded in 2022 by Brown University CS/Literary Arts Concentrator Becca Waterson with a mission to provide quality tarot readings to people around the world.</p>
        <p>Through the power of AI, we hope to make readings quick, easy, accessible, and fun for users of all levels.</p>
      </section>
      <section className="section">
        <h2>Why Tarot</h2>
        <p>
        June 2022, fresh out of CSCI 32 "Introduction to Software Engineering", I wanted to build off of my final project 
        and make some type of game for myself. But what about? After buying my tenth set of Tarot Cards, I realized that 
        I wanted to make an application that could quickly give you a tarot reading. Although part of the fun of Tarot 
        is certainly the shuffling cards and mindfully considering what each card means within a spread, I wanted to create 
        something for the modern mystic who didn't have the time to sit down and devote an hour or more to the full Tarot experience.
        </p>
        <p>
        Thus, "Major Arcana" was born! Originally just an application that would reveal a certain number of tarot cards and 
        tell you the generic upright and reverse meanings, it has since grown to include the GPT3 API that sends information 
        about the specific spread and cards picked and returns a concise interpretation of the Tarot spread.
        </p>
        <p>
        Major Arcana is still a work in progress and there a many features that I am still working on implementing, including 
        readings with reversed cards, as well as including more tarot spreads and creating a journal element that allows users 
        to both save the spread/interprestation combo and write about their Tarot experience. Overall, Major Arcana is a 
        culmination of my computer science skills gained at Brown.
        </p>
      </section>
    </div>
)
}
export default About;