import React from "react";
import s from "./Input.module.css";

const Input = ({ type, name, value }) => {
	return <input className={s.input} type={type} name={name} value={value} />;
};

export default Input;
