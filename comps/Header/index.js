//use the same component to change the fontSize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div
style={{color, fontSize}}
className = 'header'
onMouseOver={onMouseOver}
>
    <h1>Header</h1>
</div>


function MouseOverAlert(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize: 12,
    color: "0000",
    onMouseOver:MouseOverAlert
}

export default Header;

