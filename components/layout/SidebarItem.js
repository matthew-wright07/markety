export default function SidebarItem({children,text,href}){
    return (
    <a href={href} className="flex items-center gap-1 hover:bg-background p-2 rounded-lg">
        {children}
        <p className='font-bold'>{text}</p>
    </a>
    )
}