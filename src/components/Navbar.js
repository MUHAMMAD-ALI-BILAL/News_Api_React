import React from 'react';

export default function Navbar() {
  return (
   <>
    
   <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#2e7d87"}}>
   <div className="container-fluid">
     <a className="navbar-brand" style={{marginLeft:15}} href="/home">Navbar</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse " id="navbarSupportedContent">
       <ul className="navbar-nav ">
         <li className="nav-item active" style={{marginLeft:200}}>
           <a className="nav-link active" aria-current="page" style={{fontSize:"106%"}} href="/home">Home</a>
         </li>
         <li className="navbar-nav">
           <a className="nav-link active" aria-current="page" style={{fontSize:"106%"}} href="/entertainment">entertainment</a>
         </li>
         <li className="navbar-nav" >
           <a className="nav-link active" aria-current="page" style={{fontSize:"106%"}} href="/general">general</a>
         </li>
         <li className="navbar-nav">
           <a className="nav-link active" aria-current="page" style={{fontSize:"106%"}} href="/business">business</a>
         </li>
         <li className="navbar-nav">
           <a className="nav-link active" aria-current="page" style={{fontSize:"106%"}} href="/health">health</a>
         </li>
         <li className="navbar-nav">
           <a className="nav-link active" aria-current="page" style={{fontSize:"106%"}} href="/science">science</a>
         </li>
         <li className="navbar-nav">
           <a className="nav-link active" aria-current="page" style={{fontSize:"106%"}} href="/sports">sports</a>
         </li>
         <li className="navbar-nav">
           <a className="nav-link active" aria-current="page" style={{fontSize:"106%"}} href="/technology">technology</a>
         </li>

       </ul>
     </div>
   </div>
 </nav>
 </>
  )
}


//flex-row-reverse
