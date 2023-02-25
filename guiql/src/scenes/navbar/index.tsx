import React, { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link"
import { SelectedPage } from "@/shared/types";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({
    selectedPage,
    setSelectedPage
}: Props) => {

    const flexBetween = "flex items-center justify-between"
    return (
        <nav>
            <div className = {`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className= {`${flexBetween} w-full gap-16`}>
                        {/* LEFT */}
                            {/*INSERT LOGO HERE */}
                        {/* RIGHT */}
                        <div className={`${flexBetween} w-full `}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                {/*Need to change these to links */}
                                <Link 
                                    page = "Home" 
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
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <p>Log in</p> {/*Need to change these to links */}
                                <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                                    Create An Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar