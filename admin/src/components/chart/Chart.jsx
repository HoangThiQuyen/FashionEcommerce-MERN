// *** css ***
import "./Chart.css";

// *** third library
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="3 3" stroke="#e0dfdf" />}
          <XAxis dataKey="name" stroke="#5550bd" />
          <Tooltip />

          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
