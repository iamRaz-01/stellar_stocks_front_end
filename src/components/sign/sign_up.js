import "./sign.css"


function SignIn(){
    return(
        <div className="signUpDiv">
            <h2>Sign Up     </h2>
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

export default SignIn;