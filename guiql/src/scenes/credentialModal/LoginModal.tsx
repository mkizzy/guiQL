import React from 'react';

const LoginModal = () => {
    return (

        <div className="fixed inset-0 flex items-center">
            <div className="fixed inset-0 bg-black opacity-75 z-10"></div>
            <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
                <div className="shadow-lg bg-white rounded-lg p-8">
                    <div className="flex justify-end mb-6">
                        <button>
                            <span className="mr-2">Close</span>
                        </button>
                    </div>
                    <h1 className="text-center text-2xl">Login</h1>
                    <form className="pt-6 pb-2 my-2 ">
                    <div className="mb-4 text-left">
                        <label className="block text-sm font-bold mb-2">Email Address</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            id="email"
                            type="text"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="mb-6 text-left">
                        <label className="block text-sm font-bold mb-2">Password</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="block md:flex items-center justify-between">
                        <div>
                        <button className="rounded-md hover:bg-secondary-500 px-10 py-2 bg-primary-500 text-white" type="button">
                            Sign In
                        </button>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <a href="#" className="text-green no-underline">Forget Password?</a>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
