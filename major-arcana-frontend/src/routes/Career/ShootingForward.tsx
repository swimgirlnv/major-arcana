import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import axios from "axios";
import '../spread.css';
import FlipCardPrompt from '../../SiteComponents/FlipCardPrompt';
import { Button, Card, CardBody, CardHeader , Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import TarotCard from '../../SiteComponents/TarotCard';

function ShootingForward(props: any){
  const [loaded, setLoaded] = useState(false);

  const [cardIDOne, setCardIDOne] = useState("22")
  const [cardIDTwo, setCardIDTwo] = useState("22")
  const [cardIDThree, setCardIDThree] = useState("22")
  const [cardIDFour, setCardIDFour] = useState("22")
  const [cardIDFive, setCardIDFive] = useState("22")


  const [cardNameOne, setCardNameOne] = useState("")
  const [cardNameTwo, setCardNameTwo] = useState("")
  const [cardNameThree, setCardNameThree] = useState("")
  const [cardNameFour, setCardNameFour] = useState("")
  const [cardNameFive, setCardNameFive] = useState("")

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
                  setCardIDFive(response.data[4]);

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
axios.get("/getReadingShootingForward/" + cardNameOne + "/" + cardNameTwo + "/"
+ cardNameThree + "/" + cardNameFour + "/" + cardNameFive)
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
    <div className="ShootingForwardPage">
      <div className='hero-container'>
        <div className='career-hero'>
        <h1>
            <Button onClick={() => navigate('/Career')} background="transparent" size="m" _hover={{backgroundColor: 'transparent'}}><ArrowBackIcon /></Button>
            Shooting Forward
          </h1>
          <p>With our career shooting forward tarot reading, you'll be able to gain clarity on the steps you need to take to reach 
            your professional goals and propel your career forward.
          </p>
          <FlipCardPrompt />
        </div>
      </div>
      
    <div className="content-box">
      <div>
        <TarotCard
          header='Dream Job'
          id={cardIDOne}
          setCardName={setCardNameOne}
        />
      </div>
      <div>
        <TarotCard
          header='How to Get There'
          id={cardIDTwo}
          setCardName={setCardNameTwo}
        />
      </div>
      <div>
        <TarotCard
          header='Qualities You Bring'
          id={cardIDThree}
          setCardName={setCardNameThree}
        />
      </div>
      <div>
        <TarotCard
          header='Where to Find Help'
          id={cardIDFour}
          setCardName={setCardNameFour}
        />
      </div>
      <div>
        <TarotCard
          header='What Needs Attention'
          id={cardIDFive}
          setCardName={setCardNameFive}
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

export default ShootingForward;
