import { atom } from "recoil";

export const Counter=atom({
    key:'counter',
    default:0
})

// Atom used to optimal rerenders 
//like it only rerenders when the subscribe state of component 
//changes 
//and it will render only that state;;;;

/*
function App() {
  return (
    <RecoilRoot>
      <Value />
      <Increase />
      <Decrease />
    </RecoilRoot>
  );
}

function Value() {
  const count = useRecoilValue(Counter);
  console.log("Current count:", count);
  return <p>Counter: {count}</p>;
}

function Increase() {
  const setCount = useSetRecoilState(Counter);
  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(Counter);
  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}

export default App;
*/