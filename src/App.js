import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Status from './pages/Status';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import Gramasevaka from './pages/GSDashboard';
import ApplyForm from './pages/ApplyForm';


function App() {
  return (
    <div className="App">

      <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/user" element={<UserDashboard/>} />
          <Route path="/user/status" element={<Status/>} />
          <Route path="/user/apply" element={<ApplyForm/>} />
          <Route path="/gramasevaka" element={<Gramasevaka/>} />
        </Routes>
      </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
