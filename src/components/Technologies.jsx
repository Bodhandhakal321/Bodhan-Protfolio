import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
// import {RiReactjsLine} from "react-icons/ri"
import {FaNodeJs} from "react-icons/fa"
import { animate, motion } from 'framer-motion'

const iconChanges = (duration) =>({
    initials:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24 '> 
    <h2 className='my-20 text-center text-4xl'> Technologies </h2>
    <motion.div 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0}}
    transition={{duration:1.5}}
    className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconChanges(2.5)}
        initials="initials"
        animate="animate"

        className='rounded-2xl border-4 border-neutral-900'>
            <RiReactjsLine className='text-7xl  text-cyan-400' />
        </motion.div>
        <motion.div 
        variants={iconChanges(3)}
        initials="initials"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-900'>
            <SiMongodb className='text-7xl text-green-500' />
        </motion.div>
        <motion.div 
        variants={iconChanges(3.5)}
        initials="initials"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-900'>
            <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>
        <motion.div 
        variants={iconChanges(4)}
        initials="initials"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-900'>
            <RiReactjsLine className='text-7xl ' />
        </motion.div>
    </motion.div>
    
    </div>
  )
}

export default Technologies