import React from 'react';
import { EditButton, List, Datagrid, TextField, ReferenceField } from 'react-admin';
import PostFilter from '../PostFilter/PostFilter';

const PostList = props => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export default PostList;
