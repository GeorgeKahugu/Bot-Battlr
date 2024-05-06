import { useState, useEffect } from "react";


function BotCollection({ addBotToArmy, renderBotCollection }) {
  const [bots, setBots] = useState([]);
  // const [shouldRender,setRender]=useState(false) <--- you can delete this not neccessary anymore
  const bot_url = "http://localhost:3000/bots";

  /**
   * Using the DRY principle:
   * Don't Repeat Yourself
   * 
   * So I made this a re-usable this way we don't repeat this code block
   */
  const fetch_bot = () => {
    fetch(bot_url)
      .then((response) => response.json())
      .then((data) => setBots(data));
  }

  useEffect(() => { fetch_bot() }, []); // default rendering

  useEffect(() => { fetch_bot() }, [renderBotCollection]); // render whenever there is a change to `renderBotCollection`

  return (
    <div className="bot-collection" >
      {bots.map((bot, index) => {
        return (
          <div onClick={() => addBotToArmy(bot)} className="bot-card" key={index}> 
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
          </div>
        );
      })}
    </div>
  );
}
export default BotCollection;
