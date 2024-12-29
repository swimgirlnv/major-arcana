// @ts-ignore
import React, {createContext, useEffect, useState} from 'react';
// @ts-ignore
import axios from "axios";
import './CardOfTheDay.css';

// @ts-ignore
export const AppContext = createContext();


function CardOfTheDay() {

  const [cardID, setCardID] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardUpright, setCardUpright] = useState("?")
  const [cardReverse, setCardReverse] = useState("?")
  const [cardImage, setCardImage] = useState("https://i.imgur.com/MyvuLmb.png")

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

  useEffect(() => {
    axios.get("http://localhost:4567/getCard", config)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardID(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });
  }, []);




const handleCotD = () => {

axios.get("http://localhost:4567/getCardImage/" + cardID, config)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImage(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("http://localhost:4567/getCardUpright/" + cardID, config)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUpright(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("http://localhost:4567/getCardReverse/" + cardID, config)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardReverse: " + response.data);
              setCardReverse(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });
}
  return (
    <div className="CardOfTheDay">
          <img src={cardImage} width="200" height="300" />
          <p />
          <p>Upright: {cardUpright} </p>
          <p>Reverse: {cardReverse} </p>
          <button className="CotD" onClick={handleCotD}> Card of the Day </button>
          <p />
    </div>
  );
}

export default CardOfTheDay;