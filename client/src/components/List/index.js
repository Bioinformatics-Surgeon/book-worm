import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container mx-3">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children, id, handleDelete }) {
  return (
    <div className="d-flex align-items-center">
      <li className="list-group-item">{children}</li>
      <button
        className="btn-danger btn delete-btn py-0 px-2 mx-2"
        data-id={id}
        onClick={handleDelete}
      >
        X
      </button>
    </div>
  );
}
