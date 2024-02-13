import React from 'react';

const Business = () => {
    const business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }
    return (
        <div>
            <img src={business.imageSrc} style={{
                width: '50%'
                }} />
            <h1>{business.name}</h1>
            <p>Location: {business.address}</p>
            <p>{business.city}</p>
            <p>Rating: {business.rating}</p>
            <p>Review Count: {business.reviewCount}</p>
        </div>
    )
}

export default Business