import React ,{useEffect, useState}from 'react'
import BotCollection from './components/BotCollection'
import "./App.css"
import YourBotArmy from './components/YourBotArmy'

 function App(){
  const [renderBotCollection, setRenderBotCollection]=useState(false);

  /**
   * This function helps us decide whether to perform a re render or not
   * @param {*} renderBotCollection <-- a boolean variable that tells us whether or not we should re render the component
   * 
   * This function checks the value of 'renderBotCollection' and toggles it based on the it's current value, to help us re render
   * The thinking behind this is as follows:
   *    - initially we set 'renderBotCollection' to false
   *    - once the deleteBox button is click this function is called
   *    - then we check the value of 'renderBotCollection'
   *    - if the value of 'renderBotCollection' is false, we set it to true, this will perform a re render on the BotCollection component.
   *    - as part of that re render we call this again to set it back to false
   */
  const updateRenderBotCollection=(renderBotCollection)=>{
    if (renderBotCollection === false){
      setRenderBotCollection(true);
    } else {
      setRenderBotCollection(false);
    }
  };

  return (
    <div>
      <YourBotArmy updateRenderBotCollection={updateRenderBotCollection} />
      <BotCollection renderBotCollection={renderBotCollection} /> 
    </div>
  );
}


export default App;