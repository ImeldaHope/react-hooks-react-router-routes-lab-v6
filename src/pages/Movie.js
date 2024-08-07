import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
    const [movie, setMovie] = useState('');

    const params = useParams();
    const id = params.id;

    useEffect(() => {
      fetch(`http://localhost:4000/movies/${id}`)
        .then(res => res.json())
        .then(aMovie => setMovie(aMovie))
        .catch(error => console.error(error))
    },[id])
      
    if(!movie) return <p>Loading movie info ...</p>
    
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        {movie.genres.map((genre, index) => <span key={index}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
