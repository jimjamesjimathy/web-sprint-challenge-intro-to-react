// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring'; 

const CharacterDiv = styled.div`
font-family: 'Raleway', sans-serif;
margin: 0 auto;
padding: 1.5%;
width: 50%;
height: auto;
background-color: var(--beauBlue);
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
border-radius: 5px;
`
const Name = styled.h3`
font-family: 'Days One', sans-serif;
font-size: 3rem;
text-decoration: underline;
padding: 2% 0;
color: var(--text);
text-shadow: 1px 2px 0px #000;
`
const InfoP = styled.p`
font-size: 2rem;
font-weight: 500;
padding: 0 2%;
`
const Button = styled.button`
width: 20%;
`


const Character = props => {
  const [showInfo, setShowInfo] = useState(false);
  const [movies, setMovies] = useState(false);


  const transition = useTransition(showInfo, {
    from: { x: 50, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1},
    leave: { x: -50, y: 0, opacity: 0 },
    config: {mass: 3, tension: 333, friction: 33}
  });

  const films = props.item.films;

    return (
     <CharacterDiv>

         <Name>{props.item.name}</Name>
         <Button onClick={() => {
             setShowInfo(vis => !vis)
         }}>{showInfo ? 'See Less' : 'See More'}</Button>

            {transition((style, i) => 
                i ? <animated.div className='sub-info' style={style}>
                <InfoP>Birth year: <span>{props.item.birth_year}</span></InfoP>
                <InfoP>Gender: <span>{props.item.gender}</span></InfoP>
                <InfoP>Eye color: <span>{props.item.eye_color}</span></InfoP>
                <InfoP>Hair Color: <span>{props.item.hair_color}</span></InfoP>
                <InfoP>Mass: <span>{props.item.mass}</span></InfoP>
                <InfoP>Height: <span>{props.item.height}</span></InfoP>
                <button onClick={() => {
                    setMovies(movies ? false : true);
                }}>List Movies</button>
                { movies ? <div><InfoP>{films.join(', ')}</InfoP></div> : '' }
                </animated.div> : ''
            )}
            
        </CharacterDiv>
    )
}


export default Character;