// import { RadioGroup } from '@material-ui/core';
import React, { useState } from 'react';
import NavBar from '../../main/NavBar';
import Last30daysIcon from "../../main/Images/last30days.png";
import Calendar from "../../main/Images/Calendar.svg";
import ExportToExcel from "../../main/Images/export-to-excel.jpg";
import cloudArrowUp from "../../main/Images/cloud-arrow-up.svg";
import shareFromSquare from "../../main/Images/share-from-square.svg";
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
} from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';

//  const styles = theme => ({
//     radio: {
//       '&$checked': {
//         color: '#4B8DF8'
//       }
//     },
//     checked: {}
//   })

const PeriodClose = (props) => {

    const [iterator] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    //let len = iterator.length;

    return (
        <div className='container-fluid'>
            <NavBar currPage="Events/PeriodClose" />
            <h3 style={{ marginLeft: '18px' }}>Period Close and Total Loss</h3>
            <p className="periodClose-right-text" style={{ color: '#21234A' }}>
                <img src={Calendar} alt="calendar" />
                &nbsp;
                Distribution Date
                &nbsp;
            </p>
            <button className="periodClose-right-dropdown">
                <img style={{ width: '20px', height: '20px' }} src={Last30daysIcon} alt="last30Day-icon" />
                <span className="last-30-days">&nbsp;03/31/2022 </span>
                <span className="overview-dropdown-image"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
            </button>
            <button className="runWF-button periodClose-runWF"><span className="runWF-text"></span>Run WF</button>

            <div className="waterfall-overview">
                <div style={{ display: 'flex' }}>
                    <div className="box-1">
                        <table style={{ borderCollapse: "separate", borderSpacing: "5px" }}>
                            <tr>
                                <td className="waterfall-overview-table"> Date:</td>
                                <td className="waterfall-overview-table-right">10/31/2017</td>
                            </tr>
                            <tr>
                                <td className="waterfall-overview-table">Investment A</td>
                                <td className="waterfall-overview-table-right"></td>
                            </tr>
                            <tr>
                                <td className="waterfall-overview-table">Tranche T1</td>
                                <td className="waterfall-overview-table-right"></td>
                            </tr>
                        </table>
                    </div>
                    <div className="box-1">
                        <table style={{ borderCollapse: "separate", borderSpacing: "5px" }}>
                            <tr>
                                <td className="waterfall-overview-table"> Total Proceeds</td>
                                <td className="waterfall-overview-table-right">$2.3M</td>
                            </tr>
                            <tr>
                                <td className="waterfall-overview-table">Expensed Holdback</td>
                                <td className="waterfall-overview-table-right">$2.3M</td>
                            </tr>
                            <tr>
                                <td className="waterfall-overview-table">Return of Capital</td>
                                <td className="waterfall-overview-table-right">$1.3M</td>
                            </tr>
                        </table>
                    </div>

                    <div className="box-1">
                        <table style={{ borderCollapse: "separate", borderSpacing: "5px" }}>
                            <tr>
                                <td className="waterfall-overview-table"> Org Exp Giveback</td>
                                <td className="waterfall-overview-table-right">$2.3M</td>
                            </tr>
                            <tr>
                                <td className="waterfall-overview-table">Mgmt Fee Giveback</td>
                                <td className="waterfall-overview-table-right">$2.3M</td>
                            </tr>
                            <tr>
                                <td className="waterfall-overview-table">DDE Giveback</td>
                                <td className="waterfall-overview-table-right">$1.3M</td>
                            </tr>
                        </table>
                    </div>
                    <div className="box-1" style={{ width: '449px' }}>
                        <p className="modify-cost">Modify Cost</p>
                        <RadioGroup className="radiogroup" style={{ display: 'inline' }} sx={{
                            color: '421848',
                            '&.Mui-checked': {
                                color: '#64b54d',
                            },
                        }}>
                            <FormControlLabel className="Modify-cost-radio" value="TotalLoss"
                                sx={{
                                    color: '421848',
                                    background: "#64b54d",
                                    '&.Mui-checked': {
                                        color: '#64b54d',
                                    },
                                }}
                                control={<Radio color="#64b54d" />}
                                style={{ marginLeft: "5px", }}
                                label={<Typography>
                                    <b>Total Loss</b>

                                </Typography>} />

                            <FormControlLabel className="Modify-cost-radio" value="At Cost"
                                control={<Radio color="#64b54d" />}
                                sx={{ color: "#64b54d", background: "#64b54d" }}
                                style={{ marginLeft: "5px" }}
                                label={<Typography>
                                    <b>At Cost</b>

                                </Typography>} />
                        </RadioGroup>
                    </div>
                </div>
            </div>


            <div >
                <h4 className="col-2 summary-info" style={{ marginTop: '40.5px', marginLeft: '20px' }}>Summary Information</h4>

                <div />
                <div className="periodclose-export-right ">
                    <button className="export-to-excel-periodclose"  >
                        <img className="export-to-excel-img" src={ExportToExcel} alt="export to excel" />
                    </button>
                    <button className="import-periodclose">
                        <img src={cloudArrowUp} alt="cloud-arrow-up" />&nbsp; Import
                    </button>
                    <button className="export-periodclose">
                        <img src={shareFromSquare} alt="sharefromsqaure" />&nbsp;Export
                    </button>


                </div>
            </div>

            <Paper sx={{ width: '95%', overflow: 'hidden', margin: '10px 10px 0 15px' }}>
                <TableContainer className="fundTable" sx={{ maxHeight: 285 }}>
                    <Table stickyHeader aria-label="simple table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ textAlign: 'left' }}>Investment </TableCell>
                                <TableCell style={{ textAlign: 'left' }}>Tranche </TableCell>
                                <TableCell style={{ textAlign: 'right' }}>Original Investment ($) </TableCell>
                                <TableCell style={{ textAlign: 'right' }}>Remaining Investment ($)</TableCell>
                                <TableCell style={{ textAlign: 'left' }}>Remaining Value ($) </TableCell>
                                <TableCell style={{ textAlign: 'right' }}>Gain/Loss ($) </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                iterator && iterator.map((item, index) => (
                                    <>
                                        <TableRow>
                                            <TableCell style={{ textAlign: 'left' }}>I{item}</TableCell>
                                            <TableCell style={{ textAlign: 'left' }}>T{item}</TableCell>
                                            <TableCell style={{ textAlign: 'right', color: '#115AC8' }}>3.328,976</TableCell>
                                            <TableCell style={{ textAlign: 'right' }}>1,148,689</TableCell>
                                            <TableCell style={{ textAlign: 'left' }}>631,672</TableCell>
                                            <TableCell style={{ textAlign: 'right', color: '#FE2762' }}> - 1,548,615</TableCell>
                                        </TableRow>

                                    </>
                                ))
                            }
                            <TableRow className="subtotal-row" style={{ background: '#FFFBF1' }}>
                                <TableCell style={{ textAlign: 'left' }}>SubTotal</TableCell>
                                <TableCell style={{ textAlign: 'left' }}></TableCell>
                                <TableCell style={{ textAlign: 'right' }}>$ 3.328,976</TableCell>
                                <TableCell style={{ textAlign: 'right' }}>$ 3.328,976</TableCell>
                                <TableCell style={{ textAlign: 'left' }}>$ 3.328,976</TableCell>
                                <TableCell style={{ textAlign: 'right', color: '#FE2762' }}>$ - 333,328,976</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default PeriodClose;