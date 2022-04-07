import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const EchartsBar = ({ title, xData, YData, style }) => {
  // 使用ref获取dom
  const domRef = useRef();
  const chartInit = () => {
    const myChart = echarts.init(domRef.current);

    // 绘制图表
    myChart.setOption({
      title: {
        text: title,
      },
      tooltip: {},
      xAxis: {
        data: xData,
      },
      yAxis: {
        data: YData,
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
      textStyle: style,
    });
  };

  useEffect(() => {
    chartInit();
  });

  return (
    <div>
      {/* 准备一个挂载节点 */}
      <div ref={domRef} style={{ width: "300px", height: "200px" }}></div>
    </div>
  );
};

export default EchartsBar;
