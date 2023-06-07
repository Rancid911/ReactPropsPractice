import React from "react";
import CardList from "./CardList";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <CardList contacts={contacts} />
    </div>
  );
}

export default App;
