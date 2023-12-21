function LiveliestYear(records: Array<[number, number]>) {
  let minY = Infinity;
  let maxY = -Infinity;

  records.forEach(([b, d]) => {
    minY = Math.min(b, d, minY);
    maxY = Math.max(b, d, maxY);
  });
  let deltaLives = new Array(maxY - minY + 1).fill(0);
  let indexB, indexD;
  for (let [b, d] of records) {
    indexB = b - minY;
    indexD = d - minY;
    deltaLives[indexB] += 1;
    deltaLives[indexD] -= 1;
  }
  let currentCount = 0;

  let liveliestYear = 0;
  let maximumPop = 0;
  for (let i = 0; i < deltaLives.length; i++) {
    currentCount += deltaLives[i];
    if (currentCount > maximumPop) {
      maximumPop = currentCount;
      liveliestYear = i;
    }
  }
  return liveliestYear + minY;
}
