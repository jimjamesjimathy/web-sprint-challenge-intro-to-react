import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100vh;
margin: 0 auto;
`
const Titleh1 = styled.h1`
  font-family: 'Days One', sans-serif;
	font-size: 9rem;
	font-weight: 500;
  color: var(--burlywood);
  text-shadow: 2px 3px 2px #000;
  letter-spacing: 1rem;
  padding: 2% 0;
`



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  const [allCharacters, setAllCharacters] = useState(false);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res.data)
        setCharacter(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <Container className="App">
      <Titleh1 className="Header">Star Wars Characters</Titleh1>
        { character.map(item => <Character item={item} />) }
    </Container>
  );
}


export default App;
