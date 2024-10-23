const SignUpComponent = () => {
  return (
    <div className="form">
      <h2>SignUp Now!</h2>
      <input type="email" placeholder="Email ID" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>SignUp</button>
    </div>
  );
};

export default SignUpComponent;
