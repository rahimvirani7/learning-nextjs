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


// below fn serves as an implementation for getStaticPaths. It is responsible for generating the dynamic paths that will be pre-rendered at build time.
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

/*
If we remove the generateStaticParams function (which serves as the implementation for getStaticPaths) from the above component, the dynamic paths for pre-rendering would not be generated.

Without the getStaticPaths function, Next.js would not know the possible dynamic paths for the MovieInfo page during the static site generation (SSG) process. As a result, it would not generate separate HTML files for each dynamic path, and the page would not be pre-rendered for those paths.

The consequences of removing the generateStaticParams function would be as follows:

Loss of static site generation benefits: Without the dynamic paths being generated, the MovieInfo page would not be pre-rendered at build time. Instead, it would be rendered either on the server side or on each client request, depending on how it is used.

Possible errors: If the MovieInfo page is accessed with a specific dynamic path that was not pre-rendered, Next.js may return a 404 error or fallback to rendering the page on the server side or client side, depending on the configuration.

Inefficient rendering: The absence of static site generation for the MovieInfo page would result in slower initial loading times for the page since it would not have the benefit of being pre-rendered and served as a static HTML file.

To ensure proper dynamic path generation and static site generation benefits, it is recommended to include the getStaticPaths function in conjunction with getStaticProps when using dynamic routes in Next.js.

NOTE: Run npm run build with/without the function to see changes in the prod build.
 */