import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {getItem,removeItem, makeCompleted} from '../actions/Actions'

export default function Main(props){
    const items = useSelector(appState => appState.listReducer.items) 
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getItem())
    },[dispatch])

    function handleClick(id){
    dispatch(removeItem(id))
    }

    function handleComp(id,completed){
       dispatch(makeCompleted(id,completed))
    }
    return(
        <div className="list">
        <ol className="ordered">
        {items.map((item,i) =>(
            <div className="listitem"
             key={'item-key' + i}>
            <li >
            <span className="checkborder">
            <span className="check" onClick={(e)=> handleComp(item.id , item.completed)}>&#x2714;</span>
            </span>
            <span className={item.completed === true ? 'completed' : ''}>{item.name}</span>
            <span className="ex" onClick={(e)=>handleClick(item.id)}>x</span>
            </li>
            </div>
        ))}
        </ol>
        <h3 className="counter">Items: {items.length}</h3>
        </div>
    )
}