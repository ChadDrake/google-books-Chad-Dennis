import React from "react";
import Item from "./Item";

export default function ResultList(props) {
  console.log(props.books);
  if (props.books.items) {
    return (
      <ul>
        {props.books.items.map((item) => {
          return <Item result={item} />;
        })}
      </ul>
    );
  } else return null;
}
