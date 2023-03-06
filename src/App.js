import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/actions';


function App() {
 const dispatch = useDispatch()
 const state = useSelector((state)=>{return state.changeNumber})
  return (
    <div className="App">
      <div>
        <h1>Increment / Decrement Counter</h1>
        <h3>Using React and Redux</h3> 
        <div className='counter-display-area'>
        <button onClick={()=>{dispatch(decrement())}} >-</button>
        <p className='input'>{state.value}</p>
        <button onClick={()=>{dispatch(increment())}} >+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
