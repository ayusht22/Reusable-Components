import logo from './logo.svg';
import './App.css';
import CustomContainer from './components/CustomContainer';
import axios from 'axios';
import { useState,useEffect } from 'react';
function App() {
  
  const [displayButton,setDisplayButton]=useState(false);
  const [componentsId,setComponentsId]=useState([2,3,4,5,6]);

  const handleClick=((e)=>{
    e.preventDefault();
    setDisplayButton(false);
  })

  useEffect(()=>{
    
  },[displayButton]);

  return (
    <div className="App">
      {
        displayButton?<button onClick={handleClick}>Submit</button>:null
      }
      <CustomContainer></CustomContainer>
      <div style={{borderTop:'10px'}}>
        {
          componentsId.map(
            (data,id)=> <CustomContainer key={id} ind={data} setDisplayButton={{setDisplayButton}} displayButton={displayButton}></CustomContainer>
            
          )
        }
      </div>
      
    </div>
  );
}

export default App;
