import React from 'react';
import { Link } from 'react-router-dom'


import './SalongListItem.css';

import defaultPicture from '../../img/image.jpg';

import arrow from '../../img/arrow.png';

import star from '../../img/star.png';
import star_empty from '../../img/star-empty.png';







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
        }} style={{ textDecoration: 'none'}}>
            {/* ^This line takes away the underline */}

            
            


                <div className="item">
                    <div className="box1">
                        <p className="time-text-1">12:00</p>
                    </div>
                    <div className="box2">
                        <div className="salong-name">{title}</div>

                        <div className="rating">
                            <img className="star" src={star}></img>
                            <img className="star" src={star}></img>
                            <img className="star" src={star}></img>
                            <img className="star" src={star}></img>
                            <img className="star" src={star_empty}></img>
                            <div className="rating-text">(32)</div>

                        </div>

                        <div className="address">Rådmansgatan 46</div>
                        
                        
                    </div>
                    <div className="box3">
                        <div className="price">{price} kr</div>
                        <div className="time-text-2">30 min</div>

                    </div>
                    <div className="box4">
                        <img className="arrow-right" src={arrow}></img>
                    </div>
                </div>

           
            
            




        </Link>
    </div>


);

export default SalongListItem;
