import Link from 'next/link';
import Router from 'next/router';
import {FaSearchDollar} from 'react-icons/fa';
import {GiBurningTree} from 'react-icons/gi';
import './index.css';
import {IoMdContact} from 'react-icons/io';
import {FaInfoCircle} from 'react-icons/fa';
import {FaRegQuestionCircle} from 'react-icons/fa';

import{data, ChangeData} from './data';

console.log(data);


function ClickIndex(){
    ChangeData({
        lastaction:"Went to Chat!",
        numClicks: 0
    })
    document.querySelector("#mainapp").style.right = '-100%';
   setTimeout(function(){
       Router.push("/ChatPage");
   }, 1000)
}

const Index = () =><div id='mainapp'>
    <div onClick={ClickIndex}>Index</div>
    <FaSearchDollar />
    

    <Link href='/ChatPage'><button><GiBurningTree color='#ABC' />Chats!</button></Link>
    <Link href='/Contact'><button><IoMdContact />Contact Me</button></Link>
    <Link href='/About'><button><FaInfoCircle color='#656565'/>About</button></Link>
    <Link href='/Random'><button><FaRegQuestionCircle />Random</button></Link>


</div>

export default Index;