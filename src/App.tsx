import { Admin, Resource, ListGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
  </Admin>
);
