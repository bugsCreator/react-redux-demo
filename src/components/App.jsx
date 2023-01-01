import logo from '../logo.svg';
import '../style/App.css';
import store from '../redux/store'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increment_by_number, decrement_by_number }
  from "../redux/actions/rootActions";
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.rootReducer);
  console.log(cart, "cart");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <>
            Count is: {cart}
          </>

        </p>
        <div>
          <button onClick={(e) => { dispatch(increment()); console.log(e, "increment"); }} style={{ padding: "10px", margin: "10px" }}>Increase</button>
          <button onClick={(e) => { dispatch(decrement()); console.log(e, "decrement"); }} style={{ padding: "10px", margin: "10px" }}>Decrease</button>
          <br />
          <input type="number" style={{ padding: "10px", margin: "10px" }} />
          <br />
          <button onClick={(e) => {
            let value = document.querySelector("#root > div > header > div > input[type=number]").value;
            if (value){
              dispatch(increment_by_number(parseInt(value)))
            }
           
           }} style={{ padding: "10px", margin: "10px" }}>Increase By Number</button>
          <button onClick={
            (e)=>{
              let value = document.querySelector("#root > div > header > div > input[type=number]").value;
              if (value) {
                dispatch(decrement_by_number(parseInt(value)))
              }
             
            }
          } style={{ padding: "10px", margin: "10px" }}>Decrease By Number</button>
        </div>
      </header>
    </div>
  );
}

export default App;
