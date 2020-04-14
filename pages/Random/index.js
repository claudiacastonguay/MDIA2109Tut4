import {useEffect} from 'react';
import './random.css';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';

const Random = () => {
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#randompage").style.left = '0';
        }, 50)
    }, []);
return <div id='randompage'>
    <div><Header text='Random Page' fontSize={20}/></div>
    <div><CustomButton text='Button 1' /></div>
    <div><CustomButton text='Button 2' /></div>
    <div><CustomButton text='Button 3' /></div>

</div>
}

export default Random;