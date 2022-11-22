import { Router, Switch, Route } from 'react-router-dom'
import history from './utils/history'
import './App.css';

import Calendarview from './pages/Calendarview'
import CreateASINcampaign from './pages/CreateASINcampaign'
import CreateKWcampaign from './pages/CreateKWcampaign'
import Transactionwithtabs from './pages/Transactionwithtabs'
import StartPage from './pages/StartPage'
import CompanySettings from './pages/CompanySettings'
import Details from './pages/Details'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function App() {
  return (
    <Router history={history} >
      <Switch>
        <Route
          path="/startpage"
          component={StartPage}
        />
        <Route
          path="/companysettings"
          component={CompanySettings}
        />
        <Route
          path="/Details"
          component={Details}
        />
        <Route
          path="/createASINcampaign"
          component={CreateASINcampaign}
        />
        <Route
          path="/createKWcampaign"
          component={CreateKWcampaign}
        />
        <Route path="/transactionwithtabs" component={Transactionwithtabs} />
        <Route
          path="/"
          component={Calendarview}
        />
        <Route
          path="*"
          component={Calendarview}
        />
      </Switch>
    </Router>
  );
}

export default App;
