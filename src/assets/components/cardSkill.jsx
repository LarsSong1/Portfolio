
import {motion} from 'framer-motion'



function CardSkill({img, alt, skillInfo, skillDescription}) {
  return (
    <motion.div className='bg-zinc-900 rounded-md flex h-20 justify-start ps-5 items-center mb-5'
            variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ amount: 0.8 }}
        >
            <img src={img} alt={alt} />
            <div className='ps-5'>
                <h5 className='font-extrabold text-white'>{skillInfo}</h5>
                <p className='text-white opacity-80'>{skillDescription}</p>
            </div>
        </motion.div>
  )
}

export default CardSkill;