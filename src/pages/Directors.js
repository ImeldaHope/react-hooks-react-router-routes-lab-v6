import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Article from "../components/Article";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(res => res.json())
      .then(director => setDirectors(director))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => <Article key={director.id} data={director}/>)}
      </main>
    </>
  );
};

export default Directors;
