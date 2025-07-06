import Menu from "@/components/menu";
import { Outlet } from "react-router";

function Main() {
  return (
    <div className="grid grid-cols-11 mt-30 font-roboto text-base min-h-screen">
      <div className="col-span-2">
        <Menu />
      </div>
      <Outlet />
    </div>
  );
}

export default Main;
