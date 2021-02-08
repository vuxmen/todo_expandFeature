import React from "react";
import style from "./Login.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  changeEmailInputValue,
  changePasswordInputValue,
  login,
} from "../redux/actionCreator";
import { Redirect } from "react-router-dom";

export default function Login() {

  const email = useSelector(state => state.auth.email);
  const password = useSelector(state => state.auth.password);
  const isLoginFail = useSelector(state => state.auth.isLoginFail);
  const currentUser = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const renderLoginContent = () => {
    return (
      <div className={style.container}>
        <div className={style.login}>
          <h1>Welcome TodoList</h1>
          <input
            type="text"
            value={email}
            placeholder="Type your email..."
            onChange={e => dispatch(changeEmailInputValue(e.target.value))}
          />
          <input
            type="text"
            value={password}
            placeholder="Type your password..."
            onChange={e => dispatch(changePasswordInputValue(e.target.value))}
          />
          <button onClick={() => dispatch(login())}>Login</button>
          <span>
            {isLoginFail
              ? "* Tài khoản hoặc mật khẩu không chính xac, vui lòng nhập lại"
              : ""}
          </span>
        </div>
      </div>
    );
  };

  return currentUser ? <Redirect to="TodoList" /> : renderLoginContent();
}
