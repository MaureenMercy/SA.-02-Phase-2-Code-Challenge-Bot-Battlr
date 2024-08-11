import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  return (
    <div>
      <h2>Available Bots</h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
