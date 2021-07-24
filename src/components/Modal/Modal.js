import projectsList from "../../assets/projects/projects.js";
import techsList from "../../assets/projects/techstack.js";
import resumePDF from "../../assets/projects/KanoMarvelDevResume202102fortheWeb.pdf";
import {Button} from "../";
import {ProjectSnapshot} from "../";
import "./Modal.css";

function Modal(props){ 

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
            {props.type === "projects" && Object.entries(projectsList).map(x => <ProjectSnapshot type={props.type} project={x}/>)}
            {props.type === "tech" && techsList.map(x => 
                <ul>
                    <li>
                        {x}
                    </li>
                </ul>
            )}
            {props.type === "resume" && 
            <>
            <object height="90%" width="90%" className="resume-object" data={resumePDF} type="application/pdf" >
                <p>Link to resume <a href="https://github.com/knmarvel/knmarvel.github.io/blob/master/public/KanoMarvelDevResume202102fortheWeb.pdf">to the PDF!</a></p>
            </object>
               </>}
            
        </div>
    )

}

export default Modal