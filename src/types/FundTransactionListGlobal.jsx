import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useFetchFundTransactionsGlobal } from "../Hooks/FundHooks"

import ExportToExcel from "../main/Images/exportExcelFileIcon.svg"
import EyeIcon from "../main/Images/eye.svg"
import Vector177 from "../main/Images/Vector 177.svg"
import viewInputIcon from "../main/Images/viewInputIcon.svg"
import viewOutputIcon from "../main/Images/viewOutputIcon.svg"


import GearHollowIcon from "../main/Images/GearHollowIcon.svg"

import greenrightarrow from "../main/Images/greenRightArrowSolid.svg"

import greenTickIcon from "../main/Images/greenTickIcon.svg"


import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material'
import { Link } from "react-router-dom"
import Popup from './Modal/Popup'
import SetOptionsWizard from "./SetOptionsWizard"

import { OverlayTrigger, Tooltip } from "react-bootstrap"


const FundTransactionList = (props) => {

  const { data } = useFetchFundTransactionsGlobal();
  // const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentRow] = useState({})

  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);


  const navigate = useNavigate();
  // const handleWaterfallNavigate = (data) => {
  //   console.log("data", data)
  //   navigate('/waterfall', { state: { fundData : data }})
  // }

  const columns = [
    // {
    //   Header: 'Action',
    //   accessor: ''
    // },
    {
      Header: 'Event ID',
      accessor: 'eventId',
      headerAlign: 'center',
      width: '96px'
    }, {
      Header: 'GL Date',
      accessor: 'glDate',
      headerAlign: 'center',
      width:'113px'
    }, {
      Header: 'Effective Date',
      accessor: 'effectiveDate',
      headerAlign: 'center',
      width:'113px'
    }, {
      Header: 'Event',
      accessor: 'event',
      headerAlign: 'center',
      width:'165px'
    }, {
      Header: 'Deal Family',
      accessor: 'dealFamily',
      headerAlign: 'center',
      width:'330px'
    }, {
      Header: 'Amount',
      accessor: 'amount',
      headerAlign: 'center',
      width:'110px'
    }, {
      Header: 'Batch Status',
      accessor: 'batchStatus',
      headerAlign: 'center',
      width:'90px'
    }, {
      Header: 'WFE Status',
      accessor: 'wfeStatus',
      headerAlign: 'center',
      width:'97px'
    },{
      Header: 'Actions',
      accessor: 'Actions',
      headerAlign: 'center',
      width:'auto'
    }
  ];

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 && data ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const navigateToAction = (row) => {
    //console.log('Row:: ', row);
    if (row.event === 'Accrued Carry' ) {
      navigate('/actionpage/viewInputCarry', { state: { path: 'viewInput', event: row.event, active: 'viewInput' } })(row);
    }
  }

  return (
    <div style={{ width: '94%', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
        <div>
          <span className="text-left" style={{
            width: '110px', height: '23px', fontFamily: 'Helvetica', fontStyle: 'normal',
            fontWeight: '700', fontSize: '20px', lineHeight: '23px', marginRight: '16px'
          }}>
            <b style={{ fontWeight: '700', }}>Fund Events</b>
          </span>
          {/* <div className="col-2"> */}
          <button className="all-entries" style={{ position: 'static' }}>
            <img className="eye-icon" src={EyeIcon} alt="eye icon" />
            All entries
            &nbsp;
            <img src={Vector177} alt="vector" />
          </button>
        </div>

        {/* </div> */}
        <div className="export-to-excel-right" style={{ position: 'static', left: '670px' }}>
          <OverlayTrigger
            delay={{ hide: 450, show: 300 }}
            overlay={(props) => (
              <Tooltip {...props}>
                Export to Excel
              </Tooltip>
            )}
            placement="bottom">
            <button className="export-to-excel" style={{ width: '32px', height: '32px', padding: '8px' }}>
              <img className="" src={ExportToExcel} alt="export to excel"
                style={{}}
              />
              {/* <Excel Export
                <img src={Info} alt="info"/> */}
            </button>
          </OverlayTrigger>
        </div>
        {/* <button onClick={() => setClicked(true)}>Setoptions popup</button> */}
        <Popup trigger={clicked} setTrigger={setClicked}>
          <SetOptionsWizard h={currentRow}></SetOptionsWizard>
        </Popup>



      </div>


      {data &&
        <Paper sx={{ width: 'auto', overflow: 'hidden', marginTop: '10px' }}>
          <TableContainer className="fundTable" sx={{ maxHeight: '100%' }}>
            <Table stickyHeader aria-label="simple table" className="table">
              <TableHead>
                <TableRow>
                  {columns.map((headerGroup, i) => (
                    <TableCell style={{ width: headerGroup.width ,textAlign: headerGroup.headerAlign , fontFamily:'Helvetica',fontSize:'12px' , fontWeight :700 ,whiteSpace:'nowrap'}} key={'dashbdHeader' + i}>
                      {/* {i == 0  ? <img src={headerStar} alt="header-star" style={{ paddingBottom : '3px'}}/> : */}
                      { headerGroup.Header }
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  // (rowsPerPage > 0
                  //     ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  //     : data
                  //   )

                  data.map((row, index) => (
                    <TableRow
                      key={'dashbd-'+index+'-'+row.eventID}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* <TableCell style = {{ height : '48px'}}>                    
                          <img src={star} alt="star" style={{ paddingBottom : '5px'}}/> 
                        </TableCell> */}
                      <TableCell onClick={() => { navigateToAction(row) }}
                        style={{ height: '24px', textAlign: 'left', fontWeight: '400', fontSize: '12px', lineHeight: '24px', margin: '0px', padding: '0px 8px',textAlign: 'center',borderRight: '1px solid rgba(240, 242, 244, 1)'}}>{row.eventId || ''}</TableCell>
                      <TableCell onClick={() => { navigateToAction(row) }}
                        style={{ height: '24px', textAlign: 'center', fontWeight: '400', fontSize: '12px', lineHeight: '24px', margin: '0px', padding: '0px 8px',textAlign: 'center',borderRight: '1px solid rgba(240, 242, 244, 1)'}}>{row.glDate || ''}</TableCell>
                         <TableCell onClick={() => { navigateToAction(row) }}
                        style={{ height: '24px', textAlign: 'center', fontWeight: '400', fontSize: '12px', lineHeight: '24px', margin: '0px', padding: '0px 8px',textAlign: 'center',borderRight: '1px solid rgba(240, 242, 244, 1)' }}>{row.effectiveDate || ''}</TableCell>
                          <TableCell onClick={() => { navigateToAction(row) }}
                        style={{ height: '24px', textAlign: 'left', fontWeight: '400', fontSize: '12px', lineHeight: '24px', margin: '0px', padding: '0px 8px',textAlign: 'left',borderRight: '1px solid rgba(240, 242, 244, 1)'}}>{row.event || ''}</TableCell>
                                           
                        
                      <TableCell onClick={() => { navigateToAction(row) }}
                        style={{ fontWeight: '400', fontSize: '12px', lineHeight: '24px', textAlign: 'left' , margin: '0px', padding: '0px 8px',textAlign: 'left',borderRight: '1px solid rgba(240, 242, 244, 1)'}}>{row.dealFamily} </TableCell>

  
                      <TableCell onClick={() => { navigateToAction(row) }}
                        style={{
                          textAlign: 'right', fontWeight: '400', fontSize: '12px',
                          lineHeight: '24px', paddingRight: '22px', margin: '0px', padding: '0px 8px' ,textAlign: 'center',borderRight: '1px solid rgba(240, 242, 244, 1)'
                        }}>
                        {row.amount
                            || ''
                        }
                      </TableCell>
                      <TableCell style={{ textAlign: 'center', fontWeight: '400', fontSize: '12px', lineHeight: '24px', margin: '0px', padding: '0px 8px',textAlign: 'center',borderRight: '1px solid rgba(240, 242, 244, 1)' }} onClick={() => { navigateToAction(row) }}>
                        {row.batchStatus|| ''}</TableCell>
                      <TableCell style={{ textAlign: 'center', fontWeight: '400', fontSize: '12px', lineHeight: '24px', margin: '0px', padding: '0px 8px',textAlign: 'center',borderRight: '1px solid rgba(240, 242, 244, 1)'  }} onClick={() => { navigateToAction(row) }}>
                        {row.wfeStatus|| ''}</TableCell>
                     
                      <TableCell className="actions-menu-main" tabIndex={-1} >
                        <div className="open-actions-icon justify-content-center" >
                          {row.event === "Sale Distribution" ?
                            <>
                              <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                  <Tooltip {...props}>
                                    View Input
                                  </Tooltip>
                                )}
                                placement="bottom">
                                <button id={'viewInputWfeBtn-'+index} className="options-button me-2">
                                  <Link to={"/actionpage/viewInputGlobal"} state={{ path: 'dashboard', event: row.event, active: 'viewInput' }}
                                    style={{ fontWeight: '400', color: '#344050' }}>
                                    <img src={viewInputIcon} alt="viewInput" />
                                  </Link>
                                </button>
                              </OverlayTrigger>

                              <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                  <Tooltip {...props}>
                                    Set Options
                                  </Tooltip>
                                )}
                                placement="bottom">
                                <button id={'setOptionsWfeBtn-'+index} className="options-button me-2">
                                  <Link to={"/actionpage/setOptions"} state={{
                                    path: 'dashboard', event: row.event,
                                    active: 'setOptions'
                                  }}
                                    style={{ fontWeight: '400', color: '#344050' }}>
                                    <img src={GearHollowIcon} alt="setOptions" />
                                  </Link>
                                </button>
                              </OverlayTrigger>

                              <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                  <Tooltip {...props}>
                                    Run Waterfall
                                  </Tooltip>
                                )}
                                placement="bottom">
                                <button id={'runWaterfallWfeBtn-'+index} className="options-button me-2">
                                  <Link to={"/actionpage/runWaterfall"} state={{ path: 'dashboard', event: row.event, active: 'runWaterfall' }}
                                    style={{ fontWeight: '400', color: '#344050' }}>
                                    <img src={greenrightarrow} alt="runWaterfall" />
                                  </Link>

                                </button>
                              </OverlayTrigger>

                              <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                  <Tooltip {...props}>
                                    View Output
                                  </Tooltip>
                                )}
                                placement="bottom">
                                <button id={'viewOutputWfeBtn-'+index} className="options-button me-2">
                                  <Link to={"/actionpage/viewOutputGlobal"} state={{ path: 'dashboard', event: row.event, active: 'viewOutput' }}
                                    style={{ fontWeight: '400', color: '#344050' }}>
                                    <img src={viewOutputIcon} alt="viewOutput" />
                                  </Link>
                                </button>
                              </OverlayTrigger>

                              <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                  <Tooltip {...props}>
                                    Approval
                                  </Tooltip>
                                )}
                                placement="bottom">
                                <button id={'approvalWfeBtn-'+index} className="options-button me-2" onClick={() => {
                                  props.setCurrentRoute(row.event)
                                }}>
                                  <Link to={"/actionpage/approval"} state={{
                                    path: 'dashboard',
                                    row: row,
                                    event: row.event, active: 'approval'
                                  }}
                                    style={{ fontWeight: '400', color: '#344050' }}>
                                    <img src={greenTickIcon} alt="approval" />
                                  </Link>
                                </button>
                              </OverlayTrigger>
                            </>
                            :
                            <span style={{ paddingLeft: '180px' }}></span>
                          }
                        </div>
                        {/* {row.event === "Distribution" ? (
                      <div className="actions-menu">
                        <div className="" id={`s_${row.batchId}`}
                          onClick={() => {
                            setCurrentRow(row)
                            setClicked(true)}
                          }>
                          <Link to="" style={{ fontWeight : '500', color : '#344050'}}>Set Options</Link>
                        </div>

                        <div className="" id={`v_${row.batchId}`}
                          onClick={() => { }}>
                          <Link to="" style={{ fontWeight : '500', color : '#344050'}}>Run Waterfall</Link>
                        </div>

                        <div className="" id={`e_${row.batchId}`}
                          onClick={ () => handleWaterfallNavigate(row)}>
                          <Link to="/waterfall" style={{ fontWeight : '500', color : '#344050'}}>Waterfall output</Link>
                          {/* <Link to={{ pathname: '/', query: { signupCompleted: true } }}>Waterfall output</Link> * /}
                        </div>

                        <div className="" id={`c_${row.batchId}`} style={{ fontWeight : '500', color : '#344050'}}>
                           Approve
                        </div>

                      </div>
                    ) : ''}  */}
                      </TableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
         
        </Paper>
      }

    </div>
  );

};

export default FundTransactionList;