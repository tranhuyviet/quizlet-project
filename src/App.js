import React, { Component } from "react";

import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";

import ItemInput from "./components/Item/ItemInput";
import ItemList from "./components/ItemList/ItemList";

class App extends Component {
  state = {
    itemList: [],
    //item: { term: "term text", definition: "def text" },
    term: "",
    definition: "",
    id: uuid(),
    isAddState: false,
    isEditState: false
  };

  onTermChange = event => {
    //console.log(event.target.value);
    this.setState({
      term: event.target.value
    });
  };

  onDefinitionChange = event => {
    this.setState({
      definition: event.target.value
    });
  };

  onAdd = () => {
    //console.log("onAdd", this.state.term, this.state.definition);
    const newItem = {
      id: this.state.id,
      term: this.state.term,
      definition: this.state.definition
    };
    //console.log(newItem);
    this.setState(
      {
        itemList: [...this.state.itemList, newItem],
        id: uuid(),
        term: "",
        definition: "",
        isEditState: false
      }
      //() => console.log(this.state.itemList)
    );
  };

  onEdit = id => {
    //console.log("onEdit with id: ", id);
    const filtedItemList = this.state.itemList.filter(item => item.id !== id);
    const selectedItem = this.state.itemList.find(item => item.id === id);
    this.setState({
      itemList: filtedItemList,
      term: selectedItem.term,
      definition: selectedItem.definition,
      id: id,
      isEditState: true
    });
  };

  onDelete = id => {
    //console.log("onDelete with id: ", id);
    const filtedItemList = this.state.itemList.filter(item => item.id !== id);
    this.setState({
      itemList: filtedItemList
    });
  };
  render() {
    return (
      <>
        <main className="main-center">
          <ItemInput
            term={this.state.term}
            definition={this.state.definition}
            onTermChange={this.onTermChange}
            onDefinitionChange={this.onDefinitionChange}
            onAdd={this.onAdd}
            isEditState={this.state.isEditState}
          />
          <ItemList
            itemList={this.state.itemList}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
          />
        </main>
      </>
    );
  }
}

export default App;
