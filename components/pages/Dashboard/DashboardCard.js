export default function DashboardCard({children,total,title}){
    return (
        <div className="rounded-lg border border-fifth p-6 bg-white flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                {children}
                <p>{title}</p>
            </div>
            <p className="text-3xl">{total}</p>
        </div>
    )
}