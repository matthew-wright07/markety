import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/pages/Dashboard";
import FlexWrapper from "@/components/wrappers/FlexWrapper";

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