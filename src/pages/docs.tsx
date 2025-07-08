import Menu from "@/components/menu";
import { Outlet } from "react-router";

function Main() {
  return (
    <div className="mt-30 font-roboto text-base min-h-screen">
      <Menu />
      <div className="lg:w-[75%] xl:w-[82%] grid grid-cols-10 ml-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
