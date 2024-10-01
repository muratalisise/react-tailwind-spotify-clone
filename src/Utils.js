function secondsToTime(seconds) {
    return new Date(1000 * seconds)
        .toISOString()
        .substr(11, 5); // Use 11, 5 to get HH:mm format
}

export {
    secondsToTime // Corrected export
};
