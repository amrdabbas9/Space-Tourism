import { Link } from "react-router-dom"
import NavBar from "../Components/navbar"

import { motion } from "framer-motion"
export default function Home(){


    return(
        <>
            <div className='page home flex flex-col relative min-h-dvh w-full min-[768px]:pt-10 overflow-hidden'>
                <NavBar />
                <motion.div
                    className="flex-1 flex justify-center items-center max-[768px]:mb-10 page-motion"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: .3}}>
                    <div className=' w-4/5 ml-auto mr-auto flex max-[768px]:flex-col text-white'>
                        <div className='flex-1 flex flex-col justify-end max-[768px]:justify-center max-[768px]:text-center max-[768px]:mb-10 max-[768px]:mt-10'>
                        <h2 className='text-preset-5 max-[768px]:tablet-text-preset-5 max-[375px]:mobile-text-preset-5'>
                            SO, YOU WANT TO TRAVEL TO
                        </h2>
                        <h1 className='text-preset-1 max-[768px]:tablet-text-preset-2 max-[375px]:mobile-text-preset-2'>
                            SPACE
                        </h1>
                        <p className='text-preset-9 max-[768px]:tablet-text-preset-9 max-[375px]:mobile-text-preset-9'>
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                        </div>
                            <div className='flex-1 flex justify-end max-[768px]:justify-center items-center'>
                                    <Link to='/destination'>
                                        <div className='explore relative z-20 w-72 h-72 max-[768px]:w-60 max-[768px]:h-60 max-[375px]:w-52 max-[375px]:h-52 rounded-full bg-white flex justify-center items-center'>
                                            <p className='text-preset-4 main-color max-[768px]:tablet-text-preset-4 max-[375px]:mobile-text-preset-4'>EXPLORE</p>
                                            <span className='absolute w-96 h-96 max-[768px]:w-72 max-[768px]:h-72 rounded-full bg-white z-10'></span>
                                        </div>
                                    </Link>
                            </div>
                    </div>
            </motion.div>
            </div>
        </>
        
    )
}