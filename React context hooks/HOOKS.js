import React, { useState } from "react";
 
const Context = React.createContext("english");
 
export const LanguageStore = (props) => {
  const [state, setState] = useState({ language: "english" });
 
  const onLanguageChange = (language) => {
    setState({ language });
  };
 
  return (
    <Context.Provider value={{ ...state, onLanguageChange: onLanguageChange }}>
      {props.children}
    </Context.Provider>
  );
};
 
export default Context;
////***********************LanguageContext.js***********************////



////***********************LanguageSelector.js***********************////

import React, { useContext } from "react";
 
import LanaugeContext from '../contexts/LanguageContext';
 
const LanguageSelector = () => {
  const { onLanguageChange } = useContext(LanaugeContext);
 
  return (
    <div>
      Select a language:
      <i
        onClick={() => onLanguageChange('english')}
        className="flag us"
      ></i>
      <i
        onClick={() => onLanguageChange('dutch')}
        className="flag nl"
      ></i>
    </div>
  );
};
 
export default LanguageSelector;
////***********************LanguageSelector.js***********************////



////***********************Button.js***********************////

import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
 
const Button = () => {
  const color = useContext(ColorContext);
  const { language } = useContext(LanguageContext);
 
  return (
    <button className={`ui button ${color === "red" ? "red" : "primary"}`}>
      {language === "english" ? "Submit" : "Voorleggen"}
    </button>
  );
}
 
export default Button;
////***********************Button.js***********************////



////***********************Field.js***********************////

import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
 
const Field = () => {
  const { language } = useContext(LanguageContext);
 
  const text = language === "english" ? "Name" : "Naam";
 
  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );
};
 
export default Field;