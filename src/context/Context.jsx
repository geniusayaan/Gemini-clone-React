import { createContext, useState } from "react";
import run from "../hooks/gemini-calling";

export const Context = createContext()

const ContextProvider = (props)=>{
    

    const [prompt,setprompt]=useState("")
    const [results,setresult]=useState([])
    const [prevprompts,setprevprompts]=useState()
    const [showresult,setshowresult]=useState(false)
    const [recentprompts,setrecentprompts]=useState()

    const onSent= async (prompt)=>{
        setshowresult(true)
        const response = await run(prompt)
        setresult([...results, response]);
        setprevprompts(prompt)
        setprompt("")
      }
    
    const contextvalue ={
         onSent,
         prompt,
         setprompt,
         results,
         setresult,
        prevprompts,
        setprevprompts,
        showresult,
        setshowresult,
        recentprompts,
        setrecentprompts

    }
    return(
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider