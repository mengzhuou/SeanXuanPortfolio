import React from "react";
import { useNavigate } from "react-router-dom";
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
        <main className="container mx-auto py-8 flex-1">
          <section>
            <div className="flex items-center mb-8 mt-8">
              <div className="bg-white-500 font-bold tracking-wide text-black p-4">Personal Info</div>
            </div>
            <div className="bg-blue-200 text-black p-4">
              <p>
                Hello, this is Sean. I'm open to home/office nail
                appointment. Please set up the appointment using the link
                below. Address will be provided after you signed up.
              </p>
            </div>
          </section>
        </main>
        <footer className="bg-blue-500 text-white p-4">
          © {new Date().getFullYear()} Your Company Name
        </footer>
      </div>
    );
  };
  

export default Main;
