import { BookmarkIcon } from "@heroicons/react/20/solid";

export default function Campains({children,title}){
    return (
        <div className="border-2 border-fifth p-6 rounded-lg bg-white flex flex-col gap-4 col-span-2">
            <div className="flex gap-2 items-center">
                {children}
                <p>{title}</p>
            </div>
            <div className="flex flex-col">
                <a href="" className="flex gap-2 hover:bg-background rounded-lg py-2">
                    <BookmarkIcon className="w-6 h-6 p-1 rounded-lg"/>
                    <p>Item 1</p>
                </a>
                <a href="" className="flex gap-2 hover:bg-background rounded-lg py-2">
                    <BookmarkIcon className="w-6 h-6 p-1 rounded-lg"/>
                    <p>Item 2</p>
                </a>
                <a href="" className="flex gap-2 hover:bg-background rounded-lg py-2">
                    <BookmarkIcon className="w-6 h-6 p-1 rounded-lg"/>
                    <p>Item 3</p>
                </a>
            </div>
        </div>
    )
}