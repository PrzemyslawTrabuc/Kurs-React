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