import { DiJava, DiHtml5, DiJavascript1, DiCss3, DiPython, DiPhp, DiMongodb, DiLinux } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiKotlin, SiC, SiFirebase, SiFigma, SiMysql, SiXampp,SiTailwindcss, SiTensorflow, SiGit, SiGooglecolab, SiTypescript } from "react-icons/si";
import { FaNodeJs   } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { motion } from "framer-motion";


const skills = [
  { name: 'Communication', value: 85 },
  { name: 'Teamwork', value: 80 },
  { name: 'Problem Solving', value: 90 },
  { name: 'Creativity', value: 75 },
];

const Technologies = () => {
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const duration = 500; // Duration of the animation in milliseconds
    const interval = 50; // Interval between each increment in milliseconds
    const increments = duration / interval;
    
    const skillTargets = skills.map(skill => skill.value); // Target values
    let currentValues = Array(skills.length).fill(0); // Initial values
    
    const increment = () => {
      currentValues = currentValues.map((value, index) => {
        if (value < skillTargets[index]) {
          return Math.min(value + (skillTargets[index] / increments), skillTargets[index]);
        }
        return value;
      });
  
      setAnimatedValues(currentValues);
  
      if (currentValues.every((value, index) => value >= skillTargets[index])) {
        clearInterval(intervalId);
      }
    };
  
    const intervalId = setInterval(increment, interval);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="skills" className=" relative pt-[10px]">
      <h2 className="mt-[70px] absolute inset-0 text-center text-6xl font-extrabold text-gray-800 opacity-50 z-0">Skills</h2>
      <div className="relative z-10">
      <motion.h1 
      className="my-12 text-center text-3xl">My<span className="text-cyan-500"> Skills</span></motion.h1>
      <div className="flex flex-col lg:flex-row justify-around gap-20">
        <div className="w-full lg:w-1/2"> {/* Column for Technologies */}
          <h2 className="mt-0 pb-20 text-center text-2xl font-bold underline" style={{ textUnderlineOffset: '7px'}}>Technologies</h2>
          <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} className="flex flex-wrap items-center justify-center gap-4 my-10">
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <DiJava className="text-5xl text-[#f89820]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <DiHtml5 className="text-5xl text-[#e34c26]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <DiJavascript1 className="text-5xl text-[#f0db4f]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <DiCss3 className="text-5xl text-[#264de4]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <RiReactjsLine className="text-5xl text-cyan-400" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <DiPython className="text-5xl text-[#306998]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <DiPhp className="text-5xl text-[#777bb4]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <DiMongodb className="text-5xl text-[#47a248]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <DiLinux className="text-5xl text-[#f0db4f]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiKotlin className="text-5xl text-[#0095d5]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <FaNodeJs  className="text-5xl text-[#339933]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiC className="text-5xl text-[#a8b9cc]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiFirebase className="text-5xl text-[#ffca28]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiFigma className="text-5xl text-[#f24e1e]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiMysql className="text-5xl text-[#4479A1]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiXampp className="text-5xl text-[#FB7A24]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiTailwindcss  className="text-5xl text-[#5593e8]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiTensorflow className="text-5xl text-[#FB7A24]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiGit  className="text-5xl text-[#5593e8]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiGooglecolab className="text-5xl text-[#FFD43B]" />
            </div>
            <div className="rounded-full bg-[#5593e8] bg-opacity-10 p-4">
              <SiTypescript className="text-5xl text-[#FFD43B]" />
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 "> {/* Column for Professional Skills */}
          <h2 className="mt-0 pb-10 text-center text-2xl font-bold underline" style={{ textUnderlineOffset: '7px' }}>Professional Skills</h2>
          <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}} className="flex flex-wrap justify-center gap-2 mt-20">
            {skills.map((skill, index) => (
              <div key={skill.name} className="flex flex-col items-center" style={{ margin: '25px' }}>
                <div style={{ width: '90px', height: '90px' }}>
                  <CircularProgressbar
                    value={animatedValues[index]}
                    text={`${animatedValues[index]}%`}
                    strokeWidth={7}
                    
                    styles={buildStyles({
                      pathColor: `rgba(0, 237, 237, ${animatedValues[index] / 100})`,
                      textColor: '#fff',
                      trailColor: '#000',
                      backgroundColor: '#000',
                      textSize: '16px',
                      strokeLinecap: 'round',
                    })}
                  />
                </div>
                <div className="mt-2 text-center font-medium">{skill.name}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Technologies;
