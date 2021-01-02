import React from "react";

export default function Manager(props) {
  const { data } = props;
  return data.map((repo) => (
    <div key={repo.id}>
      <div>Name: {repo.name}</div>
      <span>Url:</span>
      <a href={repo.url} rel="noreferrer" target="_blank">
        {repo.url}
      </a>
    </div>
  ));
}
