import Navbar from "@/scenes/navbar"
import { useState, useEffect } from "react"
import { SelectedPage } from "@/shared/types"
import Home from "@/scenes/home"
import Features from "@/scenes/features"
import CredentialModal from "@/scenes/credentialModal"

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
    setToggleSignUpModal(toggleSignUpModal=>toggleSignUpModal=false)
    console.log("login has been toggeled")
  }

  const handleToggleSignUpModal = () => {
    setToggleSignUpModal(toggleSignUpModal=>!toggleSignUpModal)
    setToggleLoginModal(toggleLogInModal=>toggleLogInModal=false)
    console.log("sign up form has been clicked")
  }

  const handleCloseModal = () => {
    setToggleLoginModal(toggleLogInModal=>toggleLogInModal=false)
    setToggleSignUpModal(toggleSignUpModal=>toggleSignUpModal=false)
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
      {toggleLogInModal || toggleSignUpModal ? <CredentialModal /> : ""}
      <Features 
        setSelectedPage = {setSelectedPage}
      />
    </div>
  )
}

export default App
