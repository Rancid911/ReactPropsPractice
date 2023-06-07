import React from "react";
import Card from "./Card";

export default function Cardlist({ contacts }) {
  return (
    <div>
      <Card contacts={contacts[0]} />
      <Card contacts={contacts[1]} />
      <Card contacts={contacts[2]} />
    </div>
  );
}
