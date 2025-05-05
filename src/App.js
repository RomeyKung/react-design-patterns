import axios from "axios";
import { DataSource } from "./components/data-source";
import { UserInfo } from "./components/user-info";
//1. import { CurrentUserLoader } from "./components/current-user-loader";
//2. import { UserLoader } from "./components/user-loader";
//3. import { ResourceLoader } from "./components/resource-loader";

const getDataFromServer = async (url) => {
  const response = await axios.get(`${url}`);
  return response.data;
};

function App() {
  return (
    <>
      <DataSource getData={()=>getDataFromServer("/users/2")} resourceName="user">
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
