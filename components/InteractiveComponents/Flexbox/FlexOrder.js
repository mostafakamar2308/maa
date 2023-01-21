import { useState } from "react";

const FlexOrder = () => {
  const [order, setOrder] = useState("!order-[0]");
  const changeOrder = (e) => {
    const newOrder = `!order-[${e.target.value}]`;
    setOrder((prev) => newOrder);
  };
  return (
    <div>
      <div className="flex flex-wrap [&>*]:p-12 [&>*]:bg-slate-500 gap-4 [&>*]:text-2xl">
        <div>1</div>
        <div className={`!bg-blue-700 ${order}`}>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>
      <div>
        <input type={"number"} onChange={changeOrder} defaultValue={0} />
      </div>
    </div>
  );
};
export default FlexOrder;
