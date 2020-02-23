import React from 'react';
import './Salong.css';





class Salong extends React.Component {

    state = {
        // Samla information från salongen här

    }

    componentDidMount() {
        // kan lägga in alla props i state och köra därifrån. 

    }

    // picture 
    // backwards button top left (do with History with React Router)
    // 

    // gör det enkelt från början och skriv bara ut all information rakt upp och ner
    
    
    //  gör en css-fil där backgrundsbilden för div-en är 

    onClickHandle = () =>{
        this.props.history.push('/');
    }

    

    render (){
        return(
            <div>


                <div className="container">
                    <img src={this.props.location.state.image} ></img>
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