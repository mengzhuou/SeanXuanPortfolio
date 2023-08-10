import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import React from "react";

class App extends React.Component<any,any>{
  constructor(props:any){
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
        </Routes>
      </Router>
    );
  }
}
  
export default App;
