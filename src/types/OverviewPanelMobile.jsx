// import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Container, Card, CardGroup, Button, Row, Col, Image } from 'react-bootstrap';
import CoinsIcon from "../main/Images/gold-coins.png";

import chevronRight from "../main/Images/Chevron-right.png";

import RefreshCircleIcon from "../main/Images/RefreshCircleIcon.svg";

import SelectFundPopup from './SelectFundPopup';
import PopupSelectFund from "./Modal/PopupSelectFund";

const Overview = (props) => {
    const [clicked, setClicked] = useState(false);

    const handleFundClick = () => {
        setClicked(true);
    }

    return (

        <Container fluid className="overView-box" style={{ padding: '0', borderBottom: '1px solid #E6E8FC' }}>
            <Row className="overview-row" style={{}}>
                <Col xs="12" sm="2" className="Fund-block">
                    <Image src={CoinsIcon} alt="coins" className="coins-icon" />
                    <span className="select-fund-text" ><b>Select Fund</b> </span>
                    <div className="Fund-button-block">
                        <button className="Fund" style={{ position: 'static', /*top: '35px', left: 'auto',display: 'inline-block'*/ }}
                            onClick={handleFundClick}>
                            {/* Fund */}
                            {props.currentSelectedFund}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Image src={chevronRight} alt="chevron-right" style={{ width: '10px', height: '14px' }} />
                        </button>


                        <div className='refresh-icon-container' onClick={() => props.setRefreshClicked(true)}>
                            <Image src={RefreshCircleIcon}
                                alt="refresh" className="refresh-icon" style={{}} />
                        </div>
                    </div>
                </Col>
            
                <Col xs="12" sm="10" className='row overview-block-container'>
                    <Col xs="6" sm="3" className="overview-block">
                        <div className="overview-new-block" style={{}}>
                            <p className="overView-new-text">Total Commitment</p>
                            <p className="overView-new-number">$ 1,242,155,000</p>
                        </div>
                    </Col>
                    <Col xs="6" sm="3" className='overview-block'>
                        <div className="overview-new-block">
                            <p className="overView-new-text">Remaining Invested Capital</p>
                            <p className="overView-new-number">$ 1,108,383,431</p>
                        </div>
                    </Col>
                    <Col xs="6" sm="3" className='overview-block'>
                        <div className="overview-new-block">
                            <p className="overView-new-text">LTD Carry</p>
                            <p className="overView-new-number">$ 20,690,571</p>
                        </div>
                    </Col>
                    <Col xs="6" sm="3" className='overview-block'>
                        <div className="overview-new-block">
                            <p className="overView-new-text">Investor Count</p>
                            <p className="overView-new-number">45</p>
                        </div>
                    </Col>
                </Col>
            </Row>

            <PopupSelectFund trigger={clicked} setTrigger={setClicked} >
                <SelectFundPopup trigger="true" setCurrentSelectedFund={props.setCurrentSelectedFund}
                    setFundData={props.setFundData}></SelectFundPopup>
            </PopupSelectFund>


        </Container>


        // <div className=" overView-box" style={{ padding: '0', borderBottom: '1px solid #E6E8FC' }}>
        /* <Container className='p-4'>
           <CardGroup className = "col-6">
               
               <Card className="overview-new-block" style = {{ border: "1px solid #E7E8FC"}}>
                   <Card.Body className = "card-body">
                       
                       <Card.Text>
                           <p className="overView-new-text">
                               Remaining Invested Capital
                        </p>
                           <p className="overView-new-number"> $ 1,124,418  </p>
                       </Card.Text>
                   </Card.Body>
               </Card>
               <Card className="overview-new-block">
                   <Card.Body>
                       <Card.Title>LTD MFee</Card.Title>
                       <Card.Text>
                           $ 417,619
                        </Card.Text>

                   </Card.Body>
               </Card>
               <Card className="overview-new-block">
                   <Card.Body>
                       <Card.Title>LTD Carry</Card.Title>
                       <Card.Text>
                           $ 128,619
</Card.Text>

                   </Card.Body>
               </Card>
               <Card className="overview-new-block">
                   <Card.Body>
                       <Card.Title>Investor Count</Card.Title>
                       <Card.Text>
                           249
</Card.Text>

                   </Card.Body>
               </Card>
           </CardGroup>
       </Container> 
</div> */



    )

}

export default Overview;