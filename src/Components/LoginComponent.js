const LoginComponent =  () => {
    return(
        <div className="form">
            <h2> Login </h2>
            <input type="email" placeholder="Email ID" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot Password?</a>
            <button>LogIn</button>
            <p>Don't have an account?  <a href="">SignUp Now</a></p>
        </div>
    )
}

export default LoginComponent