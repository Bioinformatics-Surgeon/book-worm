import React from 'react';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function Dropdown(props) {
    return (
        <div className="form-group">
            <label htmlFor="partsOfSpeechDropdown">{props.placeholder}</label>
            <select
                className="form-control"
                id="partsOfSpeechDropdown"
                {...props}
            >
                <option>Select part of speech</option>
                <option>noun</option>
                <option>pronoun</option>
                <option>verb</option>
                <option>adjective</option>
                <option>adverb</option>
                <option>preposition</option>
                <option>conjunction</option>
                <option>interjection</option>
            </select>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button
            {...props}
            style={{ float: 'right', marginBottom: 10 }}
            className="btn btn-success"
        >
            {props.children}
        </button>
    );
}
