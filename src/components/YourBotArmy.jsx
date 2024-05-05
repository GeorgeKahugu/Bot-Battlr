import { useState } from "react";
import BotCollection from "./BotCollection";

function YourBotArmy({renderBotCollection}) {
  const [armyofBots, setArmyofBots] = useState([]);
  const url= "http://localhost:3000/bots";

  const addBotToArmy = (bot) => {
    if(!armyofBots.find((armyBot)=>armyBot.id===bot.id))
    setArmyofBots([...armyofBots, bot]);
  }
const dispatchBotFromArmy=(Id)=>{
  const updateBot=armyofBots.filter((bot)=>bot.id !== Id);
  setArmyofBots(updateBot);
};

const deleteBot=(url, deleteId) => {
  fetch(`${url}/${deleteId}`,{method:"DELETE"}).then(()=>renderBotCollection(true)
);

  };

  return (
    <div className="bot-collection">
      {armyofBots.map((bot, index) => {
        return (
          <div key={index} className="card">
            <img src={bot.avatar_url} alt={bot.name} />
            <p>Id:{bot.id}</p>
            <p>Name:{bot.name}</p>
            <p>Health:{bot.health}</p>
            <p>Damage:{bot.damage}</p>
            <p>Armour:{bot.armor}</p>
            <p>Bot Class:{bot.bot_class}</p>
            <p>Catch Phrase:{bot.catchphrase}</p>
            <p>Created At:{bot.created_at}</p>
            <p>Updated At:{bot.updated_at}</p>
            <button onClick={()=>deleteBot(bot.id)}>X</button>
          </div>
        );
      })}
      <BotCollection addBotToArmy={addBotToArmy}/>
    </div>
  );
}

export default YourBotArmy;