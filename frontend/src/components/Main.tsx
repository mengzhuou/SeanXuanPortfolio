import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEnvelope, faMapMarkerAlt, faUser, faCopy } from '@fortawesome/free-solid-svg-icons'; 
import { useRef, useState } from 'react';
import wechat from "./XuanWechat.jpg";
import instagram from "./XuanInstagram.jpg";
import wechatIcon from "./wechat_icon.png";
import instagramIcon from "./instagram_icon.png";
import mainPic from "./MainPic.jpg";


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
        <main className="p-4 mx-auto flex-1">
            <div className="flex items-center mt-8">
                <FontAwesomeIcon icon={faCircle} style={{color: "#88adec"}} />
                <div className="bg-white-500 font-bold tracking-wide text-black p-4">Personal Info</div>
            </div>
            <div className="hrLine"></div>
            <div className="flex mb-10 p-4 container flex justify-center">
                <div className="w-100 h-100 ml-20 mr-20">
                    <img src={mainPic} alt="mainPic"/>
                </div>
                <div className="flex-col items-center">
                    <div className="flex">
                        <img src={wechatIcon} alt="wechat" className="w-11 h-8 mt-3.5"/>
                        <img src={instagramIcon} alt="instagram" className="w-11 ml-4 mt-2"/>
                    </div>
                    <div className="mt-3 text-lg">
                        <FontAwesomeIcon icon={faUser} style={{color: "#19438a"}} />
                        <span className="sr-only">Name:</span> Jerry Xuan

                    </div>
                    <div className="mt-1 text-lg">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{color: "#19438a"}} />
                        <span className="sr-only">Location:</span> Dallas, TX
                    </div>
                    <div className="mt-1 text-lg">
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#19438a"}} />
                        <span className="sr-only">Email:</span>
                        <span onClick={copyEmail} ref={emailRef} className="ml-1">
                            dachenxuan@gmail.com
                        </span>
                        {copied && <span style={{ marginLeft: "10px", color: "green" }}>Copied</span>}
                        <FontAwesomeIcon icon={faCopy} style={{color: "#19438a"}} className="ml-3"/>
                    </div>
                </div>
            </div>
            <div className="hrLine"></div>
            <div className="bg-blue-200 text-black p-4">
                <p>
                    Hello, I'm open to home/office nail
                    appointment. Please set up the appointment using the link
                    below. Address will be provided after you signed up.
                </p>
            </div>
        </main>
      </div>
    );
  };
  

export default Main;
