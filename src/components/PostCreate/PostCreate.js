import React from 'react';
import { DisabledInput, Create, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

export default PostCreate;
