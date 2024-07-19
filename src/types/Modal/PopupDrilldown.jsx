import React from 'react';
import './Popup.css';

const PopupDrilldown = (props) => {
    return((props.trigger) &&
      
        <div className="popup-backdrop-drilldown" onDoubleClick={ () => props.setTrigger(false) } >
          <div className="popup-inner-drilldown">
             {/* <button  
             className="popup-drilldown-close"
             className="popup-inner-close-btn"
          onClick={() => props.setTrigger(false)}>close</button> */}
             {props.children}
          </div>
        </div>
    
    )
}

export default PopupDrilldown;