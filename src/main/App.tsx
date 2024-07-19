import React, { useEffect, useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import './App.css';
import WaterFallOutputPage from '../types/WaterFallOutputPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ViewScenarioData from '../types/ViewScenarioData';
import ScenarioAdd from '../types/ScenarioAdd';
import PeriodClose from "../types/EventsMenu/PeriodClose";
import Distribution from "../types/EventsMenu/Distribution";
import SimulateFundClose from "../types/EventsMenu/SimulateFundClose";
import DoomsdayScenario from "../types/EventsMenu/DoomsdayScenario";
import IncomeDistribution from "../types/IncomeDistribution";
import LoginMobile from "../types/LoginMobile";
import ActionsPage from '../types/ActionsPage';
import ScenarioWizard from '../types/ScenarioWizard';
import FundSetup from "../types/FundSetup";
import ViewInput from '../types/ActionsPages/ViewInput';
import ViewInputGlobal from '../types/ActionsPages/ViewInputGlobal';
import ViewInputCarry from '../types/ActionsPages/ViewInputCarry';
import SetOptions from '../types/ActionsPages/SetOptions';
import RunWaterfall from '../types/ActionsPages/RunWaterfall';
import ViewOutput from '../types/ActionsPages/ViewOutput';
import ViewOutputGlobal from '../types/ActionsPages/ViewOutputGlobal';
import Approval from '../types/ActionsPages/Approval';
// import SetOptionsWizard from '../types/SetOptionsWizard';
import PeriodCloseActions from "../types/ActionsPages/PeriodCloseActions";
import PeriodCloseDrilldown from "../types/ActionsPages/PeriodCloseDrilldown";
import AboutPage from '../types/AboutPage';

let global_user_info = {
  global_name: '',
  global_initial: '',
}

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    initial: "",
  })

  //let temp_user;
  // let flag = false;
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (loggedInUser.name !== '' && loggedInUser.initial !== '') {
      global_user_info.global_name = loggedInUser.name;
      global_user_info.global_initial = loggedInUser.initial;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
    }
  }, [loggedInUser])

  useEffect(() => {
    //temp_user = localStorage.getItem('loggedInUser');

    //console.log("tempusr", temp_user)
    if (localStorage.getItem('loggedInUser') != null) {

      setFlag(true)
    }
    else

      setFlag(false)

  }, [flag])

  const h = { amount: 123, effectiveDate: '12/12/2021', gldate: '12/12/2021', event: 'test' };
  const [currentRoute, setCurrentRoute] = useState('');
  //console.log("currentroute", currentRoute)

  return (
    <div className="App" style={{minHeight: '100vh'}}>

      <BrowserRouter>
        {

          <Header userName={loggedInUser.name} userInitial={loggedInUser.initial} setCurrentRoute={setCurrentRoute} />

          // :
          // window.location.pathname !== '/' && 
          // <p className = "login-info-text">Please login to view this page
          //    <br></br>
          //    <a href="/">Login</a>
          // </p>
        }

        <div style={{ marginTop: '63px', marginBottom: '40px', minHeight: 'calc(100vh - 103px)', display: 'flex' }}>
          <Routes>

            <Route path="waterfall" element={<WaterFallOutputPage />} />
            <Route path="setOptions" element={<SetOptions h={h} />} />
            <Route path="/home" element={<Dashboard setCurrentRoute={setCurrentRoute} />} />
            <Route path="/ViewScenario" element={<ViewScenarioData />} />
            <Route path="/ScenarioAdd" element={<ScenarioAdd />} />
            <Route path="/PeriodClose" element={<PeriodClose loggedInUser={loggedInUser} />} />
            <Route path="/ScenarioWizard" element={<ScenarioWizard />} />
            <Route path="/Distribution" element={<Distribution />} />
            <Route path="/SimulateFundClose" element={<SimulateFundClose />} />
            <Route path="/DoomsdayScenario" element={<DoomsdayScenario />} />
            <Route path="/IncomeDistribution" element={<IncomeDistribution />} />
            <Route path="/actionpage" element={<ActionsPage currentRoute={currentRoute}></ActionsPage>}>
              <Route path="viewInput" element={<ViewInput />} />
              <Route path="viewInputGlobal" element={<ViewInputGlobal />} />
              <Route path="viewInputCarry" element={<ViewInputCarry />} />
              <Route path="setOptions" element={<SetOptions h={h} />} />
              <Route path="runWaterfall" element={<RunWaterfall />} />
              <Route path="viewOutput" element={<ViewOutput />} />
              <Route path="viewOutputGlobal" element={<ViewOutputGlobal />} />
              <Route path="approval" element={<Approval />} />
              <Route path="scenarioWizard" element={<ScenarioWizard />} />
              <Route path="periodClose" element={<PeriodCloseActions />} />
              <Route path="periodCloseDrilldown" element={<PeriodCloseDrilldown />} />
            </Route>

            <Route path="/FundSetup" element={<FundSetup />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<LoginMobile setLoggedInUser={setLoggedInUser} global_user_info={global_user_info} />} />

          </Routes>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
