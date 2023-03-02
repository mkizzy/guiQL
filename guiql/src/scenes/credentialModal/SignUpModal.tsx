import React from 'react'

type Props = {}

const SignUpModal = (props: Props) => {
    return (
        <form className="pt-6 pb-2 my-2">
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">First Name</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Last Name</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="email"
                    type="text"
                    placeholder="Email Address"
                />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Password</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <div className="mb-6 text-left">
                <label className="block text-sm font-bold mb-2">Confirm Password</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <div className="block md:flex items-center justify-between">
                <div>
                    {/* Add functinoality here */}
                    <button className="rounded-md hover:bg-secondary-500 px-10 py-2 bg-primary-500 text-white" type="button">
                        Create Account
                    </button>
                </div>
                <div className="mt-4 md:mt-0">
                    {/* Add functinoality here */}
                    <a href="#" className="no-underline">Proceed to login.</a> 
                </div>
            </div>
        </form>
    )
}

export default SignUpModal