import React from "react";
import { dictionaryLists } from "../../language";

export const LanguageContext = React.createContext();

export const Wrap = ({ children }) => {
  const [userLanguage, setUserLanguage] = React.useState("en");

  return (
    <LanguageContext.Provider
      value={{
        userLanguage,
        dictionary: dictionaryLists[userLanguage],
        changeLanguage: (selected) => {
          setUserLanguage(selected);
        },
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
