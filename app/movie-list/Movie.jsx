import Link from 'next/link';
import Image from 'next/image';

export default function Movie({ title, id, poster_path, release_date }) {
    const img_prefix = "https://image.tmdb.org/t/p/original";
    // console.log(poster_path);

    return (
        <Link href={`movie-list/${id}`} className='p-4 my-2 flex flex-col items-center text-center justify-between'>
            <h1>{title}</h1>
            <h2>Release date: {release_date}</h2>

            <Image src={img_prefix + poster_path}
                width={300} height={300} alt={title} loading="lazy"></Image>
        </Link>
    )
}