import './brd-admin-components.css';
import { Button } from '@nextui-org/react';
import Axios from 'axios';
import { useEffect, useState } from 'react';


export default function AdminComp() {

    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [found, setFound] = useState(false);


    const getSongs = () => {
        Axios.get("http://localhost:3001/songs-all")
        .then((response) => {
            setSongs(response.data)
        })
    }

    const getSongsname = (nombresito) => {
        const nom_song = nombresito.trim();

        Axios.get(`http://localhost:3001/songs/${nom_song}`)
        .then((response) => {
            setResults(response.data);
            setFound(false);
        })
        .catch((e) => {
            console.log(`Error | ${e}`)
            setFound(true);
        })
    }


    useEffect(() => {
        getSongs();
    }, [songs])

    return (
        <section className='sec-srch-center'>
            <div className='mn-div-srch'>

                <div className='srch-mn-div-w'>
                    <div className='srch-mn-div'>
                        <input type="text" onChange={(event) => {setSearch(event.target.value)}}/>
                    </div>

                    
                    <div className='srch-mn-div-2'>
                        <Button className='btn-next-use' onPress={() => {
                            getSongsname(search);
                        }}>
                            Buscar
                        </Button>
                    </div>

                </div>
                {found === true ? <div><h1>No se encontró: {search}</h1></div> : ""}
            </div>

            {results !== undefined ? results?.map((info) => (
                <div className='mn-div-srch' key={info.id_song}>
                    <div className='srch-mn-div-w'>
                        <div>
                            <h1>{info.nom_song}</h1>
                        </div>
                    </div>
                </div>
            )) : ""}


        </section>
    );
}