import React, { Component } from 'react';
import List from './List'
import Soso from './soso'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Comparaison from './Comparaison';
import Classification  from './Classification';


import Prediction from './Prediction';

class App extends Component {
  
  render () {
    
    return (
      
      <Router>
        <div className="App"style={{height: '800px',backgroundSize: "cover",backgroundImage: `url(${"https://scontent-mrs2-1.xx.fbcdn.net/v/t1.15752-9/118014897_545930069448550_3850276963030556537_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=lViomzJypBkAX9iET-f&_nc_ht=scontent-mrs2-1.xx&oh=9d6df95d62ed1beb1fba9e077a4f0e79&oe=5F62796B"})`} } >
        <div className="container">
          <Route exact path="/" component={List} />
            <Route exact path="/Comparaison" component={Comparaison} />
            <Route exact path="/Classification" component={List} />
            <Route exact path="/Prediction" component={Prediction} />
          </div>
         
        </div>
      </Router>
    );
  }
}

export default App;
