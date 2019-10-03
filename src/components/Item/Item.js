import React, { Component } from "react";

import "./item.scss";

export default class Item extends Component {
  render() {
    const { count, term, definition, onEdit, onDelete } = this.props;

    return (
      <section className="item">
        <article className="item-header">
          <h3 className="numberic">{count}</h3>
          <div className="item-icons">
            <span>
              <i className="fas fa-pen" onClick={onEdit}></i>
            </span>
            <span>
              <i className="fas fa-trash" onClick={onDelete}></i>
            </span>
          </div>
        </article>
        <article className="item-content">
          <p className="input-text">{term}</p>
          <p className="input-text">{definition}</p>

          {/* <input
            type="text"
            // name={`term-${id}`}
            value={term}
            className="input-text"
            placeholder="term"
            onChange={onTermChange}
          />
          <input
            type="text"
            // name={`definition-${id}`}
            value={definition}
            className="input-text"
            placeholder="definition"
            onChange={onDefinitionChange}
          /> */}
        </article>
        {/* <button className="btn-add" onClick={onAdd}>
          <i className="fas fa-plus-circle"></i>
        </button> */}
      </section>
    );
  }
}
