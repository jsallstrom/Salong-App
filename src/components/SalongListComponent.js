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
     

        priceRange : ['Pris 1', 'Pris 2', 'Pris 3'],
        salongListPicture : 'linkToPicture',
        topPrice : 1000,
        lowestPrice: 0, 

        // when filtering if topPrice is undefined then all are shown

    }


    constructor(props) {
        super(props);
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
                    value={this.state.lowestPrice - this.state.topPrice}
                    
                
                
                ></select>

                {this.state.salongList.filter((salong) => {

                    return salong.price <= this.state.topPrice && salong.price >= this.state.lowestPrice;
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