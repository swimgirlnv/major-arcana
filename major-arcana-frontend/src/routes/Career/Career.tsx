import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Career/Career.css';

import { Card, CardHeader, CardBody, CardFooter, Button , Image , Text} from '@chakra-ui/react'

function Career(props: any){

let navigate = useNavigate();

const handleShootingForward = () => {
    navigate("/ShootingForward");
}


return (
    <div className="CareerPage">
      {/* <h1 className="cp-h1">Career Tarot Spreads</h1> */}
      <div className='hero-container'>
        <div className="career-hero">
          <h1>Career Tarot Spreads</h1>
          <p>Looking to advance your career but not sure where to start? Our career tarot reading is here to help! 
            This reading is designed to provide insight into your professional life and help guide you towards success. 
            These cards can uncover hidden opportunities, identify potential obstacles, 
            and offer advice on how to best navigate your career path. Whether you're starting out or looking to make a big 
            change, our career tarot reading can provide the clarity and direction you need to achieve your goals.
          </p>
        </div>
      </div>
      <div className="page-container">
        <div className="cards">
          <Card maxW="sm">
            <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="ShootingForward" 
            onClick={handleShootingForward} bgColor="#30968c" borderRadius='0'>
              <Text>Shooting Forward</Text></CardHeader>
            <CardBody>Looking for the way toward achieving what you want?
            This tarot spread can help clarify how you might attain your goals.</CardBody>
          </Card>
        </div>
        <div className="cards">
          <Card maxW="sm">
          <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="ShootingForward" 
            onClick={() => navigate("/SelfReflection")} bgColor="#30968c" borderRadius='0'>
              <Text>Self Reflection</Text></CardHeader>
            <CardBody>If you are interested in finding your true self and your strengths, this spread will help you
              with personal growth and nurturing.</CardBody>
          </Card>
        </div>
        <div className="cards">
          <Card maxW="sm">
          <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="ShootingForward" 
            onClick={() => navigate("/Completionist")} bgColor="#30968c" borderRadius='0'>
              <Text>Completionist</Text></CardHeader>
            <CardBody>
              This spread can guide you toward a sense of fulfillment, empowerment, and readiness for the goals you have in mind. 
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
)
}
export default Career;