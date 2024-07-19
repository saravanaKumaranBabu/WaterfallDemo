import React from 'react';
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
} from '@mui/material';

const PartnersTable = () => {
    return (
        <div>
              <Table style={{ width : '94%' , margin: '31px auto auto', overflow: 'hidden', border : 'none'}}>
                <TableHead >
                    <TableRow>
                        <TableCell style={{ borderBottomWidth: '0px',
                                          paddingRight: '0px',
                                          width: '236px'
                                      
                    }}>Common Investor Name</TableCell>
                        <TableCell style={{ borderBottomWidth: '0px' ,
                                            paddingLeft: '0px',
                                            marginRight: '8px',
                                            width: '152px'
                                        
                    }}>Common Investor ID</TableCell>
                        <TableCell style={{ borderBottomWidth: '0px' ,
                                            paddingLeft: '76px',
                                            paddingRight: '1px'
                    }}>Specific Investor Name</TableCell>
                        <TableCell style={{ borderBottomWidth: '0px',
                                            paddingRight: '0px',
                                            width: '185px',
                                            paddingLeft: '45px'
                    }}>Specific Investor ID</TableCell>
                        <TableCell style={{ borderBottomWidth: '0px' ,
                                            width: '183px',
                                            paddingLeft: '15px',
                                            paddingRight: '0px'
                    }}>Commitment $</TableCell>
                        <TableCell style={{ borderBottomWidth: '0px',width: '220px', paddingLeft :'24px' }}>Closing</TableCell>
                        <TableCell style={{ borderBottomWidth: '0px',
                                            paddingLeft: '24px',
                                            paddingRight: '12px',
                                            width: '182px'
                    }}>Mgmt Fee Type</TableCell>
                          
                    </TableRow>
                </TableHead>
            </Table>

                <Paper sx={{ width: '94%', margin: 'auto auto', overflow: 'hidden'}}>
            <TableContainer  sx={{}}>
                <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{ paddingRight: '0px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',
                                            
                                            color: '#115AC8'
                                            
                    }}>Common Investor Name</TableCell>
                        <TableCell style={{ paddingRight: '72px', paddingLeft: '10px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            
                                            color: '#115AC8'
                    }}>P 62763</TableCell>
                        <TableCell
                        style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}
                        >Specific Investor Name</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#717F8C'}}
                        >INV 1782653</TableCell>
                        <TableCell style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}>$ 189,898,989.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >$ 190,998,997,00.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >Mgmt Fee Type</TableCell>

                    </TableRow>

                    <TableRow>
                        <TableCell style={{ paddingRight: '0px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',
                                            
                                            color: '#115AC8'
                                            
                    }}>Common Investor Name</TableCell>
                        <TableCell style={{ paddingRight: '72px', paddingLeft: '10px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            
                                            color: '#115AC8'
                    }}>T 66199</TableCell>
                        <TableCell
                        style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}
                        >Specific Investor Name</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#717F8C'}}
                        >INV 1782653</TableCell>
                        <TableCell style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}>$ 189,898,989.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >$ 190,998,997,00.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >Mgmt Fee Type</TableCell>

                    </TableRow>

                    <TableRow>
                        <TableCell style={{ paddingRight: '0px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',
                                            
                                            color: '#115AC8'
                                            
                    }}>Common Investor Name</TableCell>
                        <TableCell style={{ paddingRight: '72px', paddingLeft: '10px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            
                                            color: '#115AC8'
                    }}>INV 459461</TableCell>
                        <TableCell
                        style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}
                        >Specific Investor Name</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#717F8C'}}
                        >INV 1782653</TableCell>
                        <TableCell style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}>$ 189,898,989.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >$ 190,998,997,00.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >Mgmt Fee Type</TableCell>

                    </TableRow>

                    <TableRow>
                        <TableCell style={{ paddingRight: '0px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',
                                            
                                            color: '#115AC8'
                                            
                    }}>Common Investor Name</TableCell>
                        <TableCell style={{ paddingRight: '72px', paddingLeft: '10px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            
                                            color: '#115AC8'
                    }}>P 0955835</TableCell>
                        <TableCell
                        style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}
                        >Specific Investor Name</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#717F8C'}}
                        >INV 1782653</TableCell>
                        <TableCell style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}>$ 189,898,989.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >$ 190,998,997,00.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >Mgmt Fee Type</TableCell>

                    </TableRow>

                    <TableRow>
                        <TableCell style={{ paddingRight: '0px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',
                                            
                                            color: '#115AC8'
                                            
                    }}>Common Investor Name</TableCell>
                        <TableCell style={{ paddingRight: '72px', paddingLeft: '10px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            
                                            color: '#115AC8'
                    }}>P 6463516</TableCell>
                        <TableCell
                        style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}
                        >Specific Investor Name</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#717F8C'}}
                        >INV 1782653</TableCell>
                        <TableCell style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}>$ 189,898,989.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >$ 190,998,997,00.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >Mgmt Fee Type</TableCell>

                    </TableRow>

                    <TableRow>
                        <TableCell style={{ paddingRight: '0px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',
                                            
                                            color: '#115AC8'
                                            
                    }}>Common Investor Name</TableCell>
                        <TableCell style={{ paddingRight: '72px', paddingLeft: '10px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            
                                            color: '#115AC8'
                    }}>INV 2914671</TableCell>
                        <TableCell
                        style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}
                        >Specific Investor Name</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#717F8C'}}
                        >INV 1782653</TableCell>
                        <TableCell style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}>$ 189,898,989.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >$ 190,998,997,00.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >Mgmt Fee Type</TableCell>

                    </TableRow>

                    <TableRow>
                        <TableCell style={{ paddingRight: '0px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '16px',
                                            
                                            color: '#115AC8'
                                            
                    }}>Common Investor Name</TableCell>
                        <TableCell style={{ paddingRight: '72px', paddingLeft: '10px',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            
                                            color: '#115AC8'
                    }}>T 5140197</TableCell>
                        <TableCell
                        style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}
                        >Specific Investor Name</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#717F8C'}}
                        >INV 1782653</TableCell>
                        <TableCell style={{ 
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '24px',
                        
                        color: '#21234A'}}>$ 189,898,989.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >$ 190,998,997,00.00</TableCell>
                        <TableCell
                        style={{ 
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            
                            color: '#21234A'}}
                        >Mgmt Fee Type</TableCell>

                    </TableRow>
                </TableBody>
                
            </Table>
            
            </TableContainer>
            </Paper>

           
            
                

        </div>
    )
}

export default PartnersTable;