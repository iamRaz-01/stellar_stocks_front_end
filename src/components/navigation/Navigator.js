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
    return (
        <div className="navBar">
            <img src={logo} alt="LOGO"  className="logo" />
            <NavBar />
            
       
        </div>
    )

}


function NavBar(){

    return(
        <div className="navbrBtn">
            <NavButton icon="badge" name="Profile" />

        </div>
    )
}



function NavButton(props){
    return(
        <button className="navBtn" >
            <span className="material-symbols-outlined">
            {props.icon}
          </span>
           <p>{props.name}</p> 
        </button>
    )
}

export default Navigator;