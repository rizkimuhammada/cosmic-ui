import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router";

function Main() {
  return (
    <div className="flex flex-col gap-10 px-10 text-foreground/50 mt-10">
      <div className="flex flex-col">
        <div className="font-medium text-foreground mb-2">Getting Started</div>
        <NavLink
          to="/docs"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
          end
        >
          Introduction
        </NavLink>
        <NavLink
          to="/docs/how-to-use"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          How to Use
        </NavLink>
      </div>
      <div className="flex flex-col">
        <div className="font-medium text-foreground mb-2">Components</div>
        <NavLink
          to="/docs/frame"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Frame
        </NavLink>
        <NavLink
          to="/docs/menu"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/docs/alert"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Alert
        </NavLink>
        <NavLink
          to="/docs/accordion"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Accordion
        </NavLink>
        <NavLink
          to="/docs/dialog"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Dialog
        </NavLink>
        <NavLink
          to="/docs/tabs"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Tabs
        </NavLink>
        <NavLink
          to="/docs/button"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Button
        </NavLink>
        <NavLink
          to="/docs/input"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Input
        </NavLink>
        <NavLink
          to="/docs/switch"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Switch
        </NavLink>
        <NavLink
          to="/docs/textarea"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Textarea
        </NavLink>
        <NavLink
          to="/docs/radio-group"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Radio Group
        </NavLink>
        <NavLink
          to="/docs/checkbox"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Checkbox
        </NavLink>
        <NavLink
          to="/docs/chart"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1",
              isActive && "text-foreground",
            ])
          }
        >
          Chart
        </NavLink>
      </div>
    </div>
  );
}

export default Main;
