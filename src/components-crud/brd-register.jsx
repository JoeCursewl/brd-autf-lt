import './brd-register.css'
import { motion } from 'framer-motion'
import { Button } from '@nextui-org/react'
import BrdUpdate from './brd-update'
import { useState } from 'react'
import  Axios from 'axios';
import BrdList from './brd-consult-weedo'


export default function BrdRegister() {

    const [nombreSong, setNombresong] = useState('');
    const [nombreComp, setNombrecomp] = useState('');
    const [genero, setGenero] = useState('');
    const [prod, setProd] = useState('');


    const cleanData = () => {
        setGenero("")
        setNombrecomp("")
        setNombresong("")
        setProd("")
    };

    const brdData = () => {
        if (nombreSong && nombreComp && genero && prod !== ''){
            Axios.post("http://localhost:3001/register", {
                nom_song: nombreSong,
                nom_comp: nombreComp,
                nom_genero: genero,
                nom_prod: prod,
            })
            .then(() => {
                alert("La vaina ya se guardo uwu");
                cleanData();
            })
        }

        else{
            alert("BRD | Todos los campos son necesarios!")
        }
    }


    return (
        <motion.section className='brd-register-sec' animate={{ x: 0}} initial={{ x: -50 }} transition={{ duration: 0.2}}>

            <div className='brd-register-main'>

                <div className='brd-reg-txt'>
                    <h1>BRD | Registrar derechos de composición</h1>
                    <p>En este apartado puedes registrar los derechos de autor de una nueva canción antes
                        de ser lanzada al público final. Verifica los datos antes de proceder.
                    </p>

                    <div className='brd-reg-form'>
                        <h2>Nombre de la canción</h2>
                        <input type="text" onChange={(event) => {
                            setNombresong(event.target.value)
                        } } placeholder='Escriba nombre de la canción...' value={nombreSong}/>

                        <h2>Nombre del Compositor (NOT AKA)</h2>
                        <input type="text" onChange={(event) => {
                            setNombrecomp(event.target.value)
                        }} value={nombreComp} placeholder='Escriba nombre del compositor...'/>

                        <h2>Género</h2>
                        <input type="text" onChange={(event) => {
                            setGenero(event.target.value)
                        }} value={genero} placeholder='Escriba el genero...'/>

                        <h2>Productor</h2>
                        <input type="text" onChange={(event) => {
                            setProd(event.target.value)
                        }} value={prod} placeholder='Escriba el nombre del Productor...'/>
                    </div>

                    <div className='brd-btn-reg'>
                        <Button className='btn-simple' onClick={brdData}>Registrar</Button>
                    </div>

                </div>

                <BrdList />

                

            </div>

        </motion.section>
    )
}