import { useState } from "react";

const JustifyContent = ({ axis }) => {
  const [JustifyContentVal, setJustifyContentVal] = useState("justify-start");
  const changeJustify = (e) => {
    setJustifyContentVal(e.target.value);
  };
  return (
    <div className="flex border p-2 rounded-lg flex-col gap-2">
      <div
        className={`flex ${
          axis === "column" ? "flex-col" : "flex-row"
        } ${JustifyContentVal} border p-1 ${
          axis === "column" ? "h-[400px]" : ""
        } [&>*]:p-4 [&>*]:bg-emerald-700 [&>*]:border bg-darkButtonUnimportantColor rounded-md [&>*]:border-white [&>*]:text-white [&>*]:text-2xl [&>*]:rounded-md`}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className="flex justify-between items-center px-2">
        <select
          defaultValue={"justify-start"}
          className="p-1 rounded-md text-white"
          onChange={changeJustify}
        >
          <option value={"justify-start"}>flex-start</option>
          <option value={"justify-end"}>flex-end</option>
          <option value={"justify-center"}>center</option>
          <option value={"justify-between"}>space-between</option>
          <option value={"justify-around"}>space-around</option>
          <option value={"justify-evenly"}>space-evenly</option>
        </select>
        <div className="font-bold border border-orange-500 rounded-lg p-1">
          flex-direction: {axis}
        </div>
      </div>
    </div>
  );
};
export default JustifyContent;
