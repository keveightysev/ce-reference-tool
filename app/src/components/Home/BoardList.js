import React, { useContext } from 'react';

import { AppContext } from '../../Context';

import Board from './Board';

const BoardList = props => {
  const { state } = useContext(AppContext);
  const { boards, selectedState, selectedProfession } = state;
  return (
    <div>
      {boards
        .filter(
          board =>
            board.state === selectedState &&
            board.profession === selectedProfession.toLowerCase(),
        )
        .map(board => (
          <Board key={board.id} board={board} />
        ))}
    </div>
  );
};

export default BoardList;
