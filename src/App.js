import axios from "axios";
//1. import { CurrentUserLoader } from "./components/current-user-loader";
//2. import { UserLoader } from "./components/user-loader";
//3. import { ResourceLoader } from "./components/resource-loader";
import { DataSource } from "./components/data-source";
import { UserInfo } from "./components/user-info";
//5. import { DataSourceWithRender } from "./components/data-source-with-render";

const getDataFromServer = async (url) => {
  const response = await axios.get(`${url}`);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSource
        getData={() => getDataFromServer("/users/2")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>

      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
