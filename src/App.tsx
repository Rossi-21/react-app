import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Seattle"];
  return (
    <div>
      <ListGroup items={items} heading="Citites" />
      <Alert />
    </div>
  );
}

export default App;
