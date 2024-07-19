import React, { useState } from 'react';
import Calendar from "../main/Images/Calendar.svg";

import Vector177 from "../main/Images/Vector 177.svg";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import GrossProceedsAccordion from "./InvestorDetails/GrossProceedsAccordion";
import ExpensesAccordion from "./InvestorDetails/ExpensesAccordion";
import ROCAccordion from "./InvestorDetails/ROCAccordion";
import AFEAccordion from "./InvestorDetails/AFEAccordion";
import RecoupedLossAccordion from "./InvestorDetails/RecoupedLossAccordion";
import NetGainAccordion from "./InvestorDetails/NetGainAccordion";
import closeBtn from "../main/Images/icn_Close.png";
import listTree from "../main/Images/list-tree.svg";

const DrilldownMenu = (props) => {

    const [Investor1, setInvestor1] = useState({
        GrossProceeds: false,
        Expenses: false,
        ROC: false,
        AFE: false,
        RecoupedLoss: false,
        NetGain: false
    })

    const [setCurrentDetails] = useState('')

    const [setGrossAccordion] = useState(
        {
            investor1: false,
            investor2: false,
            investor3: false
        }

    );

    const [setExpensesAccordion] = useState(
        {
            investor1: false,
            investor2: false,
            investor3: false
        }
    );

    // const [RocAccordion,setROCAccordion] = useState(
    //     {
    //         investor1 : false,
    //         investor2 : false,
    //         investor3 : false
    //     }
    // );

    // const [AfeAccordion,setAFEAccordion] = useState(
    //     {
    //         investor1 : false,
    //         investor2 : false,
    //         investor3 : false
    //     }
    // );

    // const [recoupedLoss,setRecoupedLoss] = useState(
    //     {
    //         investor1 : false,
    //         investor2 : false,
    //         investor3 : false
    //     }
    // );
    // const [netGain,setNetGain] = useState(
    //     {
    //         investor1 : false,
    //         investor2 : false,
    //         investor3 : false
    //     }
    // );


    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('custom'),
        );

        return (

            <button
                className="accordion-table"
                type="button"
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }

    return (
        <>
            <div className="container">
                <div className="drilldown-header" style={{
                    position: 'static', height: 'auto', width: '100%', margin: '11px 0px 0px',
                    display: 'flex', justifyContent: 'space-between'
                }}>

                    <h3 className="drilldown-heading" style={{ paddingTop: '8px' }}>
                        <img src={listTree} alt="list" style={{ width: '20px', height: '20px' }} />
                        &nbsp;
                        Detailed Fee Structure</h3>
                    <button style={{ position: 'static' }}
                        className="popup-drilldown-close drildown-close-btn"
                        onClick={() => props.setTrigger(false)}>
                        <img src={closeBtn} alt="close" style={{ width: '16px', height: '16px' }} />
                    </button>
                </div>

                {/* <div className="drilldown-header">
             <p className="drilldown-heading">Fund Name Goes here</p>
             <p className="header-amount">$ 1,234,567.89</p>
             
              <button  
             className="popup-drilldown-close"
             className="drildown-close-btn"
          onClick={() => props.setTrigger(false)}>X</button>

              <img className="header-calendar" src={Calendar} alt="calendar"/>
              <p className="header-date">22/09/2022</p>
              <img className = "header-clock" src={Clock} alt="clock"/>
              <p className="header-time">02:12 PM </p>
          </div> */}
                <div style={{ marginTop: '10px' }}>
                    <Accordion defaultActiveKey="0" flush className="accordion" style={{ position: 'static' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button className="plus" style={{ position: 'static', boxShadow: '0px 8.14815px 6.51852px rgb(41 72 152 / 9%), 0px -3.14815px 3.14815px rgb(41 72 152 / 5%)' }}
                                onClick={() => {
                                    setGrossAccordion(grossAccordion => ({
                                        ...grossAccordion,
                                        investor1: !grossAccordion.investor1
                                    }));

                                    setExpensesAccordion(expensesAccordion => ({
                                        ...expensesAccordion,
                                        investor1: !expensesAccordion.investor1
                                    }));
                                }}
                            >
                                <img src={Vector177} alt="vector" style={{ float: 'center' }} />
                                {/* <div className="vl"></div> */}
                            </button>

                            <Card style={{ borderRadius: '8px', width: '100%' }}>
                                <CustomToggle eventKey="0" style={{borderRadius: '8px'}}>
                                    <div style={{ padding: '10px 4px 0px', borderRadius: '8px'}}>

                                        <div className="accordion-button" style={{backgroundColor: '#E7E8FC', borderRadius: '8px', 
                                            padding: '12px', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <div style={{height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                                            <p className="investor" style={{margin: '0px', fontWeight: '700', fontSize: '16px', lineHeight: '19px'}}>
                                                Investors 1 ROC</p>
                                                <button className="date-button" style={{margin: '0px', alignItems: 'center', justifyContent: 'space-between'}}>
                                                    <img src={Calendar} alt="calendar" style={{ width: '14px', height: '16px' }} />
                                                    <span className="date-span" style={{color: '#565A60'}}>10/31/2022</span>
                                                </button>
                                            </div>
                                            <span className="accordion-amount" style={{margin: '0px', fontWeight: '700', fontSize: '18px', lineHeight: '21px'}}>
                                                $ 1,234,567.89</span>
                                        </div>
                                        <table style={{ width: '100%', margin: '12px 0px' }}>
                                            <tr>
                                                <td style={{display: 'flex', justifyContent: 'space-between', padding: '7px 4px'}}
                                                    className="left-accordion-col"
                                                    onClick={() => {
                                                        setInvestor1(Investor1 => ({
                                                            GrossProceeds: !Investor1.GrossProceeds,

                                                        }))
                                                        // setGrossAccordion( grossAccordion => ({
                                                        //     ...grossAccordion,
                                                        //     investor1 : !grossAccordion.investor1
                                                        // }))
                                                        !Investor1.GrossProceeds ? setCurrentDetails('Gross Proceeds') : setCurrentDetails('')
                                                    }
                                                    }

                                                >Gross Proceeds
                                                    <span className="right-accordion-col" style={{ marginLeft: '0px' }}>$ 1,234,567.89</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{display: 'flex', justifyContent: 'space-between', padding: '7px 4px'}}
                                                    className="left-accordion-col"
                                                    onClick={() => {
                                                        setInvestor1(Investor1 => ({
                                                            Expenses: !Investor1.Expenses
                                                        }))
                                                        !Investor1.Expenses ? setCurrentDetails('Expenses') : setCurrentDetails('')
                                                    }
                                                    }
                                                >Expenses
                                                    <span className="right-accordion-col" style={{ marginLeft: '0px' }}>$ 1,234,567.89</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td  style={{display: 'flex', justifyContent: 'space-between', padding: '7px 4px'}}
                                                    className="left-accordion-col"
                                                    onClick={() => {
                                                        setInvestor1(Investor1 => ({
                                                            ROC: !Investor1.ROC
                                                        }))
                                                        !Investor1.ROC ? setCurrentDetails('ROC') : setCurrentDetails('')

                                                    }
                                                    }
                                                >ROC
                                                    <span className="right-accordion-col" style={{ marginLeft: '0px' }}>$ 1,234,567.89</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td  style={{display: 'flex', justifyContent: 'space-between', padding: '7px 4px'}}
                                                    className="left-accordion-col"
                                                    onClick={() => {
                                                        setInvestor1(Investor1 => ({
                                                            AFE: !Investor1.AFE
                                                        }))
                                                        !Investor1.AFE ? setCurrentDetails('AFE') : setCurrentDetails('')

                                                    }
                                                    }
                                                >AFE
                                                    <span className="right-accordion-col" style={{ marginLeft: '0px' }}>$ 1,234,567.89</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{display: 'flex', justifyContent: 'space-between', padding: '7px 4px 14px'}}
                                                    className="left-accordion-col"
                                                    onClick={() => {
                                                        setInvestor1(Investor1 => ({
                                                            RecoupedLoss: !Investor1.RecoupedLoss
                                                        }))
                                                        !Investor1.RecoupedLoss ? setCurrentDetails('Recouped Loss') : setCurrentDetails('')

                                                    }
                                                    }
                                                >Recouped Loss
                                                    <span className="right-accordion-col" style={{ marginLeft: '0px' }}>$ 1,234,567.89</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{display: 'flex', justifyContent: 'space-between', padding: '14px 4px 4px', borderTop: '1px solid #C6C8E9',
                                                    fontWeight: '700', fontSize: '16px', lineHeight: '19px', color: '#000000'}}
                                                    className="left-accordion-col"
                                                    onClick={() => {
                                                        setInvestor1(Investor1 => ({
                                                            NetGain: !Investor1.NetGain
                                                        }))
                                                        !Investor1.NetGain ? setCurrentDetails('Net Gain') : setCurrentDetails('')

                                                    }
                                                    }
                                                >Net Gain
                                                    <span className="right-accordion-col" style={{ marginLeft: '0px', color: '#D1334A', 
                                                        fontWeight: '700', fontSize: '16px', lineHeight: '19px' }}>$ 1,234,567.89</span>
                                                </td>
                                            </tr>

                                        </table>
                                    </div>

                                </CustomToggle>

                                {/* <Accordion.Collapse eventKey="0">
                        <Card.Body >

                                
                            
                        </Card.Body>
                        </Accordion.Collapse> */}
                            </Card>

                        </div>

                        {/* 
      <Card style={{ marginTop : '32px'}}>
        
          <CustomToggle eventKey="1">
              <div style = {{ marginTop : '10px'}}>
              <div style= {{ display : 'flex', flexDirection : 'column'}}>
                      <button className="plus">
                      <img src={Vector177} alt="vector" style={{ float : 'center'}}/>
                           <div className="vl"></div>
                      </button>
                     
                  </div>
                  <p className = "investor">Investors 2
                  <button className="date-button">
                      <img src={Calendar} alt="calendar" style = {{ width : '14px', height : '16px' }} />
                      <span className="date-span">10/31/2022</span>
                  </button>
                  </p>
                  
                  <p className = "sub-heading">Sub heading goes here  
                  <span className="accordion-amount">$ 1,234,567.89</span></p>
                 
              </div>
           
          </CustomToggle>
        
        <Accordion.Collapse eventKey="1">
          <Card.Body >
          <div className="vl-expand"></div>
              <table>
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {()=> 
                            {                            
                                setGrossAccordion( grossAccordion => ({
                                    ...grossAccordion,
                                    investor2 : !grossAccordion.investor2
                                }))  
                            }}>
                        Gross Proceeds
                      <span className="right-accordion-col" style={{ marginLeft : '165px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      grossAccordion.investor2 && <GrossProceedsAccordion></GrossProceedsAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {()=> 
                            {
                              setExpensesAccordion( expensesAccordion => ({
                                ...expensesAccordion,
                                investor2 : !expensesAccordion.investor2
                            }))
                            
                        }
                        }
                      >Expenses
                      <span className="right-accordion-col" style={{ marginLeft : '206px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      expensesAccordion.investor2 && <ExpensesAccordion></ExpensesAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {()=> 
                            {
                              setROCAccordion( RocAccordion => ({
                                ...RocAccordion,
                                investor2 : !RocAccordion.investor2
                            }))
                            
                        }
                        }
                      >ROC
                      <span className="right-accordion-col" style={{ marginLeft : '240px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      RocAccordion.investor2 && <ROCAccordion></ROCAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {
                              () => 
                         {
                            setAFEAccordion( AfeAccordion => ({
                              ...AfeAccordion,
                              investor2 : !AfeAccordion.investor2
                          }))
                          
                      }
                    }
                      >AFE
                      <span className="right-accordion-col" style={{ marginLeft : '244px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                     AfeAccordion.investor2 && <AFEAccordion></AFEAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                           onClick = {()=> 
                            {
                              setRecoupedLoss( recoupedLoss => ({
                                ...recoupedLoss,
                                investor2 : !recoupedLoss.investor2
                            }))
                            
                        }
                        }
                      >Recouped Loss
                      <span className="right-accordion-col" style={{ marginLeft : '168px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      recoupedLoss.investor2 && <RecoupedLossAccordion></RecoupedLossAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {()=> 
                            {
                              setNetGain( netGain => ({
                                ...netGain,
                                investor2 : !netGain.investor2
                            }))
                            
                        }
                        }
                      >Net Gain
                      <span className="right-accordion-col" style={{ marginLeft : '212px', color: '#D1334A'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      netGain.investor2 && <NetGainAccordion></NetGainAccordion>
                  }
              </table>
              <hr style = {{ marginTop : '0px'}}></hr>
              <p className = "title">
                  Title Here
                  <span className="right-accordion-col title-amount" style={{ marginLeft : '170px'}}>$ 1,234,567.89</span>
              </p>
           </Card.Body>
        </Accordion.Collapse>
      </Card> */}
                        {/* 
      <Card style={{ marginTop : '32px'}}>
        
          <CustomToggle eventKey="2">
              <div style = {{ marginTop : '10px'}}>
              <div style= {{ display : 'flex', flexDirection : 'column'}}>
                      <button className="plus">
                      <img src={Vector177} alt="vector" style={{ float : 'center'}}/>
                          
                      </button>
                     
                  </div>
                  <p className = "investor">Investors 3
                  <button className="date-button">
                      <img src={Calendar} alt="calendar" style = {{ width : '14px', height : '16px' }} />
                      <span className="date-span">10/31/2022</span>
                  </button>
                  </p>
                  
                  <p className = "sub-heading">Sub heading goes here  
                  <span className="accordion-amount">$ 1,234,567.89</span></p>
                 
              </div>
           
          </CustomToggle>
        
        <Accordion.Collapse eventKey="2">
          <Card.Body >
         
              <table>
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {()=> 
                            {                            
                                setGrossAccordion( grossAccordion => ({
                                    ...grossAccordion,
                                    investor3 : !grossAccordion.investor3
                                }))    
                            }}>
                    Gross Proceeds
                      <span className="right-accordion-col" style={{ marginLeft : '165px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      grossAccordion.investor3 && <GrossProceedsAccordion></GrossProceedsAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {()=> 
                            {
                              setExpensesAccordion( expensesAccordion => ({
                                ...expensesAccordion,
                                investor3 : !expensesAccordion.investor3
                            }))
                            
                        }
                        }
                      >Expenses
                      <span className="right-accordion-col" style={{ marginLeft : '206px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      expensesAccordion.investor3 && <ExpensesAccordion></ExpensesAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {()=> 
                            {
                              setROCAccordion( RocAccordion => ({
                                ...RocAccordion,
                                investor3 : !RocAccordion.investor3
                            }))
                            
                        }
                        }
                      >ROC
                      <span className="right-accordion-col" style={{ marginLeft : '240px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      RocAccordion.investor3 && <ROCAccordion></ROCAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {
                              () => 
                          
                          {
                            setAFEAccordion( AfeAccordion => ({
                              ...AfeAccordion,
                              investor3 : !AfeAccordion.investor3
                          }))
                          
                      }
                      }
                      >AFE
                      <span className="right-accordion-col" style={{ marginLeft : '244px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      AfeAccordion.investor3 && <AFEAccordion></AFEAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                           onClick = {()=> 
                            {
                              setRecoupedLoss( recoupedLoss => ({
                                ...recoupedLoss,
                                investor3 : !recoupedLoss.investor3
                            }))
                            
                        }
                        }
                      >Recouped Loss
                      <span className="right-accordion-col" style={{ marginLeft : '168px'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      recoupedLoss.investor3 && <RecoupedLossAccordion></RecoupedLossAccordion>
                  }
                  <tr>
                      <td className="left-accordion-col"
                          onClick = {()=> 
                            {
                              setNetGain( netGain => ({
                                ...netGain,
                                investor3 : !netGain.investor3
                            }))
                            
                        }
                        }
                      >Net Gain
                      <span className="right-accordion-col" style={{ marginLeft : '212px', color: '#D1334A'}}>$ 1,234,567.89</span>
                      </td>  
                  </tr>
                  {
                      netGain.investor3 && <NetGainAccordion></NetGainAccordion>
                  }
              </table>
              <hr style = {{ marginTop : '0px'}}></hr>
              <p className = "title">
                  Title Here
                  <span className="right-accordion-col title-amount" style={{ marginLeft : '170px'}}>$ 1,234,567.89</span>
              </p>
           </Card.Body>
        </Accordion.Collapse>
      </Card> */}

                        {
                            Investor1.GrossProceeds && <GrossProceedsAccordion></GrossProceedsAccordion>
                        }
                        {
                            Investor1.Expenses && <ExpensesAccordion></ExpensesAccordion>
                        }
                        {
                            Investor1.ROC && <ROCAccordion></ROCAccordion>
                        }
                        {
                            Investor1.AFE && <AFEAccordion></AFEAccordion>
                        }
                        {
                            Investor1.RecoupedLoss && <RecoupedLossAccordion></RecoupedLossAccordion>
                        }
                        {
                            Investor1.NetGain && <NetGainAccordion></NetGainAccordion>
                        }

                        {/* <Card className="footer-card">
                 <>
              <p className="drilldown-footer-title">Title Here</p>
              <p className="drilldown-footer-description">Description goes here</p>
              <p className="drilldown-consolidation-charges">Total Consolidated Charges 
              
              <span className="consolidation-amount">$ 34, 567.89 </span>
              </p>
              
           </>
      </Card> */}

                    </Accordion>
                </div>


            </div>
        </>
    )
}

export default DrilldownMenu;