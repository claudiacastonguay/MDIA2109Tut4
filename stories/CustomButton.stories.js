import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title: "Custom Button",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <Header
    fontSize={15}
    color="#296d98"
    onMouseOver={MouseOver1}    
    />

    <Header
    fontSize={25}
    color="#C62171"
    onMouseOver={MouseOver2}    
    />

    <CustomButton 
    color="#999"
    text='Cancel' 
    onClick={CancelClick}
    />
    <CustomButton 
    color='#3F5'
    text='OK' 
    onClick={OkClick}
    />
    <CustomButton 
    color='#F3F'
    text='Submit' />
    <CustomButton text='Menu' />
</div>

function CancelClick(){
    alert("Cancel");
}

function OkClick(){
    alert("OK");
}
function MouseOver1(){
    document.querySelector(".header").style.backgroundColor = '#FFE6EE';
}
function MouseOver2(){
    document.querySelector(".header").style.backgroundColor = '#c7e0f4';
}
