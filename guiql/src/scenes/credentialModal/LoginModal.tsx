import React from 'react'

type Props = {}

const LoginModal = (props: Props) => {
    return (
        <div className='flex min-h-full items-center justify-center p-4 text-center z-10'>
            <div className = "flex justify-end">
                <button type="button">Close</button>
            </div>
            <h1>Login</h1>
            <form>
                <label>Email Address</label>
                <input type="text" placeholder = "Email Address"/>
                <label>Password</label>
                <input type = "password" placeholder = "Password" />
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default LoginModal