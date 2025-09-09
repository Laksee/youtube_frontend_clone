import Link from "next/link"


export function VideoCard(props:any){
    return <div className="pt-6 cursor-pointer">
        <div>
            <a href="https://www.youtube.com/shorts/IayyQZHWtMQ" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-4xl w-250 h-60" src={props.thumbImage}></img>
                </a>
        </div>
        <div className="grid grid-cols-18 pt-3">
            <div className="col-span-2 pl-6">
                <img className="rounded-full w-11 h-10" src={props.image}></img>
            </div>
            <div className="col-span-16 pl-5">
                <div className="flex justify-between">
                    <div>
                    <div className="flex justify-between">
                        {props.title}
                    </div>
                    <div className="flex text-gray-400 text-base">
                        {props.author}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 pl-1">
                        <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>

                    </div>
                    <div className="text-gray-400 text-base">
                            {props.views} . {props.time}
                    </div>
                    </div>
                    <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
}