function Arrow(props){
    return(
        <div className={"control-button " +  props.direction} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                            fill="currentColor" className={"bi bi-chevron-compact-left " + (props.clickability? "clickable" : "nonClickable")} viewBox="0 0 16 16"
                            onClick={props.action}>
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                    </svg>
                </div>
    )
}
export default Arrow