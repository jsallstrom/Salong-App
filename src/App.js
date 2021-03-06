import React from 'react';

import SalongListComponent from './components/salongListComponent/SalongListComponent';
import Salong from './components/salong/Salong'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import './App.css';






const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route path="/" exact={true} component={SalongListComponent}/>
            <Route path="/salong/:title" component={Salong}/>

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
