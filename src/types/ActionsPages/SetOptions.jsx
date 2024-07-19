import React, { useEffect, useState } from "react";
import '../../types/Modal/Popup.css';
// import useCollapse from 'react-collapse';
// import Collapsible from 'react-collapsible';
import NumberFormat from "react-number-format";
import { ApplyPostSetOptions, useFetchSetOptions } from "../../Hooks/FundHooks";
import { Container } from "react-bootstrap";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
//import Radio from '@material-ui/core/Radio';
// import FormControl from '@material-ui/core/FormControl';
// import { Typography } from "@material-ui/core";
// import infoCircle from "../../main/Images/info-circle.svg";

// const styles = theme => ({
//     radio: {
//       '&$checked': {
//         color: 'blue'
//       }
//     },
//     checked: {}
//   })

const SetOptions = ({ h }) => {
    const [activeBtn, setActiveBtn] = useState('carryOptions');
    const [isTargetCarry, setTargetCarry] = useState(true)
    const [targetAmount, setTargetAmount] = useState('Max / $ ---')
    const [optionsSummary, setOptionsSummary] = useState({
        carryOption: 'Max / $ ---',
        targetLossRecoupment: '',
        targetAFE: '',
    })
    const [portfolioTargetAmt, setPortfolioTargetAmt] = useState('');
    const [targetPercent, setTargetPercent] = useState('');
    // const MFEGiveback = "$1,234,567.89";
    // const OrgExpGiveback = "$123,45.67";
    // const DDEGiveback = "$123,456.78";

    // const [AFEOptions, setAFEOptions] = useState({
    //     MFE: '-',
    //     Org: '-',
    //     DDE: '-'
    // })

    // const getFormattedDate = (date) => {
    //     let year = date.substr(0, 4);
    //     let month = date.substr(5, 2);
    //     let day = date.substr(8, 2);
    //     return month + "/" + day + "/" + year;
    // };


    // const handleRadioChange = (e) => {

    //     const val = e.target.value;
    //     if (val === 'MFE') {
    //         setAFEOptions(prev => ({
    //             ...prev, MFE: MFEGiveback, Org: '-', DDE: '-'
    //         }))
    //     }
    //     else if (val === "Org Exp") {
    //         setAFEOptions(prev => ({
    //             ...prev, MFE: '-', Org: OrgExpGiveback, DDE: '-'
    //         }))
    //     }
    //     else {
    //         setAFEOptions(prev => ({
    //             ...prev, MFE: '-', Org: '-', DDE: DDEGiveback
    //         }))
    //     }
    // }

    const setOptionsMutation = ApplyPostSetOptions();
    const { data } = useFetchSetOptions();
    useEffect(() => {
        console.log("useFetchSetOptions data: ", data);
        if (data && data[0]) {
            setOptionsSummary(prev => ({
                ...prev,
                carryOption: data[0].summaryTargetCarry,
                targetLossRecoupment: data[0].summaryTargetNetting,
                targetAFE: data[0].summaryTargetExpenseGiveBack
            }));
            //console.log('data[0].carryTargetCarryAmount::', data[0].carryTargetCarryAmount);
            setTargetAmount(data[0].carryTargetCarryAmount || '');
            setTargetCarry(data[0].carryTargetCary);

            setPortfolioTargetAmt(data[0].nettingPortfolioTargetAmt);
            setTargetPercent(data[0].nettingTargetPercent);
        }
    }, [data]);

    const getOnlyNumbers = (str) => {
        if (str) {
            return str.toString().replace(/[^0-9.]+/g, '');
        } else {
            return '';
        }
    }

    const getFormattedNumber = (numValue) => {
        const numStr = (<NumberFormat
            value={isNaN(getOnlyNumbers(numValue)) ? '' : getOnlyNumbers(numValue)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />);
        //console.log('numStr:: ', numStr)
        return numStr.props.value ? numStr : '';
    }

    const applySetOptions = (paramObj) => {
        setOptionsSummary(prev => ({
            ...prev,
            ...paramObj
        }));

        const postData = {
            setOptionsId: 0,
            summaryTargetCarry: parseFloat(targetAmount),
            summaryTargetNetting: optionsSummary.targetLossRecoupment,
            summaryTargetExpenseGiveBack: optionsSummary.targetAFE,
            carryTargetCary: isTargetCarry,
            carryTargetCarryAmount: (targetAmount && targetAmount.props && targetAmount.props.value) || 0,
            nettingPortfolioTargetAmt: portfolioTargetAmt,
            nettingTargetPercent: targetPercent,
            nettingSumTarget: data[0].nettingSumTarget,
            nettingTable: [
                {
                    id: 0,
                    deal: data[0].nettingTable[0].deal,
                    tranche: data[0].nettingTable[0].tranche,
                    remainingLoss: data[0].nettingTable[0].remainingLoss,
                    targetAmt: data[0].nettingTable[0].targetAmt,
                    targetPercentage: data[0].nettingTable[0].targetPercentage,
                    setOptionsId: 0
                },
                {
                    id: 1,
                    deal: data[0].nettingTable[1].deal,
                    tranche: data[0].nettingTable[1].tranche,
                    remainingLoss: data[0].nettingTable[1].remainingLoss,
                    targetAmt: data[0].nettingTable[1].targetAmt,
                    targetPercentage: data[0].nettingTable[1].targetPercentage,
                    setOptionsId: 0
                },
                {
                    id: 0,
                    deal: data[0].nettingTable[2].deal,
                    tranche: data[0].nettingTable[2].tranche,
                    remainingLoss: data[0].nettingTable[2].remainingLoss,
                    targetAmt: data[0].nettingTable[2].targetAmt,
                    targetPercentage: data[0].nettingTable[2].targetPercentage,
                    setOptionsId: 0
                }
            ],
            expenseGivebackSumTotal: data[0].nettingSumTarget
        }

        setOptionsMutation.mutate(postData, {
            onSuccess: (resp) => {
                console.log('applySetOptions Resp::', resp);
                if ((resp.status === 200 && resp.data) || (resp.status === 201 && resp.statusText === 'Created')) {
                    console.log("POST SetOptions called successfully");
                }
                else {
                    console.log("POST SetOptions call failed");
                }
            },
            onError: (err) => {
                console.log("Issue in login");
            }
        }
        );
    }

    return (
        <Container fluid className="ps-0 pe-0 set-options-container">
            {/* <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                <h4 className = "setOptions-h4">Set Options</h4>
            </div> */}
            <Container fluid className="ps-0 pe-0 set-options-summ-container">
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th colSpan="2">Options Summary</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Target Carry</td>
                            <td id='targetCarryTxt'>{optionsSummary.carryOption}</td>
                        </tr>
                        <tr>
                            <td>Target Netting</td>
                            <td id='targetNettingTxt'>
                                {getFormattedNumber(optionsSummary.targetLossRecoupment) || '-'}</td>
                        </tr>
                        <tr>
                            <td> Target Expense Giveback</td>
                            <td id='targetExpenseGvBkTxt'>
                                {getFormattedNumber(optionsSummary.targetAFE) || '-'}</td>
                        </tr>

                    </tbody>

                </table>

                {/* <hr style={{ width: '100%', margin: '8px 0px' }}></hr> */}
                <div className="set-options-tab-container">
                    {/* <Collapsible 
                        className="collapsible-2"
                        trigger={<p style={{ fontWeight: '600',fontSize: '16px', }}>
                        Carry Options&nbsp;
                        <i class="fa fa-chevron-down" style={{fontSize:'15px'}}></i>
                        <br></br>
                        
                    </p>}> */}
                    <div className="set-options-tab-btn-container">
                        <button id='carryTabBtn' className={activeBtn === "carryOptions" ? "setoption-btn active" : "setoption-btn"}
                            onClick={() => { setActiveBtn('carryOptions') }}>
                            <span>&nbsp;&nbsp;Carry</span>
                        </button>
                        <button id='nettingTabBtn' className={activeBtn === "lossRecoupOptions" ? "setoption-btn active" : "setoption-btn"}
                            onClick={() => { setActiveBtn('lossRecoupOptions') }}>
                            <span>&nbsp;&nbsp;Netting</span>
                        </button>
                        <button id='expenseGvBkTabBtn' className={activeBtn === "aFEOptions" ? "setoption-btn active" : "setoption-btn"}
                            onClick={() => { setActiveBtn('aFEOptions') }}>
                            <span>&nbsp;&nbsp;Expense Giveback</span>
                        </button>
                    </div>

                    <div className="set-options-tab-view-container">
                        {activeBtn === "carryOptions" && <div>
                            {/* <p style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '16px', marginBottom: '12px' }}>
                                Carry Options&nbsp;
                                {/* <i class="fa fa-chevron-down" style={{ fontSize: '15px' }}></i> * /}
                            </p> */}
                            <br></br>

                            <div className="carry-options">
                                <div className="collapse-carry target-carry" style={{
                                    backgroundColor: isTargetCarry ? '#FCF0FD' : '#FFF', borderRadius: isTargetCarry ? '4px' : '8px',
                                    border: isTargetCarry ? '1px solid #64b54d' : '1px solid #E5E7EB',
                                    boxShadow: isTargetCarry ? 'none' : '0px 1px 2px rgba(16, 24, 40, 0.05)'
                                }}
                                    onClick={() => setTargetCarry(true)}>

                                    <input id='targetCarryRadioBtn' type="radio" value="targetCarry" name="CarryOption" onClick={() => setTargetCarry(true)}
                                        checked={isTargetCarry} onChange={() => { }}
                                        style={{ accentColor: '#64b54d' }} />
                                    <span className="d-none d-sm-inline" style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                                        Target Carry Amount
                                    </span>
                                    <span className="d-inline d-sm-none" style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                                        Target Carry
                                    </span>
                                </div>
                                <div className="collapse-carry max-carry" style={{
                                    backgroundColor: isTargetCarry ? '#FFF' : '#FCF0FD', borderRadius: isTargetCarry ? '8px' : '4px',
                                    border: isTargetCarry ? '1px solid #E5E7EB' : '1px solid #64b54d',
                                    boxShadow: isTargetCarry ? '0px 1px 2px rgba(16, 24, 40, 0.05)' : 'none'
                                }}
                                    onClick={() => setTargetCarry(false)}>

                                    <input id='maxCarryRadioBtn' type="radio" value="MaxCarry" name="CarryOption" onClick={() => setTargetCarry(false)}
                                        checked={!isTargetCarry} onChange={() => { }}
                                        style={{ accentColor: '#64b54d' }} />
                                    <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>Max Carry
                                    </span>
                                </div>
                            </div>

                            {
                                isTargetCarry ?
                                    <div style={{ /*position : 'relative', bottom : '0px'*/ }}>
                                        {/* <div className="collapse-carry-3" style={{ marginBottom : '0'}}> */}
                                        <label
                                            style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#6B7280', }}>
                                            Enter Target Carry</label>
                                        <input id='targetAmtTxtip' type="text" placeholder="Enter Amount" className="amount-textbox"
                                            //value={targetAmount}
                                            onChange={(e) => {
                                                setTargetAmount(
                                                    <NumberFormat
                                                        value={isNaN(getOnlyNumbers(e.target.value)) ? '' : getOnlyNumbers(e.target.value)}
                                                        displayType={"text"}
                                                        thousandSeparator={true}
                                                        prefix={"$"}
                                                    />)
                                                // setTargetAmount(e.target.value);
                                            }}
                                        />
                                        <button id='applyTargetAmtBtn' className="apply-button"
                                            onClick={() => applySetOptions({ carryOption: targetAmount })
                                            }>Apply</button>
                                        {/* </div> */}
                                    </div>
                                    :
                                    <div className="apply-btn-container">
                                        <button id='applyMaxBtn' className="apply-button"
                                            onClick={() =>
                                                applySetOptions({ carryOption: 'Max' })
                                            }>Apply</button>
                                        <br></br>
                                    </div>
                            }
                            {/* <hr style={{ width: '100%', marginTop: '18px', marginBottom: '8px' }}></hr> */}
                        </div>
                        }
                        {/* </Collapsible> */}

                        {/* <Collapsible          
                            trigger={<p style={{ fontWeight: '600',fontSize: '16px',}}>
                            Loss Recoupment Options&nbsp;
                            <i class="fa fa-chevron-down" style={{fontSize:'15px'}}></i>
                            <br></br>                            
                        </p>}> */}
                        {activeBtn === "lossRecoupOptions" && <div>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
                                {/* <p style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '16px', marginBottom: '12px', width: '47%' }}>
                                    Loss Recoupment Options&nbsp;
                                    <i class="fa fa-chevron-down" style={{ fontSize: '15px' }}></i>
                                    <br></br>
                                    <span className="set-options">Set Options</span></p> */}

                                <div className="portfolio-align-right">
                                    <div>
                                        <label className="portfolio-label">Portfolio level Target Amount</label>
                                        <input id='portfoLvlTrgtAmtTxtip' type="text" placeholder="Enter Amount" className="portfolio-textbox"
                                            value={portfolioTargetAmt}
                                            onChange={(e) => { setPortfolioTargetAmt(e.target.value) }} />
                                    </div>
                                    {/* <div style={{ position : 'relative', left: '210px', bottom:'63px'}}> */}
                                    <div>
                                        <label className="portfolio-label">Target Percentage</label>
                                        <input id='targetPercentageTxtip' type="text" placeholder="Enter %" className="portfolio-textbox"
                                            value={targetPercent}
                                            onChange={(e) => { setTargetPercent(e.target.value) }} />
                                    </div>
                                </div>
                            </div>
                            <div className="loss-recoupment-table-container">
                                <table
                                    className="table  table-shadow loss-recoupment-table"
                                    style={{
                                        marginBottom: '0px'
                                    }}
                                >
                                    <thead className="table-loss-recoupment-header" >
                                        {/* <th className="table-loss-recoupment-th"></th> */}
                                        <tr>
                                            <th className="table-loss-recoupment-th" style={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Deal</th>
                                            <th className="table-loss-recoupment-th" style={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Tranche</th>
                                            <th className="table-loss-recoupment-th" style={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Remaining Loss</th>
                                            <th className="table-loss-recoupment-th" style={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Target Amount ($)</th>
                                            <th className="table-loss-recoupment-th" style={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Target Percentage (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data[0] && data[0].nettingTable.map((item, index) => {
                                            return <tr className="table-loss-recoupment" key={'netting-' + index}>
                                                <td style={{ color: '#5D6E82', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>{item.deal}</td>
                                                <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>{item.tranche}</td>
                                                <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>
                                                    <NumberFormat
                                                        value={item.remainingLoss}
                                                        displayType={"text"}
                                                        thousandSeparator={true}
                                                        prefix={"$"} suffix={".00"} />
                                                </td>
                                                <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px', color: '#EA3323' }}>
                                                    <NumberFormat
                                                        value={item.targetAmt}
                                                        displayType={"text"}
                                                        thousandSeparator={true}
                                                        prefix={"$"} suffix={".00"} />
                                                </td>
                                                <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>{item.targetPercentage + ' %'}</td>
                                            </tr>
                                        })}
                                        {/* <tr className="table-loss-recoupment">
                                            {/* <td><input type="radio" name="loss-recoupment" /></td> * /}
                                            <td style={{ color: '#5D6E82', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>Inv A</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>Inv A - T1</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>$ 3,711,885.00</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px', color: '#EA3323' }}>$ 11,885.00</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>1.15 %</td>
                                        </tr>
                                        <tr className="table-loss-recoupment">
                                            {/* <td><input type="radio" name="loss-recoupment" /></td> * /}
                                            <td style={{ color: '#5D6E82', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>Inv B</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>Inv B - T1</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>$ 3,711,885.00</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px', color: '#EA3323' }}>$ 11,885.00</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>2.14 %</td>
                                        </tr>
                                        <tr className="table-loss-recoupment">
                                            {/* <td><input type="radio" name="loss-recoupment" /></td> * /}
                                            <td style={{ color: '#5D6E82', fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>Inv C</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>Inv C - T1</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>$ 3,711,885.00</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px', color: '#EA3323' }}>$ 11,885.00</td>
                                            <td style={{ fontWeight: '500', fontSize: '14px', lineHeight: '24px' }}>1.89 %</td>
                                        </tr> */}
                                        <tr style={{ height: '41px' }} />
                                    </tbody>
                                </table>
                            </div>
                            <div className="total-bar" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <span style={{ fontWeight: '500', fontSize: '14px' }}>Total Loss Recoupment</span>
                                <span style={{ fontWeight: '500', fontSize: '14px' }}>Sum Target :
                                    <span id='sumTargetTxt' style={{ color: '#EA3323' }}>&nbsp;&nbsp;{getFormattedNumber(data[0].nettingSumTarget)}</span>
                                </span>
                            </div>
                            <button id='applyNettingBtn' className="apply-button" onClick={() => {
                                applySetOptions({
                                    targetLossRecoupment: data[0].nettingSumTarget//'$(11,135,655)'
                                })
                            }} style={{ position: 'static', margin: '15px 0' }}>Apply</button>

                            {/* <hr style={{ width: '100%', margin: '20px 0px 10px'/* marginTop: '0px', position : 'relative', bottom : '20px'* / }}></hr> */}
                        </div>
                        }
                        {/* </Collapsible> */}

                                        {/* <Collapsible trigger={<p style={{ fontWeight: '600',fontSize: '16px', }}>
                            AFE Options&nbsp;
                            <i class="fa fa-chevron-down" style={{fontSize:'15px'}}></i>
                            
                        </p>}> */}
                        {activeBtn === "aFEOptions" && <div>
                            {/* <p style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '16px', marginBottom: '12px' }}>
                            AFE Options&nbsp; */}
                            {/* <i class="fa fa-chevron-down" style={{ fontSize: '15px' }}></i> */}
                            {/* <span className="set-options">Set Options</span> */}
                            {/* </p> */}

                            <div className="total-bar-AFE" style={{
                                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%',
                                padding: '12px 16px', margin: '12px 0px'
                            }}>
                                <span>Expense Giveback Summary</span>
                                <span>Sum Target:
                                    <span id='expenseGvBkTxt' style={{ color: '#EA3323' }}>&nbsp;&nbsp;{getFormattedNumber(data[0].expenseGivebackSumTotal)}</span>
                                </span>
                            </div>
                            <button id='ApplyExpenseGvBkBtn' className="apply-button" onClick={() => {
                                applySetOptions({
                                    targetAFE: data[0].expenseGivebackSumTotal//'$3,711,885.00'
                                })
                            }} style={{ position: 'static', marginTop: '15px' }}>Apply</button>
                            {/* </Collapsible> */}
                        </div>}
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default SetOptions