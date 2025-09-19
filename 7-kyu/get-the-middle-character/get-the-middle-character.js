function getMiddle(s) {
    const mid = Math.floor(s.length / 2)
    return s.length % 2 === 1 ? s[mid] : s.slice(mid - 1, mid + 1);
}