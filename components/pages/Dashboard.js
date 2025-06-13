import { BanknotesIcon, EyeIcon, MegaphoneIcon, TvIcon, BoltIcon, ArchiveBoxIcon, PercentBadgeIcon, BuildingStorefrontIcon, QuestionMarkCircleIcon, UserGroupIcon, BellAlertIcon, AcademicCapIcon, ChatBubbleOvalLeftIcon, ClockIcon,InformationCircleIcon } from "@heroicons/react/20/solid"

import DashboardCard from "../other/DashboardCard"
import BarChartCard from "../other/BarChartCard"
import PieChartCard from "../other/PieChartCard"
import Campains from "../other/Campaigns"
import ByLocation from "../other/ByLocation"
import Question from "../other/Question"

export default function Dashboard(){
    return (
        <div className="bg-background w-full flex flex-col px-12 py-5 gap-4 overflow-y-scroll h-screen">
            <div className="flex justify-between w-full items-center">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <InformationCircleIcon className="w-7 h-7 p-1 rounded-lg hover:cursor-pointer"/>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <DashboardCard title="Impressions" total="3,872">
                    <EyeIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </DashboardCard>

                <DashboardCard title="Clicks" total="492">
                    <BoltIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </DashboardCard>

                <DashboardCard title="Conversion Rate" total="1.2%">
                    <PercentBadgeIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </DashboardCard>

                <DashboardCard title="Cost" total="$342">
                    <BanknotesIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </DashboardCard>

                <PieChartCard title="Devices" total="452">
                    <TvIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </PieChartCard>

                <BarChartCard title="CPC" total="$2.4">
                    <MegaphoneIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </BarChartCard>

                <Campains title="Campaigns">
                    <ArchiveBoxIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </Campains>

                <ByLocation title="Locations">
                    <BuildingStorefrontIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </ByLocation>

                <BarChartCard title="Bounce Rate" total="40%">
                    <BellAlertIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </BarChartCard>

                <PieChartCard title="Gender" total="300">
                    <UserGroupIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </PieChartCard>
                
                <Question title="How To">
                    <QuestionMarkCircleIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </Question>

                <Question title="Frequently Asked">
                    <AcademicCapIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </Question>

                <Question title="Troubleshooting">
                    <ClockIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </Question>

                <Question title="Need More Help">
                    <ChatBubbleOvalLeftIcon className="w-6 h-6 bg-background p-1 rounded-lg"/>
                </Question>

            </div>
        </div>
    )
}