import React, { Component } from 'react';
import './App.css';
/*Redux Libraries
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
const store = ConfigureStore();
*/
import Main from './Components/MainComponent'
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    // </Provider>
    );
  }
}
export default App;
