import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import axios from "axios";
import '../spread.css';
import { Card, CardHeader, CardBody, Button } from '@chakra-ui/react'

import FlipCardPrompt from '../../SiteComponents/FlipCardPrompt';
import { ArrowBackIcon } from '@chakra-ui/icons';
import TarotCard from '../../SiteComponents/TarotCard';

function HTF(props: any){
  const [loaded, setLoaded] = useState(false);

  const [cardIDOne, setCardIDOne] = useState("22")
  const [cardIDTwo, setCardIDTwo] = useState("22")
  const [cardIDThree, setCardIDThree] = useState("22")
  const [cardIDFour, setCardIDFour] = useState("22")


  const [cardNameOne, setCardNameOne] = useState("")
  const [cardNameTwo, setCardNameTwo] = useState("")
  const [cardNameThree, setCardNameThree] = useState("")
  const [cardNameFour, setCardNameFour] = useState("")

  const [reading, setReading] = useState("")
  let navigate = useNavigate();

  useEffect(() => { setLoaded(true) })

  useEffect(() => {
    if (loaded) {
        axios.get("/getCards/5")
                // @ts-ignore
                .then(response => {
                  console.log("this is response.data for getCards: " + response.data);
                  console.log(response.data[0]);
                  console.log(response.data[1]);
                  console.log(response.data[2]);

                  setCardIDOne(response.data[0]);
                  setCardIDTwo(response.data[1]);
                  setCardIDThree(response.data[2]);
                  setCardIDFour(response.data[3]);

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
  setDisabled(true)
axios.get("/getReadingHTF/" + cardNameOne + "/" + cardNameTwo + "/"
+ cardNameThree + "/" + cardNameFour)
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

return (
    <div className="HTFPage">
      <div className='hero-container'>
        <div className='love-hero'>
        <h1>
            <Button onClick={() => navigate('/Love')} background="transparent" size="m" _hover={{backgroundColor: 'transparent'}}><ArrowBackIcon /></Button>
            How They Feel
          </h1>
          <p>These cards can help to provide you with personalized interpretations of how the other person is feeling and offer guidance on how to navigate the situation.
          </p>
          <FlipCardPrompt />
        </div>
      </div>
      
    <div className="content-box">
      <div>
        <TarotCard
          header='How They Feel About You'
          id={cardIDOne}
          setCardName={setCardNameOne}
        />
      </div>
      <div>
        <TarotCard
          header='How They Feel About the Relationship'
          id={cardIDTwo}
          setCardName={setCardNameTwo}
        />
      </div>
      <div>
        <TarotCard
          header='What Are Their Challenges?'
          id={cardIDThree}
          setCardName={setCardNameThree}
        />
      </div>
      <div>
        <TarotCard
          header='Where Is This Relationship Heading?'
          id={cardIDFour}
          setCardName={setCardNameFour}
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
        <CardBody placeholder='Waiting on the spirits...'>{reading}</CardBody>
      </Card>
    </div>

</div>
)
}

export default HTF;
