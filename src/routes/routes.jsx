import Github from "../pages/Github/Github";
import Home from "../pages/Home/Home";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/github",
    element: <Github />,
  },
];

export default router;
