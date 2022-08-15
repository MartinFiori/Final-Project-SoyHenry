import React from "react";
import s from "./Button.module.css";

const Button = ({ text }) => {
	return <button className={s.button}>{text}</button>;
};

export default Button;
