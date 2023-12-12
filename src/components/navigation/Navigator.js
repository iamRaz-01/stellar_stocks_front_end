import "../../assets/css/universal.css"
import "./navigator.css";
function Navigator(){
  
    return (
        <div className="navBar">
            <NavButton name = "Create" icon="control_point_duplicate"/>
            <NavButton name = "OverView " icon = "Dashboard" />
            <NavButton name = "Bills" icon = "request_quote" />
       
        </div>
    )


}

function NavButton(props){
    return(
        <button className="navBtn">
            <span className="material-symbols-outlined">
            {props.icon}
          </span>
           <p>{props.name}</p> 
        </button>
    )
}

export default Navigator;