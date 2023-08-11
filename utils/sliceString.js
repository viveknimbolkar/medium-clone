// crop the big string into size=50 chars
function sliceString(string, size = 350) {
    var cut = string.indexOf(' ', size);
    if (cut == -1) return string;
    return string.substring(0, cut)
}
export { sliceString }