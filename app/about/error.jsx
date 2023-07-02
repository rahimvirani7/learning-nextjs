"use client"

export default function Error({ error, reset }) {
    return(
        <div>
            Page is not loading: {error.message}
            <button onClick={() => reset()}>Reload</button>     
        </div>
    )
}