import React from "react";
import s from "./Label.module.css";

const Label = ({ text, styleProps }) => {
	return <label className={`${s.label} ${s[styleProps]}`}>{text}</label>;
};

export default Label;
