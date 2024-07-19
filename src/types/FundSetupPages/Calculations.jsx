import React, { useState } from 'react';
import { ApplyCalculations } from '../../Hooks/FundHooks';

const Calculations = () => {

    const [mgmtFeeGivebackNum, setMgmtFeeGivebackNum] = useState('');
    const [mgmtFeeGivebackDen, setMgmtFeeGivebackDen] = useState('');

    const applyMgmtFeeMutation = ApplyCalculations();

    const handleSubmit = (e) => {
        let postData = {
            availableCapital: "$ 189,999,999.00",
            date: "12/14/2018",
            transactionId: "1800097E87",
            tier: "Tier Name",
            effectiveDate: "12/14/2022",
            mgmtFeeGivebackNum: mgmtFeeGivebackNum,
            mgmtFeeGivebackDen: mgmtFeeGivebackDen,
            totalFeeGiveback: "$ 0.00",
            expenses: "$ 0.00"
        }
        applyMgmtFeeMutation.mutate(postData);
    }

    return (
        <div className='calculations' style={{}}>

            <table style={{ width: '100%' }}>
                <tr>
                    <td>Available Capital</td>
                    <td style={{ textAlign: 'right' }}>$ 189,999,999.00</td>
                </tr>

                <tr>
                    <td>Date:</td>
                    <td style={{ textAlign: 'right' }}>12/14/2018</td>
                </tr>
            </table>

            <table className="transaction-table" style={{
                display: 'table', padding: '10px 14px 6px', width: '100%',
                border: '1px solid #E5E7EB', borderRadius: '8px', background: '#F9FAFB', marginTop: '16px'
            }}>
                <thead>
                    <th style={{
                        fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '700',
                        fontSize: '16px', lineHeight: '19px', marginBottom: '32px', borderBottom: '1px solid #E5E7EB', padding: '0 0 10px 0'
                    }}>Tier Setup</th>
                    <th style={{
                        fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '700',
                        fontSize: '16px', lineHeight: '19px', marginBottom: '32px', borderBottom: '1px solid #E5E7EB', padding: '0 0 10px 0'
                    }}></th>
                </thead>
                {/* <hr style={{
                        width: '100%',
                                       
                        // border: '1px solid #E5E7EB',
                        // borderRadius: '246px'
                        
                    }}></hr> */}
                <tbody>
                    <tr>
                        <td style={{ fontWeight: '500', marginBottom: '10px', width: '400px' }}>Transaction ID:</td>
                        <td id='transactionIdTxt' style={{ fontWeight: '500', color: '#115AC8', textAlign: 'right' }}>1800097E87</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: '400', }}>Tier:</td>
                        <td id='tierNameTxt' style={{ fontWeight: '500', textAlign: 'right' }}>Tier Name</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: '400' }}>Effective Date: </td>
                        <td id='effectiveDateTxt' style={{ fontWeight: '500', textAlign: 'right' }}>12/14/2022</td>
                    </tr>

                </tbody>

            </table>


            <table className="transaction-table" style={{
                width: '100%', display: 'table', padding: '10px 14px 6px',
                border: '1px solid #D1D5DB', borderRadius: '8px', background: '#F9FAFB', marginTop: '16px'
            }}>
                <thead>
                    <th style={{
                        fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '700',
                        fontSize: '16px', lineHeight: '19px',
                        marginBottom: '32px', borderBottom: '1px solid #E5E7EB', padding: '0 0 10px 0'
                    }}>
                        Management Fee Giveback</th>
                    <th style={{
                        fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '700',
                        fontSize: '16px', lineHeight: '19px',
                        marginBottom: '32px', borderBottom: '1px solid #E5E7EB', padding: '0 0 10px 0'
                    }}></th>
                </thead>
                {/* <hr style={{
                        width: '730px',
                                       
                        // border: '1px solid #E5E7EB',
                        // borderRadius: '246px'
                        
                    }}></hr> */}
                <tbody>
                    <tr>
                        <td style={{ fontWeight: '500', marginBottom: '10px' }}>Num.</td>
                        <td style={{ fontWeight: '500', color: '#115AC8', textAlign: 'right' }}>

                            <input id='mgmtNumTxtip' type="text" placeholder="Enter Amount" className="amount-textbox"
                                style={{
                                    width: '178px', height: '40px', display: 'inline-block', padding: '8px 16px', gap: '8px', background: '#FFFFFF',
                                    border: '1px solid #64b54d', borderRadius: '4px'
                                }}
                                value={mgmtFeeGivebackNum}
                                onChange={(e) => {
                                    setMgmtFeeGivebackNum(e.target.value);
                                }} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: '400', borderBottom: '1px solid #E5E7EB', padding: '0 0 10px 0' }}>Den.</td>
                        <td style={{ fontWeight: '500', textAlign: 'right', borderBottom: '1px solid #E5E7EB', padding: '0 0 10px 0' }}>
                            <input id='mgmtDenTxtip' type="text" placeholder="Enter Amount" className="amount-textbox"
                                style={{
                                    width: '178px', height: '40px', display: 'inline-block', padding: '8px 16px', gap: '8px', background: '#FFFFFF',
                                    borderRadius: '4px'
                                }}
                                value={mgmtFeeGivebackDen}
                                onChange={(e) => {
                                    setMgmtFeeGivebackDen(e.target.value);
                                }} /></td>
                    </tr>
                    {/* <hr></hr> */}
                    <tr>
                        <td style={{ fontWeight: '400' }}>Total Fee Giveback </td>
                        <td id='totalFeeTxt' style={{ fontWeight: '500', textAlign: 'right' }}>$ 0.00</td>
                    </tr>

                </tbody>

            </table>

            <div className="total-bar-AFE" style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%',
                padding: '12px 19px', margin: '12px 0px', background: '#F0F5FD', border: '1px solid #D1D5DB', borderRadius: '4px'
            }}>
                <span style={{ fontWeight: '600', fontSize: '14px', lineHeight: '24px', float: 'left' }}>Expenses</span>
                {/* <span style={{ fontWeight: '500', fontSize: '14px', float: 'right' }}>Sum Target: */}
                <span id='expenseTxt' style={{ fontWeight: '600', fontSize: '14px', lineHeight: '24px', float: 'right' }}>&nbsp;&nbsp;$ 0.00</span>
                {/* </span> */}
            </div>
            <button id='applyCalculationsBtn' className="apply-button" onClick={() => { handleSubmit() }} 
                style={{ position: 'static', marginTop: '15px' }}>Apply</button>
        </div>
    )
}

export default Calculations;