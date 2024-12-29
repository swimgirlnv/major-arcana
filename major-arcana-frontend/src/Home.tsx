import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Image, Button } from "@chakra-ui/react";

type Props = {
  userName?: string;
  pictureURL?: string;
  onLogout: () => void;
};

const Home: React.FC<Props> = ({ userName, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="App text-center">
      <div className="hero-container">
        <div className="logo">
          <img
            className="logo-img"
            alt="logo"
            src="https://i.imgur.com/9fTXRNl.png"
          />
        </div>
        <div className="hero">
          <h1>{userName || "User"}, Ready to Discover the Power of Tarot?</h1>
          <p>Get personalized readings online from Artificial Intelligence.</p>
          <button
            className="hero-button"
            onClick={() => navigate("/linearDay")}
          >
            Try a reading now!
          </button>
          <button className="hero-button" onClick={onLogout}>
            Log Out
          </button>
        </div>
      </div>

      <div className="grid-container" id="services">
        <CardOption
          onClick={() => navigate("/career")}
          imageSrc="https://i.imgur.com/nYogzt3.png"
          alt="career card"
        />
        <CardOption
          onClick={() => navigate("/love")}
          imageSrc="https://i.imgur.com/ggfvFaN.png"
          alt="love card"
        />
        <CardOption
          onClick={() => navigate("/daily")}
          imageSrc="https://i.imgur.com/SKmk0Ta.png"
          alt="daily card"
        />
      </div>
    </div>
  );
};

type CardOptionProps = {
  onClick: () => void;
  imageSrc: string;
  alt: string;
};

const CardOption: React.FC<CardOptionProps> = ({ onClick, imageSrc, alt }) => (
  <div>
    <Card>
      <CardBody
        as={Button}
        onClick={onClick}
        padding="0px"
        width="400px"
        height="400px"
      >
        <Image
          alt={alt}
          className="background-card"
          src={imageSrc}
          width="400px"
          height="400px"
        />
      </CardBody>
    </Card>
  </div>
);

export default Home;