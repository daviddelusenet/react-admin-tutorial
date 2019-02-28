import React from 'react';
import { DisabledInput, Edit, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const PostTitle = (props) => {
    console.log(props);
    return `Edit ${props.record.title}`;
}

const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;
