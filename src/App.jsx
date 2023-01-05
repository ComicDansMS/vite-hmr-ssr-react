import { useState } from "react"

export function App() {
  const [state, setState] = useState(1);

  function handleClick() {
    const newState = state + 1;

    setState(newState);
  }
  return (
    <>
      <h1>Hello!!!!</h1>

      <button
        onClick={handleClick}
      >
        {state}
      </button>
    </>
  )
}
