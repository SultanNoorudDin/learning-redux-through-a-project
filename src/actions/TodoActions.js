export const AddTodo = (todo) => (dispatch) => {
    // console.log(getState)
    // const { Todo: { todos } } = getState;

    // const hasTodo = todos.find(i => i.todo === todo);
    if ( todo !== '') {
        dispatch({
            type: "ADD_TODO",
            payload: { id: todo, todo }
        })
    }
}

export const RemoveTodo = (todo) => (dispatch, getState) => {
    const { Todo: { todos } } = getState;
    dispatch({
        type:"REMOVE_TODO",
        payload: todos.filter((t)=>t.id!== todo.id )
    })
}