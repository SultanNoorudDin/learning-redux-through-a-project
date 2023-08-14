const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state,action.payload]

        case "REMOVE_TODO":


        default:
            return state;
    }
}

export default TodoReducer;