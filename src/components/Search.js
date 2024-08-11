import React from 'react';

const Search = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or model..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
