import React from 'react';
import logo from './logo.svg';
import './Home.css';
import { useNavigate } from "react-router-dom";
import useToken from './useToken';
import { useJwt } from 'react-jwt';
import { Card, CardBody, Image, Button } from '@chakra-ui/react'

type Props = {
  userName?: string,
  pictureURL?: string,
  onLogout: () => void
}
function Home(props: Props) {
  const {token, setToken} = useToken();
  const {decodedToken, isExpired}: {decodedToken: any, isExpired: boolean} = useJwt(token);
  

  const navigate = useNavigate();

  const handleCareer = () => {
    navigate("/Career");
  }

  const handleDaily = () => {
    navigate("/Daily");
  }

  const handleLove = () => {
      navigate("/Love");
  }

  return (
      <div className="App text-center">
        
        {/* <h1 className="a-h1">Hello, {decodedToken?.given_name}! Welcome to AI Tarot Readings!</h1> */}
        <div className='hero-container'>
          <div className="logo">
            <img className="logo-img" alt="logo" src="https://i.imgur.com/9fTXRNl.png"/>
          </div>
          <div className="hero">
            <h1>{props.userName}, Ready to Discover the Power of Tarot?</h1>
            <p>Get personalized readings online from Artificial Intelligence.</p>
            <button className="hero-button" onClick={() => navigate("/LinearDay")}>Try a reading now!</button>
          </div>
        </div>
        
        <div className="grid-container" id="services">
          <div>
            <Card>
              <CardBody 
              as={Button} 
              onClick={handleCareer}
              padding="0px"
              width="400px"
              height="400px">
                <Image 
                alt="career card"
                className="background-card" 
                src="https://i.imgur.com/nYogzt3.png" 
                width="400px" 
                height="400px"    
                />
              </CardBody>
            </Card>
          </div>

          <div>
            <Card>
              <CardBody
              as={Button} 
              onClick={handleLove}
              padding="0px"
              width="400px"
              height="400px">
              <img 
              alt="love card"
              className="background-card" 
              src="https://i.imgur.com/ggfvFaN.png" 
              width="400px" height="400px"></img>
              </CardBody>
            </Card>
          </div>
        
          <div>
            <Card>
              <CardBody
              as={Button} 
              onClick={handleDaily}
              padding="0px"
              width="400px"
              height="400px">
              <Image 
              alt="daily card"
              className="background-card" 
              src="https://i.imgur.com/SKmk0Ta.png"
               width="400px" height="400px"></Image>
               </CardBody>
            </Card>
          </div>
            
        </div>
      </div>

  )
}

export default Home;
