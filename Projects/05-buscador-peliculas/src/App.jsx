import "./App.css";
//import { useRef } from "react";
import { useMovies } from './assets/hooks/useMovies'
import { Movies } from './assets/components/Movies'


function App() {

const {movies} = useMovies()

const handleSubmit = (event) => {
  event.preventDefault()
  const{ query }= Object.fromEntries(new window.FormData(event.target)) 
  console.log(query)
}
  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name='query' placeholder="Avenger, Star Wars, Paw Patrol ... " />

          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
    <Movies movies={movies} /> 
      </main>
    </div>
  );
}

export default App;
