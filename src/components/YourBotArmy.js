import React from 'react';

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {bots.map(bot => (
          <div key={bot.id} className="bot-army-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={() => onRelease(bot)}>Release</button>
            <button onClick={() => onDischarge(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
