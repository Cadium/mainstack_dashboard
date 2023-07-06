import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Spinner from "../spinner";
import { GraphContainer } from "./index.style";

function convertViewsToObject(views) {
  const result = [];

  for (const date in views) {
    const uv = views[date];
    const pv = result.length === 0 ? uv : uv + result[result.length - 1].pv;
    const name = format(new Date(date), "dd MMM");
    result.push({ name, pv, uv });
  }

  return result;
}

const Graph = () => {
  const [data, setData] = useState([]);
  const [theData, setTheData] = useState(undefined);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    axios
      .get("https://fe-task-api.mainstack.io/")
      .then((result) => {
        setData(result.data);
        setTheData(convertViewsToObject(result.data.graph_data.views));
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!theData ? (
        <Spinner data-testid="spinner" />
      ) : (
        <GraphContainer>
          <h5 style={{ marginBottom: "0.5rem" }}>Page Views</h5>
          <p style={{ marginBottom: "0.5rem" }}>All time</p>
          <h1 style={{ marginBottom: "1rem" }}>500</h1>
          <ResponsiveContainer
            width={width > 1072 ? "100%" : "95%"}
            height="100%"
          >
            <AreaChart
              data={theData}
              margin={{ top: 10, right: 0, left: -30, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="50%" stopColor="#ff5403" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#ff5403" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="linear"
                dataKey="uv"
                stroke="#ff5403"
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </GraphContainer>
      )}
    </>
  );
};

export default Graph;
