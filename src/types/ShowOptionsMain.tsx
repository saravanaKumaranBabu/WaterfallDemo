import React from 'react';
import optionsmain from "../main/Images/optionsmain.jpg";
import hyphenmain from "../main/Images/hyphen.jpg";

type Args = {
    eventtype: string;
    
  };
  
  const ShowOptionsMain = ({ eventtype }: Args) => {

    return <div>
       <div>
           <img alt="Options" src={eventtype === "Distribution" ? optionsmain : hyphenmain}/>
          
       </div>

    </div>;
};

export default ShowOptionsMain;