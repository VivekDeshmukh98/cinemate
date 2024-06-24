
import { Card } from "../components/Card"

import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";


export const MovieList = ({apiPath,title}) => {

  const {data:movies} = useFetch(apiPath);
  const pageTitle=useTitle(title);


  return (
    <main className="pt-16  ">
     <section className="max-w-7xl mx-auto py-7 other:justify-evenly">
      <div className="flex justify-start flex-wrap"> 
      {movies.map((movie)=>(
        <Card key={movie.id} movie={movie}/>
      ))}
      </div>
     </section>
    </main>
  )
}
