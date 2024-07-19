import axios from 'axios';
import React, { useEffect, useState } from 'react';
import loginImage from "../main/Images/login-background.png"
import { useNavigate,  } from 'react-router-dom';


import { useDispatch,  } from 'react-redux'
import { userLogin } from '..//main/userActions'

const Login = (props) => {

  const dispatch = useDispatch();
    const Navigate = useNavigate();

    // const history = useHistory();
    const countryCode = "+91"
    const [phoneNumber, setPhoneNumber] = useState(countryCode);
    const [userDetails, setUserDetails] = useState({});
    const [currentUser, setCurrentUser] = useState({
        email : "",
        password: ""
    })
    const [navigateToDashboard, setNavigateToDashboard] = useState(false)
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [emailAuthentication, setEmailAuthentication] = useState(true);
    const [phoneAuthentication, setPhoneAuthentication] = useState(false);

    const [forgotPassword, setForgotPassword] = useState(false);

useEffect(()=>{
    axios.get("loginCredentials.json")
    .then((res) => {
    //   console.log(res.data)
      setUserDetails(res.data);
      dispatch(userLogin(res.data))
    })
},[])   

 const handleChange = (e) => {
    if(e.target.name == "email"){
        setCurrentUser(prev=> ({
        ...prev, email : e.target.value
    }))
    }
    else{
        setCurrentUser( prev => ({
            ...prev, password : e.target.value
        }))
    }
 }



 const handleForgotPassword =  (e) => {
   e.preventDefault();
   setForgotPassword(true);
  //  console.log("currentuser.email", currentUser.email);
  //  console.log("authentication::", authentication);
  //  sendPasswordResetEmail(authentication, "meghabs74@gmail.com")
  // .then((res) => {
  //   // Password reset email sent!
  //   console.log("email sent", res)
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log("error", errorMessage)
  // });
 

 }

 const generateOTP = () => {
   /* window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
         
        },
      }, authentication);
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication,phoneNumber, appVerifier)
      .then( confirmationResult => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });*/
 }


 const handleSubmit = async (e) => {
    e.preventDefault();
    if(emailAuthentication){
      // try{
      // const user = await signInWithEmailAndPassword(
      //   authentication, currentUser.email, currentUser.password
      // )
      // // console.log(user)
      // setNavigateToDashboard(true) 
      // Navigate('/')
      // }
      // catch(error){
      //   console.log(error.message)
      //   setMessage("Incorrect Username/Password")
      //   setNavigateToDashboard(false)
      // }
     userDetails.map((usr)=>{
        console.log("usr,",usr)
        if(usr.email === currentUser.email && usr.password === currentUser.password)
        {
        setNavigateToDashboard(true) 
        // props.setRefreshElement(true)
        props.setLoggedInUser(prev => ({
            ...prev, name : usr.name , initial: usr.initial
        }))
        setErrorMessage('')
        Navigate('/home')
       
        }
        else
        {
        setErrorMessage("Incorrect Username/Password")
        setNavigateToDashboard(false)
        }
    })
    } 
    else{
        
         navigateToDashboard && Navigate('/home')
    }
 }

 const verifyOTP = (e) => {
     let otp = e.target.value;
     if(otp.length === 6){
     let confirmationResult = window.confirmationResult;
     confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("signed in successfully")
        setErrorMessage('');
        setNavigateToDashboard(true)
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log("bad verification code")
        setErrorMessage("Incorrect verification code")
        setNavigateToDashboard(false)
      });
     }
 }

  return (
      <div>
           <img className="login-backdrop"src={loginImage} alt="login"/>
           <div className="login-content">
               <div className="login-form">
                  <h2><b>Login to your Account</b></h2>
                  <p style={{ fontWeight: "700", fontSize: "16px"}}>Enter credentials to log into your account</p>
                  <p style = {{ marginTop : "30px", color: "#64b54d", cursor : 'pointer',
                                textDecoration : emailAuthentication ? 'underline' : 'none'}} 
                    
                     onClick={ ()=> {setEmailAuthentication(true)
                                      setPhoneAuthentication(false)}}>
                      Login with Email</p>

                  {/* ------------Login With phone ------------- */}
                  {/* <p style = {{ marginTop : "30px", color: "#64b54d", position: 'relative', left : '200px', bottom : '55px', 
                                cursor : 'pointer',
                                textDecoration : phoneAuthentication ? 'underline' : 'none'}}
                     onClick = { ()=> { 
                                     setPhoneAuthentication(true)
                                     setEmailAuthentication(false)
                                      }}
                  >
                      Login with Phone</p> */}
                  {/*------------ Login with phone ends--------- */}
                
                { emailAuthentication && 
                  <form style = {{ marginTop : "0px"}} >
                      <label className="form-label">Email</label>
                      <input className="form-input" type="email" placeholder="  Enter Email" name="email" onChange={handleChange}/>
                      <br></br>
                      {
                        !forgotPassword ?
                        <>
                        <label className="form-label">Password</label>
                        <input className="form-input" type="password" placeholder="  Enter Password" name="password" onChange={handleChange}/>
                        
                        <p style={{ color : 'red'}}>{errorMessage}</p>
                        <button className="login-button" onClick={handleSubmit} >Login</button>
                        <button className="forgot-password" onClick={handleForgotPassword}> Forgot Password?</button>
                        </>
                        :
                        <>
                          <p style={{ color : 'green'}}>{message}</p>
                          <button className="send-forgot-link" onClick={(e) => 
                            {
                              e.preventDefault();
                              currentUser.email ?
                              setMessage("Email sent successfully")
                              :
                              setMessage("Invalid email")
                            }}>Send</button>
                          <button className="login-again" onClick={()=> 
                            {
                              setErrorMessage('')
                              setCurrentUser( prev => ({
                                ...prev,email :'', password: ''
                              }))
                              setForgotPassword(false)
                            }}
                              >Login again?</button>
                        </>
                      }
                   
                  </form>
                 }

                {/* ------------  Login with phone -------------  */}
                {/* { phoneAuthentication &&   
                  <form style = {{ marginTop : "0px"}} onSubmit = {handleSubmit}>
                      <label className="form-label">Phone</label>
                     
                      <input className="form-input" type="text" placeholder="  Enter phone number" name="phone"  
                             value = {phoneNumber}
                             onChange={(e)=>{
                                 setPhoneNumber(e.target.value)
                             }}/>
                      <button className="otp-button" onClick={generateOTP}>Click to send OTP</button>
                      <br></br>
                      <label className="form-label">Enter OTP</label>
                      <input className="form-input"  type="text" placeholder="  Enter otp" name="otp" onChange={verifyOTP}/>
                      <p style={{ color : 'red'}}>{errorMessage}</p>
                      <p className="login-button" onClick={handleSubmit} >Login</p>
                  </form>
                  
                } */}

                {/*------------ Login with phone ends-------------- */}
                <div id="recaptcha-container"></div>
               </div>
           </div>
      </div>
  )
}

export default Login;

