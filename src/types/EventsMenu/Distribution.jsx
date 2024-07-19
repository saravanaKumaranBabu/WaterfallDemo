import React from 'react';
import NavBar from '../../main/NavBar';
import Last30daysIcon from "../../main/Images/last30days.png";
import ExportToExcel from "../../main/Images/export-to-excel.jpg";
import EyeIcon from "../../main/Images/eye.svg";
import Vector177 from "../../main/Images/Vector 177.svg";
import stroke1 from "../../main/Images/Stroke 1.svg";
import stroke1copy from "../../main/Images/Stroke 1 Copy.svg";
import infoCircle from "../../main/Images/info-circle-purple.svg";
import {  Paper, Table, TableBody, TableCell, TableContainer, 
          TableHead,  TableRow, } from '@mui/material';


const Distribution = (props) => {

    const tableHeader = [
        'Proceeds',
        'ROC',
        'Expenses',
        'AFE' ,
        'Option 1',
        'Option 2',
        'Option 3',
        'Carry',
        'Carry prior',
        'Carry Adj',
        'Carry Adj',
        'Carry Adj'
    ]
   
    let yellowRow = false;

 return (
    <div className='container-fluid'>
       <NavBar currPage = "Events/Distribution"/>
       <div className="overView-box">
        <h3><strong>Distribution</strong></h3>
            <p className = "overView-right-text">Showing details for</p>
            <button className = "overView-right-dropdown">
              <img style = {{ width : '20px' ,height: '20px'}} src={Last30daysIcon} alt="last30days" />
              <span className="last-30-days">&nbsp;Last 30 days </span>
              <span className = "overview-dropdown-image"><i  className="fa fa-angle-down" aria-hidden="true"></i></span>
            </button>
     
        <hr style = {{ background: '#E6E8FC'}}></hr>

        <div style= {{ display : 'flex'}}>
            <div className = "distribution-block" style = {{ background : '#F7F7F7'}}>
             <span className="overView-text">Distribution Summary</span>
             <span className="overView-number">$1,124,418</span>
           </div>
           <div className = "distribution-block" style = {{ background : '#F7F7F7'}}>
             <span className="overView-text">Info 1</span>
             <span className="overView-number">$417,619</span>
           </div>
           <div className = "distribution-block" style = {{ background : '#F7F7F7'}}>
             <span className="overView-text">Info 2</span>
             <span className="overView-number">$128,619</span>
           </div>
        </div>

        <div style={{ padding: '0 15px 0 0' }}>
          <div className="row mb-2" >
             <h5 className=" text-left col-2">
             <b style={{ fontWeight : '700'}}>Detailed Fund Report</b>
             </h5>
      
            <div className="col-2">
               <button className="all-entries-dashboard">
                  <img className="eye-icon" src={EyeIcon} alt="eye icon" />
                  All entries&nbsp;
                  <img src={Vector177} alt="vector"/>
               </button>
            </div>
        
            <div className="col-5 float-end"/>
               <div className="export-to-excel-right col-3">
                  <button className="export-to-excel" style={{ width: '34px'}}>
                    <img className="export-to-excel-img" src={ExportToExcel} alt="export to excel" style={{ height : '23px' }}/> 
                  </button>
               </div>
            </div>
           </div>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer className="fundTable" sx={{ maxHeight: 315 }}>
          <Table stickyHeader aria-label="simple table" className="table">
          <TableHead style = {{ background : '#EBF2FA'}}>
              <TableRow>
                  <TableCell className="distribution-table"> 
                       Tier
                       <div className="stroke-block">
                       <img src={stroke1} alt="stroke" />
                       <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                       </div>
                  </TableCell>
                  
                  <TableCell className="distribution-table">
                      P<sub>11</sub>
                      <div className="stroke-block">
                      <img src={stroke1} alt="stroke" />
                      <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                      </div>
                  </TableCell>

                  <TableCell className="distribution-table">
                      P<sub>02</sub>
                      <div className="stroke-block">
                      <img src={stroke1} alt="stroke" />
                      <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                      </div>
                  </TableCell>

                  <TableCell className="distribution-table">
                      P<sub>03</sub>
                      <div className="stroke-block">
                      <img src={stroke1} alt="stroke" />
                      <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                      </div>
                  </TableCell>

                  <TableCell className="distribution-table">
                      P<sub>n</sub>
                      <div className="stroke-block">
                      <img src={stroke1} alt="stroke" />
                      <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                      </div>
                  </TableCell>

                  <TableCell className="distribution-table" style = {{ width : '160px'}}>
                     Partnership1 Total
                     <div className="stroke-block">
                     <img src={stroke1} alt="stroke" />
                     <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                     </div>
                  </TableCell>

                  <TableCell className="distribution-table">
                      P<sub>11</sub>
                      <div className="stroke-block">
                      <img src={stroke1} alt="stroke" />
                      <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                      </div>
                  </TableCell>

                  <TableCell className="distribution-table">
                      P<sub>02</sub>
                      <div className="stroke-block">
                      <img src={stroke1} alt="stroke" />
                      <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                      </div>
                  </TableCell>

                  <TableCell className="distribution-table">
                      P<sub>03</sub>
                      <div className="stroke-block">
                      <img src={stroke1} alt="stroke" />
                      <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                      </div>
                  </TableCell>

                  <TableCell className="distribution-table">
                      P<sub>n</sub>
                      <div className="stroke-block">
                      <img src={stroke1} alt="stroke" />
                      <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                      </div>
                  </TableCell>

                  <TableCell className="distribution-table" style={{ textAlign : 'right'}} >
                      Total 
                      &nbsp;
                      <div className="stroke-block">
                      <img src={stroke1} alt="stroke" />
                      <img className = "stroke-downward"src={stroke1copy} alt="stroke"/>
                      </div>
                  </TableCell>
              </TableRow>
           </TableHead> 
           <TableBody>
              {
                  tableHeader.map((firstCol, indx) => (
                     <>
                     {
                         firstCol === 'AFE' || firstCol === 'Carry' ?
                         yellowRow = true :
                         yellowRow = false
                     }
                     { console.log("firstcol , yellowrow,", firstCol , yellowRow)}
                     <TableRow style = {{ height: '64px' }}>
                         {
                             firstCol === 'AFE'|| firstCol === 'Carry' ?
                             <TableCell 
                                 
                                 style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" , 
                                            height : yellowRow ? "96px" : "" ,
                                            fontWeight: '700',
                                            fontSize: '18px',
                                            color: '#64b54d'
                                          }}> 
                                        {firstCol} 
                                         <br></br> 
                                         <img src={infoCircle} alt="info" />
                                         &nbsp;
                                         <span style={{ fontWeight: '500',
                                            fontSize: '14px',
                                            color: '#5D6E82'}}>info..</span>
                             </TableCell>
                             :
                             <TableCell style= {{ color: '#115AC8'}}> { firstCol} </TableCell>
                         }
                         
                         <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }} > 
                            <span className="dollar-color">$</span>
                            &nbsp; P<sub>11</sub>
                         </TableCell>
                         <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }}> 
                         <span className="dollar-color">$</span>
                            &nbsp; P<sub>11</sub>
                         </TableCell>
                         <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }}> 
                            ...
                         </TableCell>
                         <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }}> 
                            ...
                         </TableCell>
                         {
                             firstCol === 'AFE'|| firstCol === 'Carry' ?
                             <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }}> 
                               Partnership1 Total&nbsp;
                               <span className="dollar-color">$</span>
                             </TableCell>
                             :
                             <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }}> 
                               <span className="dollar-color">$</span>
                               &nbsp;189,990,99
                               <span style = {{ fontSize : '10px'}}>.99</span>
                             </TableCell>
                         }
                         
                         <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }}> 
                           ...</TableCell>
                         <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }}> 
                           ...</TableCell>
                         <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }}> 
                           ...</TableCell>
                         <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" }}> 
                           ...</TableCell>
                         <TableCell style = {{ backgroundColor : yellowRow ? "#FFFBF0" : "" , textAlign : 'right'}}> 
                            <span className="dollar-color">$</span>
                            &nbsp;
                            189,990,99
                            <span style = {{ fontSize : '10px'}}>.99</span>
                        </TableCell>
                     </TableRow>
                  </>
                  )
                  )
              }
             
           </TableBody>
          </Table>
        </TableContainer>
        </Paper>

       </div>
    </div>    
 )
}

export default Distribution;