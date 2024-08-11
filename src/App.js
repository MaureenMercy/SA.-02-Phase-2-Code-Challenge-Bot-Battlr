import React, { useState } from 'react';
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
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => handleRelease(bot))
      .catch(error => console.error('Failed to discharge bot:', error));
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
