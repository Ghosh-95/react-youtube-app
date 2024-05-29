export default function useContentDuration(duration) {
    const components = duration.split(/[PTHMS]/).filter(Boolean);
    let hours = 0, minutes = 0, seconds = 0;

    if (components.length === 0) return;

    if (components.length === 1) seconds = components[0];
    if (components.length === 2) {
        minutes = components[0];
        seconds = components[1]
    }
    if (components.length === 3) {
        hours = components[0];
        minutes = components[1];
        seconds = components[2];
    }

    const formatHour = hours ? hours.toString() : '';
    const formatMin = minutes ? minutes.toString().padStart(2, '0') : '0';
    const formatSec = seconds.toString().padStart(2, '0');

    if (!hours && minutes) return `${formatMin}:${formatSec}`;
    if (!hours && !minutes) return `${formatMin}:${formatSec}`;
    return `${formatHour}:${formatMin}:${formatSec}`;
}
