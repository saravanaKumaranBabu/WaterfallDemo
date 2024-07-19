import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

import CoinsIcon from "../main/Images/gold-coins.png";

import chevronRight from "../main/Images/Chevron-right.png";

import RefreshCircleIcon from "../main/Images/RefreshCircleIcon.svg";

import SelectFundPopup from './SelectFundPopup';
import PopupSelectFund from "./Modal/PopupSelectFund";



const Overview = (props: any) => {

  const [clicked, setClicked] = useState(false);

  const handleFundClick = () => {
    setClicked(true);
  }

  return (
    <div className=" overView-box" style={{ padding: '0', borderBottom: '1px solid #E6E8FC' }}>
      <div className="row ">

        <div className="column">

          <div style={{ display: 'flex', position: 'relative', width: '94%', margin: 'auto', paddingBottom: '10px' }}>
            <div style={{ position: 'relative', paddingTop: '5px', paddingRight: '8px', paddingLeft : '37px' }}>

              <img src={CoinsIcon} alt="coins" className="coins-icon" />
              <span style={{ marginLeft: '10px', paddingBottom: '5px' }}><b>Select Fund</b>

              </span>

              <div style={{ marginTop: '12px', display: 'flex', gap: '12px' }}>
                <button className="Fund" style={{ position: 'static', /*top: '35px', left: 'auto',display: 'inline-block'*/ }}
                  onClick={handleFundClick}>
                  {/* Fund */}
                  {props.currentSelectedFund}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src={chevronRight} alt="chevron-right" style={{ width: '10px', height: '14px' }} />
                </button>


                <div style={{
                  width: '42px', height: '42px', backgroundColor: '#fff',
                  borderRadius: '50%', boxShadow: '0px 8.14815px 6.51852px rgb(41 72 152 / 9%), 0px 1.85185px 3.14815px rgb(41 72 152 / 1%)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}
                  onClick={() => props.setRefreshClicked(true)}
                >
                  <img src={RefreshCircleIcon}
                    alt="refresh" className="refresh-icon" style={{ width: '19.73px', height: '19.69px', position: 'static' }} />
                </div>
              </div>
            </div>


            {/* <div className="col-md-4 col-md-pull-6 col-lg-4 col-xl-3">
     

        <div className="overView-block" >
          <span className="overView-text">Remaining invested Capital</span>
          <span className="overView-number">$1,124,418</span>
        </div>
        </div>
        <div className="col-md-4 col-md-pull-6 col-lg-4 col-xl-3">
      

        <div className="overView-block">
          <span className="overView-text">LTD MFee</span>
          <span className="overView-number">$417,619</span>
        </div>
        </div>
        <div className="col-md-4 col-md-pull-6 col-lg-4 col-xl-3">
   

        <div className="overView-block">
          <span className="overView-text">LTD Carry</span>
          <span className="overView-number">$128,619</span>
        </div>
        </div>
        <div className="col-md-4 col-md-pull-6 col-lg-4 col-xl-3">
   

        <div className="overView-block">
          <span className="overView-text">Investor Count</span>
          <span className="overView-number">249</span>
        </div>
        </div> */}
          </div>
        </div>
        
        <div className="column overview-new-block" style = {{ marginTop : '15px', paddingLeft : '0px', paddingRight : '0px'}}>
          <p className="overView-new-text">Total Commitment</p>
          <p className="overView-new-number">$ 1,242,155,000</p>
        </div>

        <div className="column overview-new-block" style = {{ marginTop : '15px'}}>
          <p className="overView-new-text">Remaining Invested Capital</p>
          <p className="overView-new-number">$ 1,108,383,431</p>
        </div>

        <div className="column overview-new-block" style = {{ marginTop : '15px'}}>
          <p className="overView-new-text">LTD Carry</p>
          <p className="overView-new-number">$ 20,690,571</p>
        </div>

        <div className="column overview-new-block" style = {{ marginTop : '15px', marginRight : '53px'}}>
          <p className="overView-new-text">Investor Count</p>
          <p className="overView-new-number">45</p>
        </div>
      </div>

      <PopupSelectFund trigger={clicked} setTrigger={setClicked} >
        <SelectFundPopup trigger="true" setCurrentSelectedFund={props.setCurrentSelectedFund} 
        setFundData = { props.setFundData}></SelectFundPopup>
      </PopupSelectFund>

    </div>

  )
}

export default Overview;