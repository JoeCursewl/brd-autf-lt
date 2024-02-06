import './brd-divider-show.css'
import { motion } from 'framer-motion'

export default function BrdDivider() {
    return (

        <motion.section className='divi-all-sec' animate={{ x: 1}} initial={{ x: -20 }}>

            <div className='divi-info-all'>

                <div className='divi-sin-el'>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque officiis 
                        totam minus animi eveniet nostrum dolore, quas aliquid. Corporis, 
                        commodi ab libero voluptatibus eaque accusantium saepe fugiat magnam possimus rerum!
                    </p>
                </div>

                <div className='divi-sin-el-2'>

                    <div className='brd-file-logo'>
                        <img src="/logo_recortado.png" alt="Brd File" />
                    </div>

                    <div className='brd-file-logo'>
                        <img src="/netlify.svg" alt="Netlify Svg File" />
                    </div>

                    <div className='brd-file-logo'>
                        <img src="/react-logo.svg" alt="React Logo" />
                    </div>

                    <div className='brd-file-logo'>
                        <img src="/js.svg" alt="JavaScriot Logo File" />
                    </div>

                    <div className='brd-file-logo'>
                        <img src="/tailwind.svg" alt="TailwindCSS Logo File" />
                    </div>

                    <div className='brd-file-logo'>
                        <img src="/html-logo.svg" alt="HTML Logo File" />
                    </div>
                
                </div>

            </div>

        </motion.section>

    );
}