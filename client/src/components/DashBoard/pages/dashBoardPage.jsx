import SmallCard from "../components/smCard";
import UserChart from "../components/userChart";

const DashBoardPage = () => {
  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 2500 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 1000 },
    { name: "Jun", sales: 3000 },
    { name: "Jul", sales: 4321 },
    { name: "Aug", sales: 1324 },
    { name: "Sep", sales: 8120 },
    { name: "Oct", sales: 4000 },
    { name: "Nov", sales: 8412 },
    { name: "Dec", sales: 4000 },
  ];
  return (
    <>
      <div className="p-4 shadow rounded-md">
        <h2 className="text-gray-700 font-bold text-lg">Last Month status </h2>
        <p className="font-thin mb-4"> Note: this test</p>
        <div className="flex gap-2 justify-around">
          <SmallCard title="users" value={20} />
          <SmallCard title="active users" value={-5} />
          <SmallCard title="revenu" value={3} />
          <SmallCard title="total sales" value={30} />
        </div>
      </div>
      <div className="p-4 shadow rounded-md mt-8">
      <h2 className="text-gray-700 font-bold text-lg">Sales Analytics</h2>
      <div className="flex justify-center">
        <UserChart data={data} width="80%" />
      </div>
      </div>
    </>
  );
};

export default DashBoardPage;
