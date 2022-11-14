const colors = ["#CFF5E7", "#A0E4CB", "#59C1BD", "#0D4C92"];

export function transformGenerator(g: any) {
  const nodes: any[] = [];
  const edges: any[] = [];

  g.forEachNode((node: any) => {
    nodes.push({
      id: `${node.id}`,
      label: `Node ${node.id}`,
      fill: colors[Math.floor(Math.random() * colors.length)],
    });

    node.links.forEach((link: any) => {
      edges.push({
        id: `${node.id}->${link.toId}`,
        source: `${link.fromId}`,
        target: `${link.toId}`,
        label: `${link.fromId} -> ${link.toId}`,
      });
    });
  });

  return [nodes, edges];
}
