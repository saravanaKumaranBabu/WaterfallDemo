import React, { useEffect, useState } from 'react';
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import { useFetchGlobalCarry } from "../../Hooks/FundHooks";

const ViewInputCarry = (props) => {

    console.debug("test");
    const { data } = useFetchGlobalCarry();

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
                                    >FM-Inv-ID</TableCell> 
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
                                    >TF Investor</TableCell>
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
                                    >Withholding for Expenses</TableCell>  
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
                                    >Net Gain</TableCell>      
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
                                    >Fair Market Value</TableCell>    
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
                                    >Unrealized Expenses</TableCell>       

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
                                    >Remaining Invested Capital</TableCell>       
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
                                    >Adj. Cum. Net Gain</TableCell>   
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
                                    >Pref. Target</TableCell>     
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
                                    >Pref. Paid</TableCell>    
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
                                    >0%_to_LP</TableCell>  
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
                                    >100%_to_GP</TableCell>     
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
                                    >80%_to_LP</TableCell>        
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
                                    >20%_to_GP</TableCell>    
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
                                    >Cum. GP Carry</TableCell>    
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
                                    >Total Accrued carry for GP</TableCell>  
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
                                    >Total Cum. Net Gain for LP</TableCell>  

                                </TableRow>
                            </TableHead>
                            <TableBody>

                            {
    

                  data?.map((row, index) => (
                    <TableRow
                      key={'dashbd-'+index+'-'+row.investorId}
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
                                                    value={row.netGain}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                        <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                        <NumberFormat
                                                    value={row.fairMarketValue}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                        <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                        <NumberFormat
                                                    value={row.unrealizedExpenses}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                        <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                        <NumberFormat
                                                    value={row.remainingInvestedCapital}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                        <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                        <NumberFormat
                                                    value={row.adjCumNetGain}
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
                                                    value={row._20ToLp}
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
                                                    value={row.totalAccruedCarryForGp}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                        <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                        <NumberFormat
                                                    value={row.totalCumNetGainForLp}
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

export default ViewInputCarry;