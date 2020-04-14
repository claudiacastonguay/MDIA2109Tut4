import {useEffect} from 'react';
import './about.css';
import Header from '../../comps/Header';

const About = () => {
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#aboutpage").style.left = '0';
        }, 50)
    }, []);

return <div id='aboutpage'>
    <div><Header text='About Me' fontSize={24}/></div>
<p>This is the about page where you can learn about the author!</p>

</div>
}

export default About;
