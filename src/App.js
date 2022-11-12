import logo from './logo.svg';
import './App.css';
import Cubes from './components/Cubes';
import LandingPage from './components/LandingPage';
import { useState } from 'react';


function App() {
  const [isShow,setIsShow] = useState(false)
  return (
    <div>


      { (isShow? <Cubes/> : <LandingPage landClass={!isShow? 'landing-page': 'hide'} click={()=> {
            setIsShow(!isShow)
        }}/>) 
   
      }

      
    </div>
  );
}

export default App;
