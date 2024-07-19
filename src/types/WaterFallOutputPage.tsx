import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from "../main/NavBar";
import ExportToExcel from "../main/Images/export-to-excel.jpg";
// import EyeIcon from "../main/Images/eye-icon.png";
import NumberFormat from "react-number-format"
import { useFetchWaterfalloutput } from "../Hooks/FundHooks"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import PopupDrilldown from "./Modal/PopupDrilldown";
import DrilldownMenu from "./DrilldownMenu";
import EyeIcon from "../main/Images/eye-waterfall.svg";
import Vector177 from "../main/Images/Vector 177.svg";

const WaterFallOutputPage = (props: any) => {

    const navigate = useNavigate();

    const { state } = useLocation();

    const [fundData] = useState(state);

    const { data, } = useFetchWaterfalloutput();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [clicked, setClicked] = useState(false);
    const [currentRow, setCurrentRow] = useState({});

    const columns = [
        {
            Header: 'Investor',
            accessor: 'investor'
        }, {
            Header: 'Gross Proceeds',
            accessor: 'grossProceeds'
        }, {
            Header: 'Expenses',
            accessor: 'expenses'
        }, {
            Header: 'ROC',
            accessor: 'roc'
        }, {
            Header: 'AFE',
            accessor: 'afe'
        }, {
            Header: 'Recouped Loss',
            accessor: 'recoupedLoss'
        }, {
            Header: 'Net Gain',
            accessor: 'netGain'
        }, {
            Header: 'FMv',
            accessor: 'fmv'
        }, {
            Header: 'URE',
            accessor: 'ure'
        }, {
            Header: 'RIC',
            accessor: 'ric'
        }, {
            Header: 'URAFE',
            accessor: 'urafe'
        }, {
            Header: 'URL',
            accessor: 'url'
        }, {
            Header: 'Adj.cum.Net Gain',
            accessor: 'adjCumNetGain'
        }, {
            Header: 'Pref. Target',
            accessor: 'prefTarget'
        }
    ];

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 && data ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const viewScenarioData = () => {
        //let item =  localStorage.getItem('Scenario')
        // console.log("item", item)

    }

    return (
        <div className='container-fluid'>
            <NavBar currPage="Waterfall" />
            <div className="overView-box">
                <h3><strong>Waterfall Output</strong></h3>
                <hr></hr>
                <div className="waterfall-overview">
                    <div style={{ display: 'flex' }}>
                        <div className="box-1">
                            <table style={{ borderCollapse: "separate", borderSpacing: "5px" }}>
                                <tr>
                                    <td className="waterfall-overview-table">Distribution Date:</td>
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
                        <div className="vl"></div>
                        <div className="box-2">
                            <table className="waterfall-overview-table">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td >Status</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td style={{ paddingRight: '10px' }}>Gain Sub to Carry</td>
                                    <td style={{ paddingRight: '30px', paddingLeft: '20px' }}>$1M</td>
                                    <td className="waterfall-overview-table">Entered</td>
                                    <td className="waterfall-overview-table-right">10/31/2017</td>
                                </tr>
                                <tr>
                                    <td className="waterfall-overview-table">Fund RRR %</td>
                                    <td style={{ paddingRight: '30px', paddingLeft: '20px', textAlign: 'right' }}>19%</td>
                                    <td className="waterfall-overview-table">Updated</td>
                                    <td className="waterfall-overview-table-right">10/31/2017</td>
                                </tr>
                                <tr>
                                    <td className="waterfall-overview-table">LTD Carry</td>
                                    <td style={{ paddingRight: '30px', textAlign: 'right' }}>$1.9M</td>
                                    <td className="waterfall-overview-table" style={{ paddingRight: '20px' }}>Source Status</td>
                                    <td><span className="held-text">Held</span></td>
                                </tr>
                                <tr>
                                    <td className="waterfall-overview-table">Current Carry</td>
                                    <td style={{ paddingRight: '30px', textAlign: 'right' }}>$460K</td>
                                    <td className="waterfall-overview-table">Waterfall Status</td>
                                    <td><span className="pending-text">Pending</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row mb-2" >
                    <h4 className="text-left col-2">Details</h4>
                    <div className="col-2">
                        <button className="all-entries">
                            <img className="eye-icon" src={EyeIcon} alt="eye icon" />
                            All entries
                            &nbsp;
                            <img src={Vector177} alt="vector" />
                        </button>
                        {/* <img className = "purple-downward-arrow" src={PurpleDownwardArrow} alt="arrow"/> */}
                    </div>
                    <div className="col-5 float-end" />
                    <div className="export-to-excel-right col-3">
                        <button className="export-to-excel" style={{ width: '150px' }}>
                            <img className="export-to-excel-img" src={ExportToExcel} alt="export to excel" /> Export Report</button>
                        <button className="export-to-excel" style={{ width: '91px' }}>
                            Actions
                        </button>
                        <button className="export-to-excel" onClick={
                            () => {
                                viewScenarioData();
                                navigate('/ViewScenario', { state: { scenarioData: localStorage.getItem('Scenario') } })
                            }}>
                            View Scenario
                        </button>
                    </div>
                </div>



                <PopupDrilldown trigger={clicked} setTrigger={setClicked}
                    onBackdropPress={() => setClicked(false)}
                    onClick={() => setClicked(false)}>
                    <DrilldownMenu h={currentRow} fundData={fundData} setTrigger={setClicked} ></DrilldownMenu>
                </PopupDrilldown>


                {data &&
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer className="fundTable" sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="simple table" className="table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((headerGroup, i) => (
                                            <TableCell>{headerGroup.Header}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : data
                                    ).map((row, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#115AC8'
                                                }}
                                            >
                                                {row.investor}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#08121B'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.grossProceeds}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#08121B'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.expenses}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#5D6E82'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.roc}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#5D6E82'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.afe}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#D1334A'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.recoupedLoss}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#007629'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.netGain}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#08121B'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.fmv}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#08121B'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.ure}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#08121B'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.ric}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#5D6E82'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.urafe}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#5D6E82'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.url}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#5D6E82'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.adjCumNetGain}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                            <TableCell
                                                className="tableRow-hover"
                                                style={{
                                                    fontFamily: 'Roboto',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '24px',
                                                    color: '#5D6E82'
                                                }}
                                                onClick={() => {
                                                    setCurrentRow(row)
                                                    setClicked(true)
                                                }}>
                                                {<NumberFormat
                                                    value={row.prefTarget}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"} />}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 38 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                            component="div"
                        />
                    </Paper>
                }
            </div>
        </div>
    )
}

export default WaterFallOutputPage;