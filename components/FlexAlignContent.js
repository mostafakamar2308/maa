import { useState } from "react";

const AlignContent = ({ axis }) => {
  const [alignContentVal, setAlignContentVal] = useState("content-stretch");
  const changeAlignContent = (e) => {
    setAlignContentVal(e.target.value);
  };
  return (
    <div className="flex border p-2  rounded-lg flex-col gap-2">
      <div
        className={`flex h-[500px] [&>*]:duration-300  ${alignContentVal} border p-1 flex-wrap [&>*]:p-10 [&>*]:bg-emerald-700 [&>*]:border [&>*]:border-white [&>*]:text-2xl [&>*]:rounded-md`}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
      <div className="px-2">
        <select
          defaultValue={"content-stretch"}
          className="p-1 rounded-md"
          onChange={changeAlignContent}
        >
          <option value={"content-start"}>flex-start</option>
          <option value={"content-end"}>flex-end</option>
          <option value={"content-center"}>center</option>
          <option value={"content-between"}>space-between</option>
          <option value={"content-around"}>space-around</option>
          <option value={"content-stretch"}>stretch</option>
        </select>
      </div>
    </div>
  );
};
export default AlignContent;
