import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const DynamicTableRows = ({ rowDataList, setRowDataList }) => {

    const [addnewRow, setAddNewRow] = useState(false)

    const [newRowData, setNewRowData] = useState({
        event: '',
        date: '',
        amount: '',
    })

    const [errorMessage, setErrorMessage] = useState('')

    const handleAddNewRow = () => {
        setAddNewRow(true)
        setErrorMessage('')
    }

    const handleChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        if (name === "Event") {
            setNewRowData(prev => ({
                ...prev, event: val
            }))
        }
        else if (name === "Date") {
            setNewRowData(prev => ({
                ...prev, date: val
            }))
        }
        else if (name === "Amount") {
            setNewRowData(prev => ({
                ...prev, amount: val
            }))
        }
        // const { name, value } = e.target;
        // const rowsInput = [...rowDataList];
        // rowsInput[index][name] = value;
        // setRowDataList(rowsInput);
    }

    const handlePlusButton = () => {
        let flag = false;
        // rowDataList.map((item) => {
        //     if(item.date > newRowData.date){
        //         return  flag = true;
        //     }
        // })
        if (!flag) {
            setRowDataList(prev => [...prev, { ...newRowData }]);
            setNewRowData({ event: '', date: '', amount: '' });
            setAddNewRow(false);
            setErrorMessage('');
        }
        else {
            setErrorMessage('Entered Event date should not be greater than the previous ones')
        }

    }

    const handleDeleteRow = (index) => {
        const rows = [...rowDataList];
        rows.splice(index, 1);
        setRowDataList(rows);
    }

    // console.log(" rowdatalist", rowDataList)

    return (
        <>
            <button id='addNewBtn' className="add-new-row-button" onClick={handleAddNewRow} style={{ left: 'auto', right: '0px' }}> + Add New</button>
            <div className="row">
                <div className="col-sm-12" >
                    <table className="table table-hover table-shadow">
                        <thead>
                            <tr>
                                <th className="row-data">Event</th>
                                <th className="row-data">Date</th>
                                <th className="row-data">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rowDataList && rowDataList.map((row, index) => {
                                    return (
                                        <tr key={index}>
                                            <td id={'eventName'+index} className="row-data" style={{ fontWeight: '400' }} >
                                                {row.event}
                                            </td>
                                            <td id={'eventDate'+index} className="row-label">
                                                {row.date}
                                            </td>
                                            <td id={'eventAmt'+index} className="row-data amt-n-btn-coln" style={{ fontWeight: '400' }}>
                                                {row.amount ? <NumberFormat value={row.amount} displayType={"text"} thousandSeparator={true} prefix={"$"} /> : 'NA'}
                                                <button id={'deleteBtn'+index} className="minus-button" onClick={() => handleDeleteRow(index)}>-</button>
                                            </td>
                                            {/* <td className="row-data"> */}

                                            {/* </td> */}
                                        </tr>
                                    )
                                }

                                )
                            }
                        </tbody>

                    </table>


                    {
                        addnewRow &&
                        <>
                            <div className="add-new-row-block" style={{ position: 'relative' }}>
                                {/* <label className="row-label">Event</label> */}
                                {/* <input className="form-control" style={{ width : '290px'}} 
                   type="text" name="Event" 
                   placeholder="Enter Event"
                   onChange={(e) => handleChange(e)}/> */}
                                <select id='newEventDropdown' className="form-control event-dropdown" style={{ width: '290px', height: '40px' }} name="Event"
                                    onChange={(e) => handleChange(e)}>
                                    <option value="" disabled selected>Select</option>
                                    <option value="Investment">Investment</option>
                                    <option value="Follow-on">Follow-on</option>
                                    <option value="Disposition">Disposition</option>
                                    <option value="Management Fee">Management Fee</option>
                                    <option value="Drawdown for Expenses">Drawdown for Expenses</option>
                                    <option value="Accrued Carry">Accrued Carry</option>
                                </select>

                                {/* <label className="row-label">Date</label> */}
                                <input id='newEventDate' className="form-control" style={{ width: '260px' }}
                                    type="date" name="Date"
                                    placeholder="Enter Date"
                                    onChange={(e) => handleChange(e)} />

                                {/* <label className="row-label">Amount</label> */}
                                <input id='newEventAmt' className="form-control" style={{ width: '300px' }}
                                    type="text" name="Amount"
                                    placeholder="Enter Amount"
                                    onChange={(e) => handleChange(e)} />
                                <button id='newEventAddBtn' className="plus-button" onClick={handlePlusButton}>+</button>

                            </div>
                            <span className="error-message">
                                {errorMessage}
                            </span>
                        </>
                    }
                </div>
            </div>

        </>
    )
}

export default DynamicTableRows;
