import React, { useEffect, useState } from "react";
import './modal-brd.css'
import Axios from 'axios'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function BrdModalDelete({ vl_id_song }) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [idSong, setIdSong] = useState(0)
  
  useEffect(() => {
    setIdSong(vl_id_song);
  }, [vl_id_song])

  const deleteInfo = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
    .then(() => {
      alert("BRD | Canción eliminada")
    })
    }
    
  return (
    <>
      <Button onPress={onOpen} color="danger">Eliminar</Button>
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
              <ModalHeader className="flex flex-col gap-1">BRD | Confirmación</ModalHeader>
              <ModalBody>
                <h2>¿Está seguro que desea <span className="spn-all-cd">eliminar</span> esta canción?</h2>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => {
                  deleteInfo(idSong);
                  }}>
                  Eliminar
                </Button>
                <Button color="secondary" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
