"use client"

import { ResponsiveBar } from '@nivo/bar';

export default function ChartCard({children,title,total}){
    const data = [
    { month: 'Jan', uv: 400 },
    { month: 'Feb', uv: 300 },
    { month: 'Mar', uv: 500 },
    ];
    const keys = ['uv'];
    return (
        <div className="rounded-lg border-2 border-fifth p-6 bg-white flex flex-col gap-2 col-span-2">
            <div className="flex gap-2 items-center">
                {children}
                <p>{title}</p>
            </div>
            <p className="text-3xl">{total}</p>
            <div className="h-64 w-full">
                <ResponsiveBar
                    data={data}
                    keys={keys}
                    indexBy="month"
                    colors="#887CFD"
                    enableGridY={true}
                    labelSkipWidth={9999}   // Effectively disables labels
                    labelSkipHeight={9999}
                    margin={{ top: 32, right: 32, bottom: 32, left: 32 }}
                />
            </div>
        </div>
    )
}