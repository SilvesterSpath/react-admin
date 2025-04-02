import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  FunctionField,
  EditButton,
  TextInput,
  ReferenceInput,
} from "react-admin";

/* const PostPanel = () => {
  const record = useRecordContext();
  return (
    <div>
      <h1>Post details</h1>
      <p>{record?.body}</p>
    </div>
  );
};
 */
const PostList = () => {
  const postFilters = [
    <TextInput label="Search Post" source="q" alwaysOn key={1} />,
    <ReferenceInput label="User" source="userId" reference="users" key={2} />,
  ];

  return (
    <List filters={postFilters}>
      <Datagrid
      /*       expand={<PostPanel />}
      sx={{
        ".RaDatagrid-headerCell": {
          padding: "16px",
        },
      }} */
      >
        <TextField source="id" />
        <TextField source="title" label="Post title" />
        <FunctionField
          label="Excerpt"
          render={(record) => `${record.body.substring(0, 50)}...`}
          source="body"
        />
        <ReferenceField source="userId" reference="users" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default PostList;
