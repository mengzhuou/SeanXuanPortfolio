import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'; 

const Main = () => {
    const navigate = useNavigate();
  
    const mainNavigation = () => {
      navigate("/mainNavigation");
    };
  
    return (
      <div className="min-h-screen flex flex-col">
        <header>
          <div className="topnav">
            <button
              className="topnavButton"
              onClick={mainNavigation}
            >
              首页
            </button>
          </div>
        </header>
        <main className="p-4 border-4 container mx-auto py-8 flex-1">
            <div className="flex items-center mt-8">
                <FontAwesomeIcon icon={faCircle} style={{color: "#88adec",}} />

                <div className="bg-white-500 font-bold tracking-wide text-black p-4">Personal Info</div>
            </div>
            <div className="hrLine"></div>
            <div className="bg-blue-200 text-black p-4">
                <p>
                    Hello, this is Sean. I'm open to home/office nail
                    appointment. Please set up the appointment using the link
                    below. Address will be provided after you signed up.
                </p>
            </div>
        </main>
        <footer className="bg-blue-500 text-white p-4">
          © {new Date().getFullYear()} Your Company Name
        </footer>
      </div>
    );
  };
  

export default Main;
