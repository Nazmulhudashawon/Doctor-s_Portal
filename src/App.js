import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Route, Routes} from 'react-router';
import Home from './Pages/Home/Home'
import Appointment from './Pages/Appointment/Appointment';
import './App.css';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
       <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            </Routes>
          
        </BrowserRouter>
       
     

     
    </div>
  );
}

export default App;
