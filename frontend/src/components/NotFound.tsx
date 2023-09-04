import errImg from "./otherImages/404.png";
import TopNavBar from './TopNavBar'; 

const NotFound = () => {
  return (
    <div>
      <TopNavBar/>
      <img className="errImg" src={errImg} alt="Not Found"/>
    </div>
  );
};

export default NotFound;
