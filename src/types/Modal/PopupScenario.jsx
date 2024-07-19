import React from 'react';
import './Popup.css';

const PopupScenario = (props) => {
    return((props.trigger) &&
      
        <div className="popup-backdrop-scenario">
          <div className="popup-inner-scenario">
             <button  className="popup-inner-close-btn"
          onClick={() => props.setTrigger(false)}>X</button>
             {props.children}
          </div>
        </div>
    
    )
}

export default PopupScenario;