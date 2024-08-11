import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css'; 

const App = () => {
  const [botArmy, setBotArmy] = useState([]);

  const handleEnlist = (bot) => {
    if (!botArmy.some(b => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const handleRelease = (bot) => {
    setBotArmy(botArmy.filter(b => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => handleRelease(bot));
  };

  return (
    <div className="App">
      <BotCollection onEnlist={handleEnlist} />
      <YourBotArmy
        bots={botArmy}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />
    </div>
  );
};

export default App;
