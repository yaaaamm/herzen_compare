import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"

const Card = (props) => {
  return (
    <div>
     {props.text}
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <Card text={"kjbjbj"} />
      <Card text={"ggggg"} />
    </div>
  );
}

export default App;
