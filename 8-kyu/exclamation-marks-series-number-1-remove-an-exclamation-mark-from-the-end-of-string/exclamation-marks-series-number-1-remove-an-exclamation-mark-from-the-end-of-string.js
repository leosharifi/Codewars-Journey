function remove (string) {
  if(string.endsWith('!')) {
    return string.slice(0, string.length - 1)
}
  return string;
}