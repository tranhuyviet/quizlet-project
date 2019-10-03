import React, { Component } from "react";

import "./item.scss";

export default class Item extends Component {
  render() {
    const {
      term,
      definition,
      onAdd,
      onTermChange,
      onDefinitionChange,
      isEditState
    } = this.props;

    return (
      <section className="item">
        <article className="item-header">
          <h3 className="numberic">add new word</h3>
          <div className="item-icons">
            {/* <span>
              <i className="fas fa-pen"></i>
            </span>
            <span>
              <i className="fas fa-trash"></i>
            </span> */}
          </div>
        </article>
        <article className="item-content">
          <input
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
          />
        </article>
        <button
          className={`${term && definition ? "btn-add" : "btn-disabled"}`}
          onClick={onAdd}
          disabled={term && definition ? false : true}
        >
          {isEditState ? (
            <i className="fas fa-check-circle"></i>
          ) : (
            <i className="fas fa-plus-circle"></i>
          )}
        </button>
      </section>
    );
  }
}
