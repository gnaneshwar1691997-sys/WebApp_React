import { useState } from 'react'
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import UseStateHookDemo from './componets/hooks/useStateHook1'
// import AxiosDemo from   './componets/axiosDemo/axiosComp.jsx'
// import UseStateHookToUpdateObject from './componets/hooks/UseStateHookToUpdateObject.jsx'
import DataObject from './componets/dataObject/dataObject.jsx';
import EventHandler from './componets/eventHandler/eventHandler.jsx'
import DemoUseRefHook from './componets/DemoUseRefHook/DemoUseRefHook.jsx'
import TimeOutDemo from './componets/Debouncing/TimeOutDemo.jsx'
import DemoUseEffect from './componets/hooks/UseEffectHook.jsx'
import SlideShowComp from './componets/slidshow/slideShow.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseStateHookDemo/> */}
   {/* < UseStateHookToUpdateObject/> */}
   {/* <AxiosDemo/> */}
 {/* <DataObject /> */}
 {/* <EventHandler/> */}
 {/* <DemoUseRefHook/> */}
 {/* <TimeOutDemo/> */}
 {/* <DemoUseEffect/> */}
 <SlideShowComp/>

    </>
  )
}

export default App
