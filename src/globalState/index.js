import React, {useState, useContext, createContext} from 'react'

const PageContext = createContext()
const LogoContext = createContext()

export function usePage(){
    return useContext(PageContext)
}

export function useLogoColor(){
    return useContext(LogoContext)
}


export default function PageProvider({children}) {
    const [currentPage, setCurrentPage] = useState("Home")
    const colors = ["#68D391", "#3182CE", "#B794F4", "#E53E3E"]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [logoColor, setColor] = useState(colors[0])
    function handleClick(){
        if(currentIndex === 3){
            setCurrentIndex(0)
            setColor(colors[0])
            return
        }else {
            setCurrentIndex(old=>old+1)
            setColor(colors[currentIndex+1])
        }
    }
    return (
        <PageContext.Provider value={{currentPage, setCurrentPage}}>
            <LogoContext.Provider value={{logoColor, handleClick}}>
                {children}
            </LogoContext.Provider>
        </PageContext.Provider>
    )
}
