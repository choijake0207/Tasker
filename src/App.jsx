import React, {useContext} from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import { ProjectContext } from './Context/ProjectContext'
import Board from './Components/Board/Board'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import "./App.css"

export default function App() {
  const {projects} = useContext(ProjectContext)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/projects" element={<Projects/>} />
        {
          projects.map(project => {
            return (
              <Route
                key={project.id}
                path={`/projects/${project.name}`}
                element={
                  <Board
                    content={project}
                  />
                }
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
