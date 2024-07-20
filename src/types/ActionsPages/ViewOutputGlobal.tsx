import { useState } from 'react';



// import Frame57409 from "../../main/Images/Frame 57409.svg";
// import FrameFeePayingLP from "../../main/Images/Frame 57590.svg";
// import FrameNonFeePayingLP from "../../main/Images/NonFeePayingLPs.svg";
// import GP from "../../main/Images/GP.svg";
// import DownwardDistribution from "../../main/Images/DownwardDistribution.svg";
// import ThreeDots from "../../main/Images/threeDots.svg";
import NumberFormat from "react-number-format";
import { useLocation } from 'react-router-dom';
import { useFetchDistOutputGlobal } from "../../Hooks/FundHooks";


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
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'left',
                                        width: '59px',
                                    }}
                                >FM Inv-ID</TableCell> 
                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'left',
                                        width: '66px'
                                    }}
                                >TF Investor</TableCell>
                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Gross Proceeds</TableCell>                                   
                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Withholding Expenses</TableCell>  
                                   <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Return of Capital</TableCell>  
                                  <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Gross Gain</TableCell>  
                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Return of Expenses</TableCell>   
                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Netting</TableCell>     

                                   <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Cumulative Gain Subject To Carry</TableCell>        
                                
                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Prefered Return Target</TableCell>    
                                                                
                                   <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Prefered Return Paid</TableCell>    

                                    <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Addl.Gain Reqd. for Catch-up</TableCell>    
                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >0% to LP</TableCell>  
                                                               <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >100% to GP</TableCell> 
                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >80% to LP</TableCell> 
                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >20% to GP</TableCell> 
                                                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Cum.GpCarry</TableCell> 
                                                                <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >LTD Carry Paid</TableCell> 

                                  <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Eligible Carry</TableCell> 
                                  <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
                                    }}
                                >Current Carry</TableCell> 
                                                                  <TableCell
                                    style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        color:'#444446',
                                        borderRight: '1px solid rgba(240, 242, 244, 1)',
                                        textAlign: 'right',
                                        width: '90px'
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
                    style={{ fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)', textAlign: 'left' }}>{row.fmInvId} </TableCell>
                  <TableCell style={{ textAlign: 'left', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    {row.tfInvestor|| ''}</TableCell>

                  <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                  <NumberFormat
                                                    value={row.grossProceeds}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.withholdingForExpenses}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.returnOfCapital}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.grossGain}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.returnOfExpenses}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.netting}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>     
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.cumGainSubjToCarry}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>    
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.prefTarget}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>  
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.prefPaid}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>   
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.addlGainReqdForCatchUp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>   
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row._0ToLp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>   
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row._100ToGp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>                                                       
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row._80ToLp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row._20ToGp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.cumGpCarry}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                   <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.ltdCarryPaid}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 

                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.eligibleCarry}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
                    <NumberFormat
                                                    value={row.currentCarry}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell> 
                    <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px', padding: '0px 8px', margin:'0px',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>
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