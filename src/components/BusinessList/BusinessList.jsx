import React from 'react';
import styles from "./BusinessList.module.css";
import Business from "../Business/Business";


const BusinessList = () => {

    const businesses = [
        {         
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
        <div className={styles.BusinessList}>
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    )
}

export default BusinessList;