import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import URLField from '../URLField/URLField';

const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <URLField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

export default UserList;
