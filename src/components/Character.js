// Write your Character component here
import React, { useState } from 'react';


const Character = props => {
  const [showFilms, setShowFilms] = useState(false);

    const clicker = () => setShowFilms(showFilms ? false : true)
    return (
     <div>
        <div>
         <h3>{props.item.name}</h3>
        </div>
            <div>
             <p>Gender: {props.item.gender}</p>
             <p>Birth year: {props.item.birth_year}</p>
             <p>Eye color:{props.item.eye_color}</p>


<button type='submit' onClick={clicker}>Featured in</button>
    {showFilms ? <p>{props.item.films.map(film =>  film)}</p> : false }

            </div>
        </div>
    )
}


export default Character;