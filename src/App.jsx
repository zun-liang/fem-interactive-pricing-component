import { useState } from 'react'
import Intro from "./components/Intro"
import Pricing from "./components/Pricing"
import Completion from "./components/Completion"
import './App.css'

const App = () => {
  const [toggle, setToggle] = useState(true)
  const handleToggle = () => setToggle(prev => !prev)
  const [buttonOption, setButtonOption] = useState(true)
  const handleButtonOption = () => setButtonOption(prev => !prev)
  
  return (
    <div className="App">
      <Intro />
      {buttonOption
        ? <Pricing
            toggle={toggle}
            handleToggle={handleToggle}
            handleButtonOption={handleButtonOption}/>
        : <Completion
            handleButtonOption={handleButtonOption}/>}
    </div>
  )
}

export default App
