import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {
  const [SearchParams]=useSearchParams();
  const queryTerm=SearchParams.get("q");

  const {data:movies} = useFetch(apiPath,queryTerm);
   useTitle(`Search Result for ${queryTerm}/cinemate`);

  return (
    <main className="pt-16  ">
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
      {movies.length===0?`No result found for the ${queryTerm}`: `Result for '${queryTerm}'`}
        </p>
      </section>
     <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap"> 
      {movies.map((movie)=>(
        <Card key={movie.id} movie={movie}/>
      ))}
      </div>
     </section>
    </main>
  )
}


