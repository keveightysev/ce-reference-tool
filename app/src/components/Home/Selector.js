import React, { useContext } from 'react';

import { AppContext } from '../../Context';

import Dropdowns from '../../styles/Dropdowns';

const Selector = props => {
  const { dispatch } = useContext(AppContext);

  return (
    <Dropdowns>
      <div>
        <h2>Select a State</h2>
        <select
          onChange={e => {
            dispatch({ type: 'CHANGE_STATE', payload: e.target.value });
          }}
        >
          <option value='' defaultValue>
            Choose here
          </option>
          <option value='AL'>Alabama</option>
          <option value='AK'>Alaska</option>
          <option value='AZ'>Arizona</option>
          <option value='AR'>Arkansas</option>
          <option value='CA'>California</option>
          <option value='CO'>Colorado</option>
          <option value='CT'>Connecticut</option>
          <option value='DE'>Delaware</option>
          <option value='FL'>Florida</option>
          <option value='GA'>Georgia</option>
          <option value='HI'>Hawaii</option>
          <option value='ID'>Idaho</option>
        </select>
      </div>
      <div>
        <h2>Select a Profession</h2>
        <select
          onChange={e =>
            dispatch({ type: 'CHANGE_PROFESSION', payload: e.target.value })
          }
        >
          <option value='' defaultValue>
            Choose here
          </option>
          <option>Psychologist</option>
          <option>Social Worker</option>
        </select>
      </div>
    </Dropdowns>
  );
};

export default Selector;
