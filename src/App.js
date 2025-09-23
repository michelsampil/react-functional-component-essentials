import "./App.css";
import UserFinder from "./components/UserFinder";
import { Product } from "./components/Product";
import chairImage from "./assets/chair-1.jpeg";

function App() {
  return (
    <div className="App">
      <Product productImage={chairImage} title="Epic chair" scoreAmount={4} />
      <h1>🔍 USERS FINDER</h1>
      <UserFinder />
    </div>
  );
}

export default App;
