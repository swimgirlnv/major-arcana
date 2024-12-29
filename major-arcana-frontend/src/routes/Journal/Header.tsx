import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Journal.css';
import axios from "axios";


function Header(props: any){

const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

return (
    <div className="JournalPage text-center">
      <div className='hero-container'>
        <div className="tip-hero">
          <h1>Your Tarot Journal</h1>
        </div>
      </div>
      <br />
      <h3> Feature coming soon! </h3>

    </div>
)
}
export default Header;