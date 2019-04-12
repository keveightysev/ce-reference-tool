import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';

import { AppContext } from '../../Context';

import { AdminPage } from '../../styles/AdminPage';

import NewBoard from './NewBoard';
import UpdateBoard from './UpdateBoard';

const Admin = props => {
  const { state } = useContext(AppContext);
  const { role } = state;
  return (
    <AdminPage>
      <h2>Admin page</h2>
      <nav>
        <NavLink to='/admin/new'>Add New Board</NavLink>
        <NavLink to='/admin/update'>Update Board Information</NavLink>
        {role === 'admin' ? <NavLink to='/admin/users'>Users</NavLink> : null}
      </nav>
      <main>
        <Route path='/admin/new' component={NewBoard} />
        <Route path='/admin/update' component={UpdateBoard} />
      </main>
    </AdminPage>
  );
};

export default Admin;
