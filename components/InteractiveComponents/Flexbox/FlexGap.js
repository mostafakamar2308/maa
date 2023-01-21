import { useState } from "react";

const FlexGap = () => {
  const [gap, setGap] = useState(2);
  const changeGap = (e) => {
    setGap(e.target.value);
  };
  return (
    <div className="border p-2">
      <div
        className="flex border p-2 [&>*]:rounded-md [&>*]:p-4 [&>*]:bg-cyan-700 "
        style={{ gap: `${gap}px` }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="flex justify-end gap-4 flex-row-reverse">
        <input
          type={"range"}
          min="2"
          onChange={changeGap}
          defaultValue={2}
          max="20"
          className="w-2/3"
        />
        <div>gap: {gap} px</div>
      </div>
    </div>
  );
};
export default FlexGap;
