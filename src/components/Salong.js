import React from 'react';
import './Salong.css';

import arrow from '../img/arrow.png';


class Salong extends React.Component {

    state = {
        // Samla information från salongen här

    }

    componentDidMount() {
        // kan lägga in alla props i state och köra därifrån. 

    }

    

    // importera alla knappar och se till att de funkar (ej svg)
    // gör ett eget försökja att skapa en liten .box
    // med tre olika boxar i sig och olika columner
    // med grid kanske jag kan ha typ 5 columner
    // 3 rader och sen göra så att mellan column 4/5 på rad 1 så är arrow eller stuff




    onClickHandle = () =>{
        this.props.history.push('/');
    }

    

    render (){
        return(
            <div>


                <div className="container">

                    <div >
                        <img className="Image" src={this.props.location.state.image} ></img>
                        <img className="Arrow" src={arrow}></img>
                    </div>


                    
                    <button>Info</button><button>Schema</button>
                    <button onClick={this.onClickHandle}>Back</button>

                    <div>{this.props.location.state.address}</div>
                    

                    <div>Öppet till 19:00 idag</div>

                    <div>08-522 382 20</div>

                    <div>www.salongweb.se</div>

                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas fringilla, orci non lacinia finibus, arcu lacus
                        commodo justo, et malesuada est nisl fermentum risus.
                        Integer luctus nisl turpis, quis imperdiet enim auctor
                        id. Nunc posuere purus mauris, vitae molestie arcu 
                        ultricies pulvinar. Orci varius natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus.
                    </div>
                </div>


              
                

            

        </div>


        )
        
    }
        
    


}

export default Salong;