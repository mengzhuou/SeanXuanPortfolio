import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faUser, faCopy } from '@fortawesome/free-solid-svg-icons'; 
import { useRef, useState } from 'react';
import wechatQrCode from "./contactImages/XuanWechat.jpg";
import instagramQrCode from "./contactImages/XuanInstagram.jpg";
import wechatIcon from "./contactImages/wechat_icon.png";
import instagramIcon from "./contactImages/instagram_icon.png";
import TopNavBar from './TopNavBar'; 
import "./Contact.css";
import backgroundImg from "./otherImages/background.jpg"


const Contact = () => {
    const [copied, setCopied] = useState(false);
    const emailRef = useRef<HTMLAnchorElement | null>(null);
    const [showWechatPopup, setShowWechatPopup] = useState(false);
    const [showInsPopup, setShowInsPopup] = useState(false);

    const copyEmail = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { 
        e.preventDefault();
        const emailText = emailRef.current?.textContent || ""; 
        navigator.clipboard.writeText(emailText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const wechatOpenPopup = () => {
        setShowWechatPopup(true);
    }

    const wechatClosePopup = () => {
        setShowWechatPopup(false);
    };

    const insOpenPopup = () => {
        setShowInsPopup(true);
    }

    const insClosePopup = () => {
        setShowInsPopup(false);
    };
  
    return (
      <div className="min-h-screen flex flex-col">
        <TopNavBar/>
        <div className="backgroundBody">
            <img className="gallery-background" src={backgroundImg} alt="backgroundImg"/>
        </div>
        <main className="mx-2 mt-10">
            <h1 className='TitleTextStyle'>Contact us</h1>
            <div className="hrLine"></div>
            <div className="flex p-5 container flex justify-center">
                <div className="flex-col items-center mb-12">
                    <div className="flex">
                        <span onClick={wechatOpenPopup} className="cursor-pointer">
                            <img src={wechatIcon} alt="wechat" className="w-11 h-8 mt-3.5"/>
                        </span>

                        <div className="qrPopup_container" style={{display: showWechatPopup ? 'block' : 'none'}}>
                            <div className="qrPopup_content">
                                <img src={wechatQrCode} alt="wechat" />
                                <span className="qr_close top-0 right-0 cursor-pointer" onClick={wechatClosePopup}>&times;</span>
                            </div>
                        </div>

                        <span onClick={insOpenPopup} className="cursor-pointer">
                            <img src={instagramIcon} alt="instagram" className="w-11 ml-4 mt-2"/>
                        </span>

                        <div className="qrPopup_container" style={{display: showInsPopup ? 'block' : 'none'}}>
                            <div className="qrPopup_content">
                                <img src={instagramQrCode} alt="wechat" />
                                <span className="qr_close top-0 right-0 cursor-pointer" onClick={insClosePopup}>&times;</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-lg">
                        <FontAwesomeIcon icon={faUser} style={{color: "#19438a"}} />
                        <span className="sr-only">Name:</span> 
                        <span className='ml-1'>
                            Dachen Xuan (Jerry)
                        </span>

                    </div>
                    <div className="mt-1 text-lg tracking-wider">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{color: "#19438a"}} />
                        <span className="sr-only">Location:</span> 
                        <span className='ml-2'>
                            Dallas, TX
                        </span>
                    </div>
                    <div className="mt-1 text-lg emailStyle">
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#19438a"}} />
                        <span className="sr-only">Email:</span>
                        <span ref={emailRef} className='ml-1'>
                            Dachenxuan@gmail.com
                        </span>
                        <span onClick={copyEmail} className="cursor-pointer ml-2">
                            <FontAwesomeIcon icon={faCopy} style={{color: "#19438a"}} className="ml-3"/>
                        </span>
                        <span className={`copyAlert ${copied ? 'animate' : ''} ml-2.5 text-green-500`}>Copied</span>
                    </div>
                </div>
            </div>
            <div className="hrLine"></div>
        </main>
      </div>
    );
  };
  

export default Contact;
