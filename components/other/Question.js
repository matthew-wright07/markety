export default function Question({children,text,title}){
    return (
        <a href="" className="rounded-lg border-2 border-fifth p-6 bg-white flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                {children}
                <p>{title}</p>
            </div>
        </a>
    )
}