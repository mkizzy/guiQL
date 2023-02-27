import Navbar from "@/scenes/navbar"
import { useState, useEffect } from "react"
import { SelectedPage } from "@/shared/types"
import Home from "@/scenes/home"
import CredentialModal from "@/scenes/credential"



function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const [toggleLogInModal, setToggleLoginModal] = useState<boolean>(false)
  const [toggleSignUpModal, setToggleSignUpModal] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleLoginModal = () => {
    setToggleLoginModal(toggleLogInModal=> !toggleLogInModal)
    console.log("login has been toggeled")
  }

  const handleToggleSignUpModal = () => {
    setToggleSignUpModal(toggleSignUpModal=>!toggleSignUpModal)
    console.log("sign up form has been clicked")
  }
  return (
    <div className="app bg-amber-50">
      <Navbar 
        isTopOfPage = {isTopOfPage}
        selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}
        onHandleToggleLoginModal = {handleToggleLoginModal}
        onHandleToggleSignUpModal = {handleToggleSignUpModal}
      />
      <Home 
        setSelectedPage={setSelectedPage}
        onHandleToggleLoginModal = {handleToggleLoginModal}
        onHandleToggleSignUpModal = {handleToggleSignUpModal}
      />
    </div>
  )
}

export default App
