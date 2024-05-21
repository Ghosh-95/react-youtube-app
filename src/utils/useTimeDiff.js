export default function useTimeDiff(date) {
    const publishedDate = new Date(date).getTime();
    const timeNow = new Date().getTime();

    let diff;
    if (timeNow > publishedDate) diff = timeNow - publishedDate;
    else diff = publishedDate - timeNow;

    const secondsPassed = Math.floor(diff / 1000);
    const minutesPassed = Math.floor(secondsPassed / 60);
    const hoursPassed = Math.floor(minutesPassed / 60);
    const daysPassed = Math.floor(hoursPassed / 24);


    if (daysPassed > 0) {
        return `${daysPassed} day${daysPassed > 1 ? 's' : ''} ago`;
    } else if (hoursPassed > 0) {
        return `${hoursPassed} hour${hoursPassed > 1 ? 's' : ''} ago`;
    } else if (minutesPassed > 0) {
        return `${minutesPassed} minute${minutesPassed > 1 ? 's' : ''} ago`;
    } else {
        return `${secondsPassed} second${secondsPassed > 1 ? 's' : ''} ago`;
    }

}