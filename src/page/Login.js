import React, { useState } from "react";
import { validateEmail } from "../helper";
import { Redirect } from "react-router-dom";
import "./style.css";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [toHome, setToHome] = useState(false);

  const onChange = (e, fn) => {
    fn(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setToHome(true);
    // if (!validateEmail(emailValue)) {
    //   alert("이메일 형식을 확인해주세요.");
    // } else {
    //   fetch("", {
    //     method: "Post",
    //     body: {
    //       email: emailValue,
    //       password: pwValue
    //     }
    //   }).then(result => {
    //     if (result === "login success") {
    //     } else {
    //       alert("이메일 혹은 비밀번호를 확인해주세요.");
    //     }
    //   });
    // }
  };
  return (
    <div className="loginContainer">
      {toHome ? <Redirect to="/dashboard" /> : null}

      <div className="left">
        <img src="" alt="냉장고" />
      </div>
      <div className="right">
        <input
          type="text"
          placeholder="email"
          onChange={e => onChange(e, setEmailValue)}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={e => onChange(e, setPwValue)}
        ></input>
        <button
          onClick={e => {
            onSubmit(e);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
