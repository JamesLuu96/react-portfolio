import React, {useState, useContext, createContext} from 'react'

const PageContext = createContext()

export function usePage(){
    return useContext(PageContext)
}

export default function PageProvider({children}) {
    const [currentPage, setCurrentPage] = useState("Home")
    return (
        <PageContext.Provider value={{currentPage, setCurrentPage}}>
            {children}
        </PageContext.Provider>
    )
}
