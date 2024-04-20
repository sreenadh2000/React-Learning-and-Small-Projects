import { useRef, useState, useEffect } from "react";

import {
  select,
  line,
  curveCardinal,
  scaleLinear,
  axisBottom,
  axisRight,
} from "d3";

export default function LineChart() {
  const [data, setData] = useState([0, 50, 20, 70, 30, 90, 34]);
  const svgRef = useRef();

  // Intially it will render the data ////////
  useEffect(() => {
    const svg = select(svgRef.current);
    // Line Generator /////
    const myLine = line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(curveCardinal);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);
    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const axisBottomVal = axisBottom(xScale).ticks(data.length);
    svg
      .select(".x-Axis")
      .style("transform", "translateY(150px)")
      .call(axisBottomVal);
    const axisRightVal = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(axisRightVal);

    svg
      .selectAll(".line")
      .data(data)
      .join("path")
      .attr("class", "line")
      .attr("d", myLine(data))
      .attr("stroke", "blue")
      .attr("fill", "none");

    // console.log([data]);
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}>
        <g className="x-Axis"></g>
        <g className="y-axis"></g>
      </svg>
      <br /> <br /> <br />
      <button
        onClick={() => {
          setData(data.map((val) => val + 5));
        }}
      >
        Update to 5Values
      </button>
    </div>
  );
}
