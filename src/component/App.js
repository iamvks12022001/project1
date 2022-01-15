import "./App.css";
import { connect } from "react-redux";
function App(props) {
  console.log("inside app", props);
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

const connectedCompo = connect(mapStatetoProps)(App);
export default connectedCompo;
