import React,{createContext, useState, useEffect} from 'react'
export const ToDoTheme = createContext();
const Theme = ({children}) => {
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
         !toggle ? document.body.style.background = "#161622" : document.body.style.background = "#1d1d25";
    })
  return (
    <ToDoTheme.Provider value = {{toggle,setToggle}}>
          {children}
    </ToDoTheme.Provider>
  )
}

export default Theme