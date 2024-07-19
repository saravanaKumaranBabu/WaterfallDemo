import React, { useEffect, useState } from 'react';

import DynamicTableRows from './DynamicTableRows';


const ScenarioWizard = () => {
    // { fundData}
    // console.log("h,funddata", h, fundData)
    const [name, setName] = useState('');
    const [dateInput, setDate] = useState(new Date().toLocaleDateString('en-CA'));
    //const [message, setMessage] = useState('');
    const [basicTransaction] = useState({
        transactionId: '1800097E87',
        transactionDate: '12/14/2018',
        effectiveDate: '03/28/2019'
    })

    const [rowDataList, setRowDataList] = useState([
        { event: 'Management Fee', date: '11/23/2022', amount: '$ 234,123' },
        { event: 'Drawdown for Expenses', date: '09/05/2022', amount: '$ 145,989' },
        { event: 'Investment', date: '09/05/2022', amount: '$ 121,989' },
        { event: 'Disposition', date: '09/05/2022', amount: '$ 380,989' }
    ]) //holds the list of newly added events by user

    // const addScenarioMutation = useAddScenario();
    // fundData.fundData.amount = '$ 123,123,12';
    // fundData.fundData.event = 'Distribution';

    useEffect(() => {

        // run function when component unmounts
        return () => {
            //alert("on unmount");
            let newObject = {
                id: Math.random(),
                name: name,
                date: dateInput,
                basicTransaction,
                newTransactions: rowDataList
            }
            localStorage.setItem('Scenario', JSON.stringify(newObject));
        }
    }, [rowDataList, basicTransaction, dateInput, name]);


    // const handleSaveJson = () => {
    //     // console.log("rowdatalist", rowDataList)
    //     let newObject = {
    //         ...rowDataList,
    //         name: name,
    //         date: dateInput,
    //         id: Math.random(),
    //     }
    //     localStorage.setItem('Scenario', JSON.stringify(newObject))
    //     setMessage('Data saved successfully');
    //     rowDataList ?
    //         alert(message)
    //         :
    //         alert('no data entered')
    // }
    // const handleFetchJson = () => {
    //     let item = localStorage.getItem('Scenario')
    //     console.log("item", item)
    // }

    return <div className="container-fluid pe-0 ps-0 scenario-container" style={{ height: '485px', overflowY: 'scroll' }}>
        <div className="scenario-header" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'auto',
            width: '94%', margin: 'auto', backgroundColor: '#FFF'
        }}>
            {/* <h3 className='m-0' style={{padding: '12px 0px'}}>Scenario</h3> */}
            {/* <span style= {{ fontWeight: "500", color: "#6B7280"}}>🛈 Derived Output</span> */}

        </div>
        <hr style={{ marginTop: '0', backgroundColor: '#F9FAFB' }}></hr>
        <div className='scenario-body' style={{}}>
            <div style={{ fontWeight: "600", fontSize: "16px", color: "#181C32" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p> Name: &nbsp;
                        {/* <span style={{ float : "right"}}>{name}</span> */}
                    </p>
                    <input id='nameTxtip' className="form-control" type="text" style={{ width: '200px' }} onChange={(e) => setName(e.target.value)} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <p> Date: &nbsp;&nbsp;&nbsp;
                        {/* <span style={{ float : "right"}}>{date}</span> */}
                    </p>
                    <input id='dateTxtip' className="form-control" type="date" value={dateInput}
                        defaultValue={new Date().toLocaleDateString('en-US')}
                        onChange={(e) => setDate(e.target.value)} style={{ width: '200px' }} />
                </div>
            </div>
            {/* <p className="info">🛈 Selected option will show you how much of losses you can bear with these transactions. 
                        For ex. take a certain percentage and manage the <br></br>risk</p> */}
            <div style={{ backgroundColor: '#F9FAFB', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '8px 16px', margin: '10px 0' }}>
                <h6>Basis</h6>
                <hr></hr>
                <table style={{ width: '100%' }} className="basis-table">
                    <tr >
                        <td className="basis-table-td-left">Transaction ID:</td>
                        <td id='transactionIdTxt' className="basis-table-td-right" style={{ color: '#115AC8' }}>{basicTransaction.transactionId}</td>
                        {/* <td className="basis-table-td-left" style={{ paddingLeft : '60px'}}>Event:</td>
                            <td className="basis-table-td-right">
                                {/* {fundData.fundData.event} * /}

                                
                            </td> */}
                    </tr>
                    <tr>
                        <td className="basis-table-td-left">Transaction Date:</td>
                        <td id='transactionDateTxt' className="basis-table-td-right">{basicTransaction.transactionDate}</td>
                        {/* <td className="basis-table-td-left" style={{ paddingLeft : '60px' }}>Amount:</td>
                            <td className="basis-table-td-right" 
                                style = {{ textAlign : 'right', 
                                // color: (fundData.fundData.amount > 0) ?'blue':'#FE2762'
                                }}>
                            </td> */}
                        {/* {
                            (fundData.fundData.amount > 0) ?
                                <NumberFormat
                                value={fundData.fundData.amount}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            :
                            <NumberFormat
                                value={Math.abs(fundData.fundData.amount)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$("}
                                suffix={")"}
                            />
                            }
                            */}
                    </tr>
                    <tr>
                        <td className="basis-table-td-left">Effective Date:</td>
                        <td id='effectiveDateTxt' className="basis-table-td-right">{basicTransaction.effectiveDate}</td>
                    </tr>
                </table>
            </div>
            <hr></hr>
            {/* <Collapsible trigger={
                    <p style={{ color : '#181C32', fontWeight: '600'}}>Txns&nbsp;<i class="fa fa-chevron-down" style={{fontSize:'15px'}}></i>
                    <br></br><span className="set-options">Set Options</span>
                    </p>
                    }> */}
            <div style={{ position: 'relative' }}>
                <p style={{ color: '#181C32', fontWeight: '600' }}>Transactions</p>
                <DynamicTableRows rowDataList={rowDataList} setRowDataList={setRowDataList}></DynamicTableRows>
                {/* </Collapsible> */}
            </div>
            <br></br>
            {/* <span style={{ display : 'inline', color : 'green'}}>{message}</span> */}
            {/* <div style= {{ marginBottom : '100px'}} >
                    <button className="save-button" onClick={ handleSaveJson }><span >Save</span></button>
                    <button className="runWF-button" onClick={ handleFetchJson}><span className="runWF-text"></span>Run WF</button>
                </div> */}
        </div>
    </div>
}

export default ScenarioWizard;