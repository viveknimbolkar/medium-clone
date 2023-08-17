export function calculateTimeToRead(text) {
    let averageWords = 200; // average words read per minute
    let words = text.toString().split(" ").length;
    const averageTimeToRead = Math.ceil(words) / averageWords;
    return averageTimeToRead < 1 ? "less than a minute" : `${Math.ceil(averageTimeToRead)} min read`;
}