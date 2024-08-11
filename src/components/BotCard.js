import React from 'react';

const BotCard = ({ bot, onEnlist }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
};

export default BotCard;
