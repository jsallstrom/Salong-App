import React from 'react';
import { Link } from 'react-router-dom'

import defaultPicture from '../img/image.jpg';


// <img src={image}></img>


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


            
            



            <div className="container">
                <div className="first-row">
                    <span className="time-text">12:00</span>
                    <span className="title">{title}</span>
                    <span className="price">{price}</span>

                </div>

                <div className="second-row">
                    <span className="rating">{rating}</span>
                    <span className="time-text-2">30 min</span>

                </div>

                <div className="third-row">
                         {address}

                </div>


            </div>

            
            




        </Link>
    </div>


);

export default SalongListItem;
