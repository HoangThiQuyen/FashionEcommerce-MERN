// *** components ***
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featured-info/FeaturedInfo";
import WidgetSm from "../../components/widget-sm/WidgetSm";
import WidgetLg from "../../components/widget-lg/WidgetLg";

// *** css ***
import "./Home.css";

// *** data ***
import { userData } from "../../dummyData";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        grid={true}
        title="User Analytics"
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
