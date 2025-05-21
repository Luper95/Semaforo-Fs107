import React from "react";

//include images into your bundle
import { TrafficLightComponent } from "./TrafficLightComponent";

//create your first component
const Home = () => {
  return (
    <div>
      <div className="py-5">
        <TrafficLightComponent />
      </div>
    </div>
  );
};

export default Home;
