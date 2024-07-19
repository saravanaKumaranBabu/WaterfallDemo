// import React from 'react';

//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import loginImage from "../main/Images/login-background.png"
import { useNavigate, } from 'react-router-dom';
//import { useDispatch, } from 'react-redux'
//import { userLogin } from '../main/userActions'
import { LoginCall } from '../Hooks/FundHooks';
import { Col, Container, Image, Row } from 'react-bootstrap';

const LoginMobile = (props) => {

  const LoginCallMutation = LoginCall();
  //const dispatch = useDispatch();
  const Navigate = useNavigate();

  // const history = useHistory();
  //const countryCode = "+91"
  // const [phoneNumber, setPhoneNumber] = useState(countryCode);
  //const [userDetails, setUserDetails] = useState({});
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  })
  const [, setNavigateToDashboard] = useState(false)//navigateToDashboard
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [emailAuthentication, setEmailAuthentication] = useState(true);
  const [, setPhoneAuthentication] = useState(false);

  const [forgotPassword, setForgotPassword] = useState(false);

  useEffect(() => {
    // axios.get("loginCredentials.json")
    //   .then((res) => {
    //     //   console.log(res.data)
    //     setUserDetails(res.data);
    //     dispatch(userLogin(res.data))
    //   })
  })

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setCurrentUser(prev => ({
        ...prev, email: e.target.value
      }))
    }
    else {
      setCurrentUser(prev => ({
        ...prev, password: e.target.value
      }))
    }
  }


  const handleForgotPassword = (e) => {
    e.preventDefault();
    setForgotPassword(true);
  }

  const handleSubmit = async (e) => {
    let loginData = {
      email: currentUser.email,
      password: currentUser.password
    }
    LoginCallMutation.mutate(loginData, {
      onSuccess: (resp) => {
        console.log('Login Resp::', resp);
        if (resp.status === 200 && resp.data) {
          setNavigateToDashboard(true)
          props.setLoggedInUser(prev => ({
            ...prev,
            name: resp.data.name,
            initial: resp.data.initial,
          }))
          setErrorMessage('')
          Navigate('/home')
        }
        else {
          setErrorMessage("Incorrect Username/Password")
          setNavigateToDashboard(false)
        }
      },
      onError: (err) => {
        setErrorMessage("Issue in login")
        setNavigateToDashboard(false)
      }
    }
    );
    e.preventDefault();
    return;
    // e.preventDefault();
    // if (emailAuthentication) {
    //   userDetails.map((usr) => {
    //     console.log("usr,", usr)
    //     if (usr.email === currentUser.email && usr.password === currentUser.password) {
    //       setNavigateToDashboard(true)
    //       // props.setRefreshElement(true)
    //       props.setLoggedInUser(prev => ({
    //         ...prev, name: usr.name, initial: usr.initial
    //       }))
    //       setErrorMessage('')
    //       Navigate('/home')
    //     }
    //     else {
    //       setErrorMessage("Incorrect Username/Password")
    //       setNavigateToDashboard(false)
    //     }
    //     return usr;
    //   })
    // }
    // else {

    //   navigateToDashboard && Navigate('/home')
    // }
  }



  return (<>
    <Container className='login-container' fluid style={{}}>
      <Row style={{}}>
        <Col className='login-control parent' xs={{ span: 12, order: 2 }} sm={{ span: 7, order: 1 }}>
          <Row className="parent">
            <div
            //   className="login-form"
            >
              <h2><b>Login to your Account</b></h2>
              <p className='login-sub-header-txt' style={{}}>Enter credentials to log into your account</p>
              <p className='login-btn-link' style={{
                  textDecoration: emailAuthentication ? 'underline' : 'none'
                }}
                onClick={() => {
                  setEmailAuthentication(true)
                  setPhoneAuthentication(false)
                }}>
                Login with Email
              </p>
              {emailAuthentication &&
                <form style={{ marginTop: "0px" }} >
                  <label className="form-label">Email</label>
                  <input className="form-input email-input" type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
                  {/* <br></br> */}
                  {
                    !forgotPassword ?
                      <>
                        <label className="form-label">Password</label>
                        <input className="form-input pswd-input" type="password" placeholder="Enter Password" name="password" onChange={handleChange} />

                        <p style={{ color: 'red' }}>{errorMessage}</p>
                        <button className="login-button" onClick={handleSubmit} >Login</button>
                        <button className="forgot-password" onClick={handleForgotPassword}> Forgot Password?</button>
                      </>
                      :
                      <>
                        <p style={{ color: 'green' }}>{message}</p>
                        <button className="send-forgot-link" onClick={(e) => {
                          e.preventDefault();
                          currentUser.email ?
                            setMessage("Email sent successfully")
                            :
                            setMessage("Invalid email")
                        }}>Send</button>
                        <button className="login-again" onClick={() => {
                          setErrorMessage('')
                          setCurrentUser(prev => ({
                            ...prev, email: '', password: ''
                          }))
                          setForgotPassword(false)
                        }}
                        >Login again?</button>
                      </>
                  }

                </form>
              }
            </div>
          </Row>
        </Col>
        <Col className='image-container' xs={{ span: 12, order: 1 }} sm={{ span: 5, order: 2 }} md={{ span: 5, order: 2 }}
          style={{}}>
        </Col>
      </Row>
    </Container>
    {false && <div className="container">
      <div className="row parent">
        <div className="col-md-6 col-md-pull-6 col-lg-4 col-xl-3 login-content">
          <div
          //   className="login-form"
          >
            <h2><b>Login to your Account</b></h2>
            <p style={{ fontWeight: "700", fontSize: "16px" }}>Enter credentials to log into your account</p>
            <p style={{
              marginTop: "30px", color: "#64b54d", cursor: 'pointer',
              textDecoration: emailAuthentication ? 'underline' : 'none'
            }}

              onClick={() => {
                setEmailAuthentication(true)
                setPhoneAuthentication(false)
              }}>
              Login with Email
            </p>
            {emailAuthentication &&
              <form style={{ marginTop: "0px" }} >
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="  Enter Email" name="email" onChange={handleChange} />
                <br></br>
                {
                  !forgotPassword ?
                    <>
                      <label className="form-label">Password</label>
                      <input className="form-input" type="password" placeholder="  Enter Password" name="password" onChange={handleChange} />

                      <p style={{ color: 'red' }}>{errorMessage}</p>
                      <button className="login-button" onClick={handleSubmit} >Login</button>
                      <button className="forgot-password" onClick={handleForgotPassword}> Forgot Password?</button>
                    </>
                    :
                    <>
                      <p style={{ color: 'green' }}>{message}</p>
                      <button className="send-forgot-link" onClick={(e) => {
                        e.preventDefault();
                        currentUser.email ?
                          setMessage("Email sent successfully")
                          :
                          setMessage("Invalid email")
                      }}>Send</button>
                      <button className="login-again" onClick={() => {
                        setErrorMessage('')
                        setCurrentUser(prev => ({
                          ...prev, email: '', password: ''
                        }))
                        setForgotPassword(false)
                      }}
                      >Login again?</button>
                    </>
                }

              </form>
            }
          </div>
        </div>
        <div className="col-md-4 col-md-push-6 col-lg-4 col-xl-3 order-first order-md-last ">
          <img
            className="login-backdrop"
            //   style= {{
            //       position : 'relative',
            //       left : '290px',
            //       width : '622px',
            //       height : '620px'
            //   }}
            src={loginImage} alt="login" />

        </div>

      </div>

    </div>}
  </>)
}

export default LoginMobile;