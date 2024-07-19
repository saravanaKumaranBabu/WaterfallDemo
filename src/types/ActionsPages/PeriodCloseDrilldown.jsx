import React, { useState, } from 'react';

import { useLocation } from 'react-router-dom';

import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
} from '@mui/material';

import PopupDrilldown from "../Modal/PopupDrilldown";
import DrilldownMenu from "../DrilldownMenu";
import ExportToExcel from "../../main/Images/exportExcelFileIcon.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { useFetchPeriodClose}  from "../../Hooks/FundHooks";


const PeriodCloseDrilldown = (props) => {

    const { state } = useLocation();

    const [fundData] = useState(state);

    const { data } = useFetchPeriodClose();
    // console.log("period close", data)

    // const { data  } = useFetchWaterfalloutput();
    // let data;
    //  axios.get('https://localhost:3000/waterfalloutput.json').then((resp) => 
    //  {
    //      console.log(resp.data)
    //      data = resp.data
    //  })

    //const [page, setPage] = React.useState(0);
    //const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [clicked, setClicked] = useState(false);
    const [currentRow, setCurrentRow] = useState({});

    const columns = [
        {
            Header: 'Partners',
            accessor: 'investor'
        }, {
            Header: 'Gross Proceeds',
            accessor: 'grossProceeds'
        }, {
            Header: 'Expenses',
            accessor: 'expenses'
        }, {
            Header: 'Return of Capital',
            accessor: 'roc'
        }, {
            Header: "Allocated \n Fees and Expenses",
            accessor: 'afe'
        }, {
            Header: 'Netting Adjustment',
            accessor: 'recoupedLoss'
        }, {
            Header: 'Net Gain',
            accessor: 'netGain'
        }, {
            Header: 'Fair Market Value',
            accessor: 'fmv'
        }, {
            Header: 'Unrealized Expenses',
            accessor: 'ure'
        }, {
            Header: 'Remaining Invested Capital',
            accessor: 'ric'
        }, {
            Header: 'Unrealized Allocated Fees and Expenses',
            accessor: 'urafe'
        }, {
            Header: 'Unrealized Loss',
            accessor: 'url'
        },
    ];

    //const [iterator] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])

    return (
        <div style={{ paddingTop: '10px' }}>
            {/* <div >
            <h4 className="col-2 summary-info" style={{ marginTop : '40.5px', marginLeft : '20px'}}>View Output</h4>
               
        <div />
                    
    </div> */}
            <div className="export-to-excel-right" style={{ position: 'static', left: '50px' }}>
                <OverlayTrigger
                    // delay={{ hide: 450, show: 300 }}
                    rootClose
                    overlay={(props) => (
                        <Tooltip {...props}>
                            Export to Excel
                        </Tooltip>
                    )}
                    placement="bottom">
                    <button className="export-to-excel" style={{ width: '32px', height: '32px', padding: '8px', marginRight: '48px' }}>
                        <img className="" src={ExportToExcel} alt="export to excel"
                            style={{}}
                        />
                        {/* <Excel Export
                <img src={Info} alt="info"/> */}
                    </button>
                </OverlayTrigger>
            </div>


            <PopupDrilldown trigger={clicked} setTrigger={setClicked}
                onBackdropPress={() => setClicked(false)}
                onClick={() => setClicked(false)}>
                <DrilldownMenu h={currentRow} fundData={fundData} setTrigger={setClicked} ></DrilldownMenu>
            </PopupDrilldown>

            <Paper sx={{ width: '94%', margin: '10px auto', }}>
                <TableContainer className="fundTable" sx={{ maxHeight: 450 }}>
                    <Table stickyHeader aria-label="simple table" className="table">
                        <TableHead>
                            <TableRow>
                                {columns.map((headerGroup, i) =>
                                (
                                    <TableCell

                                        key={'pca-' + i}
                                        style={{ textAlign: 'center', fontWeight: '600', lineHeight: '20px',
                                                 width : (headerGroup.Header === 'Unrealized Allocated Fees and Expenses' 
                                                                 || 'Allocated Fees and Expenses'
                                                                 || 'Netting Adjustment'
                                                 )
                                                 
                                                 && '116px'
                                        }}>
                                        {headerGroup.Header}</TableCell>

                                )

                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>

                          {
                              data &&
                              data.map((row,index)=> 
                              (
                                  <TableRow key={'pcaRow-' + index} style={{ height: '60px' }}>
                                     <TableCell
                                    className="tableRow-hover"
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#115AC8',
                                        width: '130px',
                                        textAlign : 'center'
                                    }}
                                >{row.investment}</TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px'
                                    }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.grossProceeds} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        width: '118px',
                                        textAlign: 'right',
                                        paddingRight: '22px'
                                    }}
                                ><NumberFormat value={row.expenses} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px'
                                    }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.returnOfCapital} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px'
                                    }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.allocatedFeesAndExpenses} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px'
                                    }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.nettingAdjustment} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px',
                                                                            }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.netGain} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px'
                                    }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.fairMarketValue} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px',
                                        width: '99px'
                                    }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.unrealizedExpenses} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px',
                                        width: '110px'
                                    }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.remainingInvestedCapital} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px'
                                    }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.unrealizedAllocatedFeesAndExpenses} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
                                <TableCell
                                    className="tableRow-hover"
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#08121B',
                                        textAlign: 'right',
                                        paddingRight: '22px'
                                    }}
                                    onClick={() => {
                                        setCurrentRow({})
                                        setClicked(true)
                                    }}
                                ><NumberFormat value={row.unrealizedLoss} displayType={"text"} thousandSeparator={true} prefix={"$"} /></TableCell>
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

export default PeriodCloseDrilldown;