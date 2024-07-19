import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Vector177 from "../../main/Images/Vector 177.svg";

const ROCAccordion = (props) => {

    const [ROCInputs, setROCInputs] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false
    })

    return (
        <>
            <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
                <div>
                    <div className="vl-reverse" style={{ left: '30px', bottom: '259px', height: '290px' }}></div>
                    <button className="plus" style={{
                        position: 'static',
                        boxShadow: '0px 8.14815px 6.51852px rgb(41 72 152 / 9%), 0px -3.14815px 3.14815px rgb(41 72 152 / 5%)'
                    }}>
                        <img src={Vector177} alt="vector" style={{ float: 'center' }} />
                    </button>
                </div>
                <Card className="footer-card" style={{ borderRadius: '8px', width: '100%', margin: '0px', padding: '10px' }}>
                    <div className="gross-proceeds-details" style={{ display: 'flex', flexDirection: 'column', padding: '0px', 
                        margin: '0px', height: 'auto', width: '100%' }}>
                        <p className="gross-proceeds-text" style={{ marginBottom: '12px', fontSize: '16px' }}>ROC</p>
                        <table>
                            <tr>
                                <td style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 2px 14px' }}
                                    className="left-accordion-col"
                                    onClick={() => {
                                        setROCInputs(ROCInputs => ({
                                            input1: !ROCInputs.input1,

                                        }))
                                    }}>Value1
                                    <span className="right-accordion-col" style={{ marginLeft: '0px' }}>$ 1,234,567.89</span>
                                </td>
                            </tr>

                            <tr>
                                <td style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 2px 12px' }}
                                    className="left-accordion-col"
                                    onClick={() => {
                                        setROCInputs(ROCInputs => ({
                                            input2: !ROCInputs.input2,

                                        }))
                                    }}>Value2
                                    <span className="right-accordion-col" style={{ marginLeft: '0px' }}>$ 1,234,567.89</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </Card>
            </div>
            {
                ROCInputs.input1 && <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
                    <div className="vl-reverse-sub" style={{ left: '30px', bottom: '127px', height: '92px' }}></div>
                    <button className="plus" style={{
                        position: 'static',
                        boxShadow: '0px 8.14815px 6.51852px rgb(41 72 152 / 9%), 0px -3.14815px 3.14815px rgb(41 72 152 / 5%)'
                    }}>
                        <img src={Vector177} alt="vector" style={{ float: 'center' }} />
                    </button>
                    <Card className="footer-card" style={{ width: '100%', margin: '0px', padding: '12px' }}>
                        <p style={{ margin: '0px' }}>Value1 data goes here</p>
                    </Card>
                </div>
            }
            {
                ROCInputs.input2 && <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
                    <div className="vl-reverse-sub" style={{ left: '30px', bottom: '127px', height: '92px' }}></div>
                    <button className="plus" style={{
                        position: 'static',
                        boxShadow: '0px 8.14815px 6.51852px rgb(41 72 152 / 9%), 0px -3.14815px 3.14815px rgb(41 72 152 / 5%)'
                    }}>
                        <img src={Vector177} alt="vector" style={{ float: 'center' }} />
                    </button>
                    <Card className="footer-card" style={{ width: '100%', margin: '0px', padding: '12px' }}>
                        <p style={{ margin: '0px' }}>Value2 data goes here</p>
                    </Card>
                </div>
            }

        </>
    )
}

export default ROCAccordion;