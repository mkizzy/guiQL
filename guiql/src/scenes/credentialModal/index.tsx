import LoginModal from "./LoginModal"


type Props = {}

const CredentialModal = (props: Props) => {
    return (
        <div className = "relative z-10">
            <div className = "fixed inset-0 bg-black bg-opacity-30 z-10">
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className='flex min-h-full items-center justify-center p-4 text-center z-10'>
                        <LoginModal/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CredentialModal