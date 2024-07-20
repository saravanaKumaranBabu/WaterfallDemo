import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { ReactComponent as DashboardComp } from "./Images/Dashboard.svg";
import { ReactComponent as ReportsComp } from "./Images/income.svg";
import { ReactComponent as AboutComp } from "./Images/info.svg";
import { ReactComponent as EventsComp } from "./Images/period.svg";
import { ReactComponent as FundSetupComp } from "./Images/waterfall.svg";

const SideMenu = () => {
  const [subMenu,setSubMenu] = useState();
  const menus = {
    dashboard:{
      name:'Dashboard',
      path:'/home',
      subPath:[]
    },
    fundSetup:{
      name:'FundSetup',
      path:'/FundSetup',
      subPath:[]
    },
    reports:{
      name:'Reports',
      path:'',
      subPath:[]
    },
    events:{
      name:'Events',
      path:'',
      subPath:[
        {
          name:'Gradual Fund Loss',
          path:''
        },
        {
          name:'Total Loss',
          path:''
        },
        {
          name:'At Cost',
          path:''
        }
      ]
    },
    about:{
      name:'About',
      path:'/about',
      subPath:[]
    }
  }
  return (<>
      <div className='sideMenuContainer'>
        <ul className='menuContainer'>
            <Nav.Link  id='notifnMenuLink' className='menuHover' as={Link} to={"/home"}>
              <DashboardComp className='menuIcon' alt='Dashboard'/>
            </Nav.Link>
            <Nav.Link  id='notifnMenuLink' className='menuHover' as={Link} to={"/FundSetup"}>
              <FundSetupComp className='menuIcon' alt="FundSetup"/>
            </Nav.Link>
            <Nav.Link  id='notifnMenuLink'className='menuHover' as={Link} to={"/IncomeDistribution"}>
              <ReportsComp className='menuIcon' alt="Reports"/>
            </Nav.Link>
            <Nav.Link  id='notifnMenuLink'className='menuHover' as={Link} to={"/ViewOutputGlobal"}>
              <EventsComp className='menuIcon' alt="Events"/>
            </Nav.Link>
            <Nav.Link  id='notifnMenuLink' className='menuHover' as={Link} to={"/about"}>
              <AboutComp className='menuIcon' alt="About"/>
            </Nav.Link>
          </ul>
          <div className='subMenuContainer'>

          </div>
      </div>
    </>)
};

export default SideMenu;