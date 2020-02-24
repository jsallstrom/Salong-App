import React from 'react';

import Salong from './Salong';
import SalongListItem from './SalongListItem';


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
          }], 
     

        priceRanges : [{priceRange: 'Pris 0 - 250 kr', lowPrice: 0, topPrice: 250},
                        {priceRange: 'Pris 250 - 500 kr', lowPrice: 250, topPrice: 500},
                        {priceRange: 'Pris 500 - 750 kr', lowPrice: 500, topPrice: 750},
                        {priceRange: 'Pris 750 - 1000 kr', lowPrice: 750, topPrice: 1000},
                    ],
        selectedPriceRange: {priceRange: 'Pris 0 - 250 kr', lowPrice: 0, topPrice: 250}, 
        
       

        // when filtering if topPrice is undefined then all are shown

    }




    constructor(props) {
        super(props);
    }

    onChangeHandler = (e) => {

       
        const index = e.target.value;
        console.log(index);

        this.setState(() => ({ selectedPriceRange: this.state.priceRanges[index] }));



    }

    // Fixa filter grejjen. 


    // sätt upp react Router och när man klickar på en salong så förs man över till dess sida, like Expensify

    render() {
        return(

            //  ha en lång lista över alla salonger
            // när man klickar på en av dom gå över till Salong med dess innehåll. 

            // Här skapar vi upp en salong för salonger i en lista

            <div>
                <h1>Hår</h1>
                <select
                    value={this.state.selectedPriceRange.priceRange}
                    onChange={this.onChangeHandler}
                    
                
                >
                    {this.state.priceRanges.map((range, index) => {
								return <option value={index} key={index}>{range.priceRange}</option>;
							})}
                </select>

                {this.state.salongList.filter((salong) => {

                    return salong.price <= this.state.selectedPriceRange.topPrice && salong.price >= this.state.selectedPriceRange.lowPrice;
                })
                      
                .map((salong, index) => {

                    return <SalongListItem key={index} title={salong.title} price={salong.price}></SalongListItem>
                })             
                }
            </div>

        )
    }

}


export default SalongListComponent; 