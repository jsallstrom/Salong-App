import React from 'react';
import { Link } from 'react-router-dom'

import defaultPicture from '../defaultPicture.jpg';


// ha en massa default värden här som används i listan när du destruerar
const SalongListItem = ({title = 'ExempelSalong', image = defaultPicture, rating = '4/5', address = 'Rådmansgatan 46', price = 320}) => (

    <div>
        <Link to={{
            pathname: `/salong/${title}`,
            state: {
                title: title,
                image: image,
                rating: rating,
                address: address,
                price: price
            
            }
        }}>
            <img src={image}></img>
            <p>{title}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{address}</p>
            




        </Link>
    </div>


);

export default SalongListItem;
