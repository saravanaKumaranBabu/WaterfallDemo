import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
} from '@mui/material';
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
                                            fontFamily: 'Helvetica',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '12px',
                                            lineHeight: '24px',
                                            color: '#08121B',
                                            borderRight: '1px solid rgba(240, 242, 244, 1)',
                                            textAlign: 'left',
                                            width: '106px'
                                        }}
                                    >Investor Id</TableCell> 
                                    <TableCell
                                        style={{
                                            fontFamily: 'Helvetica',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '12px',
                                            lineHeight: '24px',
                                            color: '#08121B',
                                            borderRight: '1px solid rgba(240, 242, 244, 1)',
                                            textAlign: 'left',
                                            width: '185px'
                                        }}
                                    >Investor</TableCell>
                                    <TableCell
                                        style={{
                                            fontFamily: 'Helvetica',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '12px',
                                            lineHeight: '24px',
                                            color: '#08121B',
                                            borderRight: '1px solid rgba(240, 242, 244, 1)',
                                            textAlign: 'center',
                                            width: '110px',
                                            padding:'0px'
                                        }}
                                    >Gross Proceeds</TableCell>                                   
                                    <TableCell
                                        style={{
                                            fontFamily: 'Helvetica',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '12px',
                                            lineHeight: '24px',
                                            color: '#08121B',
                                            borderRight: '1px solid rgba(240, 242, 244, 1)',
                                            textAlign: 'center',
                                            width: '115px',
                                            padding:'0px'
                                        }}
                                        >Gross Capital Gain</TableCell>  
                                    <TableCell
                                        style={{
                                            fontFamily: 'Helvetica',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '12px',
                                            lineHeight: '24px',
                                            color: 'red',
                                            borderRight: 'none',
                                            textAlign: 'center',
                                            width: 'auto'
                                        }}> </TableCell>  
                                </TableRow>
                            </TableHead>
                            <TableBody>

                            {
    

                  data?.map((row, index) => (
                    <TableRow
                      key={'dashbd-'+index+'-'+row.investorId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >      
                      <TableCell 
                        style={{ fontWeight: '500', fontSize: '12px', lineHeight: '24px', textAlign: 'left' , margin: '0px', padding: '0px 8px',borderRight: '1px solid rgba(240, 242, 244, 1)'}}>{row.investorId} </TableCell>
                      <TableCell style={{ textAlign: 'left', fontWeight: '500', fontSize: '12px', lineHeight: '24px' , margin: '0px', padding: '0px 8px', borderRight: '1px solid rgba(240, 242, 244, 1)'}}>
                        {row.tfinvestor|| ''}</TableCell>
                      <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px' , margin: '0px', padding: '0px 8px',borderRight: '1px solid rgba(240, 242, 244, 1)',textAlign: 'center'}}>
                      <NumberFormat
                                                    value={row.grossProceeds}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} /></TableCell>
                        <TableCell style={{ textAlign: 'right', fontWeight: '500', fontSize: '12px', lineHeight: '24px' , margin: '0px', padding: '0px 8px',borderRight: '1px solid rgba(240, 242, 244, 1)',textAlign: 'center'}}>
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