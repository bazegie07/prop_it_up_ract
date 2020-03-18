import React from 'react';



const PersonCard = ({firstName, lastName, age, hairColor}) => (

    <div>
        <h1>{lastName}, {firstName}</h1>
        <p>age: {age}</p>
        <p>Hair Color: {hairColor}</p>
    
    </div>

)

export default PersonCard;
