import React, { useState } from 'react';
import axios from "axios";
import { Card, CardBody, CardHeader, Image } from '@chakra-ui/react';

type Props = {
  // The string that you want to show over the card.
  header: string;

  // The card ID you drew.
  id: string;

  // When clicked, this gets called back with the card's name.
  setCardName: (cardName: string) => void;
}

function TarotCard(props: Props) {
  const [cardUpright, setCardUpright] = useState("?")
  const [cardReverse, setCardReverse] = useState("?")
  const [cardImage, setCardImage] = useState("https://i.imgur.com/MyvuLmb.png")
  const [isFlipped, setIsFlipped] = useState(false);
  
  const onClick = () => {
    axios.get("/getCardName/" + props.id)
    // @ts-ignore
         .then(response => {
           console.log("this is response.data for getCardName: " + response.data);
           props.setCardName(response.data);
         })
    // @ts-ignore
         .catch(error => {
           console.log(error);
         });
    
    axios.get("/getCardImage/" + props.id)
    // @ts-ignore
         .then(response => {
           console.log("this is response.data for getCardImage: " + response.data);
           setCardImage(response.data);
         })
    //@ts-ignore
         .catch(error => {
           console.log(error);
         });

    axios.get("/getCardUpright/" + props.id)
    // @ts-ignore
         .then(response => {
           console.log("this is response.data for getCardUpright: " + response.data);
           setCardUpright(response.data);
         })
    //@ts-ignore
         .catch(error => {
           console.log(error);
         });
    
    axios.get("/getCardReverse/" + props.id)
    // @ts-ignore
         .then(response => {
           console.log("this is response.data for getCardReverse: " + response.data);
           setCardReverse(response.data);
         })
    //@ts-ignore
         .catch(error => {
           console.log(error);
         });
    
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
    <Card maxW="sm" maxH="lg" justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
      <CardHeader>{props.header}</CardHeader>
      <div
        className={`card ${isFlipped ? "flip" : ""}`}
        onClick={onClick}>
        <div className="front">
          <Image className="clickable" alt="morning card front" src="https://i.imgur.com/MyvuLmb.png"></Image>
        </div>
        <div className="back">
          <Image className="clickable" alt="morning card back" src={cardImage}></Image>
        </div>
      </div>
      <CardBody>
        <p>Upright: {cardUpright} </p>
        <p>Reverse: {cardReverse} </p>
      </CardBody>
    </Card>
    </div>
  );
}

export default TarotCard;