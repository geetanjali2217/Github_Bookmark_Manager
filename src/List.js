import React from "react";

export default function List(props) {
  const { data, addToManager } = props;

  return (
    <>
      <div>Name: {data.name}</div>
      <div>Url: {data.html_url}</div>
      <button
        onClick={() =>
          addToManager({ id: data.id, name: data.name, url: data.html_url })
        }
      >
        add repo
      </button>
    </>
  );
}
