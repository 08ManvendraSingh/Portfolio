import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
