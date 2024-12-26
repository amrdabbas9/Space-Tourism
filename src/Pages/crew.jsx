import { useEffect, useState } from "react"

import NavBar from "../Components/navbar"
import { motion, AnimatePresence } from "framer-motion"

import crew0 from '../assets/crew/image-douglas-hurley.png'
import crew1 from '../assets/crew/image-mark-shuttleworth.png'
import crew2 from '../assets/crew/image-victor-glover.png'
import crew3 from '../assets/crew/image-anousheh-ansari.png'
import SecHeader from "../Components/secHeader"

let crews = [crew0, crew1, crew2, crew3]

export default function Crew(){
    const [crew, setCrew] = useState()
    const [crewNum, setCrewNum] = useState(0)
    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setCrew(() => data['crew']))
    },[])

    return(
        <>
            <div className='page crew flex flex-col relative min-h-dvh w-full min-[768px]:pt-10 overflow-hidden'>
                <NavBar />
                <motion.div
                    className="w-3/4 max-[768px]:w-4/5 max-[375px]:w-11/12 ml-auto mr-auto flex-1 flex flex-col justify-center mb-10 page-motion"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: .3}}>
                        <SecHeader header='MEET YOUR CREW'/>
                        <div className="flex relative flex-1 max-[768px]:flex-col items-center">
                            <div className="flex-1 flex flex-col max-[768px]:justify-center max-[768px]:items-center">
                                <h2 className="text-preset-4 mb-7 max-[768px]:tablet-text-preset-4 max-[375px]:mobile-text-preset-4">{crew?.[crewNum].role}</h2>
                                <h1 className="text-preset-3 mb-7 max-[768px]:tablet-text-preset-3 max-[375px]:mobile-text-preset-3">{crew?.[crewNum].name}</h1>
                                <p className="text-preset-9 max-[768px]:text-center max-[768px]:tablet-text-preset-9 max-[375px]:mobile-text-preset-9">{crew?.[crewNum].bio}</p>
                                <div className="dots absolute max-[768px]:relative max-[768px]:mt-4 max-[768px]:mb-4 bottom-0 left-0 flex">
                                    <div onClick={() => setCrewNum(0)} className={`mr-3 w-4 h-4 rounded-full tran ${crewNum == 0 ? 'bg-white' : 'bg-gray-500'}`}></div>
                                    <div onClick={() => setCrewNum(1)} className={`mr-3 w-4 h-4 rounded-full tran ${crewNum == 1 ? 'bg-white' : 'bg-gray-500'}`}></div>
                                    <div onClick={() => setCrewNum(2)} className={`mr-3 w-4 h-4 rounded-full tran ${crewNum == 2 ? 'bg-white' : 'bg-gray-500'}`}></div>
                                    <div onClick={() => setCrewNum(3)} className={`mr-3 w-4 h-4 rounded-full tran ${crewNum == 3 ? 'bg-white' : 'bg-gray-500'}`}></div>
                                </div>
                            </div>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={crewNum}
                                    className="flex-1 flex justify-end max-[768px]:justify-center items-center"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: .3}}
                                    >
                                    <img className="w-4/5 max-[768px]:3/5" src={crews[crewNum]} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                </motion.div>
            </div>
        </>
    )
}