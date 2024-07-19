import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {

  // console.log("pathname", window.location.pathname)
  
    return (
      <>
      {/* {
        window.location.pathname === '/login' ?
        <div className="row" style={{marginTop: '12px'}}>
          <div className="col-sm-12">
            <img src={footer} style={{position: 'fixed', bottom : '0px', width : '100%'}} className="img-responsive" alt="footer" />
          </div>
          
        </div>
        :
        <div className="row" style={{margin: '0', marginTop: '12px'}}>
          <div className="col-sm-12">
            <img src={footer} className="img-responsive" alt="footer"/>
          </div>
          
        </div>
      } */}
        <Row className="footer align-items-center"> {/*--row footer d-flex align-items-center */}
          <Col xs={3} sm={2} xl={1} className="text-start">Privacy Policy</Col>
          <Col xs={1} sm={1} className="text-start">Support</Col>
          <Col xs={8} sm={9} lg={9} xl={10} className="text-end">©ThoughtFocus 2024. All rights reserved</Col>
          {/* <div className="col-sm-2 text-center">©ThoughtFocus 2022. All rights reserved</div>
          <div className="col-sm-8 text-end">
            <span>Powered by </span>
            <img src={TF_img} className="img-responsive" alt="footer" />
          </div> */}
        </Row>
      </>
      );
    
}

export default Footer;