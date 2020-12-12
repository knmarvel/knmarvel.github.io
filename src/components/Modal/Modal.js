import projectsList from "../../assets/projects/projects.js"
import {ProjectSnapshot} from "../"

function Modal(props){
    if(props == "projects"){
        return(
            <>
                <h2>
                    Here will be a list of all my projects.
                </h2>
                {projectsList.map(x => <ProjectSnapshot project={x}/>)}
            </>
        )
    }
}

export default Modal