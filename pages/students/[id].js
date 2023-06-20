import '@/app/globals.css';
import Head from 'next/head';
import data from '@/sample.json';

export default function PageOne({ dataForId }) {
    return (
        <>
            <Head>
                <title>Student Info - {dataForId.name}</title>
            </Head>
            <main className='flex min-h-screen flex-col items-center p-24'>
                <p className='bg-gray-900 p-2 text-second'>Hello this is student info for:</p>
                <div>
                    <div>
                        <p className='inline-block mx-2'>Name:</p>
                        <p className='inline-block mx-2'>{dataForId.name}</p>
                        <p className='inline-block mx-2'>{dataForId.age}</p>
                        <p className='inline-block mx-2'>{dataForId.isPromoted ? 'Hooray' : 'Nope'}</p>
                    </div>
                </div>
            </main>
        </>

    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
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
    // Fetch necessary data for the blog post using params.id
    console.log("id passed", params.id);

    const dataForId =  
    data.find((obj) => {
        return obj.id == params.id;
    });

    // console.log("dFI", dataForId);

    return {
        props: {
            dataForId,
        },
    };
}