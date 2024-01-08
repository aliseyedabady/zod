import { useSelector } from "react-redux";
import { RootState } from "./store";
import Panel from "./components/panel";
import Login from "./components/login";
import { json } from "./json";

const App = () => {
  const { token } = useSelector((state: RootState) => state.userReducer);
  if (!token) {
    return <Panel structure={json.structure} />;
  } else {
    return <Login />;
  }
};

export default App;
