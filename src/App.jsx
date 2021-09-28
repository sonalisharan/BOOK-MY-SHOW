import { Route } from "react-router-dom";

function Name() {
  return <h1> Hello Root </h1>;
}

function Name2() {
  return <h1>Hello movie</h1>;
}

function App() {
  return (
    <>
    <Route path="/" exact component ={Name} />
    <Route path="/movie" exact component ={Name2} />
    </>
  );
};

export default App;
