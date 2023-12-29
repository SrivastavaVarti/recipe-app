import React, { useState } from 'react';

function SearchBar({ onSearch }){
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
