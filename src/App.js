import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import './App.css';
function App() {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [password, setPassword] = useState("");
  const renderEyesPassword = () => {
    if (!password) {
      return;
    }
    if (isHiddenPassword) {
      return (
        <AiFillEye
          onClick={() => setIsHiddenPassword((prev) => !prev)}
          className="iconEyes"
        />
      );
    }
    if (!isHiddenPassword) {
      return (
        <AiFillEyeInvisible
          onClick={() => setIsHiddenPassword((prev) => !prev)}
          className="iconEyes"
        />
      );
    }
  };

  const handleOnchange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <h1 className="loginTitle">🔏Signup🔏</h1>
      <form className="loginForm">
        <div className="loginFormInputGroup">
        <label htmlFor="email">Email</label>
          <input placeholder="Enter email...." id="email" name="email" />
        </div>
        <div className="loginFormInputGroup">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
            onChange={handleOnchange}
            type={isHiddenPassword ? "password" : "text"}
              placeholder="Enter password..."
              id="password"
              name="password"
            />
            {renderEyesPassword()}
          </div>
        </div>
        <button className="loginFormBtnLogin">Login</button>
      </form>
    </div>);
}

export default App;
