import { useState } from "react";
import LoginComponent from "./Components/LoginComponent";
import SignUpComponent from "./Components/SignUpComponent";

const LoginForm = () => {

    const [isLogin, setLogin] = useState(false);

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className= {isLogin ? 'active': ""} onClick={() => setLogin(true)}>Login</button>
                    <button className={!isLogin? 'active': ""} onClick={() => setLogin(false)}>SignUp</button>
                </div>

                {isLogin ? <LoginComponent/> : <SignUpComponent/>}
            </div>


        </div>
    )
}

export default LoginForm;