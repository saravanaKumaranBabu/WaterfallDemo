import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../main/NavBar';
import backTo from "../main/Images/backTo.svg";
import { useFetchWaterfallHeader } from "../Hooks/FundHooks";
import { Container } from 'react-bootstrap';

//let globalCurrentEvent = ''

const ActionsPage = (props) => {
   let navigate = useNavigate();
   let location = useLocation();

   const [active, setActive] = useState('');
   //const [fromPage, setFromPage] = useState('');
   //let currentEvent = 'Actions';

   const { data } = useFetchWaterfallHeader();
   //  console.log("waterfallHeader",data)

   const formatDate = (dt) => {
      let temp = dt;
      let year = temp.substr(2, 2);
      let month = temp.substr(5, 2);
      let date = temp.substr(8, 2);
      let newdate = month + '/' + date + '/' + year;
      return newdate;
   }

   /*useEffect(() => {
      if (location.state) {
         if (location.state.active) {
            setActive(location.state.active)
         }
         else {
            setActive('viewInput');
         }
         if (location.state.event === 'Distribution') {
            //currentEvent = 'Distribution';

            //  globalCurrentEvent = 'Distribution';
         }
         else {
            //currentEvent = 'Accured Carry';
            //  globalCurrentEvent = 'Accured Carry';
         }
      }
      else {
         setActive('viewInput')
         //currentEvent = 'Gradual Fund Close'
      }
      //console.log("currentevent", currentEvent)
      //console.log("active",active)
   }, [])*/

   function changeTab(view) {
      //console.log("view", view)
      // debugger;
      setActive(view);
      // if( location.state && location.state.path == 'dashboard' && location.state.)

      const path = location.state?.event === 'dashboard' ? 'dashbaord' : 'event';
      navigate(view, { state: { path: path, event: location.state?.event } }
         // , state  = { path : path , event : location.state?.event } 
      )
   }
   //console.log("location", location.state)
   //console.log("action",window.location.pathname)
   // const location = useLocation();
   //console.log("event", location.state && location.state.event)
   //  console.log('location11: ', location);
   useEffect(() => {
      console.log('useEffect location:: ', location.state)
      //alert(location.state);
      if (location.state && location.state.active) {
         setActive(location.state.active);
      }
      else {
         let pathname = window.location.pathname.split('/');
         pathname = pathname[pathname.length - 1];
         setActive(pathname);
      }
   }, [location.state]);

   return (
      <Container fluid className='pe-0 ps-0'>
         <NavBar currPage='Dashboard / Batch ID / Actions' />
         <div className='overView-box overview-box-action pe-0 ps-0 mb-0'>
            {/* <h3>{currentEvent}</h3> */}
            <div style={{ backgroundColor: '#FAFBFF' }}>
               <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '94%', margin: 'auto' }}>
                  <h3 className='action-heading'>{location.state?.event || 'View Input'}</h3>
                  <button id='backToDashboardBtn' className="action-back-btn" onClick={() => { navigate('/home'); }}>
                     <span style={{ fontSize: '14px' }}>
                        <img src={backTo} className="back-btn-img" alt="settings" />Back to Dashboard
                     </span>
                  </button>
               </div>
               <hr style={{ marginTop: '7px', marginBottom: '10px' }}></hr>
            </div>
            {/* {
                  location.state && ( location.state.path === 'dashboard' || location.state.path === "actions" ) &&
                  location.state.event == 'Distribution' && <h3>Distribution</h3> 
               }
               {
                  location.state && (  location.state.path === "actions" ) &&
                  location.state.event == 'Distribution' && <h3>Distribution</h3>
               }
               
               {
                  location.state && ( location.state.path === 'dashboard' || location.state.path === "actions" ) &&
                  location.state.event == 'Accrued Carry' && <h3>Accrued Carry</h3>
               } */}

            <div className='action-btn-container'>
               <button id='viewInputActionBtn'
                  className={`action-buttons me-3 ${active === "viewInput" || active === "scenarioWizard" ? "activeButton" : ""}`}
                  onClick={() => {
                     /* { location.state && ( location.state.path === 'dashboard' || location.state.path === "actions" ) ?
                           changeTab("viewInput") : changeTab("scenarioWizard") } */
                     location.state?.event === 'Gradual Fund Close' ?
                        changeTab("scenarioWizard") :
                        changeTab("viewInputGlobal")
                  }}>
                  View Input
               </button>
               <button id='setOptionsActionBtn' className={`action-buttons me-3 ${active === "setOptions" ? "activeButton" : ""}`}
                  onClick={() => { changeTab("setOptions"); }}>
                  Set Options
               </button>
               <button id='runWaterfallActionBtn' className={`action-buttons me-3 ${active === "runWaterfall" ? "activeButton" : ""}`}
                  onClick={() => { changeTab("runWaterfall"); }}>
                  Run Waterfall
               </button>
               <button id='viewOutputActionBtn'
                  className={`action-buttons me-3 ${active === "viewOutput" || active === "periodClose" ? "activeButton" : ""}`}
                  onClick={() => {
                     changeTab("ViewOutputGlobal")
                  }}>
                  View Output
               </button>
               <button id='approvalActionBtn' className={`action-buttons me-3 ${active === "approval" ? "activeButton" : ""}`}
                  onClick={() => { changeTab("approval"); }}>
                  Approval
               </button>
            </div>

         </div>
         <Outlet />
      </Container>
   )
}

export default ActionsPage;