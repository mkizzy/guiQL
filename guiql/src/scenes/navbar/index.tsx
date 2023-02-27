import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import SignUpButton from "@/shared/SignUpButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({
    isTopOfPage,
    selectedPage,
    setSelectedPage
}: Props) => {

    const flexBetween = "flex items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navbarBackground = isTopOfPage === false || isAboveMediumScreens === false? "bg-primary-100 drop-shadow" : ""
    return (
        <nav>
            <div className = {`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className= {`${flexBetween} w-full gap-16`}>
                        {/* LEFT */}
                            {/*INSERT LOGO HERE */}
                            <p>GuiQL</p>
                        {/* RIGHT */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link 
                                        page = "Home" 
                                        selectedPage = {selectedPage}
                                        setSelectedPage = {setSelectedPage}
                                    />
                                    <Link 
                                        page = "Features"
                                        selectedPage = {selectedPage}
                                        setSelectedPage = {setSelectedPage}
                                    />
                                    <Link 
                                        page = "Tutorial"
                                        selectedPage = {selectedPage}
                                        setSelectedPage = {setSelectedPage}
                                    />
                                    <Link 
                                        page = "Blog"
                                        selectedPage = {selectedPage}
                                        setSelectedPage = {setSelectedPage}                                    
                                    />
                                    <Link 
                                        page = "About Us"
                                        selectedPage = {selectedPage}
                                        setSelectedPage = {setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Log in</p> {/*Need to change this to load the login modal */}
                                    <SignUpButton>
                                        Sign Up Today
                                    </SignUpButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className = "rounded-full bg-primary-500 p-2 hover:bg-secondary-500" 
                                onClick={()=> setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className = "h-6 w-6 text-white"/>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/*MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className = "fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/*CLOSE ICON*/}
                    <div className="flex justify-end p-12">
                        <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    {/*MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link 
                            page = "Home" 
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedPage}
                        />
                        <Link 
                            page = "Features"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedPage}
                        />
                        <Link 
                            page = "Tutorial"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedPage}
                        />
                        <Link 
                            page = "Blog"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedPage}                                    
                        />
                        <Link 
                            page = "About Us"
                            selectedPage = {selectedPage}
                            setSelectedPage = {setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar