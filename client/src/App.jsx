import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import PlantPage from './pages/Plants';
import SettingsPage from './pages/Settings';
import TasksPage from './pages/Tasks';
import Checkups from './pages/Checkups';

import SideBar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import PlantForm  from "./pages/AddPlant";
import AddCheckup from "./pages/AddCheckup";
import HelpPage from "./pages/Help";
import PlantInfo from "./pages/PlantInfo";

const NavigationHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split('; ');
    let idCookieExists = false;

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const [name, value] = cookie.split('=');

      if (name === 'id') {
        idCookieExists = true;
        const req = value;
        if(req){
          setIsAuthenticated(true);
          if(location.pathname === '/auth'){
            navigate('/');
          }
        }
        break;
      }
    }

    if (!idCookieExists) {
      setIsAuthenticated(false);
      navigate('/auth');
    }
  }, [navigate, location]);

  return (
    <div className="fonts-sans flex flex-row bg-white">
      {isAuthenticated && (
        <>
          <div className="sidebar">
            <SideBar/>
          </div>
          <div className="flex flex-col w-full content">
            <div className="flex justify-center items-center w-[1282px] topbar">
              <TopBar/>
            </div>
            <div className="w-full routes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/plants" element={<PlantPage />} />
                <Route path="/plant/:id" element={<PlantInfo/>}/>
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/checkups" element={<Checkups/>} />
                <Route path="/addPlant" element={<PlantForm/>} />
                <Route path="/addCheckup" element={<AddCheckup/>}/>
                <Route path="/help" element={<HelpPage/>}/>
               </Routes>    
            </div>
          </div>
        </>
      )}
      {!isAuthenticated && (
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <NavigationHandler />
    </Router>
  );
}

export default App;