import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(city);
  };

  return (
    <div className="app">
      <h1>🌤️ Weather Finder</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {search && <Weather city={search} />}
    </div>
  );
}

export default App;
