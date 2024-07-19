import React from 'react';
import NavBar from "../main/NavBar";

import CoinsIcon from "../main/Images/Coins.svg";
import RefreshIcon from "../main/Images/icn_Refresh_with Shadows.svg";
import chevronRight from "../main/Images/Chevron-right.png";
import UserGroup from "../main/Images/user-group.svg";
import FileInvoiceDollar from "../main/Images/file-invoice-dollar.svg";
import grid from "../main/Images/grid.svg";
import Plus from "../main/Images/plus.svg";
import Gear from "../main/Images/Gear.svg";
import EyeIcon from "../main/Images/eye.svg";
import ExportToExcel from "../main/Images/export-to-excel.jpg";
import ChevronLeft from "../main/Images/Chevron-left.svg";
import ChevronRight from "../main/Images/Chevron-right.svg";
import Last30daysIcon from "../main/Images/last30days.png";
import Calendar from "../main/Images/Calendar.svg";
import Frame57409 from "../main/Images/Frame 57409.svg";
import FrameFeePayingLP from "../main/Images/Frame 57590.svg";
import FrameNonFeePayingLP from "../main/Images/NonFeePayingLPs.svg";
import GP from "../main/Images/GP.svg";
import DownwardDistribution from "../main/Images/DownwardDistribution.svg";
import ThreeDots from "../main/Images/threeDots.svg";

import { Paper, Table, TableBody, TableCell, TableContainer, 
     TableHead,  TableRow, } from '@mui/material';

const IncomeDistribution = (props) => {

//    const [iterate, setIterate] = useState(0);
   const header = [
       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
   ]

   

    return (
        <div className='container-fluid'>
            <NavBar currPage="IncomeDistribution" />
            <h3 style={{ marginLeft : '18px'}}><strong>Income/Disposition Distribution</strong></h3>

            
            <p className = "overView-right-text" style = {{ color : '#21234A'}}>
            <img src={Calendar} alt="calendar"/>
            &nbsp;
                Distribution Date
            &nbsp;
                </p>
            <button className = "overView-right-dropdown">
              <img style = {{ width : '20px' ,height: '20px'}} src={Last30daysIcon}  alt="last30Icon-icon"/>
              <span className="last-30-days">&nbsp;03/31/2022 </span>
              <span className = "overview-dropdown-image"><i  className="fa fa-angle-down" aria-hidden="true"></i></span>
            </button>
            
            <div className = "overView-box" style={{ paddingLeft : '10px'}} >
                <div style= {{ display : 'flex', flexDirection : 'row', marginTop : '30px'}}>
                   <i className ="fa-solid fa-profile"></i>
                   <img src={CoinsIcon} alt="coins-stack" className = "coins-icon"/>
                   &nbsp;
                   <p style = {{ display : 'inline'}}><b className="select-fund-text">Select Fund</b>   
                   </p>
                   <div className="Fund-right">
                   <button className="Fund" >Fund&nbsp;&nbsp;&nbsp;
                       <img src={chevronRight} alt="chevron-right"/>
                   </button>
                   <img src={RefreshIcon} alt="refresh" className="refresh-icon"/>
                   </div>
                </div>
                <div  className="col-5 float-end right-align-block">
                    <img src={UserGroup} alt="user-group"/>
                    &nbsp;
                    <p className="right-text">Total no. of Investors&nbsp;&nbsp;&nbsp;
                     <span className="span-text">291</span></p>
                    <img src={FileInvoiceDollar} alt="file-invoice-dollar"/>
                    <p className="right-text">Total Carry&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="span-text">$ 207,559,355</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <button className="round-button">
                           <img src={grid} alt="grid" style={{ float : 'centre'}}/>
                    </button>
                    <button className="round-button">
                           <img src={Plus} alt="plus" style={{ float : 'centre'}}/>
                    </button>
                    <button className="round-button">
                           <img src={Gear} alt="gear" style={{ float : 'centre'}}/>
                    </button>
                </div>

            </div>

            <div style={{ padding: '35px 40px 0px 12px' }}>
              <div className="row mb-2" >
              <h5 className=" text-left col-2">
              <img src={CoinsIcon} className = "coins-icon" alt="coin-icon"/>
              &nbsp;&nbsp;
                <b style={{ fontWeight : '700'}}>AMX II Realized</b>
              </h5>
              
              <div className="col-2">
                <button className="view-breakdown-button" >
                  <img className="eye-icon" src={EyeIcon} alt="eye icon" />
                 <span className="view-breakdown-text"> View Breakdown&nbsp;</span>
                </button>
              </div>

              <div className="col-5" />
               <div className="export-to-excel-right col-3" style = {{ position : 'absolute', right : '80px'}}>
                <button className="export-to-excel" style={{ width: '34px'}}>
                 <img className="export-to-excel-img" src={ChevronRight} alt="export to excel" style={{ height : '20px' }}/> 
                </button>

                <button className="export-to-excel" style={{ width: '34px'}}>
                 <img className="export-to-excel-img" src={ChevronLeft} alt="export to excel" style={{ height : '20px' }}/> 
                </button>
                 
                <button className="export-to-excel" style={{ width: '34px'}}>
                 <img className="export-to-excel-img" src={ExportToExcel} alt="export to excel" style={{ height : '23px' }}/> 
                </button>

              </div>
             </div>
            </div>

            <Paper sx={{ width: '100%', overflow: 'hidden',}}>
            <TableContainer className="fundTable" sx={{ maxHeight: 340 , }}>
              <Table stickyHeader aria-label="simple table" className="table">
              <TableHead style = {{ background : '#EBF2FA'}}>
                <TableRow style = {{height: '56px'}} className="disposition-table">
                    <TableCell style={{ background : 'white' , width: '121px', zIndex: '900' }}>
                        <img src={Frame57409} alt="frame"/>
                    </TableCell>
                    <TableCell style={{ zIndex: '900' , textAlign : 'center'}}>AMX II</TableCell>
                    <TableCell style = {{ textAlign : 'center'}}>Total LTD Dist</TableCell>
                    <TableCell style = {{ textAlign : 'center'}}>Total <br></br>Contributions</TableCell>
                    <TableCell style = {{ textAlign : 'center'}}>Total Netting</TableCell>
                    <TableCell style = {{ textAlign : 'center'}}>Gross Profit to be <br></br>further allocated</TableCell>
                    <TableCell style = {{ textAlign : 'center'}}>Accum. Pref</TableCell>
                    <TableCell style = {{ textAlign : 'center'}}>Return of LP Pref</TableCell>
                    <TableCell style = {{ textAlign : 'center'}}>Remaining <br></br>balance after pref</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {
                      header.map((item, index) => (
                          <>
                            {
                               ( index !== 10 && index !== 16 && index !== 17) ?
                                <TableRow style = {{ height: '56px'}}>
                            <TableCell style= {{  textAlign : 'center', color: '#115AC8'}}>6371</TableCell>
                            <TableCell style = {{ color: '#717F8C'}}>University Of Miami</TableCell>
                            <TableCell style={{ textAlign : 'center'}} > <span style = {{ color: '#717F8C'}}> $</span> 3.328,976</TableCell>
                            <TableCell style={{ textAlign : 'center'}} ><span style = {{ color: '#717F8C'}}> $</span> 1,148,689</TableCell>
                            <TableCell style={{ textAlign : 'center'}} ><span style = {{ color: '#717F8C'}}> $</span> 631,672</TableCell>
                            <TableCell style={{ textAlign : 'right'}}><span style = {{ color: '#717F8C'}} > $</span> 1,548,615</TableCell>
                            <TableCell style={{ textAlign : 'right', color: '#717F8C' }} >0.0%</TableCell>
                            <TableCell style={{ textAlign : 'right', color: '#717F8C' }} >0.0%</TableCell>
                            <TableCell style={{ textAlign : 'right'}}><span style = {{ color: '#717F8C' }}> $</span>1,548,615</TableCell>
                               </TableRow>
                            :
                            <>
                              <TableRow style = {{height: '56px' ,background: '#FFFBF1' }}>
                                  <TableCell>
                                  {
                                          index === 10 ?
                                          <>
                                          <img src={DownwardDistribution} alt="DownwardDistribution"/>
                                          &nbsp;
                                          &nbsp;
                                          <img src={ThreeDots} alt="threedots"/>
                                          </>
                                          :
                                          index === 16 ?
                                          <>
                                          <img src={DownwardDistribution} alt="DownwardDistribution"/>
                                          &nbsp;
                                          &nbsp;
                                          <img src={ThreeDots} alt="threedots"/>
                                          </>
                                          :
                                          <img src={Frame57409} alt="frame" style={{ background : '#FFFBF1' , float : 'left'}}/>
                                   }
                                      
                                </TableCell>
                                  <TableCell>SubTotal
                                      &nbsp;
                                      {
                                          index === 10 ?
                                          <img src={FrameFeePayingLP} alt="fee paying LPs"/>
                                          :
                                          index === 16 ?
                                          <img src={FrameNonFeePayingLP} alt="Non fee paying LPs"/>
                                          :
                                          <img src={GP} alt="GP"/>
                                      }
                                     
                                  </TableCell>
                                  <TableCell style={{ textAlign : 'center'}}>$ 3.328,976</TableCell>
                                  <TableCell style={{ textAlign : 'center'}}>$ 3.328,976</TableCell>
                                  <TableCell style={{ textAlign : 'center'}}>$ 3.328,976</TableCell>
                                  <TableCell style={{ textAlign : 'right'}}>$ 3.328,976</TableCell>
                                  <TableCell style={{ textAlign : 'right'}}>0.0%</TableCell>
                                  <TableCell style={{ textAlign : 'right'}}>$ 1,548,615</TableCell>
                                  <TableCell style={{ textAlign : 'right'}}>$ 1,548,615</TableCell>
                              </TableRow>
                            </>
                            }
                          </>
                      ))
                      
                        
                       
                  }
                            
              </TableBody>
              </Table>
            </TableContainer>
            </Paper>
        </div>
    )
}

export default IncomeDistribution;