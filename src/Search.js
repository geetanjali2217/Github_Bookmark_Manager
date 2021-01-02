import React from "react";
import App from "./App";

export default function Search() {
  return (
    <>
      <h3>
        Repositories
        <span>
          <button>Add</button>
        </span>
      </h3>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Submit</button>
        <br />
        <label htmlFor="Repo">Repo</label>
        <input type="checkbox" name="Repo" />
        <label htmlFor="User">User</label>
        <input type="checkbox" name="User" />
      </div>

      <div>
        <ol>{list.map((val) => {})}</ol>
      </div>
    </>
  );
}
