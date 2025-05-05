import { UserInfo } from "./components/user-info";
//1. import { CurrentUserLoader } from "./components/current-user-loader";
//2. import { UserLoader } from "./components/user-loader";
import { ResourceLoader } from "./components/resource-loader";

function App() {
  return <>
  <ResourceLoader resourceUrl={`/users/1`} resourceName="user">
    <UserInfo />
  </ResourceLoader>
  </>;
}

export default App;
