import React from 'react';
import './style.css';

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

export function WordCard({ word, handleDelete, handleUpdate }) {
    return (
        <div className="card w-100">
            <div className="card-body">
                <h5 className="card-title">{word.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {word.partOfSpeech}
                </h6>
                <p className="card-text">{word.definition}</p>
                <button
                    onClick={handleUpdate}
                    data-id={word._id}
                    className="card-link btn btn-primary"
                >
                    Update
                </button>
                <button
                    onClick={handleDelete}
                    data-id={word._id}
                    className="card-link btn btn-danger"
                >
                    Delete
                </button>
                <div
                    className="p-2"
                    style={{ position: 'absolute', right: 0, top: 0 }}
                >
                    {getDateString(word.date)}
                </div>
            </div>
        </div>
    );
}

/* Utils */
function getDateString(word) {
    return word.substring(0, word.indexOf('T'));
}
