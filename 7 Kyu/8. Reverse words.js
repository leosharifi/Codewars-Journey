function reverseWords(str) {
    return str.split(" ").map(e=>e.split("").reverse().join("")).join(" ");
}