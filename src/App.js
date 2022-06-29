import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Adminlayout from './Layouts/Adminlayout';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router >
      <Routes>
        <Route exact path="/" element={<Adminlayout />}>
          <Route path="profile" element={<Profile />} />
          <Route index element={<Dashboard />} />
        </Route>
 

      </Routes>
    </Router>
  );
}

export default App;
