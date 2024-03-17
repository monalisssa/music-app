export function formatMilliseconds(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
}

export function formatFollowers(number) {
    const suffixes = ["", "K", "M"];
    const suffixNum = Math.floor(Math.log10(number) / 3);
    const shortNumber = (number / Math.pow(10, suffixNum * 3)).toFixed(suffixNum < 2 ? 0 : 1);
    return shortNumber + suffixes[suffixNum];
}