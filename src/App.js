import LoginPage from './pages/LoginPage/LoginPage';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudent from './pages/AddStudent/AddStudent';
import UserList from './pages/userList/UserList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path='' element={<UserList/>}></Route>
          <Route path='add' element={<AddStudent/>}></Route>
         
        </Route>
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
