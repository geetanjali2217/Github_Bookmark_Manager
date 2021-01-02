import React, { useState } from "react";
import List from "./List";
import Manager from "./Manager";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [responceData, setResponceData] = useState([]);
  const [manager, setManager] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("repo");

  function searchByUser() {
    if (search) {
      const url = "https://api.github.com/users/";
      axios
        .get(url + search + "/repos")
        .then((res) => setResponceData(res.data));
    }
  }

  function searchByRepo() {
    if (search) {
      const url = "https://api.github.com/search/repositories?q=";
      axios.get(url + search).then((res) => setResponceData(res.data.items));
    }
  }

  function addToManager(res) {
    setManager([...manager, res]);
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="head">GitHub Bookmark Manager</h1>
      </div>

      <Manager data={manager} />

      <div className="content">
        <label htmlFor="link">
          <b>Enter a GitHub Username/Repository name</b>
        </label>
        <br />
        <input
          type="text"
          name="link"
          onChange={(event) => setSearch(event.target.value)}
        />
        <br />
        <div className="input-group mb-3">
          <button
            onClick={searchBy === "repo" ? searchByRepo : searchByUser}
            className="btn btn-outline-secondary"
            type="button"
          >
            Search
          </button>
          <select
            value={searchBy}
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
            onChange={(event) => setSearchBy(event.target.value)}
          >
            <option value="repo">Repo</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>
      <ol>
        {responceData.map((repo) => (
          <List key={repo.id} data={repo} addToManager={addToManager} />
        ))}
      </ol>
    </div>
  );
}
