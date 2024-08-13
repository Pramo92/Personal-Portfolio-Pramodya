import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {CONTACT} from "../constants"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="pt-10 mb-10 flex flex-col items-center justify-center relative">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="mt-[-210px] text-7xl font-[800] text-gray-800 opacity-90">Contact</h1>
      </div>
      {/* Foreground Content */}
      <div className="relative z-10">
        <motion.h1
        className="my-12 font-medium text-center text-4xl">Contact <span className="text-cyan-500">Me</span></motion.h1>
        <p className="text-center text-sm text-gray-400 mt-10 mb-12">Below are the details to reach out to me!</p>
          <div className="my-14">
          <motion.div 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:0.8}}
           className="flex justify-center my-5">
            <FaPhoneAlt className="center text-[20px] text-white-400" />
            <a href={`tel:${CONTACT.phoneNo}`} className="mx-5 mt-[-2px]  text-white-400 hover:text-cyan-500">{CONTACT.phoneNo}</a>
          </motion.div>
          <motion.div 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:0.8}}
           className="flex justify-center ">
            <FaEnvelope className="center text-[20px] text-white-400" />
            <a href={`mailto:${CONTACT.email}`} className="mx-5 mt-[-3px]  text-white-400 hover:text-cyan-500">{CONTACT.email}</a>
          </motion.div>
          </div> 
        <div className="w-full border-t-2 border-cyan-800 my-4"></div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.8}}
        className="container mx-auto flex flex-wrap justify-center gap-7 px-7">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4 mb-4">
            <a href={CONTACT.github} className="hover:text-cyan-700"><FaGithub className="text-3xl text-white-400" /></a>
            </div>
            </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4 mb-4">
            <a href={CONTACT.linkedin} className="hover:text-cyan-700"><FaLinkedin className="text-3xl text-white-400" /></a>
            </div>
            </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4 mb-4">
              <a href={CONTACT.instagram} className="hover:text-cyan-700"><FaInstagram className="text-3xl text-white-400" /></a>
            </div>
            </div>
        </motion.div>
        <div className="w-200 border-t-2 border-cyan-800 my-0"></div>
      </div>
    </div>
  );
};

export default Contact;
