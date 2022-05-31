import './App.css';

function SignUp() {
  return (
    <div className="sign-form">
      <p>Please Register</p>
      <form action="" method="get">
          <div>
            <label for="email">Enter your email :</label>
            <input type="email" name="email" id="email" required></input>
          </div>
          <div>
            <label for="password">Enter your password :</label>
            <input type="password" name="password" id="password" required></input>
          </div>
          <input type="submit" value="Register"></input>
          <a href="">Log In instead ?</a>
      </form>
    </div>
  );
}

export default SignUp;
