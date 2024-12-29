import React from "react";
import axios from "axios";

export default function CardShuffle() {
  return (
    <div className="CardShuffle">
      <Deck />
    </div>
  );
}

const BASE_URL = "http://localhost:4567/getCard";
//https://deckofcardsapi.com/api/deck/
class Deck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: null,
      cardsDrawn: []
    };

    this.dealCard = this.dealCard.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(`${BASE_URL}/new/shuffle/`);
    this.setState({
      deck: deck.data
    });
  }

  async dealCard() {
    let deckId = this.state.deck.deck_id;
    try {
      let cardUrl = `${BASE_URL}/${deckId}/draw/`;
      let resCard = await axios.get(cardUrl);
      if (!resCard.data.success) {
        throw new Error("No Cards Remaining");
      }
      console.log("Deck ID:", deckId);
      // make request using deck id
      console.log("Response:", resCard.data);
      let card = resCard.data.cards[0];
      console.log("Card:", card);
      // set state with new card info
      this.setState(previous => ({
        cardsDrawn: [
          ...previous.cardsDrawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} ${card.value}`
          }
        ]
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.cardsDrawn.map(card => (
      <Card key={card.id} name={card.name} image={card.image} />
    ));

    return (
      <div className="Deck">
        <h3>
          <span role="img">♢</span>React Shuffle<span role="img">♢</span>
        </h3>
        <h4>
          A <span>Randomized</span> Card Dealer
        </h4>
        <button className="deal-button" onClick={this.dealCard}>
          Deal
        </button>
        <div className="Cards">{cards}</div>
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);

    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  // transform: translate(10px, 20px) rotate(90deg);
  render() {
    const { image, name } = this.props;
    return (
      <img
        className="Card"
        src={image}
        alt={name}
        style={{ transform: this._transform }}
      />
    );
  }
}
