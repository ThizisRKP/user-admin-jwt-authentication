import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import EditUser from "./pages/EditUser";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "admin",
        element: (
          <ProtectedRoute adminOnly>
            <Admin />
          </ProtectedRoute>
        ),
      },

      {
        path: "edit/:id",
        element: (
          <ProtectedRoute adminOnly>
            <EditUser />
          </ProtectedRoute>
        ),
      },
    ],
  },

  { path: "*", element: <NotFound /> },
]);


export default router;


// const token = localStorage.getItem("accessToken");

// // if there is toke in localstorage then isAuth = true, if no token in localstorage then false in isAuth variable
// const isAuth = token ? true : false;

// // if the local storage have item role= admin then isAdmin fn returns true, if role = user then return false

// const isAdmin = () => localStorage.getItem("role") === "admin";

// const router = createBrowserRouter([
//   { path: "/login", element: <Login /> },
//   {
//     path: "/register",
//     element: <Register />,
//   },

//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         index: true,
//         element: isAuth ? <Dashboard /> : <Login />,
//       },

//       { path: "admin", element: isAuth && isAdmin() ? <Admin /> : <Login /> },

//       {
//         path: "edit/:id",
//         element: isAuth && isAdmin() ? <EditUser /> : <Login />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

// export default router;

// if a person login as user-> we have to send him to dashboard, where that user can see only their data

// if a person login as admin=> we have to send admin also to dashboard where he can see only his data

// but admin can only go to or access admin page or component where can see all objects or data, edit or delete
