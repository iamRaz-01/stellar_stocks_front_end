import "../../assets/css/universal.css"
import "./navigator.css";
import logo from "../../assets/images/stellarstocksLogo.png"
import { useState } from "react";



function click(){
    
}
let navButtons = [
    { name: "Create", icon: "control_point_duplicate" , event : click },
    { name: "OverView", icon: "Dashboard",event : click },
    { name: "Bills", icon: "request_quote",event : click },
    { name: "Finance", icon: "currency_rupee",event : click },
    { name: "Me", icon: "badge",event : click },
    { name: "Settings", icon: "settings",event : click }
]
// let create = [
// { name: "Create Bill", icon: "list_alt_add" },
// { name: "Add product", icon: "add_shopping_cart" }]

function Navigator(){
    let [sam,setSam] = useState(0);
    const change  = ()=>{
        setSam(sam+=1)
    }



    let buttons = navButtons.map(btn=> <NavButton name = {btn.name} icon = {btn.icon} event={change} />);
  
    return (
        <div className="navBar">
            <img src={logo} alt="LOGO"  className="logo" />
            {buttons}
            {sam}
            
       
        </div>
    )

}
// function CreateButton(){
//     let createBtns = create.map(c => <NavButton name = {c.name} icon = {c.icon} />);
//      return(
//         <div className="navDiv">
//            {createBtns} 
//         </div>
//      )
// }

function NavButton(props){
    return(
        <button className="navBtn" onClick={props.event}>
            <span className="material-symbols-outlined">
            {props.icon}
          </span>
           <p>{props.name}</p> 
        </button>
    )
}

export default Navigator;