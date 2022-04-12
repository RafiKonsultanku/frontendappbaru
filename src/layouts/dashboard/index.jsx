import React from "react";
import "../dashboard/style/dashboard.css";
import FeaturedCard from "../dashboard/components/FeaturedCard";
import FeaturedInfo from "../dashboard/components/FeaturedInfo";
import Activity from "../dashboard/components/Activity";
import Information from "../dashboard/components/Information";

export default function index() {
  return (
    <div className="dashboard">
      <FeaturedCard />
      <FeaturedInfo />
      <div className="dashboardWidget">
        <Activity />
        <Information />
      </div>
    </div>
  );
}
