import { useState, useEffect } from "react";
import SortBar from './SortBar';


function BotCollection({ addBotToArmy, renderBotCollection, sortAlgorithm }) {
  const [bots, setBots] = useState([]);
  const [selectedSortAlgorithm, setSelectedSortAlgorithm] = useState(null); // for sort algorithm state
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

  useEffect(() => {
    // logging the re render, not neccessary, just a nice to have for understanding
    console.log("sorted by ", selectedSortAlgorithm);
  }, [selectedSortAlgorithm]); // run when sort algorithm has been selected

  // perform algorithm as soon as event fires of
  const handleSelectChange = (algorithm) => {
    performSortOnAlgorithm(algorithm); 
    setSelectedSortAlgorithm(algorithm);
  }

  // Sort in decending order
  const sortByHealth = (bots) => {
    const newBots = bots.sort(
      (bot1, bot2) => (bot1.health < bot2.health) ? 1 : (bot1.health > bot2.health) ? -1 : 0);

    return newBots
  }

  const sortByDamage = (bots) => {
    const newBots = bots.sort(
      (bot1, bot2) => (bot1.damage < bot2.damage) ? 1 : (bot1.damage > bot2.damage) ? -1 : 0);

    return newBots;
  }

  const sortByArmor = (bots) => {
    const newBots = bots.sort(
      (bot1, bot2) => (bot1.armor < bot2.armor) ? 1 : (bot1.armor > bot2.armor) ? -1 : 0);

    return newBots;
  }

  // Does as name describes
  const performSortOnAlgorithm = (algorithm) => {
    if (algorithm === "health") {
      setBots(sortByHealth(bots));
    }

    if (algorithm === "damage") {
      setBots(sortByDamage(bots));
    }

    if (algorithm === "armor") {
      setBots(sortByArmor(bots));
    }
  }

  return (
    <div className="bot-collection-page">
      <SortBar handleSelectChange={handleSelectChange} />
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
    </div>
  );
}
export default BotCollection;
