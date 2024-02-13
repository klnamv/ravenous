import React from 'react';
import Business from './Business/Business';

const BusinessList = () => {

    const businesses = [
        {   
            id: 1,
            imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        },
        { 
            id: 2,
            imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        },
        {
            id: 3,
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
    ];
    return (
        <>
        {
            businesses.map((business, index) => {
                return <Business key={index} business={business} />;
            })
        }
        </>
    )

}

export default BusinessList;