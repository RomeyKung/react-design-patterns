import { UserInfo } from "./components/user-info";
// import { CurrentUserLoader } from "./components/current-user-loader";
import { UserLoader } from "./components/user-loader";

function App() {
  return (
    <>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
