import { SelectedPage, FeatureType } from '@/shared/types'
import ERD from '@/assets/ERD.png'
import query from '@/assets/query.png'
import {DocumentDuplicateIcon} from "@heroicons/react/24/solid"
import { motion } from 'framer-motion'
import HeaderText from '@/shared/HeaderText'
import FeatureBox from './FeatureBox'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const container = {
    hidden: {},
    visible:{
        transition: {staggerChildren: 0.2}
    }
}


const appFeatures: Array<FeatureType> = [
    {
        image: <img alt = "ERD Icon" src={ERD} height="24px" width = "24px"/>,
        title: "ER Diagram",
        description: "Given the correct URI, we will generate your database's ERD to help you visualize the model and design of your database."
    },
    {
        image: <DocumentDuplicateIcon className = "h-6 w-6"/>,
        title: "Generate Boilerplate/ Schema",
        description: "In addition, the schema and resolver will be generated, as well as the appropriate GraphQL-Express boilerplate server code."
    },
    {
        image: <img alt = "Query Icon" src={query} height="24px" width = "24px"/>,
        title: "Generate Query/code",
        description: "Upon your request, we will take in your parameters, and provide you with the necessary GraphQL queries/code."
    }
]

const Features = ({
    setSelectedPage
}: Props) => {
    return (
        <div className = "md:mt-[-1.5rem] min-h-full w-screen bg-[url('@/assets/feature.svg')] bg-no-repeat bg-cover">
            <section
                id = "features"
                className="mx-auto min-h-full w-5/6"
            >
                <motion.div className= "md:pt-60 pt-40" onViewportEnter={()=> setSelectedPage(SelectedPage.Features)}>
                    <motion.div 
                        className="md:my-5 md:w-3/5 pt-50"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    > 
                        <HeaderText>WHAT DO WE OFFER?</HeaderText>
                        <p className="my-5 text-sm">
                            While helping you evolve your REST PostgreSQL database to GraphQL, we provide you with more tools and resources to help you and your team better understand and visualize the transition.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="md:flex items-center justify-between gap-8 mt-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount: 0.5}}
                        variants={container}
                    >   
                        {appFeatures.map((feature: FeatureType) => (
                            <FeatureBox
                                key={feature.title}
                                image={feature.image}
                                title={feature.title}
                                description={feature.description}
                                setSelectedPage={setSelectedPage}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default Features