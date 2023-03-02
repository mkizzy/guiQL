import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import SignUpButton from "@/shared/SignUpButton";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    onHandleToggleSignUpModal: ()=>void;
    onHandleToggleLoginModal: ()=>void;
}

const Navbar = ({
    isTopOfPage,
    selectedPage,
    setSelectedPage,
    onHandleToggleSignUpModal,
    onHandleToggleLoginModal
}: Props) => {

    const flexBetween = "flex items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navbarBackground = "bg-primary-100 drop-shadow" 
    const menuVariants = {
        hidden: {
            x: "100%",
            transition: { duration: 0.5 },
        },
        visible: {
            x: 0,
            transition: { duration: 0.5 },
        },
    };
    
    const menuContentVariants = {
        hidden: {
            opacity: 0,
            y: "100%",
            x: 0,
            transition: { duration: 0.5 },
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.5, delay: 0.5 },
        },
        exit: {
            opacity: 0,
            y: "100%",
            x: "100%",
            transition: { duration: 0.5 },
        },
    };
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
                                    <span className = "hover:underline hover:cursor-pointer hover:text-secondary-500">
                                        <p onClick={()=>onHandleToggleLoginModal()}>Login</p>   
                                    </span>
                                    <SignUpButton
                                        onHandleToggleSignUpModal = {onHandleToggleSignUpModal}
                                        onHandleToggleLoginModal = {onHandleToggleLoginModal}
                                    >
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
            <AnimatePresence>
            {!isAboveMediumScreens && isMenuToggled && (
                <motion.div className = "fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {/*CLOSE ICON*/}
                    <div className="flex justify-end p-12">
                        <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    {/*MENU ITEMS */}
                    <motion.div className="ml-[33%] flex flex-col gap-10 text-2xl"
                        variants={menuContentVariants}
                    >
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
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar