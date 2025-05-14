import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/pages/Dashboard/Dashboard";
import FlexWrapper from "@/components/Wrappers/FlexWrapper";

export const metadata = {
  title: "Markety",
  icons: "./markety.svg"
};

export default function Home(){
  return (
    <FlexWrapper>
      <Sidebar/>
      <Dashboard/>
    </FlexWrapper>
  )
}