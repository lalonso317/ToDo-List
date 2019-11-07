import Axios from "axios"

export function addItem(item){
    return dispatch =>{
        Axios.post('/items', { name: item, completed:false , active: false }).then(resp =>{
            dispatch({
            type: 'ADD_ITEM',
            payload: resp.data
            })
        })
    } 
} 
export function getItem(){
    return dispatch =>{
        Axios.get(`/items`).then(resp =>{
            dispatch({
                type: 'LIST_ITEM',
                payload: resp.data
            })
        })
    }
}
export function removeItem(id){
    return dispatch =>{
        Axios.delete(`/items/${id}`).then(resp =>{
            dispatch(getItem(resp.data))
        })
    }
}
export function makeCompleted(id,status){
    return dispatch =>{
        if(status === false){
                Axios.patch(`/items/`+ id,{completed: true }).then(resp =>{
                    dispatch({
                        type: 'SHOW_COMPLETED',
                        payload: dispatch(getItem(resp.data)),
                        id:id
                    })
                })
            }else{
                Axios.patch(`/items/`+ id,{completed: false }).then(resp =>{
                    dispatch({
                        type: 'SHOW_COMPLETED',
                        payload: resp.data,
                        id:id
                })
            })
        }
    }
}
// export function showClear(){
    
// }
    // type:'REMOVE_ITEM',
    // payload: resp.data
// export function addItem(item){
//     return{
//         type: 'ADD_ITEM',
//         payload: item
//     }
// }
