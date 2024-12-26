import { useEffect, useState } from "react"

import NavBar from "../Components/navbar"
import { AnimatePresence, motion } from "framer-motion"
import SecHeader from '../Components/secHeader'

import launchPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import launchLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import capsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg'
import capsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg'
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'


let imgsPortrait = [launchPortrait, capsulePortrait, spaceportPortrait]
let imgsLandscape = [launchLandscape, capsuleLandscape, spaceportLandscape]


export default function Technology(){
    const [tech, setTech] = useState()
    const [techNum, setTechNum] = useState(0)

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setTech(() => data['technology']))
    },[])

    return(
        <>
            <div className='page technology flex flex-col relative min-h-dvh w-full min-[768px]:pt-10 overflow-hidden'>
                <NavBar />
                <motion.div
                    className="w-4/5 max-[768px]:w-4/5 max-[375px]:w-11/12 ml-auto mr-auto flex-1 flex flex-col justify-center mb-10 page-motion"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: .3}}>
                        <SecHeader header='SPACE LAUNCH 101' />
                        <div className="flex-1 flex max-[768px]:flex-col-reverse justify-center items-center">
                            <div className="tech-step flex max-[768px]:flex-col items-center justify-center">
                                <div className="steps mr-10 max-[768px]:mr-0 max-[768px]:flex max-[768px]:mt-10 max-[768px]:mb-10 max-[768px]:w-3/5 max-[540px]:w-4/5 justify-between">
                                    <div onClick={() => setTechNum(0)} className={`mb-4 max-[768px]:mr-0 w-16 h-16 rounded-full border flex justify-center items-center tran hover:bg-white hover:text-blue-950 ${techNum == 0 ? 'bg-white text-blue-950' : ''}`}>1</div>
                                    <div onClick={() => setTechNum(1)} className={`mb-4 max-[768px]:mr-0 w-16 h-16 rounded-full border flex justify-center items-center tran hover:bg-white hover:text-blue-950 ${techNum == 1 ? 'bg-white text-blue-950' : ''}`}>2</div>
                                    <div onClick={() => setTechNum(2)} className={`mb-4 max-[768px]:mr-0 w-16 h-16 rounded-full border flex justify-center items-center tran hover:bg-white hover:text-blue-950 ${techNum == 2 ? 'bg-white text-blue-950' : ''}`}>3</div>
                                </div>
                                <div className="flex flex-col max-[768px]:items-center">
                                    <h2 className="text-preset-4 mb-7 max-[375px]:mobile-text-preset-4 max-[768px]:tablet-text-preset-4">THE TERMINOLOGY…</h2>
                                    <h1 className="text-preset-3 mb-7 max-[375px]:mobile-text-preset-3 max-[768px]:tablet-text-preset-3">{tech?.[techNum].name}</h1>
                                    <p className="text-preset-9 mb-7 max-[375px]:mobile-text-preset-9 max-[768px]:text-center max-[768px]:tablet-text-preset-9">{tech?.[techNum].description}</p>
                                </div>
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={techNum}
                                    className="tech-img flex justify-end max-[768px]:justify-center items-center pl-7 max-[768px]:pl-0"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: .3}}>
                                        <img className="w-4/5" src={imgsPortrait[techNum]} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                </motion.div>
            </div>
        </>
        
    )
}