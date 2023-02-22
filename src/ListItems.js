import React from "react";
import "./ListItems.css";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key="item.key">
        
        <p><input type="checkbox"/>&nbsp;&nbsp;{item.text}</p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;