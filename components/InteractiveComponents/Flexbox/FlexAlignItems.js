import { useState } from "react";
import ArrowHorizontal from "../arrow-horizontal";

const AlignItems = ({ axis }) => {
  const [alignItemsVal, setAlignItemsVal] = useState("items-stretch");
  const changeAlign = (e) => {
    setAlignItemsVal(e.target.value);
  };
  const [JustifyContentVal, setJustifyContentVal] = useState("justify-start");
  const changeJustify = (e) => {
    setJustifyContentVal(e.target.value);
  };
  return (
    <div className="flex border p-2   rounded-lg flex-col gap-2 relative">
      <ArrowHorizontal text={"Main Axis"} />
      <div
        className={`flex ${
          axis === "column" ? "flex-col" : "flex-row"
        } ${alignItemsVal} ${JustifyContentVal} bg-darkButtonUnimportantColor rounded-md [&>*]:text-white border p-1 h-[400px]  [&>*]:p-4 [&>*]:bg-emerald-700 [&>*]:border [&>*]:border-white [&>*]:text-2xl [&>*]:rounded-md`}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className="flex justify-between items-center px-2">
        <div>
          <div className="text-sm">Align-Items</div>
          <select
            defaultValue={"items-stretch"}
            className="p-1 rounded-md text-white"
            onChange={changeAlign}
          >
            <option value={"items-start"}>flex-start</option>
            <option value={"items-end"}>flex-end</option>
            <option value={"items-center"}>center</option>
            <option value={"items-stretch"}>stretch</option>
            <option value={"items-baseline"}>baseline</option>
          </select>
        </div>
        <div>
          <div className="text-sm">Justify-Content</div>
          <select
            defaultValue={"justify-start"}
            className="p-1 rounded-md  text-white"
            onChange={changeJustify}
          >
            <option value={"justify-start"}>flex-start</option>
            <option value={"justify-end"}>flex-end</option>
            <option value={"justify-center"}>center</option>
            <option value={"justify-between"}>space-between</option>
            <option value={"justify-around"}>space-around</option>
            <option value={"justify-evenly"}>space-evenly</option>
          </select>
        </div>
        <div className="font-bold border border-orange-500 rounded-lg p-1">
          flex-direction: {axis}
        </div>
      </div>
    </div>
  );
};
export default AlignItems;
