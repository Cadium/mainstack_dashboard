// import custom styles
import {
  MainContainer,
  MainHeader,
  MainHeaderAnalyticText,
  MainHeaderBottom,
  MainHeaderCheckContainer,
  MainHeaderCheckText,
  MainHeaderDays,
  MainHeaderGoodText,
  MainHeaderText,
} from "./index.styles";

// import components that make up the component
import MainBottom from "../MainBottom";
import Graph from "../Graph";

// Main JSX Component
const Main = () => {
  return (
    <MainContainer>
      <MainHeaderText>Dashboard</MainHeaderText>

      <MainHeader>
        <MainHeaderGoodText>Good morning, Blessing ⛅️</MainHeaderGoodText>
        <MainHeaderCheckContainer>
          <MainHeaderCheckText>
            Check out your dashboard summary.
          </MainHeaderCheckText>
          <MainHeaderAnalyticText>View Analytics</MainHeaderAnalyticText>
        </MainHeaderCheckContainer>

        <MainHeaderBottom>
          <MainHeaderDays>1 Day</MainHeaderDays>
          <MainHeaderDays>3 Days</MainHeaderDays>
          <MainHeaderDays>7 Days</MainHeaderDays>
          <MainHeaderDays>30 Days</MainHeaderDays>
          <MainHeaderDays>All time</MainHeaderDays>
          <MainHeaderDays>Custom Date</MainHeaderDays>
        </MainHeaderBottom>
      </MainHeader>

      <div className="graph">
        <Graph />
      </div>

      <MainBottom />
    </MainContainer>
  );
};

export default Main;
