import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import Row from './components/Row/Row';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Row>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
