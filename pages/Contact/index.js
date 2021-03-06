import {useState, useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';
import {data, ChangeData} from '../data';

console.log(data);

var index = 0;
const headers_arr = [
    "Thanks for Contacting Me!",
    "Goodbye",
    "Let me know if you have other questions"
]

const Contact = () => {
    var text = "";
    switch (data.lastaction){
        case "":
        text = "Please chat with me first";
        break;
        default:
            text = "Thanks for chatting!";
            break;
    }

    if(data.numClicks > 0 && data.numClicks < 10){
        text += " Chat more with me!";
    }else if(data.numClicks >= 0 && data.numClicks < 20){
        text += " You are a chatter bot..";
    }
    //setp 1 - create the state variable and the function to update it, and put a default inside.
    const [header_text, setHeader] = useState("Contact me!");
    const [pageleft, setLeft] = useState("-100%");
    //const [index, setIndex] = useState(0);

    useEffect(()=>{
        //what to do when it's created/born/beginning of the life cycle
        setTimeout(()=>{
            setLeft(0);
        }, 50)

        return ()=>{
        //what to do when the component dies
        }
    }, []);

    useEffect(()=>{
        //what to do when it's created/born/beginning of the life cycle
    }, []);

    useEffect(()=>{
        //what to do when a state in the page/component updates
        setLeft(20);
        setTimeout(()=>{
            setLeft(0);
        }, 500);
    }, [header_text]);

    

    //step 2 - connect the state variable to the UI
return <div id='contactpage' style={{left:pageleft}}>
    <Header text={header_text} fontSize={24}/>
    {text}
    {data.lastaction !== "" ? <CustomButton text='email' onClick={()=>{
        //step 3 - connect the state function() to an interaction / figure out when you want to update the interface
        setHeader(headers_arr[index]);
        index++;
        if(index > headers_arr.length-1){
            index = 0;
        }
        //setLeft("100%");
    }} /> : null}
</div>
}

export default Contact;