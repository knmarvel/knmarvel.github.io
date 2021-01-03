import "./Button.css"

function Button(props){
    return(
        <button 
            onClick={() => props.click(props.type)}
            className="Button">
            {props.children}
        </button>
    )
}

export default Button