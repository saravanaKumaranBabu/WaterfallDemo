import React from 'react';
import NavBar from '../../main/NavBar';


const DoomsdayScenario = (props) => {

 return (
    <div className='container-fluid'>
       <NavBar currPage = "Events/DoomsdayScenario"/>
       <div className="overView-box">
        <h3>Doomsday Scenario</h3>
        <hr></hr>
        {/* <PopupScenario trigger={true} setTrigger={setTrigger} > 
          <ScenarioWizard h = {currentRow} fundData = {fundData}></ScenarioWizard>  
                    
        </PopupScenario>  */}
       </div>
    </div>    
 )
}

export default DoomsdayScenario;