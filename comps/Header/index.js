//use the same component to change the fontSize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, onMouseOver}) => <div>
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>


function MouseOverAlert(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize: 12,
    color: "0000",
    onMouseOver:MouseOverAlert,
    text:'Header'
}

export default Header;

