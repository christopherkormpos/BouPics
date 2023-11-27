import React from 'react';
import Card from '../Card'
import "./Pages.css";

function Weddings() {
    const numberOfImages = 9; // Update this number

    const imageNumbers = Array.from({ length: numberOfImages }, (_, index) => index + 1);

    const cardElements = imageNumbers.map((imageNumber, index,) => {
        return <Card
            key={index}
            imageNumber={imageNumber}
            path="/images/weddings"
        />
    })
    return (
        <div className='card-container'>
            <>
                {cardElements}
            </>
        </div>
    );
}

export default Weddings;