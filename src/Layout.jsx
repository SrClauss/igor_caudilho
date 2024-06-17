
export default function Layout({ children }) {
    return (
        <div className="container bg-white shadow-lg shadow-black">
            <div className="flex w-full justify-around md:justify-start">


            <img src="/igor_caudilho.png" alt="igor caudilho" />
            </div>
            <div>
                {children}
            </div>
            <div className="flex w-full justify-around md:justify-end py-10 px-10">Todos direitos reservados &reg;</div>

        </div>
    )
}

