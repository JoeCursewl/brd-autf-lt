import BrdDivider from './brd-divider-show'
import './brd-info-crud.css'
import { Button } from '@nextui-org/react'
import { motion } from  'framer-motion'


export default function BrdInfoCrud() {
    return (
        <motion.section className='info-sec-all' animate={{ x: 1, opacity: 1}} initial={{ x: -100, opacity: -100 }} transition={{ duration: 0.4 }}>

            <div className='info-nf-main'>

                <div className='nf-div'>
                    <h1>Breadriuss | Vista General</h1>
                </div>

                <div className='nf-div2'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Hic totam cumque, voluptatum animi architecto adipisci expedita sit, 
                        dolores amet velit voluptas esse dolorum illo. 
                        Facilis nobis quos aspernatur laborum saepe!</p>
                <hr />
                </div>

            </div>

            <div className='info-nf-main'>

                <div className='nf-div'>
                    <h1>BRD | Registros seguros</h1>
                </div>

                <div className='nf-div2'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Hic totam cumque, voluptatum animi architecto adipisci expedita sit, 
                        dolores amet velit voluptas esse dolorum illo. 
                        Facilis nobis quos aspernatur laborum saepe!</p>
                <hr />
                </div>  

            </div>

            <BrdDivider />

            <div className='bd-info-all'>

                <div className='bd-img-cl'>
                    <img src="/logo_recortado.png" alt="" />
                </div>

                <div className='inp-all-cd'>

                    <div className='inp-div-lt'>
                        <div className='inp-a-cn'>
                            <h1>Correo Electrónico</h1>
                            <input type="text" />
                        </div>
                    </div>

                    <div className='inp-div-lt'>
                        <div className='inp-a-cn'>
                            <h1>Nombre</h1>
                        <input type="text" />
                        </div>
                    </div>

                    <div className='inp-div-lt'>
                        <div className='inp-a-cn'>
                            <h1>Mensaje</h1>
                        <input type="text" />
                        </div>
                    </div>

                    <div className='btn-sn-fm'>
                        <Button className='btn-ct-brd'>
                        Enviar
                        </Button>
                    </div>
                    
                </div>

            </div>

        </motion.section>
    )
}