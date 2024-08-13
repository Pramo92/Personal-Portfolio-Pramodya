import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/PM.jpg";
import cvDocument from "../assets/Pramodya_Madhubhashini_CV.pdf";
import { FaDownload } from 'react-icons/fa';
import { motion } from "framer-motion"

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay
    }
  }
});


const Hero = () => {
    return (
      <div id="home" className="pt-[150px] pb-10 ml-0 lg:mb-35">
        <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-2/3">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0.3)}
                    initial="hidden"
                    animate="visible"
                     className="pb-16 text-4xl lg:text-[55px] font-thin tracking-tight mb-0 lg:mt-0">
                      Hi, I'm <span className="font-light text-cyan-500">Pramodya Madhubhashini</span>
                    </motion.h1>
                    <motion.span
                    variants={container(0.7)}
                    initial="hidden"
                    animate="visible" 
                    className="font-normal bg-gradient-to-r from-cyan-200 to-cyan-700 bg-clip-text text-[24px] tracking-tight text-transparent">Computer Studies Undergraduate</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-full py-0 font-extralight tracking-tight whitespace-pre-wrap text-[16px]">{HERO_CONTENT}</motion.p>
                </div>
                <div>
                <a href={cvDocument} download="Pramodya_Madhubhashini_CV.pdf">
                <motion.button
                variants={container(1)}
                initial="hidden"
                animate="visible"
                 className="mt-10 bg-[#161314] text-white rounded-[25px] px-6 py-4 shadow-[0_4px_5px_rgba(6,182,212,0.1)] flex items-center">Download CV<FaDownload className="ml-2"></FaDownload></motion.button>
                </a>
            </div>
            </div>
            <motion.div 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay :1.2}} className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center pt-20 pl-6 pr-10 pb-12">
                <div className="relative">
                    <div className="absolute inset-0 border-4 border-cyan-700 rounded-lg transform translate-x-4 translate-y-4 z-0"></div>
                    <img src={profilePic} alt="Pramodya Madhubhashini" className="relative w-full h-auto max-h-[340px] object-cover rounded-lg shadow-lg border-4 border-cyan-500 z-10" />
                    <div className="absolute inset-0 bg-black opacity-20 rounded-lg z-10"></div> {/* Black overlay */}
                </div>
            </motion.div>
            
        </div>
      </div>
    );
};

export default Hero;
