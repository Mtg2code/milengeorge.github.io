import {motion} from 'framer-motion';

import { styles } from '../styles';
import  {ComputersCanvas}  from './canvas';

const Hero = () => {
  return (

    <section className='relative w-full h-screen mx-auto mt-5'>
      
      <div className={`${styles.paddingX}  absolute inset-0  top-[120px] max-w-7xl mx-auto flex flex-row items-start gap5 `} >

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5  rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-30 violet-gradient'/>
        </div>


        <div>
          <h1 className={`${styles.heroHeadText} text-white mx-5`}>Hi , I'm <span className='text-[#915eff]'>Milen</span></h1>
          <p className={`${styles.heroSubText} text-white mt-4 mx-5`}> I am a student who likes to challenge himself<br className='sm:block hidden'/> and  build intresting projects.
          </p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32  w-full flex justify-center items center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.dev
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat:'infinity',
                repeatType:'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
             
             >

            </motion.dev>

          </div>

        </a>

      </div>
    </section>




    )
}

export default Hero