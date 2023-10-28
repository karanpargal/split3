import {Route,Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import LoginForm from "./components/Forms/LoginForm";
import SignInForm from "./components/Forms/SignInForm";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navbar/> } />
        <Route path="/LoginForm" element={ <LoginForm/> } />
        <Route path="/SignInForm" element={ <SignInForm/> } />
        
      </Routes>
     
    </div>
  );
}
export default App;
