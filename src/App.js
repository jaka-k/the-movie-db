import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import useFetch from "./hooks/useFetch";
import requests from "./utils/requests"

function App() {

  const {data, loading, error} = useFetch(`https://api.themoviedb.org/3${requests.fetchTrending.url}`)
  console.log(data)


  return (
    <div className="App">
      <Navbar/>
      <main className="flex max-w-7xl mx-auto py-4">
      <section className="px-4 w-1/4">   
      <Filters/>
      </section>
      <section className="px-4 w-3/4">
      {loading && <p>Loading...</p>}
      {!loading && (<Results data={data}/>)}
      {error && <p>Ups something went wrong</p>}
      </section>
      </main>
    </div>
  );
}

export default App;

// TODO:
// - infinite scrolling
// - genre selector via params
// - movie card styling (with voting score)
// - Filters card
