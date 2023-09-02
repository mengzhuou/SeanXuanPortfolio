import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import React from "react";

class App extends React.Component<any,any>{
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    );
  }
}
  
export default App;
