import React, { useEffect, useState } from "react";
import './modal-brd.css'
import Axios from 'axios';
import { motion } from 'framer-motion'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function BrdModal({ vl_nom_can, vl_nom_comp, vl_nom_genero, vl_nom_prod, vl_id_song}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [isEmpty, setIsEmpty] = useState(false);

  const [idSong, setIdSong] = useState(0)
  const [nomSong, setNomSong] = useState('')
  const [nomCompo, setNomComp] = useState('')
  const [nomGenero, setNomGenero] = useState('')
  const [nomProd, setNomProd] = useState('')
  const [edited, setEdited] = useState(false) 
  
  useEffect(() => {
    setIdSong(vl_id_song);
  }, [vl_id_song])

  const updateInfo = () => {

      if (nomSong === '' || nomCompo === '' || nomGenero === '' || nomProd === ''){
        setIsEmpty(true);
        setEdited(false);
      }
      else {
        setIsEmpty(false);
        console.log(idSong)
        Axios.put("http://localhost:3001/update", {
          id_song: idSong,
          nom_song: nomSong,
          nom_comp: nomCompo,
          nom_genero: nomGenero,
          nom_prod: nomProd
        })
        .then(() => {
          setEdited(true);
        });
      }
    }


    const suddenChange = () => {
      setIsEmpty(false);
      setEdited(false);
    }
    
  return (
    <>
      <Button onPress={onOpen} color="secondary">Editar</Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent className="dark text-foreground bg-background">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editando | {vl_nom_can}</ModalHeader>
              <ModalBody>
                <h2>ID-CANCIÓN: {vl_id_song}</h2>
                <h2>Nombre de la Canción</h2>
                <input type="text" onChange={(event) => {setNomSong(event.target.value)}} className="brd-input-choto" placeholder="Canción.."/>
                <h2>Nombre del Compositor</h2>
                <input type="text" onChange={(event) => {setNomComp(event.target.value)}} className="brd-input-choto" placeholder="Compositor..."/>
                <h2>Género</h2>
                <input type="text" onChange={(event) => {setNomGenero(event.target.value)}} className="brd-input-choto" placeholder="Género..."/>
                <h2>Nombre Productor</h2>
                <input type="text" onChange={(event) => {setNomProd(event.target.value)}} className="brd-input-choto" placeholder="Productor..."/>
                {isEmpty === true ? <motion.div className="dv-all-err" animate={{ x: 0, opacity: 100 }} initial={{ x: -20, opacity: -100 }}><h2>No puedes dejar los campos vacíos!</h2></motion.div> : ""}
                {edited === true ? <motion.div className="dv-all-err" animate={{ x: 0, opacity: 100 }} initial={{ x: -20, opacity: -100 }}><h2 className="np-all-me">Canción #{idSong} editada correctamente!</h2></motion.div> : ""}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => {
                  onClose();
                  suddenChange();
                  }}>
                  Cerrar
                </Button>
                <Button color="secondary" onPress={updateInfo}>
                  Editar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
