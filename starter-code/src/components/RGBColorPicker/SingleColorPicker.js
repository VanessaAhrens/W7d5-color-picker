import React from 'react';

function SingleColorPicker(props) {
    let styleColor = '';
    if(props.color === 'r') {
        styleColor = 'red'
    }
    else if(props.color === 'g') {
        styleColor = 'green'
    }
    else if(props.color === 'b') {
        styleColor = 'blue'
    }
    const style = {
        height: '50px',
        width: '50px',
        backgroundColor: styleColor
    }
    return (
      <div>
          <div style={style}></div>
          <label>{props.color.toUpperCase()}:</label>
          <input max="255" min="0" value={props.value} onChange={(event) => props.onchange(props.color, event.target.value)}></input>
      </div>
    );
}

export default SingleColorPicker;