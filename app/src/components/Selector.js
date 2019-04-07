import React from 'react';

import Dropdowns from '../styles/Dropdowns';

const Selector = props => {
  return (
    <Dropdowns>
      <div>
        <h2>Select a State</h2>
        <select>
          <option value='' disabled hidden>
            Choose here
          </option>
          <option value='AL'>Alabama</option>
          <option value='AK'>Alaska</option>
        </select>
      </div>
      <div>
        <h2>Select a Profession</h2>
        <select>
          <option value='' disabled hidden>
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
