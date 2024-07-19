import React, { useEffect, useState } from 'react';
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import NumberFormat from "react-number-format";

// import {useLocation} from 'react-router-dom';
import ExportToExcel from "../../main/Images/exportExcelFileIcon.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { format } from 'date-fns'
import { useFetchAccuredcarryinput } from "../../Hooks/FundHooks";
import { useAddAccuredCarryViewInput } from "../../Hooks/FundHooks";

const ViewInput = (props) => {

    console.debug("test");
    const { data } = useFetchAccuredcarryinput();

    const addInputDataMutation = useAddAccuredCarryViewInput();

    let location = useLocation();

    let currentRoute = location.state && location.state.event;

    const randomNumberInRange = (min, max) => { 
        return Math.floor(Math.random()  
                * (max - min + 1)) + min; 
    }; 

    const [valueCell, setValueCell] = useState([]);
    const [cell, setCell] = useState([])


    // const [RIC1, setRIC1] = useState('$358,398,856');
    // const [RIC2, setRIC2] = useState('$346,505,203');
    // const [RIC3, setRIC3] = useState('$895,649,022');
    // const [RIC4, setRIC4] = useState('$455,927,304');
    // const [RIC5, setRIC5] = useState('$668,611,536');
    // const [RIC6, setRIC6] = useState('$178,221,393');
    // const [RIC7, setRIC7] = useState('$314,028,020');
    // const [RIC8, setRIC8] = useState('$563,959,113');
    // const [RIC9, setRIC9] = useState('$934,729,623');
    // const [RIC10, setRIC10] = useState('$421,353,282');
    // const [RIC11, setRIC11] = useState('$467,071,788');
    // const [RIC12, setRIC12] = useState('$0');
    // const [RIC13, setRIC13] = useState('$0');

    const [RIC, setRIC] = useState([]);

    //const [GainOrLossData, setGainOrLossData] =  useState();

    useEffect(() => {
        setRIC([])
        data && data.map((row) => (

            setRIC(prev => [...prev, row.remainingInvestedCapital])
        ))

        setValueCell([]);
        setCell([]);

        data && data.map((row) => (
            setValueCell(prev => [...prev, row.fmv])
        ))

        data && data.map((row) => setCell(prev => [...prev, true]))

    }, [data]);

    useEffect(() => {
        data && data.map((row) => (
            setRIC(prev => [...prev, row.remainingInvestedCapital])
        ))
        data && data.map((row) => (
            setValueCell(prev => [...prev, row.fmv])
        ))
        data && data.map((row) => setCell(prev => [...prev, true]))

    }, [data]);

    useEffect(() => {
        localStorage.setItem('Scenario', JSON.stringify('{}'));
    });

    const handleRICChange = (e, index) => {
        let temp = [...RIC];
        temp[index] = e.target.value;
        setRIC(temp)

        let postData = data[index];
        postData.FMV = e.target.value;
        let tempData = data.map((obj, indx) => {
            if (indx === index)
                return postData
            else
                return obj
        }
        )
        // console.log("post dta", tempData)
        addInputDataMutation.mutate(tempData)
    }

    const handleGainLossChange = (val, index) => {
        let postData = data[index];
        postData.GainOrLoss = val;
        data.map((obj, indx) => {
            if (indx === index)
                return postData
            else
                return obj
        }
        )
    }

    const handleValueCellChange = (e, index) => {
        let temp = [...valueCell];
        temp[index] = e.target.value;
        setValueCell(temp)

        let postData = data[index];
        postData.FMV = e.target.value;
        let tempData = data.map((obj, indx) => {
            if (indx === index)
                return postData
            else
                return obj
        }
        )
        // console.log("post dta", tempData)
        addInputDataMutation.mutate(tempData)
    }

    const handleCellChange = (index) => {

        let temp = [...cell];
        temp[index] = false;
        setCell(temp)

    }


    return (

        <div className='container-fluid ps-0 pe-0'>
            <div className="export-to-excel-right" style={{ position: 'static', width: '94%', margin: 'auto', marginTop: '10px' }}>
                <OverlayTrigger
                    // delay={{ hide: 450, show: 300 }}
                    rootClose
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
            { currentRoute === 'Distribution'?  <div className="" style={{ paddingTop: '10px' }}>
                <Paper sx={{ width: '94%', margin: 'auto', overflow: 'hidden', }}>
                    <TableContainer className="fundTable" sx={{ maxHeight: 485 }}>
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
                                            textAlign: 'left', marginLeft: '10px', height: '48px'
                                        }}
                                    >Investor </TableCell>
                                     <TableCell
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#08121B',
                                            borderRight: '1px solid #FFFFFF',
                                            textAlign: 'left', marginLeft: '10px', height: '48px'
                                        }}
                                    >Gross Proceeds </TableCell>

<TableCell
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#08121B',
                                            borderRight: '1px solid #FFFFFF',
                                            textAlign: 'left', marginLeft: '10px', height: '48px'
                                        }}
                                    >Withholding for Expenses </TableCell>
                                    <TableCell
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#08121B',
                                            borderRight: '1px solid #FFFFFF',
                                            textAlign: 'left', marginLeft: '10px', height: '48px'
                                        }}
                                    >Return of Capital </TableCell>
                                   
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                    data &&
                                    data.map((row, index) => (

                                        <TableRow key={'vi-' + index} style={{ height: '48px' }}>
                                            <TableCell style={{
                                                textAlign: 'left',
                                                fontFamily: 'Roboto',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                color: '#115AC8'
                                            }}> Investor {index + 1}
                                            </TableCell>
                                          
                                            <TableCell style={{
                                                textAlign: 'left',
                                                fontFamily: 'Roboto',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                color: '#115AC8'
                                            }}><NumberFormat value= {randomNumberInRange(1, 99000000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                                            </TableCell>

                                            <TableCell style={{
                                                textAlign: 'left',
                                                fontFamily: 'Roboto',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                color: '#115AC8'
                                            }}> <NumberFormat value= {randomNumberInRange(1, 2000000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                                            </TableCell>       
                                            <TableCell style={{
                                                textAlign: 'left',
                                                fontFamily: 'Roboto',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                color: '#115AC8'
                                            }}> <NumberFormat value= {randomNumberInRange(1, 50000000)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                                            </TableCell>                                              


                                        </TableRow>
                                    ))
                                }

                               

                               

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div> : <div className="" style={{ paddingTop: '10px' }}>
                <Paper sx={{ width: '94%', margin: 'auto', overflow: 'hidden', }}>
                    <TableContainer className="fundTable" sx={{ maxHeight: 485 }}>
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
                                            textAlign: 'center', marginLeft: '10px', height: '48px'
                                        }}
                                    >Investment </TableCell>
                                    <TableCell
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#08121B',
                                            borderRight: '1px solid #FFFFFF',
                                            textAlign: 'center',
                                            width: '101px'
                                        }}
                                    >Date of Investment</TableCell>

                                    <TableCell
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#08121B',
                                            textAlign: 'center'
                                        }}
                                    >Cost</TableCell>

                                    <TableCell
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#08121B',
                                            borderRight: '1px solid #FFFFFF',
                                            textAlign: 'center'
                                        }}
                                    >Return of Capital <br></br>till date</TableCell>
                                    <TableCell
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#08121B',
                                            borderRight: '1px solid #FFFFFF',
                                            textAlign: 'center'
                                        }}
                                    >Remaining Invested <br></br>Capital</TableCell>
                                    <TableCell
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#08121B',
                                            borderRight: '1px solid #FFFFFF',
                                            textAlign: 'center'
                                        }}
                                    >Fair Market Value

                                    </TableCell>
                                    <TableCell
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#08121B',
                                            borderRight: '1px solid #FFFFFF',
                                            textAlign: 'center'
                                        }}
                                    >Gain (+)/Loss (-)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                    data &&
                                    data.map((row, index) => (

                                        <TableRow key={'vi-' + index} style={{ height: '48px' }}>
                                            <TableCell style={{
                                                textAlign: 'left',
                                                fontFamily: 'Roboto',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                color: '#115AC8'
                                            }}>{row.investments}
                                            </TableCell>
                                            <TableCell style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500' }}>
                                            {format(new Date(row.dateOfInvestment), "MM/dd/yyyy") || ''}
                                            </TableCell>
                                            <TableCell style={{ textAlign: 'right', paddingRight: '22px', fontSize: '14px', fontWeight: '500' }}>
                                                {
                                                    row.cost >= 0 ?
                                                        <NumberFormat value={row.cost} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                                                        :
                                                        <span style={{ color: '#EA3323' }}>
                                                            <NumberFormat
                                                                value={(-1 * (row.cost))}
                                                                displayType={"text"}
                                                                thousandSeparator={true}
                                                                prefix={"$("}
                                                                suffix={")"}
                                                            />
                                                        </span>
                                                }

                                            </TableCell>
                                            <TableCell style={{ textAlign: 'right', fontSize: '14px', paddingRight: '22px' }}>
                                                {
                                                    row.rocTillDate > 0 ?
                                                        <NumberFormat value={row.rocTillDate} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                                                        :
                                                        row.rocTillDate < 0 &&
                                                        <span style={{ color: '#EA3323' }}>
                                                            <NumberFormat
                                                                value={(-1 * (row.rocTillDate))}
                                                                displayType={"text"}
                                                                thousandSeparator={true}
                                                                prefix={"$("}
                                                                suffix={")"}
                                                            />
                                                        </span>
                                                }
                                            </TableCell>
                                            <TableCell style={{ textAlign: 'right', fontSize: '14px', fontWeight: '500', paddingRight: '22px' }}>
                                                {
                                                    row.remainingInvestedCapital >= 0 ?
                                                        <NumberFormat value={row.remainingInvestedCapital} displayType={"text"} thousandSeparator={true} prefix={"$"} />
                                                        :
                                                        <span style={{ color: '#EA3323' }}>
                                                            <NumberFormat
                                                                value={(-1 * (row.remainingInvestedCapital))}
                                                                displayType={"text"}
                                                                thousandSeparator={true}
                                                                prefix={"$("}
                                                                suffix={")"}
                                                            />
                                                        </span>
                                                }
                                            </TableCell>
                                            <TableCell style={{
                                                textAlign: 'right',

                                                fontSize: '14px', fontWeight: '500', paddingRight: '22px',
                                            }}>
                                                {
                                                    currentRoute === 'Total Loss' ?
                                                        <input id='totalLossFairMrktValTxtip' type="number" className="input-fmv"

                                                            onChange={(e) => {
                                                                handleCellChange(index)
                                                                // setCell1(!cell1)
                                                                // setValueCell1(e.target.value)
                                                                handleValueCellChange(e, index)
                                                            }}

                                                        />
                                                        :
                                                        currentRoute === 'At Cost' ?
                                                            <input id='atCostFairMrktValTxtip' type="number" className="input-fmv"
                                                                value={RIC[index]}
                                                                onChange={(e) => {
                                                                    handleCellChange(index)
                                                                    // setCell1(!cell1)
                                                                    handleRICChange(e, index)
                                                                    // setRIC(prev => [...prev,  e.target.value])
                                                                    // setRIC(e.target.value)
                                                                }}

                                                            />



                                                            :
                                                            <>
                                                                {/* removed editable functionality of FMV for Accured Carry and Distribution */}
                                                                {/* <input type="number"
                                                                    className={cell[index] ? "input-fmv-not-editable" : "input-fmv"}
                                                                    value={

                                                                        valueCell[index]

                                                                    }
                                                                    onChange={(e) => {
                                                                        handleCellChange(index)
                                                                        handleValueCellChange(e, index)
                                                                    }}

                                                                /> */}
                                                                 <NumberFormat
                                                                                value={valueCell[index]}
                                                                                displayType={"text"}
                                                                                thousandSeparator={true}
                                                                                prefix={"$"}
                                                                                
                                                                            />
                                                                &nbsp;

                                                            </>

                                                }


                                            </TableCell>
                                            <TableCell
                                                style={{ textAlign: 'right', fontSize: '14px', fontWeight: '500', paddingRight: '22px' }}>

                                                {
                                                    currentRoute === 'Total Loss' ?
                                                        <>

                                                            {
                                                                cell[index] ?
                                                                    <>
                                                                        <span style={{ color: '#EA3323' }}>
                                                                            <NumberFormat
                                                                                value={(row.remainingInvestedCapital)}
                                                                                displayType={"text"}
                                                                                thousandSeparator={true}
                                                                                prefix={"$("}
                                                                                suffix={")"}
                                                                            />

                                                                        </span>

                                                                        {handleGainLossChange(row.remainingInvestedCapital, index)}
                                                                    </>
                                                                    :
                                                                    <>

                                                                        {(valueCell[index] - row.remainingInvestedCapital >= 0) ?
                                                                            <>
                                                                                <NumberFormat
                                                                                    value={valueCell[index] - row.remainingInvestedCapital}
                                                                                    displayType={"text"}
                                                                                    thousandSeparator={true}
                                                                                    prefix={"$"}
                                                                                />

                                                                                {handleGainLossChange(valueCell[index] - row.remainingInvestedCapital, index)}
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <span style={{ color: '#EA3323' }}>
                                                                                    <NumberFormat
                                                                                        value={(-1 * (valueCell[index] - row.remainingInvestedCapital))}
                                                                                        displayType={"text"}
                                                                                        thousandSeparator={true}
                                                                                        prefix={"$("}
                                                                                        suffix={")"}
                                                                                    />
                                                                                </span>

                                                                                {handleGainLossChange(valueCell[index] - row.remainingInvestedCapital, index)}
                                                                            </>
                                                                        }
                                                                    </>
                                                            }

                                                        </>
                                                        :
                                                        currentRoute === 'At Cost' ?
                                                            <>
                                                                <span>
                                                                    {
                                                                        (RIC[index] - row.remainingInvestedCapital) > 0 ?
                                                                            <>
                                                                                <NumberFormat
                                                                                    value={RIC[index] - row.remainingInvestedCapital}
                                                                                    displayType={"text"}
                                                                                    thousandSeparator={true}
                                                                                    prefix={"$"}
                                                                                />

                                                                                {handleGainLossChange(RIC[index] - row.remainingInvestedCapital, index)}
                                                                            </>
                                                                            :
                                                                            (RIC[index] - row.remainingInvestedCapital) < 0 ?
                                                                                <>
                                                                                    <span style={{ color: '#EA3323' }}>
                                                                                        <NumberFormat
                                                                                            value={-1 * (RIC[index] - row.remainingInvestedCapital)}
                                                                                            displayType={"text"}
                                                                                            thousandSeparator={true}
                                                                                            prefix={"$("}
                                                                                            suffix={")"}
                                                                                        />

                                                                                    </span>

                                                                                    {handleGainLossChange(RIC[index] - row.remainingInvestedCapital, index)}
                                                                                </>
                                                                                : ''

                                                                    }

                                                                </span>
                                                            </>



                                                            :
                                                            <>
                                                                {
                                                                    cell[index] ?


                                                                        <span style={{ color: row.gainOrLoss < 0 && '#EA3323' }} >
                                                                            <NumberFormat
                                                                                value={(row.gainOrLoss)}
                                                                                displayType={"text"}
                                                                                thousandSeparator={true}
                                                                                prefix={"$"}
                                                                            />
                                                                        </span>

                                                                        :
                                                                        <>
                                                                            {(row.remainingInvestedCapital - valueCell[index] >= 0) ?
                                                                                <>
                                                                                    <NumberFormat
                                                                                        value={row.remainingInvestedCapital - valueCell[index]}
                                                                                        displayType={"text"}
                                                                                        thousandSeparator={true}
                                                                                        prefix={"$"}
                                                                                    />

                                                                                    {handleGainLossChange(row.remainingInvestedCapital - valueCell[index], index)}
                                                                                </>
                                                                                :
                                                                                <>
                                                                                    <span style={{ color: '#EA3323' }}>
                                                                                        <NumberFormat
                                                                                            value={(-1 * (row.remainingInvestedCapital - valueCell[index]))}
                                                                                            displayType={"text"}
                                                                                            thousandSeparator={true}
                                                                                            prefix={"$("}
                                                                                            suffix={")"}
                                                                                        />
                                                                                    </span>

                                                                                    {handleGainLossChange(row.remainingInvestedCapital - valueCell[index], index)}
                                                                                </>
                                                                            }
                                                                        </>
                                                                }
                                                            </>




                                                }
                                            </TableCell>

                                        </TableRow>
                                    ))
                                }

                                {/* commenting below lines of code for JSon file implementation */}

                               

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>   }
           
        </div>
    )
}

export default ViewInput;