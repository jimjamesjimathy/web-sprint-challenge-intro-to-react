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
background-color: var(--infoBg);
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
`;
const Name = styled.h3`
font-family: 'Raleway', sans-serif;
font-size: 2.7rem;
text-decoration: underline;
letter-spacing: .75rem;
font-weight: 700;
padding: 2% 0;
color: var(--yellow);
text-shadow: 1px 2px 0px #000;

    &:hover {
        color: var(--burlywood);
        transition: 750ms ease-in-out;
        text-shadow: 1px 2px 0px #000;
    }
`;
const InfoP = styled.p`
font-size: 2.4rem;
font-weight: 500;
color: var(--yellow);
text-shadow: 1px .7px 0px #000;
`;
const Button = styled.button`
width: 15%;
padding: .5% 2%;
border-radius: 5px;
border: none;
font-size: 1.3rem;
letter-spacing: .4rem;
font-family: 'Raleway', sans-serif;
font-weight: 800;
color: var(--gunMetal);
background-color: var(--beauBlue);

    &:hover {
        color: var(--burlywood);
        background-color: var(--steelBlue);
        transition: 450ms ease-out;
    }
`;
const Span = styled.span`
margin: 2%;
color: var(--burlywood);
font-size: 2rem;
font-weight: 400;
text-shadow: none;
`;

const Character = props => {
  const [showInfo, setShowInfo] = useState(false);
  const [movies, setMovies] = useState(false);
//
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
         }}>{showInfo ? 'Hide Details' : 'Details'}</Button>
            {transition((style, i) => 
                i ? <animated.div className='sub-info' style={style}>
                <InfoP>Birth year<Span>: {props.item.birth_year}</Span></InfoP>
                <InfoP>Gender<Span>: {props.item.gender}</Span></InfoP>
                <InfoP>Eye color<Span>: {props.item.eye_color}</Span></InfoP>
                <InfoP>Hair Color<Span>: {props.item.hair_color}</Span></InfoP>
                <InfoP>Mass<Span>: {props.item.mass}</Span>kg</InfoP>
                <InfoP>Height<Span>: {props.item.height}</Span>cm</InfoP>
                <Button onClick={() => {
                    setMovies(movies ? false : true);
                }}>List Movies</Button>
                { movies ? <div><InfoP>{films.join(', ')}</InfoP></div> : '' }
                </animated.div> : ''
            )}
        </CharacterDiv>
    )
};
export default Character;