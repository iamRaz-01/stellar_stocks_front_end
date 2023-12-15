import "./sign.css"


function SignIn(){
    return(
        <div className="signUpDiv">
            <h2>Sign Up     </h2>
             <InputDiv icon="badge" />
             <InputDiv icon="badge" />
             <InputDiv icon="badge" />
             <InputDiv icon="badge" />
             <InputDiv icon="badge" />
            
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
<input /> 


        </div>
    )
}


function SubmitBtn(){


    return (
        <button className="submitBtn" >Submit</button>
    )
}

export default SignIn;