import { useNavigate, useLocation } from "react-router-dom";
import instagramIcon from "./contactImages/instagram_icon.png";

const TopNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
        className={`topnavButton ${location.pathname === "/" ? "active" : ""}`}
        onClick={mainNav}
      >
        Main
      </button>
      <button
        className={`topnavButton ${location.pathname === "/Gallery" ? "active" : ""}`}
        onClick={galleryNav}
      >
        Gallery
      </button>
      <button
        className={`topnavButton ${location.pathname === "/Contact" ? "active" : ""}`}
        onClick={contactNav}
      >
        Contact
      </button>
      <img
        src={instagramIcon}
        alt="instagram"
        className="ml-4 cursor-pointer w-11"
        onClick={openInstagram}
      />
      <button className="appointmentButtonOnTop" onClick={errorNav}>
        BOOK
      </button>
    </div>
  );
};

export default TopNavBar;
