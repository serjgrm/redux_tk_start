import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,addTodo,removeLastTodo } from "./toolkitRedux/toolkitSlice";
import './App.css'


const addAsyncTodo = ()=>{
  return async dispatch => {
    setTimeout(()=>{
      dispatch(addTodo('Async todo'))
    },2000)
  }
}

function App() {
  const count = useSelector(state=>state.toolkit.count)
  const todos = useSelector(state=>state.toolkit.todos)
  const dispatch = useDispatch();

  return (
    <div className="App">
        <div className="count">Count: {count}</div>
       <div className='jumbotron'>
          <button onClick={()=>dispatch(increment())}  className='btn btn-primary'>INCR</button>
          <button onClick={()=>dispatch(decrement())}  className='btn btn-primary'>DECR</button>
          <button onClick={()=>dispatch(removeLastTodo())}  className='btn btn-primary'>DELETE LAST TODO</button>
          <button onClick={()=>dispatch(addTodo(prompt()))}  className='btn btn-primary'>ADD TODO</button>
          <button onClick={()=>dispatch(addAsyncTodo())}  className='btn btn-primary'>ADD ASYNC TODO</button>
       </div>
      <div className='customers'>
        <div>
          {todos.map((todo,i) => 
            <div key={i}>{todo}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
