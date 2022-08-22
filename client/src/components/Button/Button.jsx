import React from "react";
import s from "./Button.module.css";

const Button = ({ text, propClass }) => {
	return <button className={`${s.button} ${s[propClass]}`}>{text}</button>;
};

export default Button;
