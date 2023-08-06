import { useNavigate } from 'react-router-dom';
import "./Main.css";
import React from "react";
  
class Main extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {};
        this.projectDisplay = this.projectDisplay.bind(this);

    }

    projectDisplay = ()=>{
        this.props.navigate("./projectDisplay")
    }
//   const navigate = useNavigate();
  
  render(){
        return (
        <div className="App">
        <header className="App-header">
            <div className="topnav">
                <button className="topnavButton" onClick={this.projectDisplay}>首页</button>
                <button className="topnavButton" onClick={this.projectDisplay}>菜单</button>
                <button className="topnavButton" onClick={this.projectDisplay}>成品展示</button>
            </div>
        </header>
        </div>
        );
    }
}
  
export default Main;