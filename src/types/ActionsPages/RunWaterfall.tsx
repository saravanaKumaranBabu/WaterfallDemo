import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Card from 'react-bootstrap/Card';
// import Ban from "../../main/Images/ban.svg";
import blueCircleSolid from "../../main/Images/blueCircleSolid.svg";
import orangeCircleSolid from "../../main/Images/orangeCircleSolid.svg";
import greenCircleSolid from "../../main/Images/greenCircleSolid.svg";
import purpleCircleSolid from "../../main/Images/purpleCircleSolid.svg";
import RectangleGreenBar from "../../main/Images/RectangleGreenBar.svg";
import RectangleWhiteBar from "../../main/Images/RectangleWhiteBar.svg";
import { ReactComponent as BanComp } from "../../main/Images/ban.svg";
import { RunWaterFallProcess } from '../../Hooks/FundHooks';
import { RunWaterFallModel } from '../RunWaterFallModel';

const RunWaterfall = (props: any) => {
   const [runningStatus, setRunningStatus] = useState('notStarted');
   const [inputTransactionData, setInputTransactionData] = useState<RunWaterFallModel>({});

   const applyMgmtFeeMutation = RunWaterFallProcess();

   useEffect(() => {
      const inputTransaction = JSON.parse(localStorage.getItem('Scenario') || '{}');
      setInputTransactionData(inputTransaction);
   }, []);

   const runWaterFall = () => {
      setRunningStatus('running');
      //alert("inputTransactionData::" + inputTransactionData)
      applyMgmtFeeMutation.mutate(inputTransactionData);
   }

   return (
      <div className='container-fluid ps-0 pe-0 runwf-container' style={{}} >
         {/* <div className="overView-box" style={{ padding: '0px' }}>
            <div style={{ width: '94%', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h3 style={{margin: '0px', padding: '12px 0px'}}>Run Waterfall</h3>

               <div style={{}}>
                  <button className="save-button" style={{ width: '154px', position: 'static', padding: '4px 0px 8px', marginRight: '15px' }}>
                     <span style={{ color: '#D1334A', }}>
                        <img src={Ban} alt="ban" />&nbsp;
                        <strong>Stop Process</strong></span>
                  </button>
                  <button className="runWF-button" style={{ position: 'static', padding: '4px 0px 8px', opacity: '0.5' }} disabled={true}>
                     <span className="runWF-text">Run WF</span>
                  </button>
               </div>
            </div>
            <hr style={{ margin: '0px' }}></hr>
         </div> */}
         {runningStatus === 'notStarted' ? (
            <div className='notStarted-div' style={{}}>
               {/* <p className="running-waterfall" style={{ width: 'auto', textAlign: 'center' }}>Running Waterfall</p> */}
               <div className='runWF-btn-container' style={{}}>
                  <button id='notStartedRunWfBtn' className="runWF-button" style={{}}
                     onClick={() => runWaterFall()}>
                     <span className="runWF-text">Run WaterFall</span>
                  </button>
               </div>
            </div>)
            : (
               <div className='started-div' style={{}}>
                  {runningStatus !== 'stop' &&
                     <div>
                        <Stack sx={{ color: 'grey.500' }} >
                           <CircularProgress color="secondary" thickness={6} size={70}
                              sx={{
                                 animationDuration: '2s',
                                 color: 'conic-gradient(from 180deg at 50% 50%, #64b54d 0deg, #DF00FF 219.37deg, rgba(255, 255, 255, 0) 360deg)',
                                 margin: '30px auto 50px'
                                 //   position : 'absolute',
                                 //   left : '700px',
                                 //   top : '500px'
                              }}
                           />

                        </Stack>
                        <p className="running-waterfall">Running Waterfall</p>
                     </div>
                  }
                  <div className='wf-started-container' style={{}}>
                     <div className='wf-started-btn-container' style={{}}>
                        <button id='stopProcessBtn' className={runningStatus !== 'running' ? 'stop-disabled opacity-50' : 'save-button'} 
                           style={{}}
                           onClick={() => setRunningStatus('stop')} disabled={runningStatus !== 'running'}>
                           <span style={{ color: runningStatus !== 'running' ? '#999999' : '#D1334A', }}>
                              {/* <img src={Ban} alt="ban" />&nbsp; */}
                              <BanComp className='banComp' />&nbsp;
                              <strong>Stop Process</strong></span>
                        </button>
                        <button id='startedRunWfBtn' className={runningStatus === 'running' ? 'runWF-button opacity-50' : 'runWF-button'} 
                           style={{ position: 'static', padding: '4px 0px 8px' }}
                           onClick={() => runWaterFall()} disabled={runningStatus === 'running'}>
                           <span className="runWF-text">Run WaterFall</span>
                        </button>
                     </div>

                     <hr></hr>

                     <p className="grey-text-small">Please wait while we run the configured waterfall options for this fund</p>
                     <hr></hr>
                     <p className="distribution-contents" style={{ marginBottom: '5px' }}><strong>Event Log</strong></p>
                     <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        position: 'relative', bottom: '-10px'
                     }}>
                        <p className="distribution-contents">Input
                           <span style={{ float: 'right' }}>Status</span>
                        </p>
                     </div>
                     <Card className="runwaterfall-card" style={{  }}>
                        <span className="distribution-contents"><img src={blueCircleSolid} alt="ban" style={{ marginRight: '5px' }} />&nbsp;Updating Status :</span>
                        <span style={{ /*float: 'right'*/ position: 'relative' }}>
                           <img src={RectangleWhiteBar} alt="ban" style={{ position: 'absolute', top: '11px', right: '95px' }} />
                           <img src={RectangleGreenBar} alt="ban" style={{ position: 'absolute', top: '11px', right: '115px' }} />41% running
                        </span>
                     </Card>
                     <Card className="runwaterfall-card" style={{}}>
                        <span className="distribution-contents"><img src={orangeCircleSolid} alt="ban" style={{ marginRight: '5px' }} />&nbsp;Running Logs ( 100/100) :</span>
                        <span style={{ color: '#00D27B', float: 'right' }}>Completed</span>
                     </Card>
                     <Card className="runwaterfall-card" style={{}}>
                        <span className="distribution-contents"><img src={greenCircleSolid} alt="ban" style={{ marginRight: '5px' }} />&nbsp;Setting Criterias :</span>
                        <span style={{ color: '#D1334A', float: 'right' }}>Error</span>
                     </Card>
                     <Card className="runwaterfall-card" style={{}}>
                        <span className="distribution-contents"><img src={purpleCircleSolid} alt="ban" style={{ marginRight: '5px' }} />&nbsp;Initiated Waterfall Process :</span>
                        <span style={{ color: '#00D27B', float: 'right' }}>Completed</span>
                     </Card>

                     <hr style={{ width: '100%', height: '1px' }}></hr>
                     <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button id='exportLogBtn' className="export-log">Export Log</button>
                     </div>
                  </div>
               </div>)
         }
      </div>
   )
}

export default RunWaterfall;