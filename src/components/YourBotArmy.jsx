import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";

/**
 * This error we saw last night was because of the props we were retrieving
 * We meant to retrieve `updateRenderBotCollection` and instead retrived `renderBotCollection`
 */

function YourBotArmy({ updateRenderBotCollection }) {
  const [armyofBots, setArmyofBots] = useState([]);
  const bots_url = "http://localhost:3000/bots";

  useEffect(()=>{setArmyofBots(armyofBots)}, [armyofBots]);

  const addBotToArmy = (bot) => {
    if (!armyofBots.find((armyBot) => armyBot.id === bot.id))
      setArmyofBots([...armyofBots, bot]);
  }

  const dispatchBotFromArmy = (Id) => {
    console.log("Clicked!")
    const updateBot = armyofBots.filter((bot) => bot.id !== Id);
    setArmyofBots(updateBot);
  };

  /**
   * This function performs the deletion
   * @param {*} bots_url <-- backend url 
   * @param {*} deleteId  <-- the id of the item we wish to delete
   * 
   * This function perform the task of perform the deletion via the fetch api
   * in response to a successful seletion we call 'dispatchBotFromArmy' and 'updateRenderBotCollection'
   */
  const deleteBot = (bots_url, deleteId) => {
    fetch(`${bots_url}/${deleteId}`, { method: "DELETE" })
      .then(() => {
        dispatchBotFromArmy(deleteId);
        updateRenderBotCollection(true);
      }
      );
  };

  return (
    <div className="bot-collection">
      {armyofBots.map((bot, index) => {
        return (
          <div onClick={() => dispatchBotFromArmy(bot)} key={index} className="bot-card">
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
            <button onClick={() => deleteBot(bots_url, bot.id)}>X</button>
          </div>
        );
      })}
      <BotCollection addBotToArmy={addBotToArmy} />
    </div>
  );
}

export default YourBotArmy;