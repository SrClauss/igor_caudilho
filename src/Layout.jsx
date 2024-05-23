export default function Layout({ children }) {
    return (
        <div className="container bg-white shadow-lg shadow-black">
            <div className="flex w-full justify-around md:justify-start">


            <img src="src/assets/igor_caudilho.png" alt="vite logo" />
            </div>
            <div>
                {children}
            </div>

        </div>
    )
}

