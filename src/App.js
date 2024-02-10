import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Maincontainer from "./Components/Maincontainer";
import WatchPage from "./Components/Watchpage";

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Maincontainer/>
      },
      {
        path:"watch?",
        element:<WatchPage/>
      }
    ]
  }

])

function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-full bg-zinc-900 text-white">
        <Header />
        <RouterProvider router={approuter}/>
      </div>
    </Provider>
  );
}

export default App;
