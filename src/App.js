import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Maincontainer from "./Components/Maincontainer";
import WatchPage from "./Components/Watchpage";
import SearchResult from "./Components/SearchResult";

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
      },
      {
        path:"search",
        element:<SearchResult/>
      }
    ]
  }

])

function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-full bg-zinc-900 text-white">
        <RouterProvider router={approuter}/>
      </div>
    </Provider>
  );
}

export default App;
