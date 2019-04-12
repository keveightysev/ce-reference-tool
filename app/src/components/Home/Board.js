import React from 'react';

import BoardCard from '../../styles/BoardCard';

const Board = ({ board }) => {
  const upperFirst = string => {
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  return (
    <BoardCard>
      <h2>
        {board.state} {upperFirst(board.profession)}s
      </h2>
      <table>
        <tbody>
          <tr>
            <td>Board Website:</td>
            <td>{board.url}</td>
          </tr>
          <tr>
            <td>Accepted Credits:</td>
            <td>
              {board.accepted_credits
                ? board.accepted_credits
                : 'No information provided'}
            </td>
          </tr>
          <tr>
            <td>Amount of Credits Required:</td>
            <td>{board.credits ? board.credits : 'No information provided'}</td>
          </tr>
          <tr>
            <td>Amount of Home Study Credits Allowed:</td>
            <td>
              {board.hs_credits ? board.hs_credits : 'No information provided'}
            </td>
          </tr>
          <tr>
            <td>Reporting Period:</td>
            <td>
              {board.reporting_period
                ? board.reporting_period
                : 'No information provided'}
            </td>
          </tr>
        </tbody>
      </table>
    </BoardCard>
  );
};

export default Board;
