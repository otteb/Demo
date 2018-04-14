import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Title from './components/title.js';
import DisplayName from './components/displayName.js';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


//Create the App Component Class here:
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locale: 'en'
    }
}

//add functions here - these functions call the functionality of the PolyglotLocale classes
//and then populate the state of the project.





    render() {
      return (
        <div>
          <Title/>
          <DisplayName/>
        </div>
      );
    }
  }


const destination = document.querySelector('.container');

ReactDOM.render(
  <App/>
  , destination);
