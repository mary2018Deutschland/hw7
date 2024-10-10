// import React from "react";
// // import DisplayText from "./components/DisplayText/DisplayText";
// // import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
// // import { LanguageProvider } from "./LanguageContext/LanguageContext";
// import "./App.css";

// function App() {
//   return (
//     // <LanguageProvider>
//     <div className="App">
//       {/* <DisplayText />
//         <LanguageSwitcher /> */}
//     </div>
//     // </LanguageProvider>
//   );
// }

// export default App;
import React from "react";
import ButtonComponent from "./components/ButtonComponent";
import LangComponent from "./components/LangComponent";
import TextComponent from "./components/TextComponent";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <LangComponent>
        <TextComponent />
        <ButtonComponent />
      </LangComponent>
    </div>
  );
}

export default App;
