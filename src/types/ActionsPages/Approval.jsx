import React, { useEffect, useState } from 'react';
import {
   Paper, Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow,
} from '@mui/material';
import Calendar from "../../main/Images/Calendar-1.svg";
import Clock from "../../main/Images/clock-1.svg";

//import { useLocation } from 'react-router-dom';
import tick from "../../main/Images/tick.svg";
import Ban from "../../main/Images/ban.svg";
import SentToSource from "../../main/Images/Sent to Source.svg";
import ChevronDown from "../../main/Images/Chevron-down.svg";
import CircleCheckApproveIcon from "../../main/Images/CIRCLE-CHECK-APROVE.svg";
import CircleExclamationRejectIcon from "../../main/Images/EXCLAMATION-CIRCLE.svg";
import CircleForwardSendToIcon from "../../main/Images/Send to sourceIcon.svg";
import { Button, Dropdown, Modal } from 'react-bootstrap';
import { useAddNotes } from "../../Hooks/FundHooks";

const Approval = (props) => {
   const addNotesMutation = useAddNotes();

   const [show, setShow] = useState(false);
   const [count, setCount] = useState(0);
   const [notes, setNotes] = useState();
   const [modalTitle, setModalTitle] = useState('Approve');


   const handleClose = () => setShow(false);
   const handleShow = (action) => {
      setShow(true);
      setModalTitle(action);

   }
   const handleSubmit = (e) => {
      let postData = {
         TransactionID: 1800097E87,
         BatchID: 66,
         ActionBy: "Mark Gonzalez",
         modalTitle: modalTitle,
         notes: notes
      }
      addNotesMutation.mutate(postData)

   }

   // console.log("props",location.state)
   // console.log("notes",notes)
   useEffect(() => {
      setCount(0);
   }, [show]);

   return (
      <div className='container-fluid ps-0 pe-0' style={{ height: '485px', overflowY: 'auto', marginBottom: '10px' }}>
         <div>
            <div className="overView-box" style={{ width: '94%', margin: 'auto', padding: '0px', backgroundColor: '#fff' }}>
               <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  {/* <h3 style={{ margin: '0px', padding: '10px 0px', fontWeight: '600', fontSize: '24px', lineHeight: '28px' }}>Approval</h3> */}

                  <Dropdown id='actionsDropdown'>
                     <Dropdown.Toggle variant="success" id="approvalDropdown" className='action-dd' style={{ margin: '7px auto' }}>
                        Actions&nbsp;&nbsp;<img alt='dropdownIcon' src={ChevronDown} />
                     </Dropdown.Toggle>

                     <Dropdown.Menu id="approvalDropdownMenu" style={{ padding: '0px' }}>
                        <Dropdown.Item style={{ padding: '12px 24px', width: '243px', height: '48px', borderRadius: '6px 6px 0 0' }}
                           onClick={() => { handleShow('Approve') }}>Approve</Dropdown.Item>
                        <Dropdown.Item style={{ padding: '12px 24px', width: '243px', height: '48px', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}
                           onClick={() => { handleShow('Reject') }}>Reject</Dropdown.Item>
                        <Dropdown.Item style={{ padding: '12px 24px', width: '243px', height: '48px', borderRadius: '0 0 6px 6px' }}
                           onClick={() => { handleShow('Send To Source') }}>Send to Source</Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>
               </div>
            </div>
            <hr style={{ marginTop: '3px' }}></hr>
         </div>
         <Paper sx={{ width: '94%', overflow: 'hidden', margin: 'auto' /*, position : 'relative', left : '40px'*/ }}>
            <TableContainer className="fundTable" sx={{ /*maxHeight: 415*/ }}>
               <Table stickyHeader aria-label="simple table" className="table">
                  <TableHead>
                     <TableRow >
                        <TableCell className="approval-table-cell">Person</TableCell>
                        <TableCell className="approval-table-cell">Date</TableCell>
                        <TableCell className="approval-table-cell">Action</TableCell>
                        <TableCell className="approval-table-cell">Note</TableCell>
                        {/* <TableCell className="approval-table-cell">Options</TableCell> */}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     <TableRow style={{}}>
                        <TableCell
                           style={{
                              fontFamily: 'Roboto',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '14px',
                              lineHeight: '24px',
                              color: '#181C32'
                           }}
                        >Mark Gonzalez</TableCell>
                        <TableCell className="approval-table-cell">
                           <img src={Calendar} alt="calendar" />&nbsp;09/27/2022&nbsp;&nbsp;
                           <img src={Clock} alt="clock" />&nbsp;12:03PM
                        </TableCell>
                        <TableCell >
                           <span className="approved-text"><img src={tick} alt="tick" />Approved</span>
                        </TableCell>
                        <TableCell className="note" style={{ background: '#FFFBF1' }}>
                           {/* <button className="edit-button">
                              <img src={Edit} alt="edit" />&nbsp;
                              Edit</button> */}
                           <p className="note-new">
                              Numbers look good.

                           </p>
                           <p className="read-more">Read More
                              <br></br>
                              {/* <p className="last-edit"> <img src={Calendar} alt="calendar" />&nbsp;Last Edited on: 10/01/2022</p> */}
                           </p>


                        </TableCell>
                        {/* <TableCell style={{ width: '120px' }}>
                           <span className="approve-button"> <img src={GreyEdit} alt="grey-edit" />Approve</span>
                        </TableCell> */}
                     </TableRow>

                     <TableRow style={{ height: '56px' }} >
                        <TableCell style={{
                           fontFamily: 'Roboto',
                           fontStyle: 'normal',
                           fontWeight: '500',
                           fontSize: '14px',
                           lineHeight: '24px',
                           color: '#181C32'
                        }}
                        /* identical to box height, or 171% */




                        >Larry Reverman</TableCell>
                        <TableCell className="approval-table-cell">
                           <img src={Calendar} alt="calendar" />&nbsp;09/27/2022&nbsp;&nbsp;
                           <img src={Clock} alt="clock" />&nbsp;01:30PM
                        </TableCell>
                        <TableCell ><span className="rejected-text">
                           <img src={Ban} alt="ban" />Rejected</span></TableCell>
                        <TableCell className="note" style={{ background: '#FFFBF1' }}>
                           {/* <button className="edit-button">
                              <img src={Edit} alt="edit" />&nbsp;
                              Edit</button> */}
                           <p className="note-new">
                              Please recheck Carry.

                           </p>
                           <p className="read-more">Read More
                              <br></br>
                              {/* <p className="last-edit"> <img src={Calendar} alt="calendar" />&nbsp;Last Edited on: 10/01/2022</p> */}
                           </p>
                        </TableCell>
                        {/* <TableCell style={{ marginTop: '10px' }}>
                           <span className="approve-button"> <img src={GreyEdit} alt="grey-edit" />Approve</span>
                        </TableCell> */}
                     </TableRow>


                     <TableRow style={{ height: '56px' }}>
                        <TableCell style={{
                           fontFamily: 'Roboto',
                           fontStyle: 'normal',
                           fontWeight: '500',
                           fontSize: '14px',
                           lineHeight: '24px',
                           color: '#181C32'
                        }}>Mark Gonzalez</TableCell>
                        <TableCell className="approval-table-cell">
                           <img src={Calendar} alt="calendar" />&nbsp;09/27/2022&nbsp;&nbsp;
                           <img src={Clock} alt="clock" />&nbsp;12:10PM
                        </TableCell>
                        <TableCell ><span className="approved-text">
                           <img src={tick} alt="tick" />Approved</span></TableCell>
                        <TableCell className="note" style={{ background: '#FFFBF1' }}>
                           {/* <button className="edit-button">
                              <img src={Edit} alt="edit" />&nbsp;
                              Edit</button> */}
                           <p className="note-new">

                              Addressed the Carry differences. Please recheck.
                           </p>
                           <p className="read-more">Read More
                              <br></br>
                              {/* <p className="last-edit"> <img src={Calendar} alt="calendar" />&nbsp;Last Edited on: 10/01/2022</p> */}
                           </p>
                        </TableCell>
                        {/* <TableCell style={{ marginTop: '10px' }}>
                           <span className="approve-button"> <img src={GreyEdit} alt="grey-edit" />Approve</span>
                        </TableCell> */}
                     </TableRow>

                     <TableRow style={{ height: '56px' }}>
                        <TableCell style={{
                           fontFamily: 'Roboto',
                           fontStyle: 'normal',
                           fontWeight: '500',
                           fontSize: '14px',
                           lineHeight: '24px',
                           color: '#181C32'
                        }}>Larry Reverman</TableCell>
                        <TableCell className="approval-table-cell">
                           <img src={Calendar} alt="calendar" />&nbsp;09/27/2022&nbsp;&nbsp;
                           <img src={Clock} alt="clock" />&nbsp;01:45PM
                        </TableCell>
                        <TableCell ><span className="approved-text"><img src={tick} alt="tick" />Approved</span></TableCell>
                        <TableCell className="note" style={{ background: '#FFFBF1' }}>
                           {/* <button className="edit-button">
                              <img src={Edit} alt="edit" />&nbsp;
                              Edit</button> */}
                           <p className="note-new">
                              Yes, Carry numbers look good now. Approving...

                           </p>
                           <p className="read-more">Read More
                              <br></br>
                              {/* <p className="last-edit"> <img src={Calendar} alt="calendar" />&nbsp;Last Edited on: 10/01/2022</p> */}
                           </p>
                        </TableCell>
                        {/* <TableCell style={{ marginTop: '10px' }}>
                           <span className="approve-button"> <img src={GreyEdit} alt="grey-edit" />Approve</span>
                        </TableCell> */}
                     </TableRow>

                     <TableRow style={{ height: '56px' }}>
                        <TableCell style={{
                           fontFamily: 'Roboto',
                           fontStyle: 'normal',
                           fontWeight: '500',
                           fontSize: '14px',
                           lineHeight: '24px',
                           color: '#181C32'
                        }}>Larry Reverman</TableCell>
                        <TableCell className="approval-table-cell">
                           <img src={Calendar} alt="calendar" />&nbsp;09/27/2022&nbsp;&nbsp;
                           <img src={Clock} alt="clock" />&nbsp;01:50PM
                        </TableCell>
                        <TableCell ><span className="investran-text">
                           <img src={SentToSource} alt="source" />Sent to Source</span></TableCell>
                        <TableCell className="note" style={{ background: '#FFFBF1' }}>
                           {/* <button className="edit-button">
                              <img src={Edit} alt="edit" />&nbsp;
                              Edit</button> */}
                           <p className="note-new">
                              Transmitting to Investran.

                           </p>
                           <p className="read-more">Read More
                              <br></br>
                              {/* <p className="last-edit"> <img src={Calendar} alt="calendar" />&nbsp;Last Edited on: 10/01/2022</p> */}
                           </p>
                        </TableCell>
                        {/* <TableCell style={{ marginTop: '10px' }}>
                           <span className="approve-button"> <img src={GreyEdit} alt="grey-edit" />Approve</span>
                        </TableCell> */}
                     </TableRow>


                  </TableBody>
               </Table>
            </TableContainer>
         </Paper>

         <Modal id="notesPopup"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ paddingTop: '0px', gap: '0px' }} >
            <Modal.Header closeButton style={{ padding: '20px 25px' }}>
               <img id='actionIcon' src={modalTitle === 'Send To Source' ? CircleForwardSendToIcon :
                  (modalTitle === 'Reject' ? CircleExclamationRejectIcon : CircleCheckApproveIcon)} alt="CircleCheckIcon" />&nbsp;&nbsp;&nbsp;
               <Modal.Title id='modalTitleTxt'>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='appr-modal-body' style={{}}>
               <p style={{
                  fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '16px',
                  lineHeight: '19px', letterSpacing: '-0.02em', color: '#181C32', marginBottom: '5px'
               }}>Details:</p>
               <div className='approv-transaction-table row' style={{}}>
                  <div className='col-12'>
                     <span style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px' }}>Fund 1</span>
                  </div>

                  <div className='col-12 col-sm-6' style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px', marginBottom: '10px' }}>
                     <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Transaction ID:&nbsp;&nbsp;</span>
                     <span id='modalTransactionIdTxt' style={{ fontWeight: '500', color: '#115AC8', textAlign: 'left', width: '378px' }}>1800097E87</span>
                  </div>
                  <div className='col-12 col-sm-6' style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px', marginBottom: '10px' }}>
                     <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Batch ID:&nbsp;&nbsp;</span>
                     <span id='modalBatchIdTxt' style={{ fontWeight: '500', color: '#115AC8', textAlign: 'left', width: '378px' }}>66</span>
                  </div>

                  <div className='col-12 col-sm-6' style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px', paddingBottom: '10px', marginBottom: '10px' }}>
                     <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Action By:&nbsp;&nbsp;</span>
                     <span id='modalActionByTxt'>Mark Gonzalez</span>
                  </div>
                  <div className='col-12 col-sm-6' style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px', paddingBottom: '10px', marginBottom: '10px' }}>
                     <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Email:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                     <span id='modalEmailTxt' style={{ color: '#2A7BE4' }}>GeraldKlein@ThoughtFocus.com</span>
                  </div>
                  
                  <div style={{
                     fontWeight: '500', fontSize: '16px', lineHeight: '19px', paddingTop: '10px',
                     paddingBottom: '10px', borderTop: '1px solid #E5E7EB'
                  }}>
                     <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Time:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                     <span>
                        <img src={Calendar} alt="calendar" />&nbsp;&nbsp;09/27/2022&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={Clock} alt="clock" />&nbsp;&nbsp;02:12:00 PM
                     </span>
                  </div>
               </div>
               {/* <table className="transaction-table" style={{
                  width: '100%', display: 'table', padding: '10px 18px 6px',
                  border: '1px solid #E7E8FC', borderRadius: '10px', background: '#F9FAFB'/*, marginTop: '15px'* /
               }}>
                  <tbody>
                     <tr>
                        <td style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px' }}>AMX II</td>
                     </tr>
                     <tr>
                        <td style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px' }}>
                           <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Transaction ID:&nbsp;&nbsp;</span>
                           <span style={{ fontWeight: '500', color: '#115AC8', textAlign: 'left', width: '378px' }}>1800097E87</span>
                        </td>
                        <td style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px' }}>
                           <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Batch ID:&nbsp;&nbsp;</span>
                           <span style={{ fontWeight: '500', color: '#115AC8', textAlign: 'left', width: '378px' }}>66</span>
                        </td>
                     </tr>
                     <tr>
                        <td style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px', paddingBlock: '10px', }}>
                           <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Action By:&nbsp;&nbsp;</span>
                           <span>Mark Gonzalez</span>
                        </td>
                        <td style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px', paddingBlock: '10px' }}>
                           <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Email:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                           <span style={{ color: '#2A7BE4' }}>GeraldKlein@ThoughtFocus.com</span>
                        </td>
                     </tr>
                     <tr>
                        <td style={{
                           fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px', paddingTop: '10px',
                           paddingBottom: '10px', borderTop: '1px solid #E5E7EB'
                        }}>
                           <span style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', color: '#5D6E82' }}>Time:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                           <span>
                              <img src={Calendar} alt="calendar" />&nbsp;&nbsp;09/27/2022&nbsp;&nbsp;&nbsp;&nbsp;
                              <img src={Clock} alt="clock" />&nbsp;&nbsp;02:12:00 PM
                           </span>
                        </td>
                        <td style={{
                           fontWeight: '500', fontSize: '16px', lineHeight: '19px', height: '19px', paddingTop: '10px',
                           paddingBottom: '10px', borderTop: '1px solid #E5E7EB'
                        }}>
                        </td>
                     </tr>
                  </tbody>
               </table> */}
               <p style={{
                  fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '16px',
                  lineHeight: '19px', letterSpacing: '-0.02em', color: '#181C32', marginBottom: '5px', marginTop: '20px'
               }}>Notes:</p>
               <div style={{ position: 'relative' }}>
                  <textarea id='modalNotesTxtArea' placeholder='Enter here...' className='appr-notes' style={{}}
                     onChange={e => {
                        setNotes(e.target.value)

                        setCount(e.target.value.length)
                     }
                     }>
                  </textarea>
                  <span id='modalNotesCharCountTxt' style={{
                     padding: '0px 8px', position: 'absolute', width: '50px', height: '16px', left: '5px', top: '105px', background: '#EFEFEF',
                     borderRadius: '19px', fontWeight: '500', fontSize: '10px', lineHeight: '16px', color: '#5D6E82'
                  }}>{count + '/300'}</span>
               </div>
            </Modal.Body>
            <Modal.Footer style={{}}>
               <Button id='modalCancelBtn' variant="secondary" onClick={handleClose} style={{
                  padding: '6px 16px', width: '144px', height: '40px',
                  fontWeight: '500', fontSize: '14px', lineHeight: '16px',
                  background: '#FFFFFF', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)', borderRadius: '2px', border: 'none', color: '#64b54d'
               }}>
                  Cancel
               </Button>
               <Button id='modalSubmitBtn' variant="primary" onClick={() => {
                  handleSubmit()
                  handleClose()
               }} style={{
                  padding: '6px 16px', width: '144px', height: '40px',
                  fontWeight: '500', fontSize: '14px', lineHeight: '16px',
                  background: '#64b54d', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)', borderRadius: '2px', border: 'none', color: '#FFF'
               }}>Submit</Button>
            </Modal.Footer>
         </Modal>
      </div>
   )
}

export default Approval;