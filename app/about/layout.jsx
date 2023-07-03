import '@/app/globals.css'

export default function AboutLayout({children}) {
    return (
        <section>
            <nav>
                <div>This is the about nav component.</div>
            </nav>

            {children}
        </section>
    )
}