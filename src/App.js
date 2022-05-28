import './App.css';
import Navbar from './components/Navbar';
import Newsitem from './components/Newsitem';
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
   <>
 <Router>
   <Navbar/>
   <Routes>

  {/* <Route exact path="/" ><Newsitem pageSize={15} category="sports"/>
  <Route exact path="/" ><Newsitem pageSize={15} category="health"/>
  <Route exact path="/"><Newsitem pageSize={15} category="technology"/> 
  <Route path="/Navbar" element={<Newsitem pageSize={15} category="business"/>}/>*/}
  {/* <Newsitem pageSize={15} category="general"/> */}
  <Route path='/' element={<Newsitem pageSize={15} category="general"/>}/>
  <Route exact path="/home" element={<Newsitem pageSize={15} category="general"/>}/>
  <Route exact path="/sports" element={<Newsitem pageSize={15} category="sports"/>}/>
  <Route exact path="/health" element={<Newsitem pageSize={15} category="health"/>}/>
  <Route exact path="/general" element={<Newsitem pageSize={15} category="general"/>}/>
  <Route exact path="/business" element={<Newsitem pageSize={15} category="business"/>}/>
  <Route exact path="/science" element={<Newsitem pageSize={15} category="science"/>}/>
  <Route exact path="/entertainment" element={<Newsitem pageSize={15} category="entertainment"/>}/>
  <Route exact path="/technology" element={<Newsitem pageSize={15} category="technology"/>}/>

  {/*<Route path=''><Newsitem exact key="sports" pagesize = {15} category="sports"/></Route>
  <Route path=''><Newsitem exact key="health" pagesize = {15} category="health"/></Route>
  <Route path=''><Newsitem exact key="business" pagesize = {15} category="business"/></Route>
  <Route path=''><Newsitem exact key="general" pagesize = {15} category="general"/></Route>
  <Route path=''><Newsitem exact key="science" pagesize = {15} category="science"/></Route>
  <Route path=''><Newsitem exact key="entertainment" pagesize = {15} category="entertainment"/></Route>
  <Route path=''><Newsitem exact key="technology" pagesize = {15} category="technology"/></Route> */}
    
    </Routes>
    </Router>
   </>
   
  );
}

export default App;
