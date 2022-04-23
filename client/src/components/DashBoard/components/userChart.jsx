import { LineChart, Line, ResponsiveContainer,XAxis,Tooltip,CartesianGrid } from "recharts";
const UserChart = (props) => {
  return (
    <ResponsiveContainer width={props.width} aspect={3 / 1}>
      <LineChart  data={props.data}>
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default UserChart;
