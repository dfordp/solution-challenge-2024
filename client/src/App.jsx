import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import PlantPage from './pages/Plants';
import SettingsPage from './pages/Settings';
import TasksPage from './pages/Tasks';
import Checkups from './pages/Checkups';

import SideBar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import { PlantForm } from "./pages/form";

const NavigationHandler = ()=> {
  const navigate = useNavigate();

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
          navigate('/');
        }
        break;
      }
    }

    if (!idCookieExists) {
      navigate('/auth');
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="fonts-sans flex flex-row bg-white">
        <div>
          <SideBar/>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center w-[1282px]">
            <TopBar/>
          </div>
          {/* <NavigationHandler /> */}
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
            <Route path="/plants" element={<PlantPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/checkups" element={<Checkups/>} />
            <Route path="/contact" element={<PlantForm/>} />
          </Routes>    
        </div>
      </div>
    </Router>
  );
}

export default App;