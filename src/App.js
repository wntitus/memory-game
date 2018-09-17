import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import Row from './components/Row/Row';
import Column from './components/Column/Column';
import Jumbotron from './components/Jumbotron/Jumbotron';

class App extends Component {
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
        </Container>
      </div>
    );
  }
}

export default App;
