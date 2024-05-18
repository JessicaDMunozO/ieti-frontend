import './App.css';

import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import Menu from "./components/Menu/Menu"
import SignUp from "./components/Signup/Signup";

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
      </Routes>
    </Router >
  );
}

export default App;
