import React from "react";

export default function Card({ contacts }) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{contacts.name}</h2>
          <img className="circle-img" src={contacts.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{contacts.phone}</p>
          <p className="info">{contacts.email}</p>
        </div>
      </div>
    </div>
  );
}
