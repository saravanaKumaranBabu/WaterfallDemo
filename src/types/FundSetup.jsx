import React, { useState } from "react";

import NavBar from "../main/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import backTo from "../main/Images/backTo.svg";
import searchIcon from "../main/Images/searchIcon.svg";
import filterIcon from "../main/Images/filterIcon.svg";
import exportIcon from "../main/Images/exportIcon.svg";
import FundEntitiesComp from "./FundSetupPages/FundEntities";
import PartnersComp from "./FundSetupPages/Partners";
import MgmtFeeComp from "./FundSetupPages/MgmtFee";
import CarriedInterestComp from "./FundSetupPages/CarriedInterest";
import Calculations from "./FundSetupPages/Calculations";

const FundSetup = () => {
    //const [activeBtn, setActiveBtn] = useState('');

    let navigate = useNavigate();
    let location = useLocation();

    const [active, setActive] = useState('carriedInterest');

    function changeTab(view) {
        //console.log("view", view)
        // debugger;
        setActive(view);
        // if( location.state && location.state.path == 'dashboard' && location.state.)

        //const path = location.state?.event === 'dashboard' ? 'dashbaord' : 'event';
        //navigate(view ,{state:{path : path , event : location.state?.event}});        
    }

    return (
        <>
            <div className='container-fluid ps-0 pe-0 fund-setup-container' style={{ backgroundColor: '#fff', paddingBottom: '10px' }}>
                <NavBar currPage='Fund Setup' />
                <div style={{ backgroundColor: '#FAFBFF', borderTop: '1px solid #E6E8FC' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '94%', margin: 'auto' }}>
                        <h3 className='action-heading' style={{ fontWeight: '700', fontSize: '24px', lineHeight: '24px' }}>
                            {location.state?.event || 'Fund Setup'}</h3>
                        <button id="backToDashboardBtn" className="" style={{
                            padding: '12px 16px', paddingTop: '7px', gap: '4px', textAlign: 'center',
                            height: '40px', background: '#FFFFFF', boxShadow: '0px 2px 6px rgb(0 0 0 / 15%)', borderRadius: '2px', border: 'none'
                        }} onClick={() => { navigate('/home'); }}>
                            <span style={{ fontSize: '14px' }}>
                                <img src={backTo} alt="settings" style={{ paddingRight: '5px', paddingBottom: '5px' }} />Back to Dashboard
                            </span>
                        </button>
                    </div>
                    <hr style={{ marginTop: '6px', marginBottom: '7px' }}></hr>
                </div>

                {/* <div style={{ backgroundColor: '#FAFBFF', borderTop: '1px solid #E6E8FC' }}>
                    <div style={{ width: '94%', margin: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <h3 className='action-heading' style={{ margin: '0px', padding: '14px 0px' }}>Fund Setup</h3>
                        {/* <button className="" style={{padding: '12px 16px', paddingTop: '7px', gap: '4px', textAlign: 'center', 
                  height: '40px', background: '#FFFFFF',  boxShadow: '0px 2px 6px rgb(0 0 0 / 15%)', borderRadius: '2px', border: 'none',
                  marginRight: '50px'}} onClick={() => {}}>
                     <span >Action</span>
               </button> * /}
                    </div>
                    <div style={{ width: '94%', margin: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                        <div className="overView-block" style={{ marginLeft: '0px' }}>
                            <span className="overView-text">Management Fee Set up</span>
                            <span className="overView-number">$1,124,418</span>
                        </div>
                        <div className="overView-block">
                            <span className="overView-text">Carry Model Set up</span>
                            <span className="overView-number">$417,619</span>
                        </div>
                        <div className="overView-block">
                            <span className="overView-text">LTD Carry Set up</span>
                            <span className="overView-number">$128,619</span>
                        </div>
                    </div>
                    <hr style={{ marginTop: '0px' }}></hr>
                </div> */}
                {/* <h3 style={{ marginLeft : '18px', fontSize : '24px'}}><strong>Fund Setup</strong></h3>
                    <hr></hr> */}

                <div className='action-btn-container'>
                    {/* <button className={`action-buttons me-3 ${active === "fundEntities" ? "activeButton" : ""}`} style={{width: 'auto'}}
                    onClick={() => { changeTab("fundEntities") }}>Fund Entities
                </button>
                <button className={`action-buttons me-3 ${active === "partners" ? "activeButton" : ""}`} style={{width: 'auto'}}
                    onClick={() => { changeTab("partners"); }}>Partners
                </button> */}
                    <button id='carriedIntBtn' className={`action-buttons me-3 ${active === "carriedInterest" ? "activeButton" : ""}`}
                        style={{ width: 'auto', whiteSpace: 'nowrap' }}
                        onClick={() => { changeTab("carriedInterest"); }}>Carried Interest
                    </button>
                    <button id='mgmtFeeBtn' className={`action-buttons me-3 ${active === "mgmtFee" ? "activeButton" : ""}`}
                        style={{ width: 'auto', whiteSpace: 'nowrap' }}
                        onClick={() => { changeTab("mgmtFee"); }}>Management Fee
                    </button>
                    <button id='calculationsBtn' className={`action-buttons me-3 ${active === "calculations" ? "activeButton" : ""}`}
                        style={{ width: 'auto' }}
                        onClick={() => { changeTab("calculations"); }}>Calculations
                    </button>

                </div>
                <hr style={{ marginTop: '7px', marginBottom: '0px' }}></hr>

                <div style={{}}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '94%', margin: 'auto' }}>
                        <h3 className='action-heading' style={{ fontWeight: '700', fontSize: '20px', lineHeight: '23px' }}>
                            {active === "fundEntities" ? 'Fund Entities' :
                                active === "partners" ? 'Partners' :
                                    active === "mgmtFee" ? 'Management Fee' :
                                        active === "carriedInterest" ? 'Carried Interest' :
                                            active === "calculations" ? 'Calculations' : 'Fund Entities'}
                        </h3>

                        {active === "fundEntities" ?
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button className="" style={{
                                    padding: '12px 16px', paddingTop: '7px', gap: '4px', textAlign: 'center',
                                    height: '40px', background: '#FFFFFF', boxShadow: '0px 2px 6px rgb(0 0 0 / 15%)', borderRadius: '2px', border: 'none'
                                }} onClick={() => { }}>
                                    <span
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',

                                            color: '#191919'
                                        }}
                                    >
                                        <img src={searchIcon} alt="settings" style={{ paddingRight: '7px', paddingBottom: '7px' }} />Search
                                    </span>
                                </button>
                                <button className="" style={{
                                    padding: '12px 16px', paddingTop: '7px', gap: '4px', textAlign: 'center',
                                    height: '40px', background: '#FFFFFF', boxShadow: '0px 2px 6px rgb(0 0 0 / 15%)', borderRadius: '2px', border: 'none'
                                }} onClick={() => { }}>
                                    <span
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',
                                            color: '#191919'
                                        }}
                                    >
                                        <img src={filterIcon} alt="settings" style={{ paddingRight: '7px', paddingBottom: '7px' }} />Filter
                                    </span>
                                </button>
                                <button className="" style={{
                                    padding: '12px 16px', paddingTop: '7px', gap: '4px', textAlign: 'center',
                                    height: '40px', background: '#FFFFFF', boxShadow: '0px 2px 6px rgb(0 0 0 / 15%)', borderRadius: '2px', border: 'none'
                                }}
                                    onClick={() => { }}>
                                    <span
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',

                                            color: '#191919'
                                        }}
                                    >
                                        <img src={exportIcon} alt="settings" style={{ paddingRight: '7px', paddingBottom: '7px' }} />Export
                                    </span>
                                </button>
                            </div>
                            : ''}
                    </div>
                    <hr style={{ marginTop: '5px', marginBottom: '10px' }}></hr>
                </div>


                {(() => {
                    //alert('Test');
                    switch (active) {
                        case 'fundEntities':
                            return <FundEntitiesComp></FundEntitiesComp>;

                        case 'partners':
                            return <PartnersComp></PartnersComp>;

                        case 'mgmtFee':
                            return <MgmtFeeComp></MgmtFeeComp>;

                        case 'carriedInterest':
                            return <CarriedInterestComp></CarriedInterestComp>;

                        case 'calculations':
                            return <Calculations></Calculations>;

                        default:
                            return <FundEntitiesComp></FundEntitiesComp>;
                    }
                })()}

                {/* <div style={{ width: '94%', margin: 'auto', display: 'flex', justifyContent: 'flex-start', gap: '25px' }}>
                    <div style={{ width: '15%', display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '18px' }}>
                        <button className={activeBtn == "mgmtFee" ? "fund-setup-btn active" : "fund-setup-btn"}
                            onClick={() => { setActiveBtn('mgmtFee') }}>
                            <span>&nbsp;&nbsp;<FundSetupIcon className="fund-setup-icon"></FundSetupIcon>&nbsp;&nbsp;Management Fee</span>
                        </button>
                        <button className={activeBtn == "carryModel" ? "fund-setup-btn active" : "fund-setup-btn"}
                            onClick={() => { setActiveBtn('carryModel') }}>
                            <span>&nbsp;&nbsp;<FundSetupIcon className="fund-setup-icon" />&nbsp;&nbsp;Carry Model</span>
                        </button>
                    </div>
                    <div style={{ width: '85%' }}>
                        <Paper sx={{ width: '85%', overflow: 'hidden', margin: "0", background: '#FFFFFF', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)', borderRadius: '8px' }} >
                            <TableContainer className="fundTable" >
                                <Table stickyHeader aria-label="simple table" className="table fund-setup-table" >

                                    <TableBody>
                                        <TableRow >
                                            <TableCell style={{ padding: "20px 0px 0px 24px" }}>
                                                <p className="management-fee">Management Fee
                                                    <br></br>
                                                    <span className="grey-text"> Set up Management Fee Criteria</span>
                                                </p>

                                            </TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" >Mgmt Fee: Start Date</span>


                                            </TableCell>
                                            <TableCell>  <img src={Calendar} alt="calendar" />&nbsp;05/01/2022</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" > Mgmt Fee: Fee Basis - IP</span>

                                            </TableCell>
                                            <TableCell> Commitment</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" >Mgmt Fee: Post IP Start Date</span>

                                            </TableCell>
                                            <TableCell>  <img src={Calendar} alt="calendar" /> &nbsp;   06/01/2022</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" > Mgmt Fee: Fee Basis - Post IP</span>

                                            </TableCell>
                                            <TableCell> Invested Capital (LOC excl. Interest</TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>


                        <Paper sx={{ width: '85%', overflow: 'hidden', marginTop: "30px", background: '#FFFFFF', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)', borderRadius: '8px' }}>
                            <TableContainer className="fundTable" >
                                <Table stickyHeader aria-label="simple table" className="table">

                                    <TableBody>
                                        <TableRow >
                                            <TableCell style={{ padding: "20px 0px 0px 24px" }}>
                                                <p className="management-fee">Carry Model
                                                    <br></br>
                                                    <span className="grey-text"> Set up and Manage Carry Model Fund</span>
                                                </p>

                                            </TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" style={{ paddingRight: '100px' }}>Incremental Preferred Return Percentage</span>

                                            </TableCell>
                                            <TableCell>0.00%</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" style={{ paddingRight: '195px' }}> Preferred Return%</span>

                                            </TableCell>
                                            <TableCell>7.00 %</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" style={{ paddingRight: '195px' }}>GP Catch-Up Split</span>

                                            </TableCell>
                                            <TableCell>100.00% </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" style={{ paddingRight: '228px' }}> Fund Carry %</span>

                                            </TableCell>
                                            <TableCell>20.00% </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" style={{ paddingRight: '50px' }}>Carry Test-Gains as a Percentage of Cost</span>

                                            </TableCell>
                                            <TableCell>25.00% </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" > GP Catch-Up Distribution</span>

                                            </TableCell>
                                            <TableCell>-</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" > LPA Section - Management Fee Calculation</span>

                                            </TableCell>
                                            <TableCell style={{ width: '50%' }}>-</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px", width: '50%' }}>
                                                <span className="grey-text" > Management Fee Calculation Basis</span>

                                            </TableCell>
                                            <TableCell style={{ width: '50%' }}>Invested Capital </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" style={{ paddingRight: '125px' }}> Percentage of Profit</span>

                                            </TableCell>
                                            <TableCell style={{ width: '50%' }}>-</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: "20px 0 20px 24px" }}>
                                                <span className="grey-text" style={{ paddingRight: '125px' }}> Debit Party Account ID</span>

                                            </TableCell>
                                            <TableCell style={{ width: '50%' }}>-</TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default FundSetup;