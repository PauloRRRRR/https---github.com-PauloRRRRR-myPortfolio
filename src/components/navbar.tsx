export default function Navbar() {
    return(
        <div className="flex justify-between items-center w-full h-20 px-4 fixed bg-bege-300 font-bold text-zinc-900 ">
            <div>
                <h1>Meu portfolio</h1>
            </div>
            <ul className="">
                <li>Home</li>
                <li>About me</li>
            </ul>
        </div>
    )
}