import { MapIcon } from "@heroicons/react/20/solid";

export default function ByLocation({children,title}){
    return (
        <div className="rounded-lg border-2 border-fifth p-6 bg-white flex flex-col gap-4 col-span-2">
            <div className="flex gap-2 items-center">
                {children}
                <p>{title}</p>
            </div>
            <div className="flex flex-col">
                <a href="" className="flex gap-2 hover:bg-background rounded-lg py-2">
                    <MapIcon className="w-6 h-6 p-1 rounded-lg"/>
                    <p>United States</p>
                </a>
                <a href="" className="flex gap-2 hover:bg-background rounded-lg py-2">
                    <MapIcon className="w-6 h-6 p-1 rounded-lg"/>
                    <p>Germany</p>
                </a>
                <a href="" className="flex gap-2 hover:bg-background rounded-lg py-2">
                    <MapIcon className="w-6 h-6 p-1 rounded-lg"/>
                    <p>Russia</p>
                </a>
            </div>
        </div>
    )
}