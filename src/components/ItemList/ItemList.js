import React, { Component } from "react";
//import uuid from "uuid";

import Item from "../Item/Item";

export default class ItemList extends Component {
  render() {
    const { itemList, onEdit, onDelete } = this.props;
    //console.log(itemList);
    return (
      <>
        {itemList.length > 0
          ? itemList.map((item, index) => {
              return (
                <Item
                  count={index + 1}
                  key={item.id}
                  term={item.term}
                  definition={item.definition}
                  onEdit={() => onEdit(item.id)}
                  onDelete={() => onDelete(item.id)}
                />
              );
            })
          : null}
      </>
    );
  }
}
