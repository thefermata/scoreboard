import React from 'react';
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";

export const Header = ({players, title}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <StopWatch />
    </header>
  );
};