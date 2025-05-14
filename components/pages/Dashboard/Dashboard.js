import { EyeIcon, RocketLaunchIcon, TvIcon } from "@heroicons/react/20/solid"
import {CircleStackIcon} from "@heroicons/react/20/solid"
import {ChartPieIcon} from "@heroicons/react/20/solid"
import {BoltIcon} from "@heroicons/react/20/solid"

import DashboardCard from "./DashboardCard"
import BarChartCard from "./BarChartCard"
import PieChartCard from "./PieChartCard"

export default function Dashboard(){
    return (
        <div className="bg-background w-full h-[100vh] flex flex-col p-12 gap-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                <DashboardCard title="Impressions" total="3,872">
                    <EyeIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </DashboardCard>

                <DashboardCard title="Clicks" total="492">
                    <BoltIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </DashboardCard>

                <DashboardCard title="Revenue" total="$4,261">
                    <CircleStackIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </DashboardCard>
                <BarChartCard title="ROI" total="5.6">
                    <ChartPieIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </BarChartCard>
                <PieChartCard title="Devices" total="452">
                    <TvIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </PieChartCard>
                <BarChartCard title="CPC" total="2.4">
                    <RocketLaunchIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </BarChartCard>
            </div>
            <div className="rounded-lg border border-fifth p-6 bg-white flex flex-col gap-2">

            </div>
        </div>
    )
}