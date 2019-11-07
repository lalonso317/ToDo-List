const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] }
    case "LIST_ITEM":
      return { ...state, items: action.payload }
    case "MAKE_COMPLETED":
      return { ...state, items: state.items.map(item =>{
        if(item.id === action.id){
          item.completed = !item.completed
        }
        return item
      })}
    default:
      return state
  }
}