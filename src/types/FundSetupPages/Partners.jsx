import React, {  useState } from 'react';
import Collapsible from 'react-collapsible';
import PartnersTable from "../FundSetupPages/PartnersTable";

import collapsibleIcon from "../../main/Images/CollapsibleIcon.svg";
import rightCollapsibleIcon from "../../main/Images/Right-Collapsible.svg";

const PartnersComp = (props) => {

    const [PAclicked, setPAClicked] = useState(true);
    const [PBclicked, setPBClicked] = useState(false);
    const [PCclicked, setPCClicked] = useState(false);

 
   
    return (
        <div>
            <Collapsible
            id="collapsableRegion"
            onOpen = {()=>
              setPAClicked(true)
            }
            onClose={
              ()=> setPAClicked(false)
            }
            open = {true}
            // onClick = {()=> setClicked(!clicked)}
             trigger={
                 <div
                   style={{
                    width: '1420px',
                    height: '56px',
                    marginLeft : '47px',
                    marginTop : '32px',
                    // margin : 'auto 65px',
                    paddingTop :'12px',
                    paddingLeft : '10px',
                    background: '#FFFBF1',
                    border: '1px solid #000000',
                    borderRadius: '8px'
                   }}
                 >
                 <p
                 style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '24px',
                    
                    color: '#64b54d'
                    
                 }}
                 >
                {
                  PAclicked ?
                  <img src={rightCollapsibleIcon} alt="oprn"/>
                  
                  :
                  <img src={ collapsibleIcon} alt="icon"/>
                }     
                
                  &nbsp;
                  &nbsp;
                  <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>PA</span>
                            &nbsp;
                     Partnership A</p>
                </div>
             }
            >

           {
               <PartnersTable></PartnersTable>
           }
            
            
            </Collapsible>

            <Collapsible
            // onClick = {()=> setClicked(!clicked)}
            onOpen = {()=>
              setPBClicked(true)
            }
            onClose={
              ()=> setPBClicked(false)
            }
             trigger={
                 <div
                   style={{
                    width: '1420px',
                    height: '56px',
                    marginLeft : '47px',
                    marginTop : '32px',
                    // margin : 'auto 65px',
                    paddingTop :'12px',
                    paddingLeft : '12px',
                    background: '#FFFBF1',
                    border: '1px solid #000000',
                    borderRadius: '8px'
                   }}
                 >
                 <p
                 style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '24px',
                    
                    color: '#64b54d'
                    
                 }}
                 >
                     
                     {
                  PBclicked ?
                  <img src={rightCollapsibleIcon} alt="oprn"/>
                  
                  :
                  <img src={ collapsibleIcon} alt="icon"/>
                }  
                  &nbsp;
                  &nbsp;
                  <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>PB</span>
                            &nbsp;
                     Partnership B</p>
                </div>
             }
            >

           {
               <PartnersTable></PartnersTable>
           }
            
            
            </Collapsible>


            <Collapsible
            // onClick = {()=> setClicked(!clicked)}
            onOpen = {()=>
              setPCClicked(true)
            }
            onClose={
              ()=> setPCClicked(false)
            }
             trigger={
                 <div
                   style={{
                    width: '1420px',
                    height: '56px',
                    marginLeft : '47px',
                    marginTop : '32px',
                    // margin : 'auto 65px',
                    paddingTop :'12px',
                    paddingLeft : '12px',
                    background: '#FFFBF1',
                    border: '1px solid #000000',
                    borderRadius: '8px'
                   }}
                 >
                 <p
                 style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '24px',
                    
                    color: '#64b54d'
                    
                 }}
                 >
                     
                     {
                  PCclicked ?
                  <img src={rightCollapsibleIcon} alt="oprn"/>
                  
                  :
                  <img src={ collapsibleIcon} alt="icon"/>
                }  
                  &nbsp;
                  &nbsp;
                <span style={{color: '#FFFFFF', 
                            fontSize: '12px',
                            padding : '9px',
                            background: '#C2D9F7', borderRadius : '60px'}}>
                    PC
                </span>
                 &nbsp;
                     Partnership C
                </p>
                </div>
             }
            >

           {
               <PartnersTable></PartnersTable>
           }
            
            
            </Collapsible>
        </div>
    )
}
export default PartnersComp;