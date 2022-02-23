import {motion} from "framer-motion"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function MenuItem({data}) {

  return (
    <motion.div initial={{opacity:0}} exit={{opacity: 0}} animate={{opacity: 1}} transition={{duration:0.25}}
    className='flex flex-col justify-between max-w-xs bg-black rounded-lg shadow-sm shadow-primary py-5 md:px-5 px-2 items-center text-center h-80'>
        <img src={`https:${data.menuImage.fields.file.url}`} alt="pizza" className='rounded-2xl mb-3 h-1/2 w-auto object-cover' height={data.menuImage.fields.file.details.image.height} width={data.menuImage.fields.file.details.image.width}/>
        <div>
            <h6 className='text-xl font-bold'>{data.name}</h6>
            <span className='text-lg font-semibold text-primary block'>{data.price}EGP</span>
            <span className='text-base font-light'>{documentToReactComponents(data.description)}</span>
        </div>
    </motion.div>
  )
}

export default MenuItem