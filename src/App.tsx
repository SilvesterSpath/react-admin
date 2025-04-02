import { Admin, Resource, EditGuesser, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";
import UserList from "./pages/users/user-list";
import PostShow from "./pages/posts/post-show";
import UserShow from "./pages/users/user-show";
import PostEdit from "./pages/posts/post-edit";
import UserEdit from "./pages/users/user-edit";
import PostCreate from "./pages/posts/post-create";
import UserCreate from "./pages/users/user-create";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import Homepage from "./pages/homepage";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} dashboard={Homepage}>
    <Resource
      name="posts"
      list={PostList}
      show={PostShow}
      edit={PostEdit}
      create={PostCreate}
      icon={ArticleIcon}
    />
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
      icon={PeopleIcon}
    />
  </Admin>
);
