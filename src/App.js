import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/head";
import store from "./utils/store";
import Sidebar from "./components/sidebar";
import Button from "./components/Button";


 function App() {
  return (
    <Provider store = {store}>
    <div>
     <Head/>
      <Body/>
    <Sidebar/>
    <Button/>
  </div>
  </Provider>
  );
}
export default App;