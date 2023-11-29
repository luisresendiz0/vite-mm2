import { createBrowserRouter } from "react-router-dom"
import StoresRoute from "../features/stores/route/StoresRoute";
import CreateStore from "../features/stores/components/CreateStore";
import UpdateStore from "../features/stores/components/UpdateStore";
import SignInRoute from "../features/signIn/route/SignInRoute";
import SingUpRoute from "../features/signUp/route/SignUpRoute";
import PrivateRoute from "../features/app/routes/PrivateRoute";
import StoresList from "../features/stores/components/StoresList";
import NotFoundRoute from "../features/advisors/components/NotFoundRoute";
import HomeRoute from "../features/app/components/HomeRoute";

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <SignInRoute />
  },
  {
    path: '/signup',
    element: <SingUpRoute />
  },
  {
    path: '/app',
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <HomeRoute />
      },
      {
        path: "stores",
        element: <StoresRoute />,
        children: [
          {
            path: "",
            element: <StoresList />
          },
          {
            path: "create",
            element: <CreateStore />
          },
          {
            path: "update",
            element: <UpdateStore />
          }
        ]
      }
    ]
  },
  {
    path: "/unauthorized",
    element: <p>403 - Unauthorized</p>
  },
  {
    path: "/*",
    element: <NotFoundRoute />
  }
]);


export default router;