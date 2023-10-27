import React from 'react';
import Card from '../Card'

function Weddings() {
    // Create an array with the number of images you have
    const numberOfImages = 3; // Update this number
    // Generate an array with image numbers (1, 2, 3, ...)
    const imageNumbers = Array.from({ length: numberOfImages }, (_, index) => index + 1);

    const cardElements = imageNumbers.map((imageNumber, index,) => {
        return <Card
            key={index}
            imageNumber={imageNumber}
            path="/images/weddings"
        />
    })
    return (
        <div>
            <>
                {cardElements}
            </>
        </div>
    );
}

export default Weddings;