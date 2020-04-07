import React, {useState} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';


// var welcome_state = "Welcome to my App!"
// function setWelcome(){
//     welcome_state = "Start with sending a message,";
//     document.querySelector("#welcome").innerText = welcome;
// }

const ChatPage = ({}) => {
    const [welcome, setWelcome] = useState("Welcome to my App!");
    const [msg, setMsg] = useState("Please type something");
    const [resp, setResp] = useState("Let me respond to you");
    const [color, setColor] = useState("#555");
    const [text, setText] = useState("Not Clicked");


return <div>
    <div id='welcome'>
        <Header fontSize={32} text={welcome} />
    </div>
    <div id='chats' onClick={()=>{
        setWelcome("Start with sending a message.");
    }}>
        <Chat name={'User 1'} msg={msg}/>
        <p />
        <Chat img={"https://img.favpng.com/17/9/16/astronaut-icon-astronomy-icon-robot-icon-png-favpng-aXi9GsFKsiMFG41cwbuawKULR.jpg"} name={'Chat Bot'} backgroundColor={"#FAB"} msg={resp}/>
    </div>
    <div id='controls'>
        <Input onClick={(val)=>{
            setMsg(val);
            var new_resp = CheckResponse(val);
            setResp(new_resp);
            // if(val === "hi"){
            //     setResp('I love pie');
            // }
        }}/>
    </div>
    <div id='custom_button'>
        <CustomButton text={text} color={color} onClick={()=>{
            setText('Clicked');
            setColor('#2a9df4');
        }} />
    </div>
</div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case 'hi':
            return 'i love pie';
        case "how are you?":
            return "great!";
        default:
            return "I don't understand what you are trying to say";
    }
}

ChatPage.defaultProps = {

}

export default ChatPage;