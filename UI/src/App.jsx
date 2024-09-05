import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Issuecert from './pages/Issuecert'
import Dappdownload from './pages/Dappdownload'
import Mainlayout from './Layout/Mainlayout'


function App() {
  const router=createBrowserRouter
  (createRoutesFromElements(
    <>
    <Route path='/' element={<Mainlayout/>}>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/issue' element={<Issuecert/>}/>
    <Route path='/view/:id' element={<Dappdownload/>}/>
    </Route>
    </>
  ))
  

  return (
    <>
    <RouterProvider router={router}/>
 
    </>
  )
}

export default App
