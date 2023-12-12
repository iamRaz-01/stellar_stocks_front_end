import "../../assets/css/universal.css"
import "./navigator.css";
function Navigator(){
  
    return (
        <div className="navBar">
            <NavButton name = "Create" icon="control_point_duplicate"/>
            <NavButton name = "OverView " icon = "Dashboard" />
            <NavButton name = "Bills" icon = "request_quote" />
            <NavButton name = "Finance" icon = "currency_rupee" />
            <NavButton name = "Me" icon = "badge" />
            <NavButton name = "Create Bill" icon="list_alt_add"/>
            <NavButton name="Add product" icon="add_shopping_cart" /> 
            <NavButton name="Settings" icon="settings" /> 
            {/* <CreateButton /> */}
       
        </div>
    )


}
// function CreateButton(){
//      return(
//         <div className="navDiv">
//             <NavButton name = "Create Bill" icon="list_alt_add"/>
//             <NavButton name="Add product" icon="add_shopping_cart" />   
//         </div>
//      )
// }

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