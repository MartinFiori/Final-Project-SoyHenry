import React from "react";
import s from "./Label.module.css";

const Label = ({ text }) => {
	return <label className={s.label}>{text}</label>;
};

export default Label;
