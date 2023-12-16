import Navigator from "./components/navigation/navigator";
import SignIn from "./components/sign/sign_up";
import "./assets/css/universal.css"
import Login from "./components/sign/login_in";
function App() {
  return (
    <div className="App">
      <Navigator />
      <SignIn />
      <Login/>
      
    </div>
  );
}

export default App;
