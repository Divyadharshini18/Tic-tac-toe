import React from 'react';

function Square({ value, onClick, isWin, disabled }) {
  const classes = ['square'];
  if (isWin) classes.push('win');
  if (disabled) classes.push('disabled');

  return (
    <button
      className={classes.join(' ')}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Square ${value ?? 'empty'}`}
    >
      {value}
    </button>
  );
}

export default Square;