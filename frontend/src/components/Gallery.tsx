import nail1 from "./nail1.jpg";
import nail2 from "./nail2.jpg";
import nail3 from "./nail3.jpg";
import TopNavBar from './TopNavBar'; 

const Gallery = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <TopNavBar/>
        <main>
            <img src={nail1} alt="nail1"/>

        </main>
        
      </div>
    );
  };
  

export default Gallery;
