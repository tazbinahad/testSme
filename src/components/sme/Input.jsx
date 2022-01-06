import React from 'react';
import Style from './Input.module.css';

const Input = ({ placeholderTxt }) => (
    <>
        <input className={Style.inputField} placeholder={placeholderTxt} />
    </>
);

export default Input;
