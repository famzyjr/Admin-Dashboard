import "./chartBox.scss";
import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type Props ={
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage:  number;
  chartData: object[];
}

function ChartBox(props: Props) {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <img src="/user.svg" alt="" />
        <span>{props.title}</span>
        <h1>{props.number}</h1>
        <Link to="/" style={{color:props.color}} >View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={props.chartData}>
              <Tooltip
              contentStyle={{background:"transparent", border:"none"}}
              labelStyle={{display:"none"}}
               position={{x:10, y: 60,}}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}

              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div className="percentage" style={{color: props.percentage<0 ? "tomato" : "limegreen" }} >{props.percentage}%</div>
        <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
