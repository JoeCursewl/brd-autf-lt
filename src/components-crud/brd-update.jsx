import { Button } from '@nextui-org/react'


export default function BrdUpdate({ nom_song_up, nom_comp_up, nom_genero_up, nom_prod_up }) {


    const whenClick = () => {
        console.log("tu mamá no te ama wn")
    }
    
    return (
        <div className='brd-reg-txt'>
                    <h1>BRD | Actualizar derechos de composición</h1>
                    <p>En este apartado puedes actualizar los derechos de autor de una nueva canción antes
                        de ser lanzada al público final. Verifica los datos antes de proceder.
                    </p>

                    <div className='brd-reg-form'>
                        <h2>Nombre de la canción</h2>
                        <input type="text" value={nom_song_up}/>

                        <h2>Nombre del Compositor (NOT AKA)</h2>
                        <input type="text" value={nom_comp_up}/>

                        <h2>Género</h2>
                        <input type="text" value={nom_genero_up}/>

                        <h2>Productor</h2>
                        <input type="text" value={nom_prod_up}/>
                    </div>

                    <div className='brd-btn-reg'>
                        <Button className='btn-simple' onClick={whenClick}>Actualizar</Button>
                        <Button className='btn-simple-cancel' onClick={whenClick}>Cancelar</Button>
                    </div>

                </div>
    )
}