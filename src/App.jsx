import { useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default function BrdNav() {

    useEffect(() => {
      console.log("BRD | Testing branch")
    }, [])

    return (
        <nav className='brd-nv-mn'>

          <header className='brd-nv-all-cn'>

              <div className='brd-nv-img'>
                <img src="/brd_recortado_letters.png" alt="Breadriuss File" />
              </div>

              <div className='brd-nv-lts'>

                <ul>
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/brd-registro"}>Registrar</Link></li>
                    <li><Link to={"/brd-update"}>Administradar</Link></li>
                    <li><Link to={"/brd-consult-all"}>Consultar</Link></li>
                </ul>

              </div>

          </header>

        </nav>
    )
}