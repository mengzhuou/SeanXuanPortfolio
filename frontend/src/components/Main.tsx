import TopNavBar from './TopNavBar'; 
import "./Main.css";

const Main = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <TopNavBar/>
        <main className="p-4 mx-auto flex-1">
        </main>
      </div>
    );
  };
  

export default Main;
