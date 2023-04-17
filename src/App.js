import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "./toolkitRedux/toolkitRedux";
import './App.css'

function App() {
  const count = useSelector(state=>state.toolkit.count)
  // const todos = useSelector(state=>state.main.todos)
  const dispatch = useDispatch();

  return (
    <div className="App">
        <div className="count">Count: {count}</div>
       <div className='jumbotron'>
          <button onClick={()=>dispatch(increment())}  className='btn btn-primary'>INCR</button>
          <button onClick={()=>dispatch(decrement())}  className='btn btn-primary'>DECR</button>
          {/* <button onClick={()=>dispatch(removeLastTodo())}  className='btn btn-primary'>DELETE LAST TODO</button>
          <button onClick={()=>dispatch(addTodo())}  className='btn btn-primary'>ADD TODO</button> */}
       </div>
      <div className='customers'>
        <div>
          {/* {todos.map(todo => 
            <div key={todo}>{todo}</div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default App;
