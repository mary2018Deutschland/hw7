import { useContext } from "react";
import Language from "../context/LanguageContext";

function TextComponent() {
  const { language } = useContext(Language);

  const langText = {
    ru: "Вы выбрали русский язык",
    eng: "You have choose english",
  };

  return (
    <>
      <h1>{language === "English" ? langText.eng : langText.ru}</h1>
    </>
  );
}

export default TextComponent;
