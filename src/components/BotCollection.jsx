import { useState, useEffect } from "react";


function BotCollection({addBotToArmy,renderBotCollection}){
  const [bots, setBots] = useState([]);
  const [shouldRender,setRender]=useState(false)


  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, [renderBotCollection]);

  
  

  return (
    <div className="bot-collection">  
      {bots.map((bot, index) => {
        return (

          <div onClick={()=>addBotToArmy(bot)} className="card" key={index}>
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
