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