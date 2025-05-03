function augmentingPath(g, s, e, visited = new Set()) {
  if (s == e) return [s];

  visited.add(s);

  for (var v in g[s]) { //asked chatgpt how to iterate through array without doing var i = 0; i < length; i++
    if (g[s][v] > 0 && !visited.has(v)) {
      var path = augmentingPath(g, v, e, visited);
      if (path.length > 0) { return [s, ...path]; }
    }
  }

  return [];
}
