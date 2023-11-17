import React from 'react';
import Card from '../Card'

function Landscapes() {
    // Create an array with the number of images you have
    const numberOfImages = 9; // Update this number
    // Generate an array with image numbers (1, 2, 3, ...)
    const imageNumbers = Array.from({ length: numberOfImages }, (_, index) => index + 1);

    const cardElements = imageNumbers.map((imageNumber, index,) => {
        return <Card
            key={index}
            imageNumber={imageNumber}
            path="/images/landscapes"
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

export default Landscapes;