import React, { useEffect, useState } from 'react';
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import { useFetchTenaskaSaleViewInput } from "../../Hooks/FundHooks";

const ViewInputGlobal = (props) => {

    console.debug("test");
    const { data } = useFetchTenaskaSaleViewInput();

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
                                    >Gross Capital Gain</TableCell>  
                                </TableRow>
                            </TableHead>
                            <TableBody>

                            {
    

                  data?.map((row, index) => (
                    <TableRow
                      key={'dashbd-'+index+'-'+row.investorId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >      
                      <TableCell 
                        style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px', textAlign: 'left' }}>{row.investorId} </TableCell>
                      <TableCell style={{ textAlign: 'left', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                        {row.tfinvestor|| ''}</TableCell>
                      <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                      <NumberFormat
                                                    value={row.grossProceeds}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                        <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                        <NumberFormat
                                                    value={row.grossCapitalGain}
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

export default ViewInputGlobal;