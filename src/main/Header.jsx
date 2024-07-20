import { useState } from 'react';
import ThoughtFocusLogo from "./Images/TF_Logo_White.svg";
//import Dashboard from "./Images/Dashboard-icon.png";
// import FundSetup from "./Images/FundSetup-icon.png";
// import Reports from "./Images/Reports-icon.png";
// import logout from "./Images/logout.png";
import contactSupport from "./Images/contact-support.png";
// import Gear from "./Images/Gear.png";
// import Bell from "./Images/Bell.svg";
// import info from "./Images/info-circle.svg";
// import Invoice from "./Images/file-invoice-dollar.svg";
// import EventsIcon from "./Images/Calendar-check.svg";
// import { useSelector } from 'react-redux'
//import type { RootState } from './store'
import squareList from "../main/Images/square-list.svg";
//import circleDollar from "../main/Images/circle-dollar.svg";
import { Link, useLocation } from 'react-router-dom';
import chevronRight from "../main/Images/Chevron-right.svg";
// import IconNotification from "../main/Images/Icn_Notification.svg";
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as IconNotiComp } from "../main/Images/BellNotification.svg";
import { ReactComponent as DashboardComp } from "../main/Images/DashboardIconCombo.svg";
import { ReactComponent as FundSetupComp } from "../main/Images/fundSetupIcon.svg";
import { ReactComponent as IconGearComp } from "../main/Images/Gear20.svg";
import { ReactComponent as ReportsIconComp } from "../main/Images/Reports-icon.svg";
import { ReactComponent as IconLogoutComp } from "../main/Images/UserLogout.svg";
import { ReactComponent as Avatar } from "./Images/Avatar.svg";
import { ReactComponent as EventsIconComp } from "./Images/Calendar-check.svg";
import { ReactComponent as ChevronDown } from "./Images/GreyChevronDown.svg";

const Header = (props) => {
  let location = useLocation();

  // const { userInfo } = useSelector((state: RootState) => state.user)


  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => {
    setDropdown(!dropdown);
    setDropdown2(false);
  }

  const [dropdown2, setDropdown2] = useState(false);
  const toggleOpen2 = () => setDropdown2(!dropdown2);

  const onEventsMenuClick = (e) => {
    toggleOpen();
    e.stopPropagation();
    window.addEventListener('click', function () {
      setDropdown(false);
      setDropdown2(false);
    });
  }

  return (<>

    <Container fluid className='header-container'>
      <Col xs={12} className="headercss header-col" style={{ position: 'fixed', zIndex: '10' }}>
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className='ThoughtFocus-header-nav-bar'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand as={Link} to={"/home"}>
            <img src={ThoughtFocusLogo} alt="ThoughtFocus-logo" style={{ width: '71%' }} />
          </Navbar.Brand>
          {
            window.location.pathname === '/' &&
            <Nav.Item href="#contactSupport" className='ms-auto'>
              <img src={contactSupport} alt="contact support" className="header-icons" />Contact Support
            </Nav.Item>
          }
          {window.location.pathname !== "/" && <>
            <Nav className='header-menu2 ms-auto'>
                <Nav.Link className='bell-notification' id='notifnMenuLink' as={Link} to={"/home"}>
                  <IconNotiComp alt="bell" className="notifnComp" />
                </Nav.Link>

              {/* <div className="header-vl" style={{ height: '25px', position: 'static', alignSelf: 'center' }}></div>

              <Nav.Link id='settingsMenuLink' as={Link} to={'/home'} style={{ color: '#FFF' }}>
                <IconGearComp alt='gear' className='gearComp' />
              </Nav.Link> */}

              <div className="header-user header-user-menu" >
                <a id='userInitialsMenuLink' as={Link} to="/home" className="header-user-icon" style={{ position: 'static' }}>
                  <span><Avatar alt='avatar' className='avatarComp'/></span>
                </a>
                  <span id='userNameMenuLink' className="header-user-name" style={{ position: 'static' }}>
                    {props.userName ? props.userName : "William Jacobson"}
                  </span>
                  <span><ChevronDown alt='chevronDown' className='chevronDownComp'/></span>
              </div>

              <Nav.Link id='logoutMenuLink' className="nav-link header-logout-icon" as={Link} to={"/"} onClick={() => localStorage.removeItem('loggedInUser')}>
                <IconLogoutComp alt="logout" className='logoutComp' />
              </Nav.Link>
            </Nav>
          </>
          }
        </Navbar>
      </Col>
    </Container>
    {false && <Row id="header" className="" style={{ margin: 0, position: 'relative' }}>
      <Col xs={12} className="headercss" style={{ position: 'fixed', zIndex: '10', padding: '0px' }}>

        <nav className="navbar navbar-expand-lg" style={{ color: '#FFFFFF', backgroundColor: '#64b54d', width: '94%', margin: 'auto' }}>

          <div className="navbar-brand header-text-ThoughtFocus ps-0" style={{ color: '#FFFFFF' }} >
            <img src={ThoughtFocusLogo} alt="ThoughtFocus-logo" style={{ width: '100px' }} />
          </div>

          {
            window.location.pathname !== "/" &&

            <div className="collapse navbar-collapse" style={{ justifyContent: 'space-between' }}>
              <ul className="navbar-nav mr-auto header-items">

                <li className={location?.state?.path === 'dashboard' ? 'nav-item active' : 'nav-item'}>
                  <Link className="nav-link" to={"/home"} state={{ path: 'dashboard' }} style={{ color: '#FFFFFF', marginLeft: '40px' }}>
                    <span>
                      {/* <img src={Dashboard} className="header-icons" alt="dashboard-icon" /> */}
                      <DashboardComp alt="dashboard" className='menu-icon' style={{ width: '19px', height: '19px', paddingRight: '3px' }} />
                      &nbsp;Dashboard&nbsp;
                      <i className="fa fa-big fa-angle-down" aria-hidden="true"></i>
                      <span className="sr-only">(current)</span>
                    </span>
                  </Link>
                </li>

                <li className={location.state?.path === 'fundSetup' ? 'nav-item active' : 'nav-item'}>
                  <Link className="nav-link" to={"/FundSetup"} state={{ path: 'fundSetup' }} style={{ color: '#FFFFFF' }}>
                    <span>
                      {/* <img src={FundSetup} className="header-icons" alt="fundsetup-icon" style={{ width: '30px', height: '25px' }} /> */}
                      <FundSetupComp alt="FundSetup" className="menu-icon" />
                      &nbsp;Fund Setup&nbsp;
                      <i className="fa fa-big fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>

                <li className={location?.state?.path === 'report' ? 'nav-item active' : 'nav-item'}>
                  <Link className="nav-link" to={"/home"} state={{ path: 'report' }} style={{ color: '#FFFFFF' }}>
                    <span>
                      {/* <img src={Reports} className="header-icons" alt="reports-icon" /> */}
                      <ReportsIconComp alt="reports" className='menu-icon' />
                      &nbsp;Reports&nbsp;
                      <i className="fa fa-big fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>

                <li className={location?.state?.path === 'event' ? 'nav-item dropdown event-div active' : 'nav-item dropdown event-div'}>
                  <button className="btn btn-default " type="button" data-toggle="dropdown" onClick={onEventsMenuClick}>
                    <span>
                      {/* <img src={EventsIcon} className="header-icons" alt="events-icons" style={{ height: '18px' }} /> */}
                      <EventsIconComp alt="reports" className='menu-icon' />
                      &nbsp;Events&nbsp;
                      <i className="fa fa-big fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                  {/* <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" onClick={toggleOpen}>
    <li className="nav-item dropdown " style={{ marginBottom : '4px'}} >
    <ul className="navbar-nav">
    <a className="nav-link event-menu" href="#" 
                  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                  style={{ color: '#FFFFFF' }}>
                    <img src={EventsIcon} className="header-icons" alt="events-icons" style={{ height : '18px'}}/>
                    &nbsp;Events&nbsp;
                    <i className="fa fa-big fa-angle-down" aria-hidden="true"></i>
                  </a> */}

                  <ul
                    // className="dropdown-menu" 
                    // style={{ width : '310px'}}
                    onClick={(e) => e.stopPropagation()}
                    style={{ position: 'absolute', top: '52px', left: '-150px' }}
                    className={`dropdown-menu ${dropdown ? 'show' : ''}`}
                  >
                    <div className="event-submenu-backdrop">
                      <li className="event-menu-heading event-hover-li" style={{ width: '50%' }}>Events</li>
                      <li className="dropdown-submenu event-hover-li " onClick={toggleOpen2} style={{ width: '49%', padding: '15px 16px' }}>
                        <a className=" event-menu-li dropdown-item event-dropdown" href='#header'
                          style={{ /*width: '320px',*/ height: 'auto', color: '#64b54d', fontWeight: '500', padding: '0px', background: 'none' }}
                        >
                          <img src={squareList} alt="list" />
                          &nbsp;
                          Scenario
                          <img src={chevronRight} alt="chevron" style={{ float: 'right' }} />
                        </a>
                        <ul

                          style={{ border: 'none', width: '50%', left: '50%', top: '53px' }}
                          className={`dropdown-menu move-submenu ${dropdown2 ? 'show' : ''}`}
                        >

                          <li className='event-hover-li'
                            onClick={(e) => {
                              // e.preventDefault();
                              props.setCurrentRoute('Gradual Fund Close')
                            }}
                          >
                            {/* <a  className=" event-menu-li dropdown-item event-dropdown" href="/actionpage/scenarioWizard" data-value="gradual"
          onClick = {(e)=> {
            // e.preventDefault();
            props. setCurrentRoute('Gradual Fund Close')
          }}
          style= {{ color : '#64b54d', fontWeight: '500'}}
          >Gradual Fund Close</a> */}
                            <Link className=" event-menu-li dropdown-item event-dropdown event-hover-link" onClick={toggleOpen}
                              to={"/actionpage/scenarioWizard"} state={{ path: 'event', event: 'Gradual Fund Close', active: 'viewInput' }}
                              style={{ fontWeight: '500', color: '#64b54d', padding: '15px' }}>Gradual Fund Close
                            </Link>
                          </li>
                          {/* <li><a  className=" event-menu-li dropdown-item event-dropdown" href="/ScenarioWizard" 
          style= {{ color : '#64b54d', fontWeight: '500'}}
          >Gradual Fund Close</a></li> */}
                          <li className='event-hover-li'>
                            {/* <a  className=" event-menu-li dropdown-item event-dropdown" href="/actionpage/viewInput" 
          style= {{ color : '#64b54d', fontWeight: '500'}}>Total Loss</a> */}
                            <Link className=" event-menu-li dropdown-item event-dropdown" onClick={toggleOpen}
                              to={"/actionpage/viewInput"} state={{ path: 'event', event: 'Total Loss', active: 'viewInput' }}
                              style={{ fontWeight: '500', color: '#64b54d', padding: '15px' }}>Total Loss
                            </Link>
                          </li>
                          {/* <li><a  className=" event-menu-li dropdown-item event-dropdown" href="/PeriodClose" 
          style= {{ color : '#64b54d', fontWeight: '500'}}>Total Loss</a></li> */}
                          <li className='event-hover-li'>
                            {/* <a  className=" event-menu-li dropdown-item event-dropdown"  href="/actionpage/viewInput" 
          style = {{ width : '300px', height : '56px', color : '#64b54d', fontWeight: '500'}}>At Cost</a> */}

                            <Link className=" event-menu-li dropdown-item event-dropdown" onClick={toggleOpen}
                              to={"/actionpage/viewInput"} state={{ path: 'event', event: 'At Cost', active: 'viewInput' }}
                              style={{ fontWeight: '500', color: '#64b54d', padding: '15px' }}>At Cost
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* <li className='event-hover-li' style={{ width: '50%', height: '52px' }}>
                        <a className="event-menu-li dropdown-item event-dropdown event-hover-li" href="#header"
                          style={{ color: '#64b54d', fontWeight: '500', padding: '15px 16px', background: 'none' }}>
                          <img src={circleDollar} alt="dollar" />
                          &nbsp;
                          Management Fee</a></li> */}
                    </div>
                  </ul>

                </li>


                {/* <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" onClick={toggleOpen}>
                <ul className="navbar-nav">
                <li className="nav-item dropdown " style={{ marginBottom : '4px'}} >
                  <a className="nav-link event-menu" href="#" 
                  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                  style={{ color: '#FFFFFF' }}>
                    <img src={EventsIcon} className="header-icons" alt="events-icons" style={{ height : '18px'}}/>
                    &nbsp;Events&nbsp;
                    <i className="fa fa-big fa-angle-down" aria-hidden="true"></i>
                  </a>
                   <ul 
                  
                   style={{ width : '259px'}}
                
                   aria-labelledby="navbarDarkDropdownMenuLink" 
                   className={`dropdown-menu ${dropdown ? 'show' : ''}`}
                   >
                      <li><a className="event-menu-li dropdown-item event-dropdown " href="/PeriodClose">
                      <p className="menu-text">
                        <img src={info} alt="info" className="info-icon"/> 
                          &nbsp;
                          Period Close
                          <br></br>
                          <span className="menu-description">A Small Description goes here</span>
                        </p>
                        
                      </a></li>

                      <li><a className="event-menu-li dropdown-item event-dropdown " href="/Distribution">
                      <p className="menu-text">
                        <img src={info} alt="info" className="info-icon"/> 
                          &nbsp;
                          Distribution
                          <br></br>
                          <span className="menu-description">A Small Description goes here</span>
                        </p>
                        
                      </a></li>

                      <li><a className="dropdown-item event-dropdown" href="/SimulateFundClose" >
                      <p className="menu-text">
                        <img src={info} alt="info" className="info-icon"/> 
                          &nbsp;
                        Simulate Fund Close
                        <br></br>
                          <span className="menu-description">A Small Description goes here</span>
                        </p>
                      </a></li>

                      <li><a className="dropdown-item event-dropdown" href="/DoomsdayScenario">
                      <p className="menu-text">
                        <img src={info} alt="info" className="info-icon"/> 
                          &nbsp;
                        Doomsday Scenario
                        <br></br>
                          <span className="menu-description">A Small Description goes here</span>
                        </p>
                        </a></li>
                     


                   </ul>
                </li>
                </ul>
                </div> */}


                {/* commented for further addition */}
                {/* <li className="nav-item" >
                  <a className="nav-link" href="/IncomeDistribution" style={{ color: '#FFFFFF' }}>
                    <img src={Invoice} className="header-icons" alt="income-icon" style={{ height : '20px'}} />
                    Income&nbsp;
                    <i className="fa fa-big fa-angle-down" aria-hidden="true"></i>
                  </a>
                </li> */}

              </ul>
              <ul className="navbar-nav mr-auto header-items" style={{ alignItems: 'center' }}>
                <li className="nav-item">
                  <Link className="nav-link" to={"/home"} style={{ color: '#FFFFFF' }}>
                    <IconNotiComp alt="bell" className="notifnComp" />
                  </Link>
                  {/* <a className="nav-link" href="/home" style={{ color: '#FFFFFF' }}>
                    <img src={IconNotification} alt="bell" className="header-bell-icon" style={{position: 'static'}}/>
                  </a> */}
                </li>
                <div className="header-vl" style={{ height: '25px', position: 'static' }}></div>
                <li className="nav-item">
                  <Link className='nav-link' to={'/home'} style={{ color: '#FFF' }}>
                    <IconGearComp alt='gear' className='gearComp' />
                  </Link>
                  {/* <a className="nav-link" href="/home">
                    <img src={Gear} alt="gear" className="header-settings-icon" style={{position: 'static'}}/>
                  </a> */}
                </li>

                <div className="header-user" style={{ width: '37px', height: '40px', position: 'static', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <a href="/home" className="header-user-initial" style={{ position: 'static' }}>
                    {props.userInitial ? props.userInitial : "WJ"}
                    {/* { props.temp_user ? props.userInitial : "WJ"} */}
                  </a>
                </div>

                <span className="header-user-name" style={{ position: 'static' }}>
                  {props.userName ? props.userName : "William Jacobson"}
                  {/* {props.temp_user ? props.userName : "William Jacobson"} */}
                </span>

                <li className="nav-item">
                  <Link className="nav-link" to={"/"} onClick={() => localStorage.removeItem('loggedInUser')}>
                    <IconLogoutComp alt="logout" className='logoutComp' />
                  </Link>
                  {/* <a className="nav-link"
                    href="/"
                    onClick={
                      () =>
                        localStorage.removeItem('loggedInUser')
                    }
                  ><img className="header-logout" src={logout} alt="logout" style={{position: 'static'}}/></a> */}
                </li>
              </ul>
            </div>
          }
          {
            window.location.pathname === '/' &&
            <ul className="navbar-nav mr-auto header-items">
              <li className="nav-item">
                <a className="nav-link contact-support" href="#header">
                  <img src={contactSupport} alt="contact support" className="header-icons" />
                  Contact Support</a>
              </li>
            </ul>
          }

        </nav>

      </Col>
    </Row>
    }
  </>);
};

export default Header;