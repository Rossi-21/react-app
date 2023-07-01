import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Seattle"];
  return (
    <div>
      <ListGroup items={items} heading="Citites" />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
