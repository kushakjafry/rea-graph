import React, { useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";
import { BiCollapse, BiExpand } from "react-icons/bi";

function ContextMenu({
  isCollapsed,
  canCollapse,
  onCollapse,
  onClose,
  data,
}: any) {
  const contextMenuRef = useRef<HTMLDivElement | null>(null);
  const toggleNodes = () => {
    onCollapse();
    onClose();
  };
  return (
    <div className="block" ref={contextMenuRef}>
      {"fromId" in data && (
        <RenderEdgeContextMenu data={data} onClose={onClose} />
      )}
      {!("fromId" in data) && (
        <div className="bg-white w-40 border border-gray-300 rounded-lg flex flex-col text-sm py-4 px-2 text-gray-500 shadow-lg">
          <div className="flex py-1 px-2 rounded">
            <h1 className="text-base font-bold">{data.label}</h1>
          </div>
          {canCollapse && (
            <div
              className="flex hover:bg-gray-100 py-1 px-2 rounded cursor-pointer items-center"
              onClick={toggleNodes}
            >
              <span className="text-blue-400 pr-2">
                {isCollapsed ? <BiExpand /> : <BiCollapse />}
              </span>
              <div className="text-blue-400">
                {isCollapsed ? "Expand Node" : "Collapse Node"}
              </div>
            </div>
          )}
          <div
            className="flex hover:bg-gray-100 py-1 px-2 rounded cursor-pointer items-center"
            onClick={onClose}
          >
            {" "}
            <span className="text-red-400 pr-2">
              <ImCross />
            </span>
            <div className="text-red-400">Close Menu</div>
          </div>
        </div>
      )}
    </div>
  );
}

const RenderEdgeContextMenu = ({ data, onClose }: any) => (
  <div
    style={{
      background: "white",
      width: 150,
      border: "solid 1px blue",
      borderRadius: 2,
      padding: 5,
      textAlign: "center",
      color: "black",
    }}
  >
    <h1>{data.label}</h1>
    <button onClick={onClose}>Close Menu</button>
  </div>
);

export default ContextMenu;
