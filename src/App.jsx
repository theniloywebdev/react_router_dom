

function App() {
 
  return (
    <>
     1st : For Install : npm i react-router-dom 
     =====================

     2nd : Place in App JSX 
     import {
       createBrowserRouter,
       RouterProvider,
     } from "react-router-dom";
     ==================

     3rd : Upper of App Function 

     const router = createBrowserRouter([
    {
      path: "/",
      element: <div>HELLOW NILOY!!!</div>,
    },  
]);
  =====================
     
     4th : <RouterProvider router={router} />

    </>
  )
}

export default App
