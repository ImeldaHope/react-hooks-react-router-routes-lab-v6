import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Article from "../components/Article";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then(res => res.json())
      .then(actor => setActors(actor))
      .catch(error => console.error(error))
  },[])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => <Article key={actor.id} data={actor}/>)}
      </main>
    </>
  );
};

export default Actors;
