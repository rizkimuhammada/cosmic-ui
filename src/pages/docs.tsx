import Menu from "@/components/menu";
import { Outlet } from "react-router";

function Main() {
  return (
    <div className="grid grid-cols-11 mt-30 font-roboto text-base min-h-screen">
      <div className="lg:col-span-3 xl:col-span-2">
        <Menu />
      </div>
      <div className="col-span-11 lg:col-span-8 xl:col-span-9 grid grid-cols-9 sm:ml-10 lg:ml-0 sm:mr-10 xl:mr-0">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
