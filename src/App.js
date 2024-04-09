
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
          <Route path="/" element={<Hero/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
       </Routes>
       
    </div>
  );
}

export default App;
