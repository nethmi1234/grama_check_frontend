import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Status from './pages/Status';
import UserDashboard from './pages/UserDashboard';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDashboard/>} />
          <Route path="/user/status" element={<Status/>} />
        </Routes>
      </BrowserRouter>
      {/* <UserDashboard/> */}
    </div>
  );
}

export default App;
