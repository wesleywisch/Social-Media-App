import { LoginContainer } from './styles';

export function Login() {
  return (
    <LoginContainer>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social Media.
          </span>
        </div>

        <div className="loginRight">
          <form className="loginBox">
            <input
              type="text"
              className="loginInput"
              placeholder='Email'
            />

            <input
              type="text"
              className="loginInput"
              placeholder='Password'
            />

            <button className='loginButton' type='submit'>Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a new account</button>
          </form>
        </div>
      </div>
    </LoginContainer>
  )
}