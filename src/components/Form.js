import React, { useState } from 'react'
import { addItem } from '../actions/Actions'
import { useDispatch } from 'react-redux'

export default function Secondary(props){
const [item, setItem] = useState('')
const dispatch = useDispatch([])

function handleSubmit(e){
    e.preventDefault()
    if(item === ''){
        alert('Cannot be blank')
    }else{
        dispatch(addItem(item)) 
        setItem('')  
    }
}
    return(
        <div className="list">
        <h1 className="todo">todos</h1>
        <form className="form" onSubmit={(e) =>{handleSubmit(e)}}>
            <input 
            type="text" 
            id="item" 
            name="item" 
            value={item} 
            placeholder="What to do" 
            onChange={e => setItem(e.target.value)} />
            <button className="submit" type="submit">Submit</button>

        </form>
        </div>
    )
}
