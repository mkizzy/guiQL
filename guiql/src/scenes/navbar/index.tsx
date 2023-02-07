import React, { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {}

const Navbar = (props: Props) => {

    const flexBetween = "flex items-center justify-between"
    return (
        <nav>
            <div className = {`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className= {`${flexBetween} w-full gap-16`}>
                        {/* LEFT */}
                            {/*INSERT LOGO HERE */}
                        {/* RIGHT */}
                        <div className={`${flexBetween} w-full text-sm`}>
                            <div className={`${flexBetween} gap-8 `}>
                                {/*Need to change these to links */}
                                <p>Home</p>
                                <p>Tutorial</p>
                                <p>Blog</p>
                                <p>About Us</p>
                            </div>
                            <div className={`${flexBetween} gap-8 `}>
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