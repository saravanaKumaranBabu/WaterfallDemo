import React from 'react';
import './Popup.css';
import iconClose from "../../main/Images/icn_Close.png";

const Popup = (props) => {
    return((props.trigger) &&
      
        <div className="popup-backdrop">
          <div className="popup-inner">
             <button  className="popup-inner-close-btn"
                      onClick={() => props.setTrigger(false)}>
                 <img src={iconClose} alt="close"/>
             </button>
             {props.children}
          </div>
        </div>
    
    )
}

export default Popup