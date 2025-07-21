import { LineChart } from "@mui/x-charts";
import Selector from "../../../../../components/Selector";

const BottomCards = ({ data, titel, content }) => {
  return (
    <div>
      <div>
        <p>{titel}</p>
        <Selector item={["Today", "This Week", "This Month"]}></Selector>
      </div>
      <div>
        <p>{content}</p>
        <LineChart
          axisHighlight={{ x: "none", y: "none" }}
          xAxis={[
            {
              data: [
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
              ],
              scaleType: "point",
              position: "none",
            },
          ]}
          yAxis={[
            {
              position: "none",
            },
          ]}
          series={[
            {
              data: data,
              color: "#E45851",
              area: true,
              showMark: false,
            },
          ]}
          height={80}
        />
      </div>
    </div>
  );
};

export default BottomCards;
