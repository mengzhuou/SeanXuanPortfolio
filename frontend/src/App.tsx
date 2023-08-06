import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import React from "react";

class App extends React.Component<any,any>{
  constructor(props:any){
    super(props);
    this.state = {EventID: -1, arr:[]};
    this.getEventID = this.getEventID.bind(this);
    this.setEventID = this.setEventID.bind(this);
    this.setarr = this.setarr.bind(this);
    this.getarr = this.getarr.bind(this);

  }
  setEventID(id:number){
    this.setState({EventID: id});
  }
  getEventID(){
    return this.state.EventID;
  }

  setarr(arr:any[]){
    let tmp:any[] = [];
    for(let i in arr){
      tmp.push(arr[i]);
    }
    this.setState({arr:tmp});
  }
  getarr(){
    return this.state.arr;
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </Router>
    );
  }
}
  
export default App;
