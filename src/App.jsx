import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { counterState,selectorcount } from './Recoil/selectors';

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  const [count, setCount] = useRecoilState(counterState);
  const evenOrOdd = useRecoilValue(selectorcount);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <p>The number is: {evenOrOdd}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

export default App;