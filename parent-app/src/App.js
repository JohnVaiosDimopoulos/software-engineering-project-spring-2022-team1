import { Routes, Route } from "react-router-dom";

import Logobar from './components/Logobar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div class="text-center">
      <Logobar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/register' element={<Register />}/>
      </Routes>
      <br/><br/>
      <Footer />
    </div>
  );
}

export default App;
