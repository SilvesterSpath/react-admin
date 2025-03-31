import { Datagrid, List, ReferenceField, TextField } from "react-admin";

const PostList = () => (
  <List>
    <Datagrid>
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);

export default PostList;
