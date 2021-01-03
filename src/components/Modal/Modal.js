import projectsList from "../../assets/projects/projects.js"
import techsList from "../../assets/projects/techstack.js"
import resumeList from "../../assets/projects/resume.js"
import {Button} from "../"
import {ProjectSnapshot} from "../"
import "./Modal.css"

function Modal(props){ 
    const whichList = () => {
        return props.type === "projects" ? projectsList : props.type === "tech" ? techsList : resumeList
    } 
    return(
        <div className="Modal">
            <div className="Modal-closer">
                <Button
                    className="modal-close-button"
                    type={props.type}
                    click={props.click}
                >
                    x
                </Button>
            </div>
            <h2>
                My {props.type}.
            </h2>
            {Object.entries(whichList()).map(x => <ProjectSnapshot type={props.type} project={x}/>)}
        </div>
    )

}

export default Modal