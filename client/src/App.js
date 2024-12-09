import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Landing from './pages/landing/landing.jsx';
import Login from './pages/login/login.jsx';
import Home from './pages/home/home.jsx';
import Erro from './pages/erro/erro.jsx';





function App() {
    return (
   
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path='/login' element={<Login />}/>
              <Route path="/home" element={ <Home/>}/>
              <Route path="/erro" element={ <Erro/>}/>
            </Routes>
          </div>
        </Router>
    );
  }
  
  export default App; 