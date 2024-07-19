import React from 'react';
// import { ReactComponent as DashboardComp } from "../main/Images/logos_microsoft-edge.svg";
import ThoughtFocusLogo from "../main/Images/ThoughtFocus-logo.png";

const AboutPage = (props) => {

    return (
        <div className='container-fluid ps-0 pe-0 d-flex align-items-center justify-content-center'>
            <div>
                <h2>About</h2>
                <div className='d-flex gap-4 align-items-center'>
                    <img src={ThoughtFocusLogo} alt="ThoughtFocus-logo"/>
                    <div>
                        <h5 className='margin-t-b-5'>API</h5>
                        <span>Version 1.0.1</span>
                        <hr className='margin-t-b-5'></hr>
                        <h5 className='margin-t-b-5'>UI</h5>
                        <span>Version 1.0.1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;   