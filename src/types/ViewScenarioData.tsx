import React, { useState } from 'react';
import NavBar from "../main/NavBar";
import ExportToExcel from "../main/Images/export-to-excel.jpg";
import EyeIcon from "../main/Images/eye-icon.png";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { useFetchScarios } from "../Hooks/FundHooks"


const ViewScenarioData = () => {

    const [, setClicked] = useState(false);

    //  const data = JSON.parse(state.scenarioData);

    const { data, } = useFetchScarios();
    // let tempData = {
    //     fundData: {
    //         event: 'Distribution',
    //         amount: '$216,123,24'
    //     }
    // }


    return (
        <>


            <div className="container-fluid">
                <NavBar currPage="ViewScenario" />
                <div className="waterfall-output">
                    <h3> Scenarios</h3>
                    <br></br>
                    <div className="row mb-2" >
                        <h4 className="text-left col-2">Details</h4>
                        <div className="col-2">
                            <button className="all-entries-waterfall">
                                <img className="eye-icon" src={EyeIcon} alt="eye icon" />
                                All entries</button>

                        </div>
                        <div className="col-5 float-end" />
                        <div className="export-to-excel-right col-3">
                            <button className="export-to-excel" style={{ width: '150px' }}>
                                <img className="export-to-excel-img" src={ExportToExcel} alt="export to excel" /> Export Report</button>
                            <button className="export-to-excel" style={{ width: '91px' }}>
                                Actions
                            </button>
                            <button className="export-to-excel" onClick={() => setClicked(true)}>
                                Scenario Data
                            </button>
                        </div>
                    </div>

                    {/* <PopupScenario trigger={clicked} setTrigger={setClicked} > 
          <ScenarioWizard  fundData = {tempData}></ScenarioWizard>  
                    
        </PopupScenario>  */}

                    {data &&
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer className="fundTable" sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="simple table" className="table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Event</TableCell>
                                            <TableCell>Deal</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            data.map((row, indx) => {
                                                return (
                                                    <>
                                                        <TableRow
                                                            key={indx}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                            <TableCell className="tableRow-hover"> {row.date} </TableCell>
                                                            <TableCell className="tableRow-hover"> {row.event} </TableCell>
                                                            <TableCell className="tableRow-hover"> {row.deal} </TableCell>
                                                            {/* <TableCell className = "tableRow-hover"> { row.amount} </TableCell> */}
                                                        </TableRow>
                                                    </>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Paper>
                    }
                </div>
            </div>
        </>
    )
}

export default ViewScenarioData;