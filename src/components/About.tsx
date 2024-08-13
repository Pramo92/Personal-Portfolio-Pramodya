import aboutImg from "../assets/About.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="about" className="relative pb-10 pt-10">
      <h2 className="mt-[95px] absolute inset-0 text-center text-7xl font-extrabold text-gray-800 opacity-50 z-0">About</h2>
      <div className="relative z-10">
      <motion.h1
      className="my-12 font-normal text-center text-3xl">
        About <span className="text-cyan-500">Me</span>
      </motion.h1>
      <div className="mt-[130px] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="flex items-center lg:justify-center">
            <motion.img whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.7}} className="rounded-2xl w-[80%]" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                className="my-2 max-w-xl py-6 font-light">{ABOUT_TEXT}</motion.p>
            </div>
        </div>
      </div> 
      </div> 
    </div>
  )
}

export default About
