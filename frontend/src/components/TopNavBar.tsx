import { useNavigate } from "react-router-dom";
import instagramIcon from "./contactImages/instagram_icon.png";

const TopNavBar  = () => {
  const navigate = useNavigate();

  const mainNav = () => {
    navigate("/");
  };

  const galleryNav = () => {
      navigate("/Gallery");
  };

  const contactNav = () => {
    navigate("/Contact");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/xiaotanzai/", "_blank");
  };

  const errorNav = () => {
    navigate("/NotFound");
  };

  return (
    <div className="topnav">
      <button
        className="topnavButton"
        onClick={mainNav}
      >
        Main
      </button>
      <button
        className="topnavButton"
        onClick={galleryNav}
      >
        Gallery
      </button>
      <button
        className="topnavButton"
        onClick={contactNav}
      >
        Contact
      </button>
      <img
        src={instagramIcon}
        alt="instagram"
        className="w-11 ml-4 mt-2 cursor-pointer"
        onClick={openInstagram}
      />
      <button className='appointmentButtonOnTop' onClick={errorNav}>
        BOOK
      </button>
    </div>
  );
};
  

export default TopNavBar ;
