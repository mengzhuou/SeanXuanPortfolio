import TopNavBar from './TopNavBar'; 
import "./Main.css";
import nailBackgournd from "./nailImages/nail4.jpg";


const Main = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <TopNavBar/>
        <main className="mx-auto">
          <div className="container">
            <img className="gallery-background" src={nailBackgournd} alt="nailBackgournd"/>
            <h1 className='MainTitleTextStyle'>
              Bringing fashion to your fingertips
            </h1>
            <div className='centered-content'>
              <button className='AppointmentButton'>
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  };
  

export default Main;
