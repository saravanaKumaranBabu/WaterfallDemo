import React from 'react';
import './Popup.css';
import { ReactComponent as CloseBtnIconComp} from '../../main/Images/btn_Close.svg';

const PopupSelectFund = (props) => {
  return ((props.trigger) &&

    <div className="popup-backdrop-selectFund">
      <div className="popup-select-fund" style={{
        padding: '0px', borderRadius: '12px',
        boxShadow: '0px 7px 14px rgba(65, 69, 88, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.07)'
      }}>
        <button className="popup-inner-close-btn" style={{ border: 'none', top: '0px', right: '0px', background: 'none', 
          padding: '0px', marginTop: '9px', marginRight: '9px'}}
          onClick={() => props.setTrigger(false)}>
        <CloseBtnIconComp></CloseBtnIconComp></button>
        {props.children}
      </div>
    </div>

  )
}

export default PopupSelectFund;