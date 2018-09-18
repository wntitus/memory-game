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



  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Row>
            <Column size='12'>
              <Jumbotron /> 
            </Column>
          </Row>
          <Row>
            {this.state.cards.map(card => (
              <Card id = {card.id} key = {card.id} image = {card.image} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
