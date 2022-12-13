import {
  useAppDispatch,
  useAppSelector,
} from "../../../product/hooks/contextHooks";
import SvgSettings from "../../../product/icons/Settings";
import SvgSignout from "../../../product/icons/Signout";

const SidebarBottom: React.FC = () => {
  const isSidebarOpen: boolean = useAppSelector((state) => state.state.sidebar);
  const discpatch = useAppDispatch();

  return (
    <div
      className={`absolute bottom-5 w-full text-white transition-all duration-300 ${
        isSidebarOpen ? " left-0 " : " -left-10"
      }`}
    >
      <div className="flex flex-col items-center ">
        <p className="font-extrabold text-white text-md cursor-pointer">
          İsmail Ertuğlu
        </p>
        <p className="font-extralight text-sm cursor-pointer">
          ismailertgl@gmail.com
        </p>

        <div className="flex flex-row w-full justify-evenly px-4">
          <button className="flex w-12 h-12 mt-5 items-center justify-center border-[0.5px] border-gray-300 rounded-md transition-transform hover:scale-105">
            <SvgSettings className="w-6 h-6" />
          </button>
          <button className="flex w-12 h-12 mt-5 items-center justify-center border-[0.5px] border-gray-300 rounded-md transition-transform hover:scale-105">
            <SvgSignout className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SidebarBottom;
