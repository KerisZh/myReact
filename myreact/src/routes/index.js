import ChildComponent1 from "../Day02_childrenComponent/ChildComponent1";
import ChildComponent2 from "../Day02_childrenComponent/ChildComponent2";
import { Navigate } from "react-router-dom";
import One from "../Day04_二级路由/1_1";
import Two from "../Day04_二级路由/1_2";
import Detail from "../Day04_二级路由/Detail";

const routes = [
  {
    path: "/ChildComponent1",
    element: <ChildComponent1 />,
  },
  {
    path: "/ChildComponent2",
    element: <ChildComponent2 />,
    children: [
      {
        path: "1_1",
        element: <One />,
        children: [
          {
            // path: "detail/:id/:title/:content",
            path: "detail",
            element: <Detail />,
          },
        ],
      },
      { path: "1_2", element: <Two /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/ChildComponent1" />,
  },
];

export default routes;
