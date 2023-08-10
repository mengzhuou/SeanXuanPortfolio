import { useNavigate } from "react-router-dom";

const Gallery = () => {
    const navigate = useNavigate();

    const mainNavigation = () => {
      navigate("/");
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
            <button
              className="topnavButton"
              onClick={mainNavigation}
            >
              作品展示
            </button>
          </div>
        </header>
        
      </div>
    );
  };
  

export default Gallery;
