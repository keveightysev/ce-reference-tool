import React, { useState } from 'react';

import { SubPage } from '../../styles/SubPage';

import states from '../states';

const NewBoard = props => {
  const initState = {
    country: 'us',
    state: '',
    profession: '',
    accepted_credits: '',
    url: '',
    credits: '',
    hs_credits: '',
    reporting_period: '',
  };

  const [form, setForm] = useState(initState);

  const handleChanges = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <SubPage>
      <h3>Add New Board</h3>
      <form>
        <div>
          <label htmlFor='state' className='sr'>
            State:
          </label>
          <select id='state' value={form.state} onChange={handleChanges}>
            <option value='' defaultValue>
              Choose a State
            </option>
            {states.map(state => (
              <option key={state.abbr} value={state.abbr}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='profession' className='sr'>
            Profession
          </label>
          <input
            type='text'
            id='profession'
            value={form.profession}
            onChange={handleChanges}
            placeholder='Profession'
          />
        </div>
        <div>
          <label htmlFor='url' className='sr'>
            Board URL
          </label>
          <input
            type='url'
            id='url'
            value={form.url}
            onChange={handleChanges}
            placeholder='Board URL'
          />
        </div>
        <div>
          <label htmlFor='accepted_credits' className='sr'>
            Accepted Credits
          </label>
          <textarea
            id='accepted_credits'
            value={form.accepted_credits}
            onChange={handleChanges}
            placeholder='Which Credits are Accepted?'
          />
        </div>
        <div>
          <label htmlFor='credits' className='sr'>
            How Many Credits?
          </label>
          <input
            type='text'
            id='credits'
            value={form.credits}
            onChange={handleChanges}
            placeholder='How Many Credits are Required?'
          />
        </div>
        <div>
          <label htmlFor='hs_credits' className='sr'>
            How Many Can Be Home Study?
          </label>
          <input
            type='text'
            id='hs_credits'
            value={form.hs_credits}
            onChange={handleChanges}
            placeholder='How Many Can Be Home Study?'
          />
        </div>
        <div>
          <label htmlFor='reporting_period' className='sr'>
            What is the reporting period?
          </label>
          <input
            type='text'
            id='reporting_period'
            value={form.reporting_period}
            onChange={handleChanges}
            placeholder='What is their reporting period?'
          />
        </div>
        <button>Add Board</button>
      </form>
    </SubPage>
  );
};

export default NewBoard;
