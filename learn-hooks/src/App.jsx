import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import MemoExample from "./components/MemoExample";
import CallbackExample from "./components/CallbackExample";

// UseContext using Provider and Consumer
import UserContext from "./context/userContext";
import CountContext from "./context/countContext";
import ContextExample from "./components/ContextExample";



function App() {
  // const [showCounter, setShowCounter] = useState(true);

  const user = { name: "Bilal", email: "bilal@email.com" };
  const [count,setCount] = useState(0);
  // UseContext Example
  return (
    <CountContext.Provider value={{count, setCount}}>
    <UserContext.Provider value={user}>
      <div className="App">
        <ContextExample />
      </div>
    </UserContext.Provider>
    </CountContext.Provider>
  );  


  // useCallback Example
  // return <CallbackExample />;

  // useMemo Example
  // return <MemoExample />;

  // useRef Example
  // return (
  //   <>
  //   {showCounter && <Counter />}
  //     <button onClick={() => setShowCounter(!showCounter)}>
  //       {showCounter ? "Hide" : "Show"} Counter
  //     </button>
  //   </>
  // );
}

export default App;
