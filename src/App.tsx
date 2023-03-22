import { Route, Routes, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"
import WelcomePage from "@/scenes/welcomePage"
import LandingPage from "@/scenes/landingPage"
import { UserDetails } from "@/shared/util/types"
import { useState , useEffect} from "react"
import ProtectedRoute from "@/shared/util/PrivateRoute"
import axios from "axios"

axios.defaults.withCredentials = true
function App() {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    firstName: "",
    lastName: ""
  })
  
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  
  const toggleAuthUser = ()=>{
    setLoggedIn(!loggedIn)
  }


  function RequireAuth({ children }: { children: JSX.Element }){
    // let location = useLocation();
    // const isAuthenthicated = useIsAuthenticated()
    if(loggedIn){
      return children
    }
    return (<div>Login please</div>)
  }

  return (
    <Routes>
      <Route 
        path = "/" 
        element = {<WelcomePage toggleAuthUser={toggleAuthUser}/>}
      />
      //work on protected route for landingpage
    </Routes>
  )
}



export default App
