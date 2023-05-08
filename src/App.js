import CardFinder from "./CardFinder";
import RandomCard from "./Random";

function App() {
  return (
    <div>
      <RandomCard />
      <h1>Search for cards...</h1>
      <CardFinder />
    </div>
  );
}

export default App;
