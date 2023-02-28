import React from 'react'

type Props = {}

const SignUpModal = (props: Props) => {
    return (
        <>
        <h1>Create An Account</h1>
        <form>
            <label>Email Address</label>
            <input type="text" placeholder = "Email Address"/>
            <label>Password</label>
            <input type = "password" placeholder = "Password" />
            <button>Sign Up</button>
        </form>
        </>
    )
}

export default SignUpModal