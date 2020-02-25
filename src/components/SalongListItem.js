import React from 'react';
import { Link } from 'react-router-dom'

import defaultPicture from '../img/image.jpg';

import arrow from '../img/arrow.png';
import filter from '../img/filter.png';
import star from '../img/star.png';
import star_empty from '../img/star-empty.png';




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


            
            <div className="wrapper">


                <div className="header">
                    <img className="arrow-left" src={arrow}></img>
                    <div className="headline">Hår</div>
                    <img className="filter-img" src={filter}></img>
                </div>


                <div className="item">
                    <div className="box1">
                        <p className="time-text-1">12:00</p>
                    </div>
                    <div className="box2">
                        <div className="title">Sax och Fön</div>

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
                        <div className="price">320 kr</div>
                        <div className="time-text-2">30 min</div>

                    </div>
                    <div className="box4">
                        <img className="arrow-right" src={arrow}></img>
                    </div>
                </div>

            </div>

            
            




        </Link>
    </div>


);

export default SalongListItem;
