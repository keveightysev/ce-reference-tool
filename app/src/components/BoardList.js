import React, { useContext } from 'react';

import { AppContext } from '../Context';

const BoardList = props => {
  const { state } = useContext(AppContext);
  const boards = state.boards;
  return (
    <div>
      <h2>Board List</h2>
      {boards.map(board => {
        return (
          <div key={board.id}>
            <h3>
              {board.state} {board.profession}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default BoardList;
