import logo from "../../assets/images/stellarstocksLogo.png"
import "./sign.css"
function Login(){
    return(<form className="signUpDiv login">
        <h2>
        <img src={logo} className="logo" alt="logo"/>

        </h2>
             <InputDiv icon="mail" placeholder="Enter Your E-mail" />
             <InputDiv icon="key" placeholder="Your Password " />


    </form>)

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
export default Login;
