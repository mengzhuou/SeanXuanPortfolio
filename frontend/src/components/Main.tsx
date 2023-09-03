import TopNavBar from './TopNavBar'; 
import "./Main.css";

const Main = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <TopNavBar/>
          <div className="mainContainer">
            <h1 className='MainTitleTextStyle'>
              Bringing fashion to your fingertips
            </h1>
            <div className='centered-content'>
              <button className='AppointmentButton'>
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
      </div>
    );
};

export default Main;
