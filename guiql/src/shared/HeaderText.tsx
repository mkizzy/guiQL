import React from 'react'

type Props = {children: React.ReactNode}

const HeaderText = ({children}: Props) => {
    return (
        <h1 className="basis-3/5 font-montserrat text-5xl font-bold" >
            {children}
        </h1>
    )
}

export default HeaderText