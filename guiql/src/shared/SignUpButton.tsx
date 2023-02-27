import React from 'react'

type Props = {
    children : React.ReactNode;
}

const SignUpButton = ({children}: Props) => {
    return (
        <button
            className = "rounded-md hover:bg-secondary-500 px-10 py-2 bg-primary-500 text-white"
        >
            {children}
        </button>
    )
}

export default SignUpButton