import React from 'react';

export const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">players: {props.totalPlayers}</span>
    </header>
  );
}