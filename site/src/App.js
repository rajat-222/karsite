import './App.css';
import Home from './Componets/Home'

import {
  BrowserRouter as Router,
 Routes,
  Route,

} from "react-router-dom";
import Contact from './Componets/Contact'
import Login from './Componets/Login'
import Search from './Componets/Search'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Search" element={<Search/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
