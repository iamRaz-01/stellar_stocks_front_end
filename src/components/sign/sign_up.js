import "./sign.css"
import logo from "../../assets/images/stellarstocksLogo.png"


function SignIn(){
    return(
        <div className="signUpDiv">
            
            <h2> <img src= {logo} alt ={"logo"} className="logo"/> Sign Up   <ExitButton />
 </h2>
             <InputDiv icon="badge" placeholder="Enter Your Name" />
             <InputDiv icon="call" placeholder="Enter Your Number" />
             <InputDiv icon="mail" placeholder="Enter Your E-mail" />
             <InputDiv icon="key" placeholder="Create Password " />
             <InputDiv icon="key" placeholder="Confirm Password" />
             <SubmitBtn />
        </div>
       
    )

}

function InputDiv(prop){

    return (
        <div className="inputDiv">
            <span class="material-symbols-outlined">
 {prop.icon}
</span>
<input  placeholder={prop.placeholder}/> 


        </div>
    )
}


function SubmitBtn(){


    return (
        <button className="submitBtn" >Submit</button>
    )
}
function ExitButton(){
    return(
        <div>
           <span class="material-symbols-outlined">
   logout
</span>
            
             </div>
    )
}


export default SignIn;