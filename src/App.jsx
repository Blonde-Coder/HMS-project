import {createBrowserRouter, RouterProvider,} from "react-router-dom";


import BookAppointment1 from "./assets/pages/BookAppointment1";
import BookAppointment2 from "./assets/pages/BookAppointment2";
import"./index.css";
import NewPage from "./assets/pages/NewPage";
const router = createBrowserRouter([
  
  {
    path:"/",
    element:<BookAppointment1/>,
  },
  {
    path:"/BookAppointment2",
    element:<BookAppointment2/>,
  },
  {
    path:"/NewPage",
    element:<NewPage/>,
  },
]);
function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App;
