import { useState } from "react";
import ArrowHorizontal from "../arrow-horizontal";
import ArrowVertical from "../arrow-vertical";

const FlexDirectionExample = () => {
  const [axis, setAxis] = useState("horizontal");
  const ChangeAxis = () => {
    setAxis((prev) => (prev === "horizontal" ? "vertical" : "horizontal"));
  };
  return (
    <div className="border p-4  rounded-md gap-4">
      <div className="flex items-center">
        <button onClick={ChangeAxis} className="border p-2 mb-2 rounded-lg">
          تغيير الMain Axis
        </button>
      </div>
      <div
        className={`border border-red-300 p-4 rounded-md flex gap-4 max-w-full relative ${
          axis === "horizontal" ? "" : "flex-col"
        }`}
      >
        {axis === "horizontal" && <ArrowHorizontal text={"Main Axis"} />}
        {axis === "vertical" && <ArrowVertical text={"Main Axis"} />}
        <div className="w-[200px] h-[100px] bg-green-700"></div>
        <div className="w-[200px] h-[100px] bg-green-700"></div>
        <div className="w-[200px] h-[100px] bg-green-700"></div>
      </div>
    </div>
  );
};
export default FlexDirectionExample;
