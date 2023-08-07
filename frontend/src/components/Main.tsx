import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; 
import { useRef, useState } from 'react';
import wechat from "./SeanWechat.jpg";
import instagram from "./SeanInstagram.jpg";

const Main = () => {
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);
    const emailRef = useRef<HTMLAnchorElement | null>(null);
  
    const mainNavigation = () => {
      navigate("/mainNavigation");
    };

    const copyEmail = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { 
        e.preventDefault();
        const emailText = emailRef.current?.textContent || ""; 
        navigator.clipboard.writeText(emailText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
            <div className="flex items-center mt-8">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{color: "#19438a"}} />
                        <span className="sr-only">Location:</span> Dallas, TX</li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#19438a"}} />
                        <span className="sr-only">Email:</span>
                        <a href="#" onClick={copyEmail} ref={emailRef} className="ml-1">dachenxuan@gmail.com</a>

                        {copied && <span style={{ marginLeft: "10px", color: "green" }}>Copied</span>}
                    </li>
                </ul>
                <p>WeChat</p>
                <img src={wechat} alt="wechat" className="w-1/5"/>
                <p>Instagram</p>
                <img src={instagram} alt="instagram" className="w-1/5"/>

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
