import { useEffect, useState } from "react"
import NavBar from "../Components/navbar"
import { AnimatePresence, motion } from "framer-motion"
import SecHeader from "../Components/secHeader"


import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

let imgs = [moon, mars, europa, titan]

export default function Destination(){
    const [destination, setDestination] = useState()
    const [dest, setDest] = useState(0)

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setDestination(() => data['destinations']))
    },[])
    console.log(destination?.[dest])

    return(
        <>
            <div className='page destination flex flex-col relative min-h-dvh w-full min-[768px]:pt-10 overflow-hidden'>
                <NavBar />
                <motion.div
                        className="w-3/4 max-[768px]:w-4/5 max-[375px]:w-11/12 ml-auto mr-auto flex-1 flex flex-col justify-center mb-10 page-motion"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: .3}}
                    >       
                    <SecHeader header='PICK YOUR DESTINATION'/>             
                        <div className="flex-1 flex w-/5 items- max-[768px]:flex-col max-[768px]:mt-10 max-[768px]:justify-center ">
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={dest}
                                        className="dest-img flex- flex justify-center items-center mr-10 max-[768px]:mr-0"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{duration: .3}}
                                        >
                                        <img className="w-full max-[768px]:w-2/3" src={imgs[dest]}/>
                                    </motion.div>
                                </AnimatePresence>
                            
                            <div className="dest-info pt-28 max-[1440px]:pt-10 flex-1 flex flex-col max-[768px]:mt-10 max-[768px]:mb-10 max-[768px]:items-center">
                                <ul className="flex dests">
                                    <li onClick={() => setDest(0)} className={`mr-4 text-preset-8 max-[375px]:mobile-text-preset-8 ${dest == 0 ? 'active-dest' : ''}`}>MOON</li>
                                    <li onClick={() => setDest(1)} className={`mr-4 text-preset-8 max-[375px]:mobile-text-preset-8 ${dest == 1 ? 'active-dest' : ''}`}>MARS</li>
                                    <li onClick={() => setDest(2)} className={`mr-4 text-preset-8 max-[375px]:mobile-text-preset-8 ${dest == 2 ? 'active-dest' : ''}`}>EUROPA</li>
                                    <li onClick={() => setDest(3)} className={`mr-4 text-preset-8 max-[375px]:mobile-text-preset-8 ${dest == 3 ? 'active-dest' : ''}`}>TITAN</li>
                                </ul>
                                <h1 className="text-preset-2 max-[768px]:tablet-text-preset-2 max-[375px]:mobile-text-preset-2">{destination?.[dest].name}</h1>
                                <p className="text-preset-9 max-[768px]:text-center max-[768px]:tablet-text-preset-9 max-[375px]:mobile-text-preset-9">{destination?.[dest].description}</p>
                                <div className="w-full h-px bg-white mt-5 mb-5"></div>
                                <div className="flex w-full max-[375px]:flex-col">
                                    <div className="flex-1 flex flex-col max-[768px]:items-center max-[375px]:mb-10">
                                        <p className="text-preset-7 mb-6 sec-color max-[375px]:mobile-text-preset-7">AVG. DISTANCE</p>
                                        <h1 className="text-preset-6 max-[375px]:mobile-text-preset-6">{destination?.[dest].distance}</h1>
                                    </div>
                                    <div className="flex-1 flex flex-col max-[768px]:items-center">
                                        <p className="text-preset-7 mb-6 sec-color max-[375px]:mobile-text-preset-7">Est. travel time</p>
                                        <h1 className="text-preset-6 max-[375px]:mobile-text-preset-6">{destination?.[dest].travel}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                </motion.div>
            </div>
        </>
        
    )
}