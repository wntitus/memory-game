import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import Row from './components/Row/Row';
import Column from './components/Column/Column';
import Jumbotron from './components/Jumbotron/Jumbotron';
import cards from './cards.json';
import Card from './components/Card/Card';

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0
  };

  endGameHandler = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score});
    }
    this.state.cards.forEach(card => {
      card.clicked = 0;
    });
    this.setState({score: 0});
    return true;
  }

  clickHandler = id => {
    this.state.cards.find((item, idNum) => {
      if (item.id === id) {
        if (cards[idNum].clicked === 0) {
          cards[idNum].clicked = cards[idNum].clicked + 1;
          this.setState({score: this.state.score + 1})
          this.state.cards.sort(() => Math.random() - 0.5);
          return true
        } else {
          this.endGameHandler();
          this.state.cards.sort(() => Math.random() - 0.5);
        }
      }
    })
  }


  render() {
    return (
      <div className="App">
        <NavBar score = {this.state.score} highScore = {this.state.highScore}/>
        <Container>
          <Row>
            <Column size='12'>
              <Jumbotron /> 
            </Column>
          </Row>
          <Row>
            {this.state.cards.map(card => (
              <Card id = {card.id} key = {card.id} image = {card.image} clickHandler = {this.clickHandler}/>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
