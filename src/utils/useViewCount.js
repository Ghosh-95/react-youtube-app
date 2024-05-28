export default function useViewCount(view) {
    let viewCount = parseInt(view);

    const suffixes = ['', 'K', 'M', 'B', 'T']; // Suffixes for thousands, millions, billions, trillions, etc.
    let suffixIndex = 0;

    while (viewCount >= 1000 && suffixIndex < suffixes.length - 1) {
        viewCount /= 1000;
        suffixIndex++;
    }

    return viewCount.toFixed(1) + suffixes[suffixIndex];
};
