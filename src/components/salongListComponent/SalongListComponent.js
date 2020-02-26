import React from 'react';


import SalongListItem from '../salongItemList/SalongListItem';

import './SalongListComponent.css';

import arrow from '../../img/arrow.png';

import filter from '../../img/filter.png';


class SalongListComponent extends React.Component {

    state = {
        salongList : [{
            title: 'Salong 1',
            price: 100,
          },
          {
           
            title: 'Salong 2',
            price: 200,
          },
          {
           
            title: 'Salong 3',
            price: 300,
          },
          {
           
            title: 'Salong 4',
            price: 400,
          },
          {
           
            title: 'Salong 5',
            price: 500,
          },
          {
           
            title: 'Salong 6',
            price: 600,
          },
          {
           
            title: 'Salong 7',
            price: 750,
          },
          {
           
            title: 'Salong 8',
            price: 800,
          },
          {
           
            title: 'Salong 9',
            price: 950,
          }], 
     

        priceRanges : [{priceRange: 'Pris 0 - 250 kr', lowPrice: 0, topPrice: 250},
                        {priceRange: 'Pris 250 - 500 kr', lowPrice: 250, topPrice: 500},
                        {priceRange: 'Pris 500 - 750 kr', lowPrice: 500, topPrice: 750},
                        {priceRange: 'Pris 750 - 1000 kr', lowPrice: 750, topPrice: 1000},
                    ],
        selectedPriceRange: 'Pris 0 - 250 kr', 
        
       selectedLowPrice: 0,
       selectedTopPrice: 250

        // when filtering if topPrice is undefined then all are shown

    }




    constructor(props) {
        super(props);
    }

    onChangeHandler = (e) => {

       
        const index = e.target.value;
        console.log(this.state.priceRanges[index]);

        this.setState(() => ({ selectedPriceRange: this.state.priceRanges[index] }));


    }

    

    render() {
        return(

            

            <div className="wrapper">
                    <div className="header">
                        <img className="arrow-left" src={arrow}></img>
                        <div className="headline">Hår</div>
                        <img className="filter-img" src={filter}></img>
                    </div>
                <select
                    value={this.state.selectedPriceRange}
                    onChange={(e) => {


                        


                        const newPriceRange = e.target.value;
                        const split = newPriceRange.split(",");

                        const newLowPrice = Number(split[0]);
                        const newTopPrice = Number(split[1]);
                        
                        
                        this.setState(() => ({ selectedLowPrice: newLowPrice }));
                        this.setState(() => ({ selectedTopPrice: newTopPrice }));
                        
                        this.setState(() => ({ selectedPriceRange: newPriceRange }));

                    }}
                    
                
                >
                    {this.state.priceRanges.map((range, index) => {
								return <option key={index} value={[range.lowPrice,range.topPrice]}>{range.priceRange}</option>;
							})}
                </select>

                {this.state.salongList.filter((salong) => {

                    return salong.price <= this.state.selectedTopPrice && salong.price >= this.state.selectedLowPrice;
                })
                      
                .map((salong, index) => {

                    return <SalongListItem key={index} {...salong}></SalongListItem>
                })             
                }
            </div>

        )
    }

}


export default SalongListComponent; 