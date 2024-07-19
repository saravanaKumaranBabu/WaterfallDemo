import React, { useState } from "react";
import './Modal/Popup.css';
// import useCollapse from 'react-collapse';
import Collapsible from 'react-collapsible';
import NumberFormat from "react-number-format";
import infoCircle from "../main/Images/info-circle.svg";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";

// const styles = theme => ({
//     radio: {
//       '&$checked': {
//         color: 'blue'
//       }
//     },
//     checked: {}
//   })

const SetOptionsWizard = ({ h }) => {

    const [isTargetCarry, setTargetCarry] = useState(true)
    const [targetAmount, setTargetAmount] = useState('Max / $ ---')
    const [optionsSummary, setOptionsSummary] = useState({
        carryOption: 'Max / $ ---',
        targetLossRecoupment: '',
        targetAFE: '',
    })

    const MFEGiveback = "$1,234,567.89";
    const OrgExpGiveback = "$123,45.67";
    const DDEGiveback = "$123,456.78";

    const [AFEOptions, setAFEOptions] = useState({
        MFE: '-',
        Org: '-',
        DDE: '-'
    })

    const getFormattedDate = (date) => {
        let year = date.substr(0, 4);
        let month = date.substr(5, 2);
        let day = date.substr(8, 2);
        return month + "/" + day + "/" + year;
    };


    const handleRadioChange = (e) => {

        const val = e.target.value;
        if (val === 'MFE') {
            setAFEOptions(prev => ({
                ...prev, MFE: MFEGiveback, Org: '-', DDE: '-'
            }))
        }
        else if (val === "Org Exp") {
            setAFEOptions(prev => ({
                ...prev, MFE: '-', Org: OrgExpGiveback, DDE: '-'
            }))
        }
        else {
            setAFEOptions(prev => ({
                ...prev, MFE: '-', Org: '-', DDE: DDEGiveback
            }))
        }
    }

    return (
        <>
            <div>
                <h4 className="setOptions-h4">Set Options</h4>
                <span className="sub-script">
                    <img src={infoCircle} alt="info" style={{ paddingBottom: "2px", width: '18px', height: '18px' }} />

                    Set Options according to your choice
                </span>
            </div>
            <hr></hr>
            <div>
                <button className="save-button"><span >Save</span></button>
                <button className="runWF-button"><span className="runWF-text"></span>Run WF</button>
            </div>

            <table className="transaction-table">
                <thead>
                    <th>Transaction Details</th>
                    <th style={{ borderSpacing: '40px' }}></th>
                    <th>Options Summary</th>
                    <th></th>
                </thead>

                <tbody>
                    <tr>
                        <td>Amount:</td>
                        <td style={{ color: '#D1334A', textAlign: 'right', paddingLeft: '120px', paddingRight: '30px' }}>
                            {/* {getFormattedAmount(h.amount)} */}
                            {
                                (h.amount > 0) ?
                                    <NumberFormat
                                        value={h.amount}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    :
                                    <NumberFormat
                                        value={Math.abs(h.amount)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$("}
                                        suffix={")"}
                                    />
                            }
                        </td>
                        <td>Carry Option</td>
                        <td style={{ textAlign: 'right', paddingLeft: '120px' }}>{optionsSummary.carryOption}</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'normal' }}>Source Status:</td>
                        <td style={{ textAlign: 'right', paddingRight: '30px' }}>-</td>
                        <td style={{ fontWeight: 'normal' }}>Target Loss Recoupment</td>
                        <td style={{ textAlign: 'right' }}>{optionsSummary.targetLossRecoupment}</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'normal' }}>Event:</td>
                        <td style={{ color: '#115AC8', textAlign: 'right', paddingRight: '30px' }}>{h.event}</td>
                        <td style={{ fontWeight: 'normal' }}> Target AFE :  </td>
                        <td style={{ textAlign: 'right', paddingRight: '10px', fontWeight: 'normal' }}>{optionsSummary.targetAFE}</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'normal' }}>GL Date:</td>
                        <td style={{ textAlign: 'right', paddingRight: '30px' }}>{getFormattedDate(h.gldate)}</td>
                        <td style={{ fontWeight: 'normal' }}>Mfee GB</td>
                        <td style={{ textAlign: 'right' }}>{AFEOptions.MFE === '-' ? 'No' : 'Yes'}</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'normal' }}>Effective Date:</td>
                        <td style={{ textAlign: 'right', paddingRight: '30px', fontWeight: 'normal' }}>{getFormattedDate(h.effectiveDate)}</td>
                        <td style={{ fontWeight: 'normal' }}>Org Exp GB</td>
                        <td style={{ textAlign: 'right' }}>{AFEOptions.Org === '-' ? 'No' : 'Yes'}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td style={{ fontWeight: 'normal' }}>DDE GB</td>
                        <td style={{ textAlign: 'right' }}>{AFEOptions.DDE === '-' ? 'No' : 'Yes'}</td>
                    </tr>

                </tbody>

            </table>

            {/* <table className = "AFE-options-summary" >
            <tr >
                <td style= {{  fontWeight: 'normal'}}>Mfee GB:</td>
                <td style={{ paddingLeft : '62px'}}>{AFEOptions.MFE === '-' ? 'No' : 'Yes'}</td>
            </tr>
            <tr>
                <td style= {{  fontWeight: 'normal'}}>Org Exp GB:</td>
                <td style={{ paddingLeft : '62px'}}>{AFEOptions.Org === '-' ? 'No' : 'Yes'}</td>
            </tr>
            <tr>
                <td style= {{  fontWeight: 'normal'}}>DDE GB:</td>
                <td style={{ paddingLeft : '62px'}}>{AFEOptions.DDE === '-' ? 'No' : 'Yes'}</td>
            </tr> 
        </table> */}
            <hr style={{ width: '778px' }}></hr>
            <p className="info">
                <img src={infoCircle} alt="info-circle" style={{ width: "12px", height: "12px" }} />
                Selected option will show you how much of losses you can bear with these transactions.
                For ex. take a certain percentage and manage the<br></br> risk</p>
            <hr style={{ width: '778px' }}></hr>

            <Collapsible
                className="collapsible-2"
                trigger={<p style={{ fontWeight: '600', fontSize: '16px', }}>
                    Carry Options&nbsp;
                    <i className="fa fa-chevron-down" style={{ fontSize: '15px' }}></i>
                    <br></br>
                    {/* <span className="set-options">Set Options</span> */}
                </p>}>
                {/* <br></br> */}
                <div className="collapse-carry">
                    <input type="radio" value="targetCarry" name="CarryOption" onClick={() => setTargetCarry(true)} />
                    <p style={{ position: 'relative', left: '22px', bottom: '26px', fontWeight: "500", paddingBottom: '8px' }}>Target Carry Amount
                        <p style={{ fontWeight: "400", fontSize: '12px', color: "#6B7280" }}>
                            Enter the amount that you want to set carry option with.</p>
                    </p>
                </div>
                <div className="collapse-carry-1" >
                    <input type="radio" value="MaxCarry" name="CarryOption" onClick={() => setTargetCarry(false)} />
                    <p style={{ position: 'relative', left: '22px', bottom: '26px', fontWeight: "500" }}>Max Carry
                        <p style={{ fontWeight: "400", fontSize: '12px', color: "#6B7280" }}>Info regarding max carry option goes here.</p>
                    </p>
                </div>
                {
                    isTargetCarry ?
                        <div style={{ position: 'relative', bottom: '30px' }}>
                            {/* <div className="collapse-carry-3" style={{ marginBottom : '0'}}> */}
                            <label
                                style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#6B7280', }}
                            >
                                Enter Target Carry</label>
                            <input type="text" placeholder="Enter Amount" className="amount-textbox"
                                onChange={(e) => {
                                    setTargetAmount(
                                        <NumberFormat
                                            value={e.target.value}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />)
                                    // setTargetAmount(e.target.value)
                                }}
                            />
                            <button className="apply-button" onClick={
                                () => setOptionsSummary(prev => ({
                                    ...prev,
                                    carryOption: targetAmount
                                }))
                            }>Apply</button>
                            {/* </div> */}
                        </div>
                        :
                        // <div>
                        <button className="apply-button-maxCarry" onClick={() =>
                            setOptionsSummary(prev => ({
                                ...prev, carryOption: 'Max'
                            }))
                        }>Apply</button>
                    // </div>
                }

                <hr style={{ width: '778px', marginTop: '0px', }}></hr>

            </Collapsible>

            <Collapsible

                trigger={<p style={{ fontWeight: '600', fontSize: '16px', }}>
                    Loss Recoupment Options
                    &nbsp;
                    <i className="fa fa-chevron-down" style={{ fontSize: '15px' }}></i>
                    <br></br>
                    {/* <span className="set-options">Set Options</span> */}
                </p>}>
                <br></br>
                <div className="portfolio-align-right">
                    <label className="portfolio-label">Portfolio level Target Amount</label>
                    <input type="text" placeholder="Enter Amount" className="portfolio-textbox" />
                    <div style={{ position: 'relative', left: '210px', bottom: '63px' }}>
                        <label className="portfolio-label">Target Percentage</label>
                        <input type="text" placeholder="Enter %" className="portfolio-textbox" />
                    </div>
                </div>
                <table
                    className="table  table-shadow loss-recoupment-table"
                    style={{
                        position: 'relative',
                        bottom: '80px',
                        //  borderSpacing: '45px 15px', borderCollapse: 'separate',cellPadding : '10px'
                    }}
                >
                    <thead className="table-loss-recoupment-header" >
                        <th className="table-loss-recoupment-th">Loss ID</th>
                        <th className="table-loss-recoupment-th">Deal</th>
                        <th className="table-loss-recoupment-th">Tranche</th>
                        <th className="table-loss-recoupment-th">Remaining Loss</th>
                        <th className="table-loss-recoupment-th">Target Amount ($)</th>
                        <th className="table-loss-recoupment-th">Target Percentage (%)</th>
                    </thead>
                    <tbody>
                        <tr className="table-loss-recoupment">
                            <td>67891</td>
                            <td>Inv A</td>
                            <td>Inv A - T1</td>
                            <td>$ 11,885.00</td>
                            <td>$ 3,711,885.00</td>
                            <td>1.15 %</td>
                        </tr>
                        <tr className="table-loss-recoupment">
                            <td>67994</td>
                            <td>Inv B</td>
                            <td>Inv B - T1</td>
                            <td>$ 11,885.00</td>
                            <td>$ 3,711,885.00</td>
                            <td>2.14 %</td>
                        </tr>
                        <tr className="table-loss-recoupment">
                            <td>71145</td>
                            <td>Inv C</td>
                            <td>Inv C - T1</td>
                            <td>$ 11,885.00</td>
                            <td>$ 3,711,885.00</td>
                            <td>1.89 %</td>
                        </tr>
                    </tbody>
                </table>
                <div className="total-bar" style={{ position: 'relative', bottom: '60px' }}>
                    <p style={{ position: 'relative', top: '29px', fontWeight: '500', fontSize: '14px' }}>Total Loss Recoupment</p>
                    <p style={{ position: 'relative', left: '560px', bottom: '15px', fontWeight: '500', fontSize: '14px' }}>Sum Target:
                        <span style={{ color: 'blue' }}>&nbsp;&nbsp;$(11,135,655)</span></p>
                </div>
                <button className="apply-button-2" onClick={() => {
                    setOptionsSummary(prev => ({
                        ...prev, targetLossRecoupment: '$(11,135,655)'
                    }))
                }}>Apply</button>

                <hr style={{ width: '778px', marginTop: '0px' }}></hr>
            </Collapsible>

            <Collapsible trigger={<p style={{ fontWeight: '600', fontSize: '16px', }}>
                AFE Options&nbsp;
                <i className="fa fa-chevron-down" style={{ fontSize: '15px' }}></i>
                {/* <span className="set-options">Set Options</span> */}
            </p>}>
                {/* <br></br> */}
                {/* <FormControl component="fieldset"> */}
                <RadioGroup
                    name="AFEOptions" style={{ display: 'inline', marginLeft: '15px', marginRight: '10px', }}
                    onChange={handleRadioChange}>
                    <FormControlLabel className="AFE-options-radio" value="MFE"
                        sx={{ color: "#64b54d" }}
                        control={<Radio
                            color="#64b54d"
                        // classNames={{root: classNames.radio, checked: classNames.checked}}
                        // sx={{ color : '#64b54d'}}
                        />}
                        label={<Typography>
                            <b>MFE Giveback</b>
                            <br></br>
                            <span style={{ fontSize: '12px', color: '#5D6E82' }}>Remaining MFee:</span>
                            <br></br>
                            <span style={{ color: 'green' }}><b>$1,234,567.89</b></span>
                        </Typography>}
                    />



                    <FormControlLabel className="AFE-options-radio" value="Org Exp"
                        control={<Radio color="#64b54d" />}
                        style={{ marginLeft: "5px" }}
                        label={<Typography>
                            <b>Org Exp Giveback</b>
                            <br></br>
                            <span style={{ fontSize: '12px', color: '#5D6E82' }}>Remaining MFee:</span>
                            <br></br>
                            <span style={{ color: 'green' }}><b>$123,45.67</b></span>
                        </Typography>} />

                    <FormControlLabel className="AFE-options-radio" value="DDE" control={<Radio color="#64b54d" />}
                        style={{ marginLeft: "5px" }}
                        label={<Typography>
                            <b>DDEGiveback</b>
                            <br></br>
                            <span style={{ fontSize: '12px', color: '#5D6E82' }}>Remaining MFee:</span>
                            <br></br>
                            <span style={{ color: 'green' }}><b>$123,456.78</b></span>
                        </Typography>} />
                </RadioGroup>


                <p style={{ marginTop: '18px' }}><b>AFE Details</b><br></br>
                    <span style={{ fontSize: '12px', lineHeight: '14px', color: '6B7280', }}>
                        <img src={infoCircle} alt="info" style={{ width: '12px', height: '12px', position: 'relative', bottom: '2px' }} />
                        &nbsp;Estimated PNL Incurred</span>
                </p>

                <div className="AFE-details">
                    {/* <p className="AFE-details-left" style={{ marginTop : '16px'}}>MFee GB</p>
             <p className="AFE-details-right" style={{ bottom : '48px'}}>$ 1,234,567.89</p>
             <p className="AFE-details-left" style={{ marginTop : '0'}}>Org Exp Giveback</p>
             <p className="AFE-details-right">-</p> */}
                    <table className="AFE-table">
                        <tr >
                            <td >MFee GB</td>
                            <td style={{ paddingLeft: '200px', color: '#007629' }}>{AFEOptions.MFE}</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: '10px', }}>Org Exp Giveback</td>
                            <td style={{ paddingLeft: '200px', color: '#007629' }}>{AFEOptions.Org}</td>
                        </tr>
                        <tr >
                            <td style={{ paddingTop: '10px' }}>DDE Giveback</td>
                            <td style={{ paddingLeft: '200px', color: '#007629' }}>{AFEOptions.DDE}</td>
                        </tr>
                    </table>
                </div>

                <div className="total-bar-AFE ">
                    <p style={{ fontWeight: '600', fontSize: '14px', float: 'left' }}>AFE Summary</p>
                    <p style={{ fontWeight: '500', fontSize: '14px', float: 'right' }}>Sum Target:
                        <span style={{ color: 'red' }}>&nbsp;&nbsp;$ 3,711,885.00</span></p>
                    <button className="apply-button-3" onClick={() => {
                        setOptionsSummary(prev => ({
                            ...prev, targetAFE: '$3,711,885.00'
                        }))
                    }}>Apply</button>
                </div>

                {/* </FormControl> */}
                {/* <div className="total-bar " style = {{ position : 'relative', bottom : '25px',height : '38px' }}>
         <p style= {{ position : 'relative', top:'54px', fontWeight: '500', fontSize: '14px',}}>AFE Summary</p>
         <p style= {{ position : 'relative', left : '560px', top:'10px',fontWeight: '500', fontSize: '14px',  }}>Sum Target: 
         <span style = {{ color : 'red'}}>&nbsp;&nbsp;$ 3,711,885.00</span></p>
         <button className="apply-button-3" onClick = { ()=> {
            setOptionsSummary( prev => ({
                ...prev, targetAFE : '$3,711,885.00'
            }))
         }}>Apply</button>
         </div> */}
            </Collapsible>
        </>
    )
}

export default SetOptionsWizard