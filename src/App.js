import axios from "axios";
//1. import { CurrentUserLoader } from "./components/current-user-loader";
//2. import { UserLoader } from "./components/user-loader";
//3. import { ResourceLoader } from "./components/resource-loader";
//4. import { DataSource } from "./components/data-source";
import { UserInfo } from "./components/user-info";
import { DataSourceWithRender } from "./components/data-source-with-render";

const getDataFromServer = async (url) => {
  const response = await axios.get(`${url}`);
  return response.data;
};

function App() {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer("/users/2")}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRender>
    </>
  );
}

export default App;
