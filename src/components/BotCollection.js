// BotCollection.js
import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBots(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch bots:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading bots...</div>;
  }

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

