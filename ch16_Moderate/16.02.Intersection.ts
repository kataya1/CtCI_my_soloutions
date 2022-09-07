function inBetween(a, start, end): boolean {
    // start=1, end = 5, a = 4
    // start = 5, end = 1, a = 4
    return (a >= start && a <= end || a >= end && a <= start)
}