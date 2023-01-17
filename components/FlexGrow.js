import { useState } from "react";

const FlexGrow = () => {
  const [flexGrow, setFlexGrow] = useState("grow-0");
  const changeFlexGrow = (e) => {
    console.log(e.target.value);
    setFlexGrow(e.target.value);
  };
  return (
    <div className="border p-2">
      <div className="flex [&>*]:bg-orange-500 [&>*]:p-4 gap-2 border p-1 [&>*]:text-black [&>*]:rounded-md">
        <div className={`!bg-gray-700 !text-white ${flexGrow}`}>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className="flex gap-5 p-1">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="flex-grow"
            value={"grow-0"}
            onChange={changeFlexGrow}
            id="flex-grow:0"
            defaultChecked
          />
          <label htmlFor="flex-grow:0">flex-grow: 0</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="flex-grow"
            value={"grow"}
            onChange={changeFlexGrow}
            id="flex-grow:1"
          />
          <label htmlFor="flex-grow:1">flex-grow: 1</label>
        </div>
      </div>
    </div>
  );
};
export default FlexGrow;
