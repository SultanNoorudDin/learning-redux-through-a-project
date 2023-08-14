
import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector(state => state.Todo)
  console.log( Todo)
  // const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodo(todo))
  }

  return (
    <div className="App">
      <header className='app-header'>
        <h2>To do in redux</h2>
        <form onSubmit={handleSubmit}>
          <input type="chhota kaa" placeholder='Ente a to do'
            style={{
              width: 350, padding: 10, borderRadius: 15, border: "none", fontSize: 20
            }}
            onChange={(e) => { setTodo(e.target.value) }}
          />
          <button type='submit'
            style={{
              padding: 12,
              borderRadius: 20,
              fontSize: 15,
              marginLeft: 20,
              // cursor:pointer
            }}
          >Go</button>
        </form>
        <ul className='allTodo'>
          {
            Todo?.map((t) => (
              <li key={t.id} className='singleTodo'>
                <span className='todoText'>{t?.todo}</span>
                <button
                  style={{
                    borderRadius: 23,
                    padding: 10,
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "orangered"
                  }}
                >Delete</button>
              </li>
            ))
          }

        </ul>
      </header>
    </div>
  );
}

export default App;
