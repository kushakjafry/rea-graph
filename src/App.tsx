import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { GraphCanvas, GraphNode, GraphCanvasRef, useSelection } from "reagraph";
import generators from "ngraph.generators";
import { transformGenerator } from "./graph-generator";
import ContextMenu from "./Components/ContextMenu";

const [complexNodes, complexEdges] = transformGenerator(
  generators.balancedBinTree(3)
);

function App() {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const { selections, actives, onNodeClick, onCanvasClick, selectNodePaths } =
    useSelection({
      ref: graphRef,
      nodes: complexNodes,
      edges: complexEdges,
      pathSelectionType: "all",
      focusOnSelect: "singleOnly",
      type: "multiModifier",
    });

  const from = complexNodes[0].id;
  const to = complexNodes[8].id;

  return (
    <div className="App">
      <div className="graph_container">
        <GraphCanvas
          ref={graphRef}
          nodes={complexNodes}
          edges={complexEdges}
          selections={selections}
          actives={actives}
          onCanvasClick={onCanvasClick}
          onNodeClick={onNodeClick}
          sizingType="centrality"
          contextMenu={({
            data,
            onCollapse,
            isCollapsed,
            canCollapse,
            onClose,
          }) => (
            <ContextMenu
              onCollapse={onCollapse}
              isCollapsed={isCollapsed}
              onClose={onClose}
              canCollapse={canCollapse}
              data={data}
            />
          )}
        />
      </div>
    </div>
  );
}

export default App;
