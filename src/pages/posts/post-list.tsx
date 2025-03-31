import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  FunctionField,
  useRecordContext,
} from "react-admin";

const PostPanel = () => {
  const record = useRecordContext();
  return (
    <div>
      <h1>Post details</h1>
      <p>{record?.body}</p>
    </div>
  );
};

const PostList = () => (
  <List>
    <Datagrid
      expand={<PostPanel />}
      sx={{
        ".RaDatagrid-headerCell": {
          padding: "16px",
        },
      }}
    >
      <TextField source="id" />
      <TextField source="title" label="Post title" />
      <FunctionField
        label="Excerpt"
        render={(record) => `${record.body.substring(0, 50)}...`}
        source="body"
      />
      <ReferenceField source="userId" reference="users" />
    </Datagrid>
  </List>
);

export default PostList;
