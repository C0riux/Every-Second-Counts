function getSecsRemaining(originalDateTime) {
    //TODO: Convert to/from UTC, is currently out of sync
    return (originalDateTime - new Date()) / 1000;
}