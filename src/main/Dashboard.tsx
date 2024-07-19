import React, {useState} from 'react';
import NavBar from './NavBar'
import OverviewPanel from '../types/OverviewPanel';
import './App.css';
import FundTransactionList from '../types/FundTransactionList';
import FundTransactionListGlobal from '../types/FundTransactionListGlobal';
import OverviewPanelMobile from "../types/OverviewPanelMobile";

function Dashboard(props : any) {

  const [currentSelectedFund, setCurrentSelectedFund] = useState('Fund-1');
  const [refreshClicked, setRefreshClicked] = useState(false);
  const [fundData , setFundData] = useState()

  console.log("Version ", "1.0.1")
  // console.log("current selected fund", currentSelectedFund)
  // console.log("current fund", fundData)
  return (
    <div className='container-fluid' style={{padding: '0'}}>
        <NavBar currPage = "Dashboard"/>
        <OverviewPanelMobile
        setCurrentSelectedFund = {setCurrentSelectedFund } 
        currentSelectedFund = {currentSelectedFund} 
        setRefreshClicked = {setRefreshClicked}
        setFundData = { setFundData}
        />
        <FundTransactionListGlobal 
        setCurrentRoute = { props.setCurrentRoute} 
        currentSelectedFund = {currentSelectedFund}
        refreshClicked = {refreshClicked}
        setRefreshClicked = {setRefreshClicked}
        ></FundTransactionListGlobal>
    </div>    
  );
}

export default Dashboard;
