import React from "react";

export default function Item(props) {
  return (
    <li>
      {props.result.volumeInfo.title} by{" "}
      {JSON.stringify(props.result.volumeInfo.authors)} is{" "}
      {props.result.volumeInfo.description}
    </li>
  );
}
