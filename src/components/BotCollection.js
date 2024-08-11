import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import Search from './Search';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);
  const [query, setQuery] = useState('');
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

  // Handle cases where name or model might be undefined
  const filteredBots = bots.filter(bot =>
    (bot.name && bot.name.toLowerCase().includes(query.toLowerCase())) ||
    (bot.model && bot.model.toLowerCase().includes(query.toLowerCase()))
  );

  if (loading) {
    return <div>Loading bots...</div>;
  }

  return (
    <div>
      <Search query={query} setQuery={setQuery} />
      <h2>Available Bots</h2>
      <div className="bot-collection">
        {filteredBots.length > 0 ? (
          filteredBots.map(bot => (
            <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} />
          ))
        ) : (
          <p>No bots available.</p>
        )}
      </div>
    </div>
  );
};

export default BotCollection;
