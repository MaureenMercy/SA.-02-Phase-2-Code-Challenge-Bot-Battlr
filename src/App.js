import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css'; 

const App = () => {
  // State to hold the bot army
  const [botArmy, setBotArmy] = useState([]);

  // Function to add a bot to the bot army
  const handleEnlist = (bot) => {
    // Check if the bot is already in the army to avoid duplicates
    if (!botArmy.some(b => b.id === bot.id)) {
      // Add bot to the army
      setBotArmy([...botArmy, bot]);
    }
  };

  // Function to remove a bot from the bot army
  const handleRelease = (bot) => {
    setBotArmy(botArmy.filter(b => b.id !== bot.id));
  };

  // Function to remove a bot from the bot army and send a DELETE request to the server
  const handleDischarge = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => handleRelease(bot))  // Remove bot from the state after successful deletion
      .catch(error => console.error('Error during bot discharge:', error));
  };

  return (
    <div className="App">
      {/* Main heading for site */}
      <header className="App-header">
        <h1>Thazar Bot Manager</h1>
        <p>Manage your bot army and enlist new bots!</p>
      </header>
      {/* Pass handleEnlist to BotCollection to allow enlisting of bots */}
      <BotCollection onEnlist={handleEnlist} />
      {/* Pass botArmy, handleRelease, and handleDischarge to YourBotArmy */}
      <YourBotArmy
        bots={botArmy}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />
    </div>
  );
};

export default App;
