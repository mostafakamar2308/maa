import { useState } from "react";

const JustifyContent = () => {
  const [JustifyContentVal, setJustifyContentVal] = useState("justify-start");
  const changeJustify = (e) => {
    setJustifyContentVal(e.target.value);
  };
  return (
    <div className="flex border p-2 rounded-lg flex-col gap-2">
      <div
        className={`flex ${JustifyContentVal} border p-1 [&>*]:p-4 [&>*]:bg-green-400 [&>*]:border [&>*]:border-white [&>*]:rounded-md`}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div>
        <select className="p-1 rounded-md" onChange={changeJustify}>
          <option value={"justify-start"}>flex-start</option>
          <option value={"justify-end"}>flex-end</option>
          <option value={"justify-center"}>center</option>
          <option value={"justify-between"}>space-between</option>
          <option value={"justify-around"}>space-around</option>
          <option value={"justify-evenly"}>space-evenly</option>
        </select>
      </div>
    </div>
  );
};
export default JustifyContent;
