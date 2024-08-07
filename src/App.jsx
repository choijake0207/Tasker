import React, {useContext} from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import { ProjectContext } from './Context/ProjectContext'

export default function App() {
  const {projects} = useContext(ProjectContext)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        {
          projects.map(project => {
            return (
              <Route
                key={project.id}
                path={`/projects/${project.name}`}
              />
            )
          })
        }
      </Route>
    )
  )



  return (
    <RouterProvider router={router}/>
  )
}
