import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Tips.css';
import axios from "axios";
import CardLibrary from './CardLibrary';
import ResourceLibrary from './ResourceLibrary';


function Tips(props: any){

const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

return (
    <div className="TipsPage text-center">
      <div className='hero-container'>
          <div className="tip-hero">
            <h1>Tips and Tricks for Understanding Tarot</h1>
            <p>A guide to Major Arcana, the cards, and more resources!</p>
          </div>
        </div>
      <section className="section">
        <h2>How to use Major Arcana</h2>
        <p>
          Major Arcana is meant to be a fun way for mystics of all levels to interact with tarot, so the first tip is to 
          have fun and explore the different tarot spreads within the Career, Daily, and Love pages.
        </p>
        <p>
          Within those spreads, you can flip the cards and then generate an AI reading, but we also encourage you to consider your own 
          interpretation of the cards and how they may relate to your question or situation! The cards within the spreads have some keywords 
          that may help you decipher the meaning of that card's context within the spread, but we've also curated a card library (below) with more in depth
          explanations of their meanings.
        </p>
        <p>
          Ultimately, trust your gut!
        </p>
      </section>
      <section className="section">
        <h2>Library of Cards</h2>
        <CardLibrary />
      </section>
      {/* <section className="section">
        <h2>More Tarot Resources</h2>
        <ResourceLibrary />
      </section> */}
    </div>
)
}
export default Tips;