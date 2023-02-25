import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomePageText from '@/assets/HomePageText.png'
import graphql from '@/assets/graphql.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section
            id = "home"
            className = "gap-16 bg-amber-50 py-10 md:h-full md:pb-0"
        >
            {/* IMAGE AND MAIN HEADER */}
            <div className='md:flex mx-auto md:mt-[7rem] md:h-4/6 w-5/6 items-center justify-center'>
                {/* MAIN HEADER */}
                <div className='z-10 mt-32 basis-4/5'>
                    {/* HEADINGS */}
                    <div className='md:-mt-20'>
                        <div className='relative'>
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-upgradetext">
                                <img alt="home-page-text" src= {HomePageText} className="object-cover object-left xs:-ml-[2rem]"/>
                            </div>
                        </div>
                        <p className='mt-8 text-small text-purple-800 md:w-4/5'>
                            Your one stop solution to modernize your REST PostgreSQL database. GuiQL allows you and/or 
                            your team to make the most out of your time by providing you a single space to transition
                            your REST PostgreSQL database to GraphQL with just your database URI.
                        </p>
                    </div>
                    {/*ACTIONS*/}
                    <div className='mt-8 flex items-center gap-8 md:justify-start'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className = "text-sm font-thin text-purple-500 underline hover:text-secondary-500"
                            onClick = {()=> setSelectedPage(SelectedPage.Login)}
                            href = {`#${SelectedPage.Login}`}
                        >
                            <p>Already signed up? Login</p>   
                        </AnchorLink>

                    </div>
                </div>
                {/* IMAGE */}
                <div className='flex basis-2/5 justify-center md:z-10'>
                    <img alt = "home-logo" src = {graphql} />
                </div>
            </div>
            {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
                <div className="flex w-3/5 items-center justify-between gap-8">
                
                </div>
            </div>
        </div>
        )}
        </section>
    )
}

export default Home