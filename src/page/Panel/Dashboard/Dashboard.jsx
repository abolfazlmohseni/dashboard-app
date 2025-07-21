import BottomCards from "./components/bottomCards";
import Card1 from "./components/Card1/Card1";
import MiniCard from "./components/MiniCard";

const Dashboard = () => {
  return (
    <div className="flex mt-10 flex-col w-full">
      <MiniCard />
      <Card1 />
      <BottomCards
        data={[12, 24, 31, 14, 45, 56, 77, 88, 99, 10, 47, 55, 12]}
        titel={"New Users"}
        content={"1,501m"}
      />
    </div>
  );
};

export default Dashboard;
