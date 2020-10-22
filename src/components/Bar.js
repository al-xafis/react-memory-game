import React from 'react';
import '../styles/Bar.css';

const Bar = (props) => {
  return (
    <div className="bar">
      <h1>Celebrity Memory Game</h1>
      <div className="score">
        <div>Score: {props.score}</div>
        Top Score: {props.bestScore}
      </div>
    </div>
  );
};

export default Bar;