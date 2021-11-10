import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import './App.css';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/"
            element={<Home />} />
            <Route exact path="/appointment"
            element={<Appointment />}/>
            <Route path="/login"
            element={<Login />} />
            <Route path="/register"
            element={<Register/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
