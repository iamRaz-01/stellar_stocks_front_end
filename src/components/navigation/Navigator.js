import "../../assets/css/universal.css"
import "./navigator.css";


let navButtons = [
    { name: "Create", icon: "control_point_duplicate" },
    { name: "OverView", icon: "Dashboard" },
    { name: "Bills", icon: "request_quote" },
    { name: "Finance", icon: "currency_rupee" },
    { name: "Me", icon: "badge" },
    { name: "Settings", icon: "settings" },
    { name: "Create Bill", icon: "list_alt_add" },
    { name: "Add product", icon: "add_shopping_cart" }
]
let create = [
{ name: "Create Bill", icon: "list_alt_add" },
{ name: "Add product", icon: "add_shopping_cart" }]

function Navigator(){

    let buttons = navButtons.map(btn=> <NavButton name = {btn.name} icon = {btn.icon} />);
  
    return (
        <div className="navBar">
            {buttons}
       
        </div>
    )

}
function CreateButton(){
    let createBtns = create.map(c => <NavButton name = {c.name} icon = {c.icon} />);
     return(
        <div className="navDiv">
           {createBtns} 
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