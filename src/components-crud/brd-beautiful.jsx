import { motion } from 'framer-motion';

export default function BrdListBeautiful({ titulo_song, id_can, genero_song, prod_song, comp_song }) {

    return (
        <motion.div className='brd-cmp-all' animate={{ x: 0, opacity: 1 }} initial={{ x: -25, opacity: -100}} transition={{ duration: 0.1}}>

            <div className="list-o-lt">
                <div className="brd-list-sng">
                    <h2>{titulo_song}</h2>
                    <p># <span>{id_can}</span></p>
                    <p>Título</p>
                </div>

                <div className="brd-list-sng">
                    <h2>{comp_song}</h2>
                    <p>Compositor</p>
                </div>
            </div>

            <div className="list-t-lt">
                <div className="brd-list-sng">
                    <h2>{genero_song}</h2>
                    <p>Género</p>
                </div>

                <div className="brd-list-sng">
                    <h2>{prod_song}</h2>
                    <p>Productor</p>
                </div>
            </div>



            
                

                
        </motion.div>
    )
}