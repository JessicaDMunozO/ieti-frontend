import './App.css';

import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import Menu from "./components/Menu/Menu"
import SignUp from "./components/Signup/Signup";
import Providers from './components/Providers/Providers';
import UpdateMedicine from './components/UpdateMedicine/UpdateMedicine';
import AddMedicine from './components/AddMedicine/AddMedicine';
import DeleteMedicine from './components/DeleteMedicine/DeleteMedicine';
import Profile from './components/Profile/Profile';
import UpdateUser from './components/UpdateUser/UpdateUser';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Login />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp />
          }
        />
        <Route
          path="/mainPage"
          element={
            <div>
              <Menu />
              <MainPage />
            </div>
          }
        />
        <Route
          path="/providers"
          element={
            <div>
              <Menu />
              <Providers />
            </div>
          }
        />
        <Route
          path="/updateMedicine/:pharmacy"
          element={
            <div>
              <Menu />
              <UpdateMedicine />
            </div>
          }
        />
        <Route
          path="/addMedicine/:pharmacy"
          element={
            <div>
              <Menu />
              <AddMedicine />
            </div>
          }
        />
        <Route
          path="/deleteMedicine/:pharmacy"
          element={
            <div>
              <Menu />
              <DeleteMedicine />
            </div>
          }
        />
         <Route
          path="/profile/:document"
          element={
            <div>
              <Menu />
              <Profile />
            </div>
          }
        />
         <Route
          path="/updateProfile/:document"
          element={
            <div>
              <Menu />
              <UpdateUser />
            </div>
          }
        />
      </Routes>
    </Router >
  );
}

export default App;
