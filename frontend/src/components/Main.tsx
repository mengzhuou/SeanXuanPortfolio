import TopNavBar from './TopNavBar'; 
import { useNavigate } from "react-router-dom";

import "./Main.css";

const Main = () => {
  
    const navigate = useNavigate();
  
    const errorNav = () => {
      navigate("/NotFound");
    };
  

    return (
      <div className="min-h-screen flex flex-col">
        <TopNavBar/>
          <div className="mainContainer">
            {/* <h1 className='MainTitleTextStyle'>
              Bringing fashion to your fingertips
            </h1> */}
            <div className='centered-content'>
              <button className='AppointmentButton' onClick={errorNav}>
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
      </div>
    );
};

export default Main;
