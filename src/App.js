import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Book, Group } from '@material-ui/icons';

import PostCreate from './components/PostCreate/PostCreate';
import PostEdit from './components/PostEdit/PostEdit';
import PostList from './components/PostList/PostList';
import UserList from './components/UserList/UserList';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} icon={Book} />
        <Resource name="users" list={UserList} icon={Group} />
    </Admin>
);

export default App;
