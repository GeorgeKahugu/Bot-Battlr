import React ,{useState}from 'react'
import BotCollection from './components/BotCollection'
import "./App.css"
import YourBotArmy from './components/YourBotArmy'

 function App(){
  const [renderBotCollection,setRenderBotCollection]=useState(false);
  const updateRenderBotCollection=()=>{
    setRenderBotCollection(true);
  };

  return (
    <div>
      <YourBotArmy updateRenderBotCollection={updateRenderBotCollection}/>   
      <BotCollection/> 
    </div>
  );
}


export default App;