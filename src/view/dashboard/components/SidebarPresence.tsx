import {
  useAppDispatch,
  useAppSelector,
} from "../../../product/hooks/contextHooks";
import SvgClose from "../../../product/icons/CloseIcon";
import SvgRightArrow from "../../../product/icons/RightArrow";
import { setSidebarOpen } from "../../../product/reducers/state_reducer";

/*
 *  This is a button in the middle of sidebar for set visibility of Sidebar.
 *  @param {isSidebarOpen}
 * 
 */

const SidebarPresence = () => {
  const isSidebarOpen: boolean = useAppSelector((state) => state.state.sidebar);
  const dispatch = useAppDispatch();

  return (
    <div
      className="absolute -right-4 top-1/2 text-white cursor-pointer"
      onClick={() => dispatch(setSidebarOpen())}
    >
      <div className="flex justify-center items-center h-8 w-8 border-2 border-black rounded-xl bg-white ">
        {isSidebarOpen ? (
          <SvgClose className="w-4  h-4 " />
        ) : (
          <SvgRightArrow className="w-4 h-4" />
        )}
      </div>
    </div>
  );
};
export default SidebarPresence;
