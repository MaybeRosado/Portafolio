import {RiJavascriptLine, RiReactjsLine} from 'react-icons/ri'
import {FaHtml5, FaCss3Alt, FaNodeJs} from 'react-icons/fa'
import {SiMysql, SiTypescript} from 'react-icons/si'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className='text-7xl text-cyan-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className='text-7xl text-blue-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies