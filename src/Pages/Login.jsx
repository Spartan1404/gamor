import { useState } from "react";
import { Users } from "../Data/static-data";
import { useNavigate, Link } from "react-router-dom";
import { useSession } from "../Components/Context/session/use-session";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { setSession } = useSession();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = Users.find(
      (u) => username === u.username && password === u.password
    );
    if (user) {
      setSession({
        user: { username: user.username, profile_pic: user.profile_pic },
      });
      navigate("/");
    } else {
      setMessage("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login Page</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-variant-primary">
            Login
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
      <Link to={"/"}>Return to Home</Link>
    </div>
  );
};

export default Login;
