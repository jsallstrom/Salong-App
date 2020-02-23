import React from 'react';
import './Salong.css';





class Salong extends React.Component {

    state = {
        

    }

    componentDidMount() {
        // kan lägga in alla props i state och köra därifrån. 

    }

    // picture 
    // backwards button top left (do with History with React Router)
    // 

    // gör det enkelt från början och skriv bara ut all information rakt upp och ner
    
    
    //  gör en css-fil där backgrundsbilden för div-en är 
    

    render (){
        return(
            <div>


                <div className="container">
                    <img src={this.props.location.state.image} ></img>
                    <button className="btn">Back</button>
                </div>


                {/**
                <div className="container">
                    <img src={this.props.location.state.image} ></img>
                    <button className="btn">Back</button>
                </div>

                
                 * <image>
                    <button>Back</button>
                    <image>backgrundsbild, sätt denna till hela diven ist</image>
                    {props.title}

                </image>
                */}
                
                

                <button>Info</button><button>Schema</button>

                <div><p>{this.props.location.state.address}</p></div>
                

                <div><p>Öppet till 19:00 idag</p></div>

                <div><p>08-522 382 20</p></div>

                <div><p>www.salongweb.se</p></div>

                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Maecenas fringilla, orci non lacinia finibus, arcu lacus
                    commodo justo, et malesuada est nisl fermentum risus.
                    Integer luctus nisl turpis, quis imperdiet enim auctor
                    id. Nunc posuere purus mauris, vitae molestie arcu 
                    ultricies pulvinar. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>

            

        </div>


        )
        
    }
        
    


}

export default Salong;