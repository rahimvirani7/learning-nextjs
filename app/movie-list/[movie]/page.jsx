import Image from 'next/image';

export default async function MovieInfo({ params }) {
    const { movie } = params;
    const img_prefix = "https://image.tmdb.org/t/p/original";
    const urlToFetch = `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
    const response = await fetch(urlToFetch);
    const data = await response.json();

    return (
        <div className='m-4'>
            <h1 className="text-2xl">{data.title}</h1>
            <h2 className="text-lg">{data.release_date}</h2>
            <h2>Runtime: {data.runtime} minutes</h2>
            <h2 className="text-sm bg-green-600 inline-block my-2 p-2"> {data.status} </h2>
            <Image alt={data.title} width={800} height={800} className="my-12 w-full" src={img_prefix + data.backdrop_path} />
        </div>
    )
}


// need to understand purpose for this function 👇
export async function generateStaticParams() {
    const urlToFetch = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
    const response = await fetch(urlToFetch);
    const data = await response.json();

    return data.results.map((movie) => {
        return {
            params: {
                movie: movie.id.toString()
            }
        }
    });
}