import React from 'react';
import './testCssFlex.css';

import arrow from '../img/arrow.png';
import filter from '../img/filter.png';
import star from '../img/star.png';
import star_empty from '../img/star-empty.png';

//  next up:
// Make a Header

const testCssFlex = () => (

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
                <div className="title">Hårsalong 1</div>

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
















        <div className="item">
            <div className="box1">
                <p className="time-text-1">12:00</p>
            </div>
            <div className="box2">
                <div className="title">Sax och Fön</div>
                <div className="rating">Rating 4/5</div>
                <div className="address">Rådmansgatan</div>
                
                
            </div>
            <div className="box3">
                <div className="price">320 kr</div>
                <div className="time-text-2">30 min</div>

            </div>
            <div className="box4">
                <img className="arrow-right" src={arrow}></img>
            </div>
        </div>


        <div className="item">
            <div className="box1">
                <p className="time-text-1">12:00</p>
            </div>
            <div className="box2">
                <div className="title">Sax och Fön</div>
                <div className="rating">Rating 4/5</div>
                <div className="address">Rådmansgatan</div>
                
                
            </div>
            <div className="box3">
                <div className="price">320 kr</div>
                <div className="time-text-2">30 min</div>

            </div>
            <div className="box4">
                <img className="arrow-right" src={arrow}></img>
            </div>
        </div>


        <div className="item">
            <div className="box1">
                <p className="time-text-1">12:00</p>
            </div>
            <div className="box2">
                <div className="title">Sax och Fön</div>
                <div className="rating">Rating 4/5</div>
                <div className="address">Rådmansgatan</div>
                
                
            </div>
            <div className="box3">
                <div className="price">320 kr</div>
                <div className="time-text-2">30 min</div>

            </div>
            <div className="box4">
                <img className="arrow-right" src={arrow}></img>
            </div>
        </div>


        <div className="item">
            <div className="box1">
                <p className="time-text-1">12:00</p>
            </div>
            <div className="box2">
                <div className="title">Sax och Fön</div>
                <div className="rating">Rating 4/5</div>
                <div className="address">Rådmansgatan</div>
                
                
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

    

)



export default testCssFlex;