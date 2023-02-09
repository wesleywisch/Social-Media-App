import { RegisterContainer } from './styles';

export function Register() {
  return (
    <RegisterContainer>
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social media</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Social Media.
          </span>
        </div>

        <div className="registerRight">
          <form className="registerBox">
            <input
              type="text"
              className="registerInput"
              placeholder='Username'
            />

            <input
              type="text"
              className="registerInput"
              placeholder='Email'
            />

            <input
              type="text"
              className="registerInput"
              placeholder='Password'
            />

            <input
              type="text"
              className="registerInput"
              placeholder='Password Again'
            />

            <button className='registerButton' type='submit'>Registrar</button>
            <button className="registerRegisterButton">Entrar com sua conta</button>
          </form>
        </div>
      </div>
    </RegisterContainer>
  )
}