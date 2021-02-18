import "./ProjectSnapshot.css"

function ProjectSnapshot(props){
    return(
        <div className="project-card">
            <h3 className="project-name">
                {props.project[0]}
            </h3>
            <div className="project-info">
                <a 
                    className="project-link"
                    href={props.project[1].link}
                >
                    <img 
                        className="project-pic"
                        src={props.project[1].photo}
                        alt={`${props.project[1].moduleDocstring}`}
                    />
                    <div
                        className="project-docstring"
                    >
                        {props.project[1].moduleDocstring}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectSnapshot