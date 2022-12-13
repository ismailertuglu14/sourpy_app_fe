import { useAppSelector } from "../../../product/hooks/contextHooks";

const SidebarLogo: React.FC = () => {
  const isSidebarOpen: boolean = useAppSelector((state) => state.state.sidebar);

  return (
    <span
      className={`relative flex text-3xl  text-baseGreen whitespace-nowrap  font-normal  font-LecklerliOne cursor-pointer transition-all duration-700
    ${isSidebarOpen ? " left-12 " : " -left-16 "}`}
    >
      Sourpy
    </span>
  );
};

export default SidebarLogo;
