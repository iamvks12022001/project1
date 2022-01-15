import "./App.css";
import { connect } from "react-redux";
function App(props) {
  console.log("inside app", props);

  //increase by 1 function
  const increase = () => {
    props.dispatch({ type: "ADD" });
  };
  return (
    <div>
      <div className="App">APP value-{props.post.post}</div>
      <button onClick={increase} />
    </div>
  );
}

function mapStatetoProps({ post }) {
  return {
    post,
  };
}
//connecting App component to state
const connectedCompo = connect(mapStatetoProps)(App);
export default connectedCompo;
