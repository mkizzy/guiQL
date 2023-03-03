import LoginModal from "./LoginModal"
import SignUpModal from "./SignUpModal";
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
    toggleSignUpModal : boolean
    toggleLogInModal: boolean
    onHandleCloseModal: ()=>void;
    onHandleToggleSignUpModal: ()=>void;
    onHandleToggleLoginModal: ()=>void;
}

const CredentialModal = ({
    toggleSignUpModal,
    toggleLogInModal,
    onHandleCloseModal,
    onHandleToggleLoginModal,
    onHandleToggleSignUpModal
}: Props) => {
    return (
        <AnimatePresence>
            <motion.div className='fixed inset-0 z-10 overflow-y-auto'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div className="flex min-h-full items-center justify-center p-4 text-center z-10"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    onClick={(event) => event.stopPropagation()}
                >
                    <motion.div className="fixed inset-0 flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <motion.div className="fixed inset-0 bg-black opacity-75 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.75 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                        </motion.div>
                        <motion.div className="relative mx-6 md:mx-auto w-full md:w-1/3 z-20 m-8"
                            initial={{ y: -100 }}
                            animate={{ y: 0 }}
                            exit={{ y: -100 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <motion.div className="shadow-lg bg-white rounded-lg p-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="flex justify-end mb-6">
                                    <button onClick = {()=>onHandleCloseModal()}>
                                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                                    </button>
                                </div>
                                <h1 className="text-center text-2xl">{toggleLogInModal ? "Login" : "Sign Up"}</h1>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {toggleLogInModal ? 
                                        <LoginModal /> : 
                                        <SignUpModal/>
                                    }
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
        
    )
}

export default CredentialModal