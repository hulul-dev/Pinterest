import { useEffect } from "react";
import './App.css';
import {Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark} from "@mui/icons-material";
import pinlogo from "./image/pin.png";
import search from "./image/search.png";
import MenuContainer from './components/MenuContainer';
import Pin from './components/Pin';
import Data from "./components/Data";

function App() {

  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("black"));
      this.classList.add("black");
    }
  }, []);


  return (
    <div className="App min-h-screen w-screen h-screen bg-white flex overflow-x-hidden">
      <div className='menuContainer w-24 h-full flex flex-col items-center fixed top-0'>
      <img
          src={pinlogo}
          alt="img"
          className="logo"
        />
        <div className='subMenu h-full flex flex-col items-center'>
          <div>
            <MenuContainer icon={<Person/>}/>    
            <MenuContainer icon={<Notifications/>}/>  
            <MenuContainer icon={<Chat/>}/>  
          </div>
          <div>
            <MenuContainer icon={<FavoriteRounded/>}/>    
          </div>
          <div>
            <MenuContainer icon={<QuestionMark/>}/>    
            <MenuContainer icon={<Add/>}/>   
          </div>
        </div>
      </div>
      <main className='main h-full pt-8 ml-32'>
        <div className='searchBox flex items-center justify-center w-full bg-white'>
          <input type = 'text' placeholder='Search...'/>
          <div className='search bg-black w-10 h-10 flex justify-center items-center'>
            <img src = {search} alt = 'image'/>
          </div>
        </div>
        <div className='mainContainer h-auto grid mt-4 justify-center'>
          {Data && Data.map((data)=>( 
            <Pin 
            pinSize={data.size}
            imgSrc={data.imgSrc}
            name={data.name}
            link={data.link}
            />
          ))}
         

        </div>
      </main>

    </div>
  );
}

export default App;
