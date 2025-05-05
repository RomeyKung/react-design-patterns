import { UserInfo } from "./components/user-info";
import { CurrentUserLoader } from "./components/current-user-loader";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
