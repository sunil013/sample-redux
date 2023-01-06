import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onClickDecrement = () => {
    dispatch(actions.decrement());
  };
  const onClickIncrement = () => {
    dispatch(actions.increment());
  };
  const onAddBy = () => {
    dispatch(actions.addBy(20));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button type="button" onClick={onClickDecrement}>
        decrement
      </button>
      <button type="button" onClick={onClickIncrement}>
        increment
      </button>
      <button type="button" onClick={onAddBy}>
        Add 10
      </button>
    </div>
  );
}

export default App;
