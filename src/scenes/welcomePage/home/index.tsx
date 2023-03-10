import { SelectedPage } from '@/shared/util/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from '@/assets/HomePageText.png'
import graphql from '@/assets/graphql.png'
import { motion } from 'framer-motion'
import ublogo from '@/assets/ublogo.png'
import codesmithlogo from '@/assets/codesmithlogo.png'
import flatironlogo from '@/assets/flatironlogo.png'
import  osllogo from '@/assets/osllogo.png'
import SignUpButton from '@/shared/SignUpButton'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
    onHandleToggleSignUpModal: ()=>void;
    onHandleToggleLoginModal: ()=>void;
}

const Home = ({
    setSelectedPage,
    onHandleToggleSignUpModal,
    onHandleToggleLoginModal
}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section
            id = "home"
            className = "gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* IMAGE AND MAIN HEADER */}
            <motion.div 
                className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
                onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
            >
                {/* MAIN HEADER */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* HEADINGS */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 2 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className='relative'>
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-upgradetext">
                                <img alt="home-page-text" src= {HomePageText} className="object-cover object-left xs:-ml-[2rem]"/>
                            </div>
                        </div>
                        <p className='mt-8 text-small text-purple-800'>
                            Your one stop solution to modernize your REST PostgreSQL database. GuiQL allows you and/or 
                            your team to make the most out of your time by providing you a single space to evolve
                            your REST PostgreSQL database to GraphQL with just your database URI.
                        </p>
                    </motion.div>
                    {/*ACTIONS*/}
                    <motion.div 
                        className='mt-8 flex items-center gap-8'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 2 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <SignUpButton
                            onHandleToggleSignUpModal = {onHandleToggleSignUpModal}
                            onHandleToggleLoginModal = {onHandleToggleLoginModal}
                        >
                            Join Now
                        </SignUpButton>
                        <span
                            className = "text-sm font-thin hover:cursor-pointer text-purple-500 underline hover:text-secondary-500"
                        >
                            <p onClick={()=>onHandleToggleLoginModal()}>Already signed up? Login</p>   
                        </span>
                    </motion.div>
                </div>
                {/* IMAGE */}
                <div className='flex basis-2/5 justify-center md:z-10 '>
                    <motion.img 
                        alt = "home-logo" 
                        src = {graphql} 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
            {isAboveMediumScreens && (
                <motion.div 
                    className="h-[150px] w-full bg-primary-100 py-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, y: 70 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="mx-auto  w-4/6">
                        <div className="flex my-auto items-center justify-between gap-8">
                        {/* INSERT LOGOS OF FI, CS, OSL, UB*/}
                            <img alt="ublogo" src={ublogo} height = "100px" width= "100px"/>
                            <img alt="codesmithlogo" src={codesmithlogo} height = "100px" width= "100px"/>
                            <img alt="flatironlogo" src={flatironlogo} height = "150px" width= "150px"/>
                            <img alt="osllogo" src={osllogo} height = "100px" width= "100px"/>
                        </div>
                    </div>
                </motion.div>
        )}
        </section>
    )
}

export default Home