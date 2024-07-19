import React, { useState } from 'react';
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
} from '@mui/material';
import chevronDown from "../../main/Images/Chevron-down.svg";
import { Dropdown } from 'react-bootstrap';
import { ApplyMgmtFee } from '../../Hooks/FundHooks';

const MgmtFeeComp = (props) => {

    // const [dropdown, setDropdown] = useState(false);
    // const toggleOpen = () => setDropdown(!dropdown);

    // const [dropdown2, setDropdown2] = useState(false);
    // const toggleOpen2 = () => setDropdown2(!dropdown2);

    // const [dropdown3, setDropdown3] = useState(false);
    // const toggleOpen3 = () => setDropdown3(!dropdown3);

    // const [dropdown4, setDropdown4] = useState(false);
    // const toggleOpen4 = () => setDropdown4(!dropdown4);


    // const [dropdown5, setDropdown5] = useState(false);
    // const toggleOpen5 = () => setDropdown5(!dropdown5);

    const [investPeriod, setInvestPeriod] = useState('Committment');
    const [postinvestPeriod, setPostInvestPeriod] = useState('Remaining Invested Capital');
    const [monthly, setMonthly] = useState('Quarterly');
    const [partOfCommitment, setPartOfCommitment] = useState('No');
    const [inAdvance, setInAdvance] = useState('In Arrears');

    const applyMgmtFeeMutation = ApplyMgmtFee();

    const handleSubmit = (e) => {
        let postData = {
            investPeriod: investPeriod,
            postinvestPeriod: postinvestPeriod,
            frequency: monthly,
            inVoiceType: inAdvance,
            partOfCommitment: partOfCommitment,
        }
        applyMgmtFeeMutation.mutate(postData);
    }

    return (
        <div>
            <div className='mgmt-fee' style={{}}>

                <div style={{}}>
                    <p style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '16px',
                        lineHeight: '24px',

                        color: '#111827'
                    }}>Tiers</p>
                    <Paper sx={{
                        overflow: 'hidden',
                        background: '#F9FAFB',
                        borderRadius: '8px',
                        borderTop: '1px solid #E5E7EB'
                    }} >
                        <TableContainer className="fundTable" >
                            <Table stickyHeader aria-label="simple table" className="table "
                                style={{ background: '#F9FAFB' }}
                            >

                                <TableHead>
                                    <TableRow >
                                        <TableCell style={{ background: '#F9FAFB', paddingLeft: "24px", textAlign: 'center' }}>Type</TableCell>
                                        <TableCell style={{ background: '#F9FAFB', textAlign: 'center' }}>Percentage %</TableCell>
                                        <TableCell style={{ background: '#F9FAFB', paddingRight: '50px', textAlign: 'center' }}>Fee Offset %</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    <TableRow>
                                        <TableCell style={{ textAlign: 'center' }}>
                                            <span className="grey-text" style={{ paddingLeft: "16px" }}>A</span>
                                        </TableCell>
                                        <TableCell style={{ textAlign: 'center' }}> 2.50%</TableCell>
                                        <TableCell style={{ textAlign: 'center', paddingRight: '50px' }}> 50%</TableCell>
                                    </TableRow>

                                    <TableRow style={{ background: '#F9FAFB' }}>
                                        <TableCell style={{ textAlign: 'center' }}>
                                            <span className="grey-text" style={{ paddingLeft: "16px" }} >B</span>
                                        </TableCell>
                                        <TableCell style={{ textAlign: 'center' }}> 2.25%</TableCell>
                                        <TableCell style={{ textAlign: 'center', paddingRight: '50px' }}> 40%</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={{ textAlign: 'center' }}>
                                            <span className="grey-text" style={{ paddingLeft: "16px" }} >C</span>
                                        </TableCell>
                                        <TableCell style={{ textAlign: 'center' }}> 2.00%</TableCell>
                                        <TableCell style={{ textAlign: 'center', paddingRight: '50px' }}> 30%</TableCell>
                                    </TableRow>

                                    <TableRow style={{ background: '#F9FAFB', borderBottom: 'none' }}>
                                        <TableCell style={{ textAlign: 'center' }}>
                                            <span className="grey-text" style={{ paddingLeft: "16px" }} >D</span>
                                        </TableCell>
                                        <TableCell style={{ textAlign: 'center' }}> 1.75%</TableCell>
                                        <TableCell style={{ textAlign: 'center', paddingRight: '50px' }}> 20%</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    <br></br>
                    {/* <p className="management-fee" style={{ marginLeft: '0px' }}>Fee Setup</p> */}
                    <Paper sx={{
                        overflow: 'hidden', background: '#FFFFFF',
                        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)', borderRadius: '8px'
                    }} >
                        <TableContainer className="fundTable" >
                            <Table stickyHeader aria-label="simple table" className="table fund-setup-table">
                                <TableBody>
                                    <TableRow >
                                        <TableCell style={{ padding: "20px 0px 0px 24px" }}>
                                            <p style={{
                                                fontFamily: 'Roboto',
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                lineHeight: '24px',
                                                color: '#111827'
                                            }}>Fee Basis
                                            </p>
                                        </TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                    <TableRow style={{ background: '#FAFBFF' }}>
                                        <TableCell className='fee-basic-first-col' style={{}}>
                                            <span className="grey-text" >Investment Period</span>
                                        </TableCell>
                                        <TableCell className='fee-basic-second-col' style={{}}>
                                            <div class='sec-col-container' style={{}}>
                                                <span style={{}}>{investPeriod}</span>
                                                {/* <div
                                                    className="Fee-Dropdown" onClick={toggleOpen4} style={{ borderBottomWidth: '0px' }}>
                                                    <img src={chevronDown} alt="chevrondown" />
                                                </div> */}
                                                <div style={{ position: 'absolute' }}>
                                                    <Dropdown id='investmentPeriodDropdown' style={{}} className='dropStart dropdown-pos'>
                                                        <Dropdown.Toggle variant="success" id="approvalDropdown1" style={{
                                                            height: '27px', width: '27px', background: '#FFF', padding: '0px',
                                                            boxShadow: '0px 8px 12px -2.4px rgba(0, 0, 0, 0.1), 0px 3.2px 4.8px -1.6px rgba(0, 0, 0, 0.05), 0px 0px 0px 0.8px rgba(0, 0, 0, 0.05)',
                                                            border: 'none', borderRadius: '50px', color: '#64b54d', fontWeight: '500', fontSize: '14px', lineHeight: '16px'
                                                        }}>
                                                            <img src={chevronDown} alt="dropdown-icon" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu id="approvalDropdown1Menu" style={{ padding: '0px' }} align="end">
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderRadius: '6px 6px 0 0'
                                                            }}
                                                                onClick={() => { setInvestPeriod('Committment'); }}>Committment</Dropdown.Item>
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderTop: '1px solid #E5E7EB',
                                                                borderRadius: '0 0 8px 8px'
                                                            }}
                                                                onClick={() => { setInvestPeriod('Remaining Invested Capital'); }}>Remaining Invested Capital</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow style={{ marginBottom: '16px' }}>
                                        <TableCell className='fee-basic-first-col' style={{}}>
                                            <span className="grey-text" > Post-Investment Period</span>
                                        </TableCell>
                                        <TableCell className='fee-basic-second-col' style={{}}>
                                            <div class='sec-col-container' style={{}}>
                                                <span style={{}}>{postinvestPeriod}</span>
                                                {/* <div
                                                    className="Fee-Dropdown" onClick={toggleOpen5} style={{ borderBottomWidth: '0px' }}>
                                                    <img src={chevronDown} alt="chevrondown" />
                                                </div> */}
                                                <div style={{ position: 'absolute' }}>
                                                    <Dropdown id='postInvestmentPeriodDropdown' style={{}} className='dropEnd dropdown-pos'>
                                                        <Dropdown.Toggle variant="success" id="approvalDropdown2" style={{
                                                            height: '27px', width: '27px', background: '#FFF', padding: '0px',
                                                            boxShadow: '0px 8px 12px -2.4px rgba(0, 0, 0, 0.1), 0px 3.2px 4.8px -1.6px rgba(0, 0, 0, 0.05), 0px 0px 0px 0.8px rgba(0, 0, 0, 0.05)',
                                                            border: 'none', borderRadius: '50px', color: '#64b54d', fontWeight: '500', fontSize: '14px', lineHeight: '16px'
                                                        }}>
                                                            <img src={chevronDown} alt="dropdown-icon" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu id="approvalDropdown2Menu" style={{ padding: '0px', marginBottom: '-130px' }} align="end">
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderRadius: '6px 6px 0 0'
                                                            }}
                                                                onClick={() => { setPostInvestPeriod('Committment'); }}>Committment</Dropdown.Item>
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderTop: '1px solid #E5E7EB',
                                                                borderRadius: '0 0 8px 8px'
                                                            }}
                                                                onClick={() => { setPostInvestPeriod('Remaining Invested Capital'); }}>Remaining Invested Capital</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                    <Paper sx={{
                        overflow: 'hidden',
                        margin: '16px 0px', background: '#FFFFFF',
                        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)', borderRadius: '8px'
                    }}>
                        <TableContainer className="fundTable">
                            <Table stickyHeader aria-label="simple table" className="table fund-setup-table">
                                <TableBody>
                                    <TableRow style={{ background: '#FAFBFF' }}>
                                        <TableCell className='fee-basic-first-col' style={{}}>
                                            <span className="grey-text" >Frequency</span>
                                        </TableCell>
                                        <TableCell className='fee-basic-second-col' style={{}}>
                                            <div class='sec-col-container' style={{}}>
                                                <span style={{}}>{monthly}</span>
                                                {/* <div
                                                    className="Fee-Dropdown" onClick={toggleOpen3} style={{ borderBottomWidth: '0px' }}>
                                                    <img src={chevronDown} alt="chevrondown" />
                                                </div> */}
                                                <div style={{ position: 'absolute' }}>
                                                    <Dropdown id='frequencyDropdown' style={{}} className='dropEnd dropdown-pos'>
                                                        <Dropdown.Toggle variant="success" id="approvalDropdown3" style={{
                                                            height: '27px', width: '27px', background: '#FFF', padding: '0px',
                                                            boxShadow: '0px 8px 12px -2.4px rgba(0, 0, 0, 0.1), 0px 3.2px 4.8px -1.6px rgba(0, 0, 0, 0.05), 0px 0px 0px 0.8px rgba(0, 0, 0, 0.05)',
                                                            border: 'none', borderRadius: '50px', color: '#64b54d', fontWeight: '500', fontSize: '14px', lineHeight: '16px'
                                                        }}>
                                                            <img src={chevronDown} alt="dropdown-icon" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu id="approvalDropdown3Menu" style={{ padding: '0px' }} align="end">
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderRadius: '6px 6px 0 0'
                                                            }}
                                                                onClick={() => { setMonthly('Quarterly'); }}>Quarterly</Dropdown.Item>
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderTop: '1px solid #E5E7EB',
                                                                borderRadius: '0 0 8px 8px'
                                                            }}
                                                                onClick={() => { setMonthly('Monthly'); }}>Monthly</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow style={{ background: '#FAFBFF' }}>
                                        <TableCell className='fee-basic-first-col' style={{}}>
                                            <span className="grey-text" > Invoice Type</span>
                                        </TableCell>
                                        <TableCell className='fee-basic-second-col' style={{}}>
                                            <div class='sec-col-container' style={{}}>
                                                <span style={{}}>{inAdvance}</span>
                                                {/* <div
                                                    className="Fee-Dropdown" onClick={toggleOpen2} style={{ borderBottomWidth: '0px' }}>
                                                    <img src={chevronDown} alt="chevrondown" />
                                                </div> */}
                                                <div style={{ position: 'absolute' }}>
                                                    <Dropdown id='invoiceTypeDropdown' style={{}} className='dropEnd dropdown-pos'>
                                                        <Dropdown.Toggle variant="success" id="approvalDropdown4" style={{
                                                            height: '27px', width: '27px', background: '#FFF', padding: '0px',
                                                            boxShadow: '0px 8px 12px -2.4px rgba(0, 0, 0, 0.1), 0px 3.2px 4.8px -1.6px rgba(0, 0, 0, 0.05), 0px 0px 0px 0.8px rgba(0, 0, 0, 0.05)',
                                                            border: 'none', borderRadius: '50px', color: '#64b54d', fontWeight: '500', fontSize: '14px', lineHeight: '16px'
                                                        }}>
                                                            <img src={chevronDown} alt="dropdown-icon" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu id="approvalDropdown4Menu" style={{ padding: '0px' }} align="end">
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderRadius: '6px 6px 0 0'
                                                            }}
                                                                onClick={() => { setInAdvance('In Advance'); }}>In Advance</Dropdown.Item>
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderTop: '1px solid #E5E7EB',
                                                                borderRadius: '0 0 8px 8px'
                                                            }}
                                                                onClick={() => { setInAdvance('In Arrears'); }}>In Arrears</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow style={{ background: '#FAFBFF' }}>
                                        <TableCell className='fee-basic-first-col' style={{}}>
                                            <span className="grey-text" > Part of Commitment?</span>
                                        </TableCell>
                                        <TableCell className='fee-basic-second-col' style={{}}>
                                            <div class='sec-col-container' style={{}}>
                                                <span style={{}}>{partOfCommitment}</span>
                                                {/* <div
                                                    className="Fee-Dropdown" onClick={toggleOpen} style={{ borderBottomWidth: '0px' }}>
                                                    <img src={chevronDown} alt="chevrondown" />
                                                </div> */}
                                                <div style={{ position: 'absolute' }}>
                                                    <Dropdown id='parOfCommitmentDropdown' style={{}} className='dropEnd dropdown-pos'>
                                                        <Dropdown.Toggle variant="success" id="approvalDropdown5" style={{
                                                            height: '27px', width: '27px', background: '#FFF', padding: '0px',
                                                            boxShadow: '0px 8px 12px -2.4px rgba(0, 0, 0, 0.1), 0px 3.2px 4.8px -1.6px rgba(0, 0, 0, 0.05), 0px 0px 0px 0.8px rgba(0, 0, 0, 0.05)',
                                                            border: 'none', borderRadius: '50px', color: '#64b54d', fontWeight: '500', fontSize: '14px', lineHeight: '16px'
                                                        }}>
                                                            <img src={chevronDown} alt="dropdown-icon" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu id="approvalDropdown5Menu" style={{ padding: '0px', marginBottom: '-130px' }} align="end">
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderRadius: '6px 6px 0 0'
                                                            }}
                                                                onClick={() => { setPartOfCommitment('Yes'); }}>Yes</Dropdown.Item>
                                                            <Dropdown.Item style={{
                                                                padding: '12px 24px', width: '243px', height: '48px',
                                                                background: '#fff', borderTop: '1px solid #E5E7EB',
                                                                borderRadius: '0 0 8px 8px'
                                                            }}
                                                                onClick={() => { setPartOfCommitment('No'); }}>No</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </TableCell>

                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Paper>

                    <button id='applyMgmtFeeBtn' className="apply-button" onClick={() => handleSubmit()} style={{ position: 'static', marginBottom: '25px' }}>
                        Apply</button>

                    {
                        // dropdown &&
                        // <ul className="fee-dropdown-ul">
                        //     <li className="fee-dropdown-menu"
                        //         style={{
                        //             fontFamily: 'Roboto',
                        //             fontStyle: 'normal',
                        //             fontWeight: '500',
                        //             fontSize: '14px',
                        //             lineHeight: '24px',

                        //             color: '#64b54d'
                        //         }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen();
                        //                 setPartOfCommitment('Yes')
                        //             }
                        //         }
                        //     >
                        //         Yes
                        //     </li>
                        //     <li className="fee-dropdown-menu" style={{
                        //         fontFamily: 'Roboto',
                        //         fontStyle: 'normal',
                        //         fontWeight: '500',
                        //         fontSize: '14px',
                        //         lineHeight: '24px',

                        //         color: '#64b54d'
                        //     }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen();
                        //                 setPartOfCommitment('No')
                        //             }
                        //         }
                        //     >
                        //         No
                        //     </li>
                        // </ul>


                    }

                    {
                        // dropdown2 &&
                        // <ul className="fee-dropdown-ul-2">
                        //     <li className="fee-dropdown-menu"
                        //         style={{
                        //             fontFamily: 'Roboto',
                        //             fontStyle: 'normal',
                        //             fontWeight: '500',
                        //             fontSize: '14px',
                        //             lineHeight: '24px',

                        //             color: '#64b54d'
                        //         }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen2();
                        //                 setInAdvance('In Advance')
                        //             }
                        //         }
                        //     >
                        //         In Advance
                        //     </li>
                        //     <li className="fee-dropdown-menu" style={{
                        //         fontFamily: 'Roboto',
                        //         fontStyle: 'normal',
                        //         fontWeight: '500',
                        //         fontSize: '14px',
                        //         lineHeight: '24px',

                        //         color: '#64b54d'
                        //     }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen2();
                        //                 setInAdvance('In Arrears')
                        //             }
                        //         }
                        //     >
                        //         In Arrears
                        //     </li>
                        // </ul>


                    }
                    {
                        // dropdown3 &&
                        // <ul className="fee-dropdown-ul-3">
                        //     <li className="fee-dropdown-menu"
                        //         style={{
                        //             fontFamily: 'Roboto',
                        //             fontStyle: 'normal',
                        //             fontWeight: '500',
                        //             fontSize: '14px',
                        //             lineHeight: '24px',

                        //             color: '#64b54d'
                        //         }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen3();
                        //                 setMonthly('Monthly')
                        //             }
                        //         }
                        //     >
                        //         Monthly
                        //     </li>
                        //     <li className="fee-dropdown-menu" style={{
                        //         fontFamily: 'Roboto',
                        //         fontStyle: 'normal',
                        //         fontWeight: '500',
                        //         fontSize: '14px',
                        //         lineHeight: '24px',

                        //         color: '#64b54d'
                        //     }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen3();
                        //                 setMonthly('Quarterly')
                        //             }
                        //         }
                        //     >
                        //         Quarterly
                        //     </li>
                        // </ul>


                    }
                    {
                        // dropdown4 &&
                        // <ul className="fee-dropdown-ul-4">
                        //     <li className="fee-dropdown-menu"
                        //         style={{
                        //             fontFamily: 'Roboto',
                        //             fontStyle: 'normal',
                        //             fontWeight: '500',
                        //             fontSize: '14px',
                        //             lineHeight: '24px',

                        //             color: '#64b54d'
                        //         }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen4();
                        //                 setInvestPeriod('Committment')
                        //             }
                        //         }
                        //     >
                        //         Commitment
                        //     </li>
                        //     <li className="fee-dropdown-menu" style={{
                        //         fontFamily: 'Roboto',
                        //         fontStyle: 'normal',
                        //         fontWeight: '500',
                        //         fontSize: '14px',
                        //         lineHeight: '24px',

                        //         color: '#64b54d'
                        //     }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen4();
                        //                 setInvestPeriod('Remaining Invested Capital')
                        //             }
                        //         }
                        //     >
                        //         Remaining Invested Capital
                        //     </li>
                        // </ul>


                    }

                    {
                        // dropdown5 &&
                        // <ul className="fee-dropdown-ul-5">
                        //     <li className="fee-dropdown-menu"
                        //         style={{
                        //             fontFamily: 'Roboto',
                        //             fontStyle: 'normal',
                        //             fontWeight: '500',
                        //             fontSize: '14px',
                        //             lineHeight: '24px',
                        //             color: '#64b54d'
                        //         }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen5();
                        //                 setPostInvestPeriod('Committment')
                        //             }
                        //         }
                        //     >
                        //         Commitment
                        //     </li>
                        //     <li className="fee-dropdown-menu" style={{
                        //         fontFamily: 'Roboto',
                        //         fontStyle: 'normal',
                        //         fontWeight: '500',
                        //         fontSize: '14px',
                        //         lineHeight: '24px',

                        //         color: '#64b54d'
                        //     }}
                        //         onClick={
                        //             () => {
                        //                 toggleOpen5();
                        //                 setPostInvestPeriod('Remaining Invested Capital')
                        //             }
                        //         }
                        //     >
                        //         Remaining Invested Capital
                        //     </li>
                        // </ul>


                    }

                </div>
            </div>
        </div>
    )
}
export default MgmtFeeComp;