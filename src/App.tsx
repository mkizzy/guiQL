import { Route, Routes, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"
import WelcomePage from "@/scenes/welcomePage"
import LandingPage from "./scenes/landingPage"
import { UserDetails } from "./shared/types"
import { useState } from "react"

function App() {
  const [userDetails, setUserDetails] = useState<UserDetails>()
  return (
    <Routes>
      <Route path = "/" element = {<WelcomePage/>}/>
      <Route path = "/protected" element = {<LandingPage/>} />
    </Routes>
  )
}

export default App
