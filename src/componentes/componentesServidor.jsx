import React, { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      if (searchTerm) {
        url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, [searchTerm, page]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by character name"
          onChange={handleSearch}
        />
      </div>
      <div className="characters-container">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default App;
