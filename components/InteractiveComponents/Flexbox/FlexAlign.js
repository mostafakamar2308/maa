import { useState } from "react";

const AlignItems = () => {
  const [alignItemsVal, setAlignItemsVal] = useState("items-stretch");
  const changeAlignItems = (e) => {
    setAlignItemsVal(e.target.value);
  };
  const [alignContentVal, setAlignContentVal] = useState("content-start");
  const changeAlignContent = (e) => {
    setAlignContentVal(e.target.value);
  };
  return (
    <div className="flex border p-2 rounded-lg flex-col gap-2 relative">
      <div
        className={`flex bg-darkButtonUnimportantColor rounded-md [&>*]:text-white [&>*]:duration-300 ${alignItemsVal} ${alignContentVal} flex-wrap border p-1 h-[400px]  md:[&>*]:p-10 [&>*]:p-4 [&>*]:bg-emerald-700 [&>*]:border [&>*]:border-white [&>*]:text-2xl [&>*]:rounded-md`}
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
      <div className="flex justify-center gap-10 items-center px-2">
        <div>
          <div className="text-sm">Align-Items</div>
          <select
            defaultValue={"items-stretch"}
            className="p-1 rounded-md text-white"
            onChange={changeAlignItems}
          >
            <option value={"items-start"}>flex-start</option>
            <option value={"items-end"}>flex-end</option>
            <option value={"items-center"}>center</option>
            <option value={"items-stretch"}>stretch</option>
            <option value={"items-baseline"}>baseline</option>
          </select>
        </div>
        <div>
          <div className="text-sm">Align-Content</div>
          <select
            defaultValue={"content-stretch"}
            className="p-1 rounded-md text-white"
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
    </div>
  );
};
export default AlignItems;
