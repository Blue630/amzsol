import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
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
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Calendarview />,
    },
    {
      path: "/",
      element: <Calendarview />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/startPage",
      element: <StartPage />,
    },
    {
      path: "/createASINcampaign",
      element: <CreateASINcampaign />,
    },
    {
      path: "/createKWcampaign",
      element: <CreateKWcampaign />,
    },
    {
      path: "/companySettings",
      element: <CompanySettings />,
    },
    {
      path: "/transactionwithtabs",
      element: <Transactionwithtabs />,
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
