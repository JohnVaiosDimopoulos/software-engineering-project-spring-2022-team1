import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";

import Logobar from './components/Logobar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
       <div className="App">
        <Logobar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/login' exact element={<Login />}/>
          <Route path='/register' exact element={<Register />}/>
        </Routes>
        <br/><br/>
        <Footer />
      </div>
  );
}

export default App;
