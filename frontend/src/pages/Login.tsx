import "../../static/css/login.css";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="../static/img/LogoKb.jpg" alt="Logo de la empresa" />
      </div>

      <div id="error-message" className="error"></div>

      <form id="login-form">
        <div className="input-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" placeholder="Ingresa tu correo" required />
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required />
        </div>

        <button type="submit" className="btn">Aceptar</button>
        <a href="register.html" className="btn-register">Crear cuenta</a>
      </form>

      <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
    </div>
  );
};

export default Login;
