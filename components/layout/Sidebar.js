import { Squares2X2Icon } from '@heroicons/react/20/solid'
import { ChartBarIcon } from '@heroicons/react/20/solid'
import { MegaphoneIcon } from '@heroicons/react/20/solid'
import { Cog6ToothIcon } from '@heroicons/react/20/solid'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/20/solid'
import { UserIcon } from '@heroicons/react/20/solid'

import SidebarItem from './SidebarItem'


export default function Sidebar(){
    return (
        <div className="flex flex-col w-76 h-screen border-r-2 border-fifth">
            <a href="" className="flex items-center gap-2 border-b-2 border-fifth w-full p-4">
                <img src="./markety.svg" className="w-8 h-8"/>
                <h1 className="text-2xl font-bold text-first">Markety</h1>
            </a>
            <div className="flex flex-col p-2 border-b-2 border-fifth">
                <SidebarItem text="Dashboard" href="">
                    <Squares2X2Icon className='w-4'/>
                </SidebarItem>
                <SidebarItem text="Analytics" href="">
                    <ChartBarIcon className='w-4'/>
                </SidebarItem>
                <SidebarItem text="Ads" href="">
                    <MegaphoneIcon className='w-4'/>
                </SidebarItem>
            </div>
            <div className="flex flex-col p-2 border-b-2 border-fifth">
                <SidebarItem text="Help" href="">
                    <QuestionMarkCircleIcon className='w-4'/>
                </SidebarItem>
                <SidebarItem text="Pricing" href="">
                    <EllipsisHorizontalCircleIcon className='w-4'/>
                </SidebarItem>
                <SidebarItem text="Settings" href="">
                    <Cog6ToothIcon className='w-4'/>
                </SidebarItem>
                <SidebarItem text="Account" href="">
                    <UserIcon className='w-4'/>
                </SidebarItem>
            </div>
        </div>
    )
}