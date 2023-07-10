import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addFive,
  minusFive,
} from "./reducers/counterSlice";
import { loggedIn, loggedOut } from "./reducers/loginSlice";

function App() {
  const counter = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hello Redux</h1>
      <h3>{counter}</h3>
      <h5>Are you logged in? {login ? "true" : "false"}</h5>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(addFive())}>Add 5</button>
      <button onClick={() => dispatch(minusFive())}>Minus 5</button>
      <button onClick={() => dispatch(loggedIn())}>Login</button>
      <button onClick={() => dispatch(loggedOut())}>Log out</button>
    </>
  );
}

export default App;
