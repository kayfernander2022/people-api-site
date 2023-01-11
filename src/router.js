//couples the url to the components

import {
  createBrowserRouter,//what creates the <Routes/> to the browser
  createRoutesFromElements,//helper that creates these browser <Routes/> with the elements inside of it. Instead of the array of objects method.
  Route,//route = the elements or path that we pass all our routes
} from "react-router-dom"
import App from "./App"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import { peopleLoader, personLoader } from "./loaders"
import { createAction, updateAction, deleteAction } from "./actions"

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
      <Route path="" element={<Index />} loader={peopleLoader}/>
      <Route path=":id" element={<Show />}loader={personLoader} />
      <Route path="create" action={createAction} />
      <Route path="update/:id" action={updateAction} />
      <Route path="delete/:id" action={deleteAction} />

  </Route>
  )
)
export default router
//App is equal to Outlet in the App.js and Outlet allows the application to show all the children routes
