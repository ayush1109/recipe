import React, { Component } from 'react';
import Main from './components/MainComponent'; 
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const Store = ConfigureStore();
 
class App extends Component {
 
  render(){
  return (
    <Provider store = {Store}>
   <div>
      <Main />
      
    </div>
    </Provider>
  );
}
}

export default App;
