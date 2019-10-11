import React, { Component } from 'react';
import RGBColorPicker from './components/RGBColorPicker/RGBColorPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <RGBColorPicker />
      </div>
    );
  }
}

export default App;
