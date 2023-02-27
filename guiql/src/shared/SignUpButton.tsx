import React from 'react'

type Props = {
    onHandleToggleSignUpModal: ()=>void;
    onHandleToggleLoginModal: ()=>void;
    children : React.ReactNode;
}

const SignUpButton = ({
    onHandleToggleLoginModal,
    onHandleToggleSignUpModal,
    children,
}: Props) => {
    return (
        <button
            className = "rounded-md hover:bg-secondary-500 px-10 py-2 bg-primary-500 text-white"
            onClick = {()=>onHandleToggleSignUpModal()}
        >
            {children}
        </button>
    )
}

export default SignUpButton