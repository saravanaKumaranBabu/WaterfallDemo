import { Breadcrumbs, Link } from "@mui/material";
import React from "react";
//import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NavBar = ({ currPage } : any) => {
  return(
    <div className = "nav-bar mx-auto" style={{width: '94%', padding: '0', display: 'flex', justifyContent: 'center'}}>
     {/* <span style = {{ color: '#6B7280' }}>Home  &gt; </span>
     <span style = {{ color : ' #1A213D'}}> {currPage}</span> */}
    
    <Breadcrumbs
      //separator={<NavigateNextIcon fontSize="small" />}
                 aria-label="breadcrumb"
    >
      <Link
          color="inherit"
          href="/home"  
      >
          Home 
      </Link>
      <Link
          color="inherit"
          href={ currPage === "Dashboard" ? "/home"
               : currPage === "Waterfall" ? "/Waterfall" 
               : currPage === "IncomeDistribution" ? "/IncomeDistribution"
               : currPage === "Events/PeriodClose" ? "/ViewOutputGlobal" 
               : currPage === "Events/Distribution" ? "/Distribution"
               : currPage === "Events/SimulateFundClose" ? "/SimulateFundClose"
               : currPage === "Events/DoomsdayScenario" ? "/DoomsdayScenario" : "scenarioWizard"}  
      >
         <b> {currPage} </b>
      </Link>
    </Breadcrumbs>
    </div>
  )
}

export default NavBar;