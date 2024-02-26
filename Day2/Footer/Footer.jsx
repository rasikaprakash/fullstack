import '../../assets/Css/footer.css';

import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import icon from '../../assets/Images/netfi.png';
// import Navbar from '../Navigation/Navbar';


export const Footer = () => {
  return (
  

<div id="containe">
   
   
   <div style={{backgroundColor:"rgb(14, 2, 81)"}} id="col">
    <ul>
        <li style={{listStyle:"none"}}>
    <div id="ico">
       <img src={icon} width="200px"/>
    </div>
    </li>
    <li style={{color:"white",listStyle:"none",marginLeft:"-60px"}}>
      @2019
    </li>
    </ul>
    <div id="who">
        <ul>
            <li style={{listStyle:"none"}}>  <h3 style={{color:"white"}}>Who we are</h3></li>
            <li style={{color:"white",listStyle:"none"}}>qaewrtfyhuijmokp;kmjnbvcws4e5rt67y8uijok.l,<br />kjmhgtresxfgvbhuijokplj,<br />hmgtfrdftghyujkijnhbgvfgybhunbgvfd</li>
        </ul>

    </div>
    <div style={{float: "right"}} id="foot">
    <ul>
        <li style={{listStyle:"none"}}><h3 style={{color:"white",marginTop:"-10px"}}>Quick links</h3></li>
        <li style={{listStyle:"none"}}>
            <a href="#" id="lis">Home</a>
        </li>
        <li style={{listStyle:"none"}}>
            <a href="#" id="lis">Plans</a>
        </li>
        <li style={{listStyle:"none"}}>
            <a href="#" id="lis">Add on</a>
        </li>
        <li style={{listStyle:"none"}}>
            <a href="#" id="lis">Recharge</a>
        </li>
        <li style={{listStyle:"none"}}>
            <a href="#" id="lis">History</a>
        </li>

      
    </ul>
    </div>
    <div>
        <ul>
            <li style={{listStyle:"none"}}>
                <h3 style={{color:"white"}}>Enter your view on our app</h3>
            </li>
            <li style={{color:"white",listStyle:"none"}}>
                asdfyguhkjbvcdftygujhbfvguydhek
            </li>
            <br /><br />
            <li style={{listStyle:"none"}}>
            <input type="text" placeholder="Enter" id="feed" />
            {/* <button id="ic" ><AiOutlineSend /></button> */}

            </li>
        </ul>
    </div>
    <div>
        <ul>

<li style={{listStyle:"none"}}>
    <h3 style={{color:"white"}}>Follow us on</h3>
</li>
<li style={{listStyle:"none"}}>
    <center>
 <BsFacebook style={{color:"white",fontSize:"20px"}}/>
 </center>
</li>
<li style={{listStyle:"none"}}>
    <center>
 <AiFillInstagram style={{color:"white",fontSize:"20px"}}/>
 </center>
</li>
<li style={{listStyle:"none"}}>
    <center>
 <AiFillTwitterCircle style={{color:"white",fontSize:"20px"}}/>
 </center>
</li>


        </ul>
    </div>
    
   </div>
   </div>
   
   
  )
}
