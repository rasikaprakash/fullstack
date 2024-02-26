// import React, { useState } from 'react';
// import './register.css';

// export const Login = () => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleMobileNumberChange = (event) => {
//     const value = event.target.value;
//     setMobileNumber(value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (mobileNumber.length === 10) {
//       // Here you can handle the submission logic
//       console.log('Submitted mobile number:', mobileNumber);
//       // Clear any previous error messages
//       setErrorMessage('');
//     } else {
//       // Display an error message if the mobile number length is not 10
//       setErrorMessage('Mobile number must be 10 digits long.');
//     }
//   };

//   return (
//     <div className='container'> 
//       <div id="black-back">
//         <div id="left-img">
//           <img src="https://www.myvi.in/content/dam/vodafoneideadigital/StaticPages/consumerimages/blog/kaun-banega-crorepathi-2022/kbc-season-14.png" height="780px" style={{marginTop:"-30px"}}/>
//         </div>
//       </div>
      
//          <div>
          
//           <h3 id="text-img"><div id="get">Get to</div> <div id="know">know our</div><div id="exc"> exciting plans!!</div></h3>
//           </div>
//       <div id="right-cont">
//         <div id="text">
//           <img src="netfi.png" width="200px" height="200px" id="logo-img"/>
//           <br /><br />
//           <form onSubmit={handleSubmit}>
//             <input 
//               type="number" 
//               placeholder="Mobile number" 
//               id="number" 
//               value={mobileNumber} 
//               onChange={handleMobileNumberChange} 
//               required 
//               />
//               {errorMessage && <p style={{ color: 'red' }} >{errorMessage}</p>}
//               <br /><br /><br />
//             <button type="submit" id="sub-but">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

import  { useState } from 'react';
import '../../assets/Css/register.css';
import icon from '../../assets/Images/netfi.png';

const Register = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    setMobileNumber(value);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mobileNumber.length === 10 ) {
      // Here you can handle the submission logic
      console.log('Submitted data:', { mobileNumber, username, email });
      // Clear any previous error messages
      setErrorMessage('');
    } else {
      // Display an error message if the input data is not valid
      setErrorMessage('Mobile number must be 10 digits long and password must be at least 6 characters long.');
    }
  };

  return (
    <div className='container'> 
      <div id="black-back">
        <div id="left-img">
          <img src="https://www.myvi.in/content/dam/vodafoneideadigital/StaticPages/consumerimages/blog/kaun-banega-crorepathi-2022/kbc-season-14.png" height="780px" style={{marginTop:"-30px"}} id="sim-img"/>
        </div>
      </div>
      
         <div>
          
          <h3 id="text-img"><div id="get">Get to</div> <div id="know">know our</div><div id="exc"> exciting plans!!</div></h3>
          </div>
      <div id="right-cont">
        <div id="text">
          <img src={icon} width="200px" height="200px" id="logo-img"/>
          <br /><br />
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Mobile number" 
              id="number" 
              value={mobileNumber} 
              onChange={handleMobileNumberChange} 
              required 
              /><br /><br />
            <input 
              type="text" 
              placeholder="Username" 
              id="number" 
              value={username} 
              onChange={handleUsernameChange} 
              required 
              /><br /><br />
            <input 
              type="email" 
              placeholder="Email" 
              id="number" 
              value={email} 
              onChange={handleEmailChange} 
              required 
              /><br /><br />
           
            {errorMessage && <p style={{ color: 'red' }} >{errorMessage}</p>}
            <br /><br /><br />
            <button type="submit" id="sub-but">Register</button>
           
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
