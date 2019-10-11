import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0
    }
    onChangeHandler = (color, value) => {
        const newColor = color + "Value";
        this.setState({
            [newColor]: value
        })
    }
  render() {
    const finalStyle = {
        height: '50px',
        width: '50px',
        backgroundColor: `rgb(${this.state.rValue},${this.state.gValue}, ${this.state.bValue})`
    }
    return (
      <div>
          <SingleColorPicker value={this.state.rValue} color={'r'} onchange={this.onChangeHandler}/>
          <SingleColorPicker value={this.state.gValue} color={'g'} onchange={this.onChangeHandler}/>
          <SingleColorPicker value={this.state.bValue} color={'b'} onchange={this.onChangeHandler}/>
        <div style={finalStyle}></div>
      </div>
    );
  }
}

export default RGBColorPicker;