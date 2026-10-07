import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

const App: React.FC = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="text-red-300">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>reduce</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default App;
