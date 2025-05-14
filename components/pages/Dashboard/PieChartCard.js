"use client"

import { ResponsivePie } from '@nivo/pie';

export default function ChartCard({children,title,total}){
    const data = [
    { id: 'Desktop', value: 400 },
    { id: 'Mobile', value: 300 },
    { id: 'Tablet', value: 500 },
    ];
    return (
        <div className="rounded-lg border border-fifth p-6 bg-white flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                {children}
                <p>{title}</p>
            </div>
            <p className="text-3xl">{total}</p>
            <div className="h-64 w-full">
                <ResponsivePie
                    data={data}
                    colors={["#887CFD", "#4896FE", "#16C8C7"]}
                    margin={{ top: 32, right: 32, bottom: 32, left: 32 }}
                    enableArcLabels={false}
                />
            </div>
        </div>
    )
}