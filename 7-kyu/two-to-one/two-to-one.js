function longest(s1, s2) {
  let combined = s1 + s2
  return [...new Set(combined)].sort().join("")
}