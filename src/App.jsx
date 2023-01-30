import { useState } from 'react'
import './App.css'
import {LanguageContext, TemperatureContext} from "./contexts/context";
import LanguageComponent from "./components/languageComponent.jsx";
import Language from "./components/language.jsx";
import Temperature from "./components/temperature.jsx";

function App() {
  const [language, setLanguage] = useState("French")
    const FrenchBtn = () =>{
        setLanguage("French")
    }
    const EnglishBtn = () =>{
        setLanguage("English")
    }

    const [temperature, setTemperature] = useState(5)
    const updateTemp = () => {
      setTemperature(Math.floor(Math.random() * 40))
    }


  return (
    <div className="App" style={{gap: 50}}>
        <LanguageContext.Provider value={{FrenchBtn , EnglishBtn , Language }}>
            <Language/>
            <LanguageComponent/>
        </LanguageContext.Provider>
        <TemperatureContext.Provider value={{updateTemp, temperature}}>
            <Temperature/>
        </TemperatureContext.Provider>
    </div>
  )
}

export default App
