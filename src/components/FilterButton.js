import React, {useState} from 'react'
import {Button} from '@chakra-ui/react'

export default function FilterButton({frameworkName, filterProject, setFilterProject}) {
    function onClickHandler(e){
        e.preventDefault()
        if(filterProject.includes(frameworkName)){
            setFilterProject(old=>[...old.filter(framework=>framework!==frameworkName)])
        }else{
            setFilterProject(old=>[...old, frameworkName])
        }
    }
    console.log(filterProject)
    return (
        <>
        {filterProject.includes(frameworkName) ? 
        <Button m={2} onClick={onClickHandler}>{frameworkName}</Button> : 
        <Button m={2} onClick={onClickHandler} color="grey">{frameworkName}</Button>}
        </>
    )
}
