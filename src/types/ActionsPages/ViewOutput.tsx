import React, { useState } from 'react';

import CoinsIcon from "../../main/Images/Coins.svg";

import ExportToExcelComb from "../../main/Images/exportExcelFileIcon.svg";

// import Frame57409 from "../../main/Images/Frame 57409.svg";
// import FrameFeePayingLP from "../../main/Images/Frame 57590.svg";
// import FrameNonFeePayingLP from "../../main/Images/NonFeePayingLPs.svg";
// import GP from "../../main/Images/GP.svg";
// import DownwardDistribution from "../../main/Images/DownwardDistribution.svg";
// import ThreeDots from "../../main/Images/threeDots.svg";
import PopupDrilldown from "../Modal/PopupDrilldown";
import DrilldownMenu from "../DrilldownMenu";
import { useLocation } from 'react-router-dom';
import { useFetchDistOutput } from "../../Hooks/FundHooks";
import NumberFormat from "react-number-format";


import {
  Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow,
} from '@mui/material';


const ViewOutput = (props: any) => {

  // const header = [
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
  // ]

  

  const [clicked, setClicked] = useState(false);
  const [currentRow, setCurrentRow] = useState({});

  const { state } = useLocation();

  const [fundData] = useState(state);

  const { data } = useFetchDistOutput();

  const randomNumberInRange = (min1 : any, max1 : any) => { 
    return Math.floor(Math.random()  
            * (max1 - min1 + 1)) + min1; 
  }; 

  // console.log("props", data)

  return (
    <div className='container-fluid ps-0 pe-0' style={{}}>
  
      <div style={{ padding: '10px 0px' }}>
        <div className="" style={{ width: '94%', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h5 className="text-left" style={{ padding: '0px' }}>
            <img src={CoinsIcon} className="coins-icon" alt='svgImage-icon' />
            &nbsp;&nbsp;
            <b style={{ fontWeight: '700' }}>Fund 1</b>
          </h5>

          {/* <div className="col-2">
                <button className="view-breakdown-button" >
                  <img className="eye-icon" src={EyeIcon} alt="eye icon" />
                 <span className="view-breakdown-text"> View Breakdown&nbsp;</span>
                </button>
              </div> */}

          {/* <div className="col-8" /> */}
          <div className="export-to-excel-right" style={{}}>
            {/* <button className="export-to-excel" style={{ width: '34px' }}>
              <img className="export-to-excel-img" src={ChevronRight} alt="export to excel" style={{ height: '20px' }} />
            </button>
            <button className="export-to-excel" style={{ width: '34px' }}>
              <img className="export-to-excel-img" src={ChevronLeft} alt="export to excel" style={{ height: '20px' }} />
            </button> */}
            <button className="export-to-excel" style={{ width: '32px', height: '32px', padding: '8px' }}>
              <img className="" src={ExportToExcelComb} alt="export to excel"
                style={{}}
              />
            </button>

            {/* <button className="export-to-excel" style={{ width: '34px' }}>
              <img className="export-to-excel-img" src={ExportToExcel} alt="export to excel" style={{ height: '23px' }} />
            </button> */}

          </div>
        </div>
      </div>

      <PopupDrilldown trigger={clicked} setTrigger={setClicked}
        onBackdropPress={() => setClicked(false)}
        onClick={() => setClicked(false)}>
        <DrilldownMenu h={currentRow} fundData={fundData} setTrigger={setClicked} ></DrilldownMenu>
      </PopupDrilldown>

      <Paper sx={{ width: '94%', overflow: 'hidden', margin: 'auto' }}>
        <TableContainer className="fundTable" sx={{ maxHeight: 485, marginBottom: '1px' }}>
          <Table stickyHeader aria-label="simple table" className="table">
            <TableHead style={{ background: '#EBF2FA' }}>
              <TableRow style={{ height: '56px' }} className="disposition-table">
                <TableCell style={{ textAlign: 'center' }} >
                  ID
                  {/* <img src={ThreeDots} alt="threedots" style={{ marginLeft : '50px'}}/> */}
                </TableCell>
                <TableCell style={{ textAlign: 'center', paddingLeft: '0px', }}>Investors</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Gross Proceeds</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Withholding for Expenses</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Return of Capital</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Gross Gain</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Return of Expenses</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Loss Recoupment</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Gain Subj. to Carry</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Cumulative Gain Subj. to Carry</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Pref Target</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Pref Paid</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Catch-up Target</TableCell>
                <TableCell style={{ textAlign: 'center' }}>20% LP</TableCell>
                <TableCell style={{ textAlign: 'center' }}>80% GP</TableCell>
                <TableCell style={{ textAlign: 'center' }}>80% LP</TableCell>
                <TableCell style={{ textAlign: 'center' }}>20% GP</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Eligible GP Carry</TableCell>
                <TableCell style={{ textAlign: 'center' }}>LTD Carry Paid</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Current Eligible GP Carry</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data && data.map((row, index) => (
                  <>
                    {/* {console.log("row", row)} */}
                    {
                      // (index !== 10 && index !== 16 && index !== 17) ?

                      <TableRow style={{ height: '56px' }} key={'vog-' + index}>
                        <TableCell style={{ textAlign: 'center', color: '#115AC8', }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        >{row && row.id}</TableCell>
                        <TableCell style={{ color: '#717F8C', textAlign: 'center', }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        >Partner</TableCell>
                        <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        > <span style={{ color: '#717F8C' }}> 
                        &nbsp;
                        <NumberFormat value={row.total_LTD_Dist} displayType={"text"} 
                         thousandSeparator={true} prefix={"$"} />
                        
                        </span></TableCell>
                        <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;
                        <NumberFormat value={row.total_Contributions} displayType={"text"} 
                         thousandSeparator={true} prefix={"$"} />
                        
                        </span> </TableCell>
                        <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;
                        <NumberFormat value={ row.total_Netting} displayType={"text"} 
                         thousandSeparator={true} prefix={"$"} />
                        </span></TableCell>
                        <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;
                         <NumberFormat value={ row.gross_Profit_to_be_further_allocated} displayType={"text"} 
                         thousandSeparator={true} prefix={"$"} />
                        </span> </TableCell>
                        <TableCell style={{ textAlign: 'center', color: '#717F8C' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        >
                        <NumberFormat value={ row.accum_Pref} displayType={"text"} 
                         thousandSeparator={true} prefix={"$"} />
                        </TableCell>
                        <TableCell style={{ textAlign: 'center', color: '#717F8C' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        >{row &&

                          <NumberFormat value={row.return_of_LP_Pref} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                          }</TableCell>
                        <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={row.remaining_balance_after_pref} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={0} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={0} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={0} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={randomNumberInRange(1, 50000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={randomNumberInRange(1, 30000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={randomNumberInRange(1, 60000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={randomNumberInRange(1, 80000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={randomNumberInRange(1, 90000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={randomNumberInRange(1, 20000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={randomNumberInRange(1, 9000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                            <TableCell style={{ textAlign: 'center' }}
                          onClick={() => {
                            setCurrentRow({})
                            setClicked(true)
                          }}
                        ><span style={{ color: '#717F8C' }}

                        > &nbsp;{row &&
                          <NumberFormat value={row.remaining_balance_after_pref} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                            }</span></TableCell>
                          
                      </TableRow>
                     
                      
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

export default ViewOutput;