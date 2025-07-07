import Menu from "@/components/menu";
import { Outlet } from "react-router";
import { twMerge } from "tailwind-merge";

function Main() {
  return (
    <div className="grid grid-cols-11 mt-30 font-roboto text-base min-h-screen">
      <div
        className={twMerge([
          "fixed hidden lg:block lg:relative lg:col-span-3 xl:col-span-2",
          "before:fixed before:absolute before:w-screen before:h-screen before:bg-background/80 before:backdrop-blur before:z-[-1]",
          "after:fixed after:absolute after:inset-0 after:bg-background/80 after:border-r after:border-primary/30 lg:after:backdrop-none after:z-[-1]",
          "w-80 lg:w-auto lg:before:hidden lg:after:hidden lg:border-0 top-0 left-0 h-screen lg:h-auto z-60 ",
        ])}
      >
        <Menu />
      </div>
      <div className="col-span-11 lg:col-span-8 xl:col-span-9 grid grid-cols-9 sm:ml-10 lg:ml-0 sm:mr-10 xl:mr-0">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
