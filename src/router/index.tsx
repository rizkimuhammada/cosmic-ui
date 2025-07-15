import { useRoutes } from "react-router";
import Home from "../pages/home";
import Docs from "../pages/docs";
import Introduction from "../pages/introduction";
import HowToUse from "../pages/how-to-use";
import Accordion from "../pages/accordion";
import Tabs from "../pages/tabs";
import Menu from "../pages/menu";
import Button from "../pages/button";
import Dialog from "../pages/dialog";
import Alert from "../pages/alert";
import Input from "../pages/input";
import Textarea from "../pages/textarea";
import Switch from "../pages/switch";
import RadioGroup from "../pages/radio-group";
import Checkbox from "../pages/checkbox";
import Chart from "../pages/chart";
import Frame from "../pages/frame";
import Colors from "../pages/colors";
import Toast from "../pages/toast";
import Combobox from "../pages/combobox";
import App from "../App.tsx";

function Router() {
  const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/docs",
          element: <Docs />,
          children: [
            {
              path: "",
              element: <Introduction />,
            },
            {
              path: "how-to-use",
              element: <HowToUse />,
            },
            {
              path: "accordion",
              element: <Accordion />,
            },
            {
              path: "menu",
              element: <Menu />,
            },
            {
              path: "tabs",
              element: <Tabs />,
            },
            {
              path: "button",
              element: <Button />,
            },
            {
              path: "dialog",
              element: <Dialog />,
            },
            {
              path: "alert",
              element: <Alert />,
            },
            {
              path: "input",
              element: <Input />,
            },
            {
              path: "textarea",
              element: <Textarea />,
            },
            {
              path: "switch",
              element: <Switch />,
            },
            {
              path: "radio-group",
              element: <RadioGroup />,
            },
            {
              path: "checkbox",
              element: <Checkbox />,
            },
            {
              path: "chart",
              element: <Chart />,
            },
            {
              path: "frame",
              element: <Frame />,
            },
            {
              path: "colors",
              element: <Colors />,
            },
            {
              path: "toast",
              element: <Toast />,
            },
            {
              path: "combobox",
              element: <Combobox />,
            },
          ],
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
