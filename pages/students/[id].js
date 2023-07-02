import '@/app/globals.css';
import Head from 'next/head';
import data from '@/sample.json';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
  });

export default function PageOne({ dataById }) {
    return (
        <>
            <Head>
                <title>Student Info</title>
            </Head>
            <main className={`flex min-h-screen flex-col items-center p-24 montserrat.className ${montserrat.className}`}>
                <p className='bg-gray-900 p-2 text-second'>Hello this is student info for:</p>
                <div>
                    <div>
                        <p className='inline-block mx-2'>Name:</p>
                        <p className='inline-block mx-2'>{dataById.name}</p>
                        <p className='inline-block mx-2'>{dataById.age}</p>
                        <p className='inline-block mx-2'>{dataById.isPromoted ? 'Promoted' : 'Fail'}</p>
                    </div>
                </div>
            </main>
        </>

    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id - executes First
    const dataIds = data.map((item) => {
        return {
            params: {
                id: item.id.toString(),
            }
        }
    });
    // console.log("allIds", dataIds);
    return {
        paths: dataIds,
        fallback: false,
    };

}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id - executes after getStaticPaths
    console.log("id passed", params.id);

    const dataById =  
    data.find((obj) => {
        return obj.id == params.id;
    });

    // console.log("dBI", dataById);

    return {
        props: {
            dataById,
        },
    };
}