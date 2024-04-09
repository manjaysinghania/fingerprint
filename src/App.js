
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Heading from './component/Heading'
import Hero from './component/Hero'
import About from './component/About'
import Login from './component/Login'
import Register from './component/Register'

function App() {
  return (
    <div className="App">
       <Heading/>
       <Routes>
          <Route path="/" element={<Hero/>} className="xs:grid-cols-1"></Route>
          <Route path="/About" element={<About/>} className="xs:grid-cols-1"></Route>
          <Route path="/Login" element={<Login/>} className="xs:grid-cols-1"></Route>
          <Route path="/Register" element={<Register/>} className="xs:grid-cols-1"></Route>
       </Routes>
       
    </div>
  );
}

export default App;
