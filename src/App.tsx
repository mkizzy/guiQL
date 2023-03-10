import { Route, Routes, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"
import WelcomePage from "@/scenes/welcomePage"
import LandingPage from "./scenes/landingPage"

function App() {

  return (
    <Routes>
      <Route path = "/" element = {<WelcomePage/>}/>
      <Route path = "/protected" element = {<LandingPage/>} />
    </Routes>
  )
}

export default App
