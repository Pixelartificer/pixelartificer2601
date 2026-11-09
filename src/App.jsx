

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<LandingPage />}></Route>
    
   </Route>
  )
);


const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App