import React from 'react'
import { TITLE_CONTENT } from '../constants'
import ProfilePic from '../assets/bodhan.jpg'
import {motion, transform} from "framer-motion"

const container =(delay) =>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay}
    }
})

const Bodhan = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                < motion.h1 
                //  initial={{x: -100, opacity:0}}
                // animate={{x:0, opacity:1}}
                // transition={{duration:0.5, delay:0.6}}
                variants={container(0)}
                initial="hidden"
                animate="visible"



                // animate={{ x: 15 }} 
                className='pb-16 text-6xl font-thin  tracking-tight lg:mt-16 lg:text-8xl'>
                    Bodhan Dhakal

                </motion.h1>
                <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"

               
                 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent '>
                    Web Developer
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
    className='my-2 max-w-xl font-light tracking-tighter'> 
                        {TITLE_CONTENT}
                    </motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-8 mt-6 lg:mt-0">
            <div className="flex justify-center w-45 h-45">
                <motion.img 
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:1.2}}
                src={ProfilePic} alt="Bodhan Dhakal" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Bodhan