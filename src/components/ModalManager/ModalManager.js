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
            type="projectsbutton" 
            click={handleModalOpen}
            >
            Projects
          </Button>
          <Button
            type="techbutton" 
            click={handleModalOpen}
          >
            Tech Stack
          </Button>
          <Button
            type="resumebutton" 
            click={handleModalOpen}
          >
            Resume
          </Button>
        </div>
    </>
  )
}

export default ModalManager