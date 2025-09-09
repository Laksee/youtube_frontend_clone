import { SearchBar } from "./Searchbar"



export const Appbar = () => {
    return <div className="flex justify-between pt-3">
        <div>
            <div className="flex">
                <div
                className="relative ml-9 overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                <img
                    src="lines.png"
                    className="size-18 m-1"
                    alt="Louvre" />
                <a href="#!">
                    <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
            </div>
                <img className="w-45 pt-1" src="youtube.jpg"></img>
            </div>
        </div>
        <div>
                <SearchBar />
            </div>
        <div className="flex">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 mt-2 ">
                    <path strokeLinecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </div>
            <img className="rounded-full w-12 h-11 mr-5 ml-5" src="messi.jpg"></img>
        </div>
    </div>
}