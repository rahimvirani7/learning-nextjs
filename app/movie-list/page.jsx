import "@/app/globals.css";
import Movie from "./Movie";

export default async function PageOne() {
  // api ref: https://www.themoviedb.org/settings/api
  // ref: https://developer.themoviedb.org/reference/tv-series-popular-list
  const tmbdData = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  const res = await tmbdData.json();
  // console.log("data", res);

  return (
    <main className="min-h-screen flex-col items-center p-12">
      <div className="bg-gray-900 p-2 text-second">TMDB Page</div>
      <div className="grid gap-6 grid-cols-fluid justify-content">
        {res.results.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          );
        })}
      </div>
    </main>
  );
}
