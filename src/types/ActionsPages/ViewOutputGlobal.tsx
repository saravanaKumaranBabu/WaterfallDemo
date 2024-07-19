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
import { useFetchDistOutputGlobal } from "../../Hooks/FundHooks";
import NumberFormat from "react-number-format";


import {
  Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow,
} from '@mui/material';


const ViewOutputGlobal = (props: any) => {

  

  const [clicked, setClicked] = useState(false);
  const [currentRow, setCurrentRow] = useState({});

  const { state } = useLocation();

  const [fundData] = useState(state);

  const { data } = useFetchDistOutputGlobal();

  const randomNumberInRange = (min1 : any, max1 : any) => { 
    return Math.floor(Math.random()  
            * (max1 - min1 + 1)) + min1; 
  }; 

  // console.log("props", data)

  return (

    <div className="" style={{ paddingTop: '10px' }}>
            <Paper sx={{ width: '94%', margin: 'auto', overflow: 'hidden', }}>
                <TableContainer className="fundTable" sx={{ maxHeight: 585 }}>
                    <Table stickyHeader aria-label="simple table" className="table">

                      
                        <TableHead>
                            <TableRow >
                            <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'left',
                                        width: '101px'
                                    }}
                                >Investor Id</TableCell> 
                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'left',
                                        width: '101px'
                                    }}
                                >Investor</TableCell>
                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Gross Proceeds</TableCell>                                   
                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Withholding For Expenses</TableCell>  
                                   <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Return of Capital</TableCell>  
                                  <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Gross Gain</TableCell>  
                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Return of Expenses</TableCell>   
                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Netting</TableCell>     

                                   <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Cumulative Gain Subject To Carry</TableCell>        
                                
                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Prefered Return Target</TableCell>    
                                                                
                                   <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Prefered Return Paid</TableCell>    

<TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Addl.Gain Reqd. for Catch-up</TableCell>    
                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >0% to LP</TableCell>  
                                                               <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >100% to GP</TableCell> 
                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >80% to LP</TableCell> 
                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >20% to GP</TableCell> 
                                                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Cum.GpCarry</TableCell> 
                                                                <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >LTD Carry Paid</TableCell> 

                                  <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Eligible Carry</TableCell> 
                                  <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Current Carry</TableCell> 
                                                                  <TableCell
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#08121B',
                                        borderRight: '1px solid #FFFFFF',
                                        textAlign: 'right',
                                        width: '101px'
                                    }}
                                >Distribution to LP</TableCell> 
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        {


              data?.map((row, index) => (
                <TableRow
                  key={'dashbd-'+index+'-'+row.tenaskaSaleWaterfallOutputId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >      
                  <TableCell 
                    style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px', textAlign: 'left' }}>{row.fmInvId} </TableCell>
                  <TableCell style={{ textAlign: 'left', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    {row.tfInvestor|| ''}</TableCell>

                  <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                  <NumberFormat
                                                    value={row.grossProceeds}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.withholdingForExpenses}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.returnOfCapital}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.grossGain}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.returnOfExpenses}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.netting}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>     
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.cumGainSubjToCarry}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>    
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.prefTarget}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>  
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.prefPaid}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>   
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.addlGainReqdForCatchUp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>   
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row._0ToLp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>   
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row._100ToGp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>                                                       
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row._80ToLp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row._20ToGp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.cumGpCarry}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                   <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.ltdCarryPaid}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 

                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.eligibleCarry}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.currentCarry}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                    <NumberFormat
                                                    value={row.distributionToLp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                </TableRow>
              ))
              
              }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>   

)
}

export default ViewOutputGlobal;