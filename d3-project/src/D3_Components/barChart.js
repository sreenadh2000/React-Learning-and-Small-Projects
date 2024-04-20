import { useRef, useState, useEffect } from "react";

import { select, scaleLinear, scaleBand, axisBottom, axisRight } from "d3";

export default function BarChart() {
  const [data, setData] = useState([70, 50, 20, 70, 30, 90, 34]);
  const svgRef = useRef();

  // Intially it will render the data ////////
  useEffect(() => {
    const svg = select(svgRef.current);
    /// Scale Genarator /////////
    const xScale = scaleBand()
      .domain(data.map((val, index) => index))
      .range([0, 300])
      .padding(0.5);
    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);
    //// Bottom and Right Axis Generator //////////
    const axisBottomVal = axisBottom(xScale).ticks(data.length);
    const axisRightVal = axisRight(yScale);
    svg
      .select(".x-Axis")
      .style("transform", "translateY(150px)")
      .call(axisBottomVal);
    svg
      .select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(axisRightVal);

    //// Creating the 'Bar' class with rect element /////
    const colorScale = scaleLinear()
      .domain([0, 75, 150])
      .range(["green", "orange", "red"]);
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")

      .attr("transform", "scale(1,-1)")
      .attr("x", (val, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => 150 - yScale(value));
  }, [data]);

  return (
    <div className="barChart">
      <svg className="barSvg" ref={svgRef}>
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
      <br />
      <button
        onClick={() => {
          setData(data.map((val) => val - 5));
        }}
      >
        Change the colors -5
      </button>
    </div>
  );
}
