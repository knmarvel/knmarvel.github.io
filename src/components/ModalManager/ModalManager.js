import {useState} from 'react'
import {Button, Modal} from "../"

function ModalManager(){

const [openModal, setOpenModal] = useState({"type": "closed"})

  const handleModalOpen = (type) => {
    if(openModal.type !== type){
      setOpenModal(() => {return({"type": type})})
    }
    else{
      setOpenModal(() => {return({"type": "closed"})})
    }
  }
  return(
      <>
  {openModal.type !== "closed" && <Modal type={openModal.type} click={handleModalOpen}/>}
        <div className="buttons">
          <Button 
            type="projects" 
            click={handleModalOpen}
            >
            Projects
          </Button>
          <Button
            type="tech" 
            click={handleModalOpen}
          >
            Tech Stack
          </Button>
          <Button
            type="resume" 
            click={handleModalOpen}
          >
            Resume
          </Button>
        </div>
    </>
  )
}

export default ModalManager