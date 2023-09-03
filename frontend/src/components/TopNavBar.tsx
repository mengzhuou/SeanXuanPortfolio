import { useNavigate } from "react-router-dom";

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

  return (
    <div className="topnav">
      <button
        className="topnavButton"
        onClick={mainNav}
      >
        首页
      </button>
      <button
        className="topnavButton"
        onClick={galleryNav}
      >
        作品展示
      </button>
      <button
        className="topnavButton"
        onClick={contactNav}
      >
        联系方式
      </button>
    </div>
  );
};
  

export default TopNavBar ;
