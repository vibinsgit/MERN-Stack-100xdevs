//V1 - useState explanation
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  console.log("Logged from app function");
  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>Count is {count}</button>
    </>
  );
}

export default App
