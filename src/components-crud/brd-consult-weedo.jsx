import './brd-consult-weedo.css'
import { motion } from 'framer-motion';
import BrdListBeautiful from './brd-beautiful';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import BrdModal from './modal-brd';
import BrdModalDelete from './modal-brd-eliminar';

export default function BrdList() {
    const [songs, setSongs] = useState([]);

    const getData = () => {
        Axios.get("http://localhost:3001/songs-all")
        .then((response) => {
            setSongs(response.data);
        });
    }

    useEffect(() => {
        getData();
    }, [songs])

    return (
        <motion.div className='brd-list-main' animate={{ x: 0 }} initial={{ x: -25 }} transition={{ duration: 0.5}}>
            {songs !== undefined ? songs?.map((info) => (
                <div key={info.id_song} className='brd-it-dv'>
                    <BrdListBeautiful key={info.key} titulo_song={info.nom_song} id_can={info.id_song} comp_song={info.nom_comp} genero_song={info.nom_genero} prod_song={info.nom_prod}/>
                    <div className='btn-brd-all'>
                        <BrdModal vl_nom_can={info.nom_song} vl_id_song={info.id_song} vl_nom_comp={info.nom_comp} vl_nom_genero={info.nom_genero}  vl_nom_prod={info.nom_prod}/>
                        <BrdModalDelete vl_id_song={info.id_song} />
                    </div>
                </div>
            )) : ""}
        </motion.div>        
    )
}

