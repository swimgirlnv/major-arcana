import React, { useState, useEffect } from 'react';
// @ts-ignore
import axios from "axios";
import '../spread.css';

import { Card, CardHeader, CardBody, Button , Image, CardFooter } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import FlipCardPrompt from '../../SiteComponents/FlipCardPrompt';
import { Navigate, useNavigate } from 'react-router-dom';
import TarotCard from '../../SiteComponents/TarotCard';

function LinearDay(props: any){
  const [loaded, setLoaded] = useState(false);


  const [cardIDOne, setCardIDOne] = useState("22")
  const [cardIDTwo, setCardIDTwo] = useState("22")
  const [cardIDThree, setCardIDThree] = useState("22")

  const [cardNameOne, setCardNameOne] = useState("")
  const [cardNameTwo, setCardNameTwo] = useState("")
  const [cardNameThree, setCardNameThree] = useState("")

  const [reading, setReading] = useState("")

  useEffect(() => { setLoaded(true) })

  useEffect(() => {
    if (loaded) {
        axios.get("/getCards/3")
                // @ts-ignore
                .then(response => {
                  console.log("this is response.data for getCards: " + response.data);
                  console.log(response.data[0]);
                  console.log(response.data[1]);
                  console.log(response.data[2]);

                  setCardIDOne(response.data[0]);
                  setCardIDTwo(response.data[1]);
                  setCardIDThree(response.data[2]);

                  console.log(cardIDOne);
                })
                // @ts-ignore
                .catch(error => {
                  console.log(error);
                });
    }
  }, [loaded]);

const handleReading = () => {
  setReading("Waiting on the spirits...")
  setDisabled(true);
  axios.get("/getReadingLinearDay/" + cardNameOne + "/" + cardNameTwo + "/" + cardNameThree)
          // @ts-ignore
          .then(response => {
            console.log("this is response.data for getReading: " + response.data);
            setReading(response.data);
          })
          // @ts-ignore
          .catch(error => {
            console.log(error);
          }); 
}

const [disabled, setDisabled] = useState(false);

let navigate = useNavigate();

return (
    <div className="LinearDayPage">
      <div className='hero-container'>
        <div className='daily-hero'>
          <h1>
            <Button onClick={() => navigate('/Daily')} background="transparent" size="m" _hover={{backgroundColor: 'transparent'}}><ArrowBackIcon /></Button>
            Linear Day
          </h1>
          <p>Whether you're looking to stay on top of your to-do list or need guidance on how to navigate 
            challenging situations, our linear day tarot reading can help you stay grounded and focused throughout your day.
          </p>
          <FlipCardPrompt />
        </div>
      </div>
      
    <div className="content-box">
      <div>
        <TarotCard
          header='Morning'
          id={cardIDOne}
          setCardName={setCardNameOne}
        />
      </div>
      <div>
        <TarotCard
          header='Afternoon'
          id={cardIDTwo}
          setCardName={setCardNameTwo}
        />
      </div>
      <div>
        <TarotCard
          header='Evening'
          id={cardIDThree}
          setCardName={setCardNameThree}
        />
      </div>
    </div>
    <div className="reading">
      <Card maxW='lg' minW='lg' boxShadow='none'>
        <CardHeader as={Button} 
        className="CotD" 
        onClick={handleReading} 
        disabled={disabled}
        style={{cursor: disabled ? 'not-allowed' : 'pointer'}}> Get your reading! </CardHeader>
        <CardBody>{reading}</CardBody>
      </Card>
    </div>

</div>
)
}

export default LinearDay;