import React, {  useState } from 'react';
import Collapsible from 'react-collapsible';
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
} from '@mui/material';
import collapsibleIcon from "../../main/Images/CollapsibleIcon.svg";
import rightCollapsibleIcon from "../../main/Images/Right-Collapsible.svg";

const FundEntitiesComp = (props) => {

    const [Pclicked, setPClicked] = useState(true);
    const [Iclicked, setIClicked] = useState(false);

    return (
        <div>
            <Paper sx={{ width: '94%', margin: '31px auto auto', overflow: 'hidden', height: '47px'}}>
            <TableContainer className="fundTable" sx={{}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{
                            paddingRight: '18px',
                            
                                fontWeight : '500', 
                                color: '#748194'
                         
                        }}>Name</TableCell>
                        <TableCell style={{
                                paddingRight: '0px',
                                width: '250px',
                                paddingLeft: '28px',
                                fontWeight : '500', 
                                color: '#748194'
                         
                        }} >Email</TableCell> 
                        <TableCell style={{
                            paddingleft: '14px',
                            fontWeight : '500', 
                            color: '#748194'
                     
                        }}>Phone</TableCell>
                        <TableCell style={{
                            width: '583px',
                            fontWeight : '500', 
                            color: '#748194',
                            paddingLeft : '0px'
                     
                        }}>Address</TableCell>
                        <TableCell style={{
                            width: '187px',
                            paddingRight: '30px',
                            paddingLeft : '35px',
                            fontWeight : '500', 
                            color: '#748194'
                     
                        }}>Joined</TableCell>
                        <TableCell style = {{
                                paddingLeft: '0px',
                                paddingRight: '10px',
                                width: '50px',
                                fontWeight : '500', 
                                color: '#748194'
                         
                        }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                
            </Table>
            
            </TableContainer>
            </Paper>

           
            <Collapsible
            open = {true}
            onOpen = {()=>
                setPClicked(true)
              }
              onClose={
                ()=> setPClicked(false)
              }
              trigger = {<p
                 style={{
                     marginLeft : '48px',
                     marginTop : '20px'
                 }}
              >
                  {
                  Pclicked ?
                  <img src={rightCollapsibleIcon} alt="oprn"/>
                  
                  :
                  <img src={ collapsibleIcon} alt="icon"/>
                }     
                
                  &nbsp;
                  &nbsp;
                  <span
                    style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '16px',
                        lineHeight: '24px'
                    }}
                  >Partnerships</span></p>}>
                

            <Paper sx={{ width: '94%', margin: 'auto', overflow: 'hidden', }}>
            <TableContainer className="fundTable" sx={{}}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919',
                              width: '200px'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>PA</span>
                            &nbsp;
                            Partnership A</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >(201) 200-1851</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >2392 Main Avenue, Penasauka, New Jersey 02139</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>PB</span>
                            &nbsp;
                            Partnership B</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (212) 228-8403</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >2289 5th Avenue, New York, New York, 10037</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>


                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>PC</span>
                            &nbsp;
                            Partnership C</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >(201) 200-1851</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >112 Bostwick Avenue, Jersey City, New Jersey, 0730	</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>PD</span>
                            &nbsp;
                            Partnership D</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (901) 324-3127</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >3448 Ile De France St #242, Fort Wainwright, Alaska, 99703</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>PE</span>
                            &nbsp;
                            Partnership E</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (828) 382-9631</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >659 Hannah Street, Charlotte, NC 28273</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>PF</span>
                            &nbsp;
                            Partnership F</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (562) 468-5646	</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >2298 Locust Court, Artesia, CA 90701</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>PG</span>
                            &nbsp;
                            Partnership G</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (302) 613-8829	</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >4678 Maud Street, Philadelphia, DE 19103</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                </TableBody>
                
            </Table>
            
            </TableContainer>
            </Paper>

            </Collapsible>

            
            <Collapsible
            onOpen = {()=>
                setIClicked(true)
              }
              onClose={
                ()=> setIClicked(false)
              }
              trigger = {<p
                 style={{
                     marginLeft : '48px',
                     marginTop : '20px'
                 }}
              >
                  {
                  Iclicked ?
                  <img src={rightCollapsibleIcon} alt="oprn"/>
                  
                  :
                  <img src={ collapsibleIcon} alt="icon"/>
                }     
                
                  &nbsp;
                  &nbsp;
                  <span
                    style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '16px',
                        lineHeight: '24px'
                    }}
                  >
                      
                      Alt Investment Vehicles</span></p>}>


<Paper sx={{ width: '94%', margin: 'auto', overflow: 'hidden', }}>
            <TableContainer className="fundTable" sx={{}}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919',
                              width: '200px',
                              paddingRight : '5px'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '11px 8px',
                            background: '#C2D9F7', borderRadius : '100px'}}>AI 1</span>
                            &nbsp;
                            Alt. Inv. Vehicle 1</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (317) 273-7814</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194',
                            width: '617px'
                        }}
                        >3412 Crestview Manor, Indianapolis, IN 46234</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '11px 8px',
                            background: '#C2D9F7', borderRadius : '100px'}}>AI 2</span>
                            &nbsp;
                            Alt. Inv. Vehicle 2</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (212) 344-9983</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >4895 Farnum Road, New York, NY 10004</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>


                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '11px 8px',
                            background: '#C2D9F7', borderRadius : '100px'}}>AI 3</span>
                            &nbsp;
                            Alt. Inv. Vehicle 3</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (480) 610-3481	</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >3291 Hillside Street, Mesa, AZ 85201	</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '11px 8px',
                            background: '#C2D9F7', borderRadius : '100px'}}>AI 4</span>
                            &nbsp;
                            Alt. Inv. Vehicle 4</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (323) 881-4878</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >162 Hillhaven Drive, Los Angeles, CA 90063</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell 
                          style={{
                              fontWeight : '500', 
                            //   fontSize : '13px',
                              color: '#191919'
                          }}
                        
                        >
                            <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '11px 8px',
                            background: '#C2D9F7', borderRadius : '100px'}}>AI 5</span>
                            &nbsp;
                            Alt. Inv. Vehicle 5</TableCell>
                        <TableCell style= {{ 
                            width : '200px', paddingLeft : '0px',
                            fontWeight : '500', color: '#2A7BE4'
                        }}
                        
                        >partnership.a@example.com</TableCell> 
                        <TableCell style={{ paddingLeft : '35px', paddingRight : '0px', fontWeight : '500', color: '#2A7BE4'}} >
                        (407) 446-3482	</TableCell>
                        <TableCell
                        style={{
                            fontWeight : '500', 
                            color: '#748194'
                        }}
                        >2551 Ocala Street, Orlando, FL 32805	</TableCell>
                        <TableCell style={{
                              fontWeight : '500', 
                              color: '#191919'
                          }}>30/03/2018</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>

                    
                    

                </TableBody>
                
            </Table>
            
            </TableContainer>
            </Paper>
                
            </Collapsible>

        </div>
    )
}
export default FundEntitiesComp;