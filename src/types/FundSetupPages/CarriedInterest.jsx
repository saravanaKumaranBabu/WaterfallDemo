import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
//import { ApplyCarriedIntertest } from '../../Hooks/FundHooks';
import chevronDown from "../../main/Images/Chevron-down.svg";
import { useAddCarriedInterest, useFetchCarriedInterest } from "../../Hooks/FundHooks";


const CarriedInterestComp = (props) => {

    //const [dropdown, setDropdown] = useState(false);
    //const toggleOpen = () => setDropdown(!dropdown);

    const [interim, setInterim] = useState('Interim');

    const { data } = useFetchCarriedInterest();
    // console.log("caaried interst", data)


    const applyCarriedInterestMutation = useAddCarriedInterest();

    const [pref, setPref] = useState(0);
    const [fullPromote, setFullPromote] = useState(0);
    const [catchupRate, setCatchup] = useState();
    const [catchUpEnd, setCatchUpEnd] = useState()
    const [frontEndClawback, setFrontEndClawback] = useState();
    const [backEndClawback, setBackEndClawback] = useState();

    useEffect(() => {
        if (data) {
            setPref(data[0].preferredReturn)
            setFullPromote(data[0].fullPromote)
            setCatchup(data[0].catchUpRate)
            setCatchUpEnd(data[0].catchUpEnd)
            setFrontEndClawback(data[0].frontendClawBack)
            setBackEndClawback(data[0].backendClawBack)
        }
    }, [data])


    useEffect(() => {
        let temp = ((fullPromote * pref) / (catchupRate - fullPromote));
        temp = (parseFloat(pref) + parseFloat(temp));
        temp = Number(temp).toPrecision(4);
        if (!isNaN(temp)) {
            setCatchUpEnd(temp)
        }
        else {
            setCatchUpEnd(0)
        }

    }, [pref, fullPromote, catchupRate]);

    const handleSubmit = (e) => {
        console.log("submitted")

        let postData = {
            //             "carriedInterestId": Math.random(),
            //   "preferredReturn": pref,
            //   "fullPromote": fullPromote,
            //   "catchupRate": catchUp,
            //   "catchupEnd": catchUpEnd,
            //   "clawBack": interim,
            //   "frontendClawBack": frontEndClawback,
            //   "backendClawBack": backEndClawback
            preferredReturn: pref,
            fullPromote: fullPromote,
            catchUpRate: catchupRate,
            catchUpEnd: catchUpEnd,
            clawBack: interim,
            frontEndClawBack: frontEndClawback,
            backEndClawBack: backEndClawback
        }
        applyCarriedInterestMutation.mutate(postData);
    }

    return (
        <>
            <div className="container-fuild ps-0 pe-0 carried-interest" style={{}}>
                <table className="transaction-table" style={{
                    width: '100%', display: 'table', padding: '10px 18px 6px',
                    border: '1px solid #E7E8FC', borderRadius: '8px', background: '#F9FAFB', marginTop: '15px'
                }}>
                    <tbody>
                        <tr>
                            <td style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px' }}>Preferred Return (%)</td>
                            <td style={{ textAlign: 'right', fontWeight: '500' }}>
                                <input id='preferredRetTxtip' type="text" placeholder="" className="amount-textbox"
                                    value={pref}
                                    style={{}}
                                    onChange={(e) => {
                                        setPref(e.target.value)
                                        // setTargetAmount(
                                        //     <NumberFormat
                                        //         value={e.target.value}
                                        //         displayType={"text"}
                                        //         thousandSeparator={true}
                                        //         prefix={"$"}
                                        //     />)
                                        // setTargetAmount(e.target.value)
                                    }} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px' }}>Full Promote (%)</td>
                            <td style={{ textAlign: 'right', fontWeight: '500' }}>
                                <input id='fullPromoteTxtip' type="text" placeholder="" className="amount-textbox"
                                    value={fullPromote}
                                    style={{}}
                                    onChange={(e) => { setFullPromote(e.target.value) }} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{
                                fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px',
                                paddingBottom: '10px', borderBottom: '1px solid #E5E7EB'
                            }}>Catch-up Rate (%)  </td>
                            <td style={{ textAlign: 'right', fontWeight: '500', paddingBottom: '10px', borderBottom: '1px solid #E5E7EB' }}>
                                <input id='catchupRateTxtip' type="text" placeholder="" className="amount-textbox"
                                    value={catchupRate}
                                    style={{}}
                                    onChange={(e) => { setCatchup(e.target.value) }} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px' }}>Catch-up End (%)  </td>
                            <td style={{ textAlign: 'right', fontWeight: '500' }}>
                                <input id='catchupEndTxtip' type="text" placeholder="" className="amount-textbox catch-up-end-text"
                                    value={catchUpEnd}
                                    style={{}}
                                    onChange={(e) => { setCatchUpEnd(e.target.value) }}
                                // disabled value="$ 0.00"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="transaction-table" style={{
                    width: '100%', display: 'table', padding: '10px 18px 6px',
                    border: '1px solid #E7E8FC', borderRadius: '4px', background: '#F0F5FD', marginTop: '15px'
                }}>
                    <tbody>
                        <tr>
                            <td style={{
                                fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px',
                                borderBottom: '1px solid #E5E7EB', paddingBottom: '15px'
                            }}>Clawback
                            </td>
                            <td style={{
                                fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px',
                                borderBottom: '1px solid #E5E7EB', paddingBottom: '15px'
                            }}>
                            </td>


                        </tr>
                        <tr>
                            <td style={{
                                fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px',
                                paddingBottom: '10px', paddingTop: '15px'
                            }}>
                                Clawback Trigger
                            </td>
                            <td style={{ display: 'flex', paddingTop: '12px', float: 'right', fontWeight: '500' }}>
                                <span>{interim}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {/* <div 
                                className = "carriedInterest-dropdown" onClick = {toggleOpen} style={{ borderBottomWidth : '0px'}}>
                                 <img src={chevronDown} alt="chevrondown"/>
                            </div> */}
                                <div style={{}}>
                                    <Dropdown id="clawbackTriggerDropdown" style={{}} className='dropEnd'>
                                        <Dropdown.Toggle variant="success" id="approvalDropdown5" style={{
                                            height: '27px', width: '27px', background: '#FFF', padding: '0px',
                                            boxShadow: '0px 8px 12px -2.4px rgba(0, 0, 0, 0.1), 0px 3.2px 4.8px -1.6px rgba(0, 0, 0, 0.05), 0px 0px 0px 0.8px rgba(0, 0, 0, 0.05)',
                                            border: 'none', borderRadius: '50px', color: '#64b54d', fontWeight: '500', fontSize: '14px', lineHeight: '16px'
                                        }}>
                                            <img alt='dropdownIcon' src={chevronDown} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu id="approvalDropdown5Menu" style={{ padding: '0px', marginBottom: '-130px' }} align="end">
                                            <Dropdown.Item style={{
                                                padding: '12px 24px', width: '243px', height: '48px',
                                                background: '#fff', borderRadius: '6px 6px 0 0'
                                            }}
                                                onClick={() => { setInterim('Interim'); }}>Interim</Dropdown.Item>
                                            <Dropdown.Item style={{
                                                padding: '12px 24px', width: '243px', height: '48px',
                                                background: '#fff', borderTop: '1px solid #E5E7EB',
                                                borderRadius: '0 0 8px 8px'
                                            }}
                                                onClick={() => { setInterim('End of Life'); }}>End of Life</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </td>
                        </tr>
                        {
                            // dropdown &&
                            // <ul className="carriedInterest-dropdown-ul">
                            //     <li className="fee-dropdown-menu" 
                            //     style={{ 
                            //         fontFamily: 'Roboto',
                            //     fontStyle: 'normal',
                            //     fontWeight: '500',
                            //     fontSize: '14px',
                            //     lineHeight: '24px',

                            //     color: '#64b54d'
                            // }}
                            //         onClick ={
                            //             ()=>{
                            //                 toggleOpen();
                            //                 setInterim('Interim')
                            //             }
                            //         }
                            //     >
                            //        Interim
                            //     </li>
                            //     <li className="fee-dropdown-menu" style={{ 
                            //         fontFamily: 'Roboto',
                            //     fontStyle: 'normal',
                            //     fontWeight: '500',
                            //     fontSize: '14px',
                            //     lineHeight: '24px',

                            //     color: '#64b54d'}}
                            //         onClick ={
                            //             ()=>{
                            //                 toggleOpen();
                            //                 setInterim('End of Life')
                            //             }
                            //         }
                            //     >
                            //         End Of Life
                            //     </li>
                            // </ul>

                        }

                        <tr>
                            <td style={{
                                fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px',
                                paddingBottom: '5px',
                            }}>Front-end Clawback</td>
                            <td style={{ textAlign: 'right', fontWeight: '500', }}>
                                <input id='frontendClawbckTxtip' type="text" placeholder="" className="amount-textbox"
                                    value={frontEndClawback || ''}
                                    style={{}}
                                    onChange={(e) => { setFrontEndClawback(e.target.value) }} />
                            </td>
                        </tr>

                        <tr>
                            <td style={{
                                fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px',
                                paddingBottom: '10px',
                            }}>Back-end Clawback</td>
                            <td style={{ textAlign: 'right', fontWeight: '500', paddingBottom: '10px', }}>
                                <input id='backendClawbckTxtip' type="text" placeholder="" className="amount-textbox"
                                    value={backEndClawback || ''}
                                    style={{}}
                                    onChange={(e) => { setBackEndClawback(e.target.value) }} />
                            </td>
                        </tr>

                    </tbody>
                </table>

                {/* <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '12px' }}>
                    <p style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', marginBottom: '12px', width: '47%' }}>
                        Enter Clawback Inputs&nbsp;                       
                    </p>
                    <div className="portfolio-align-right" style={{ position: 'static', width: '53%', display: 'flex', gap: ' 25px', justifyContent: 'space-between' }}>
                        <div>
                            <label className="portfolio-label">Front-end Clawback</label>
                            <input type="text" placeholder="Enter Amount" className="portfolio-textbox" />
                        </div>                        
                        <div>
                            <label className="portfolio-label">Back-end Clawback</label>
                            <input type="text" placeholder="Enter Amount" className="portfolio-textbox" />
                        </div>
                    </div>
                </div> */}

                {/* <hr style={{ width: '100%', margin: '20px 0px 10px' }}></hr> */}
                <button id='applyCarriedIntBtn' className="apply-button" onClick={() => handleSubmit()} style={{ position: 'static', marginTop: '15px' }}>
                    Apply</button>

            </div>
        </>
    )
}

export default CarriedInterestComp;
