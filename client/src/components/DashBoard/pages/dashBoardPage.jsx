import SmallCard from "../components/smCard";

const DashBoardPage = () => {
  return (
    <>
      <h1 className="text-gray-700 font-bold text-lg">Last Month status </h1>
      <p className="font-thin"> Note: this test</p>
      <div className="flex gap-2">
        <SmallCard title="users" value={20} />
        <SmallCard title="active users" value={-5} />
        <SmallCard title="sales" value={3} />
      </div>
    </>
  );
};

export default DashBoardPage;
