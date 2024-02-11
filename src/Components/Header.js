import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Yticon from "../icons/youtube.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Search from "./Search";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between sm:mx-2 ">
      <div className="flex sm:mx-2 items-center ">
            <button
            className="text-4xl"
            onClick={() => dispatch(toggleMenu())}
            >
            <IoReorderThreeOutline />
            </button>
            <div className="flex item-center ">
            <div className="w-8 h-7 m-2 mr-0 flex items-center">
                {" "}
                <img src={Yticon} alt="Yticon" />{" "}
            </div>
            <h1 className="ml-0 m-2 text-xl font-bold">My-YouTube</h1>
            </div>
      </div>

      <div>
        <Search />
      </div>

      <div className="flex justify-between text-center items-center  mr-4">
        <div className="text-3xl mr-4">
          <IoIosNotificationsOutline />
        </div>
        <div className="text-4xl">
          <IoPersonCircle />
        </div>
      </div>
    </div>
  );
};
export default Header;
