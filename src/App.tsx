import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from './slice/slice';
import { RootState } from './slice/reducer';


function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className='flex items-center justify-center w-full bg-slate-400'>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  )
}

export default App
