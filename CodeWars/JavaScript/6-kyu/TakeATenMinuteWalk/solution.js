function isValidWalk(walk) {
    if (walk.length !== 10)
      return false;
    const pathTracker = walk.reduce((acc, direction) => {
       acc[direction]++;
      return acc;
    }, {n: 0, s: 0, e: 0, w: 0})
    return pathTracker.n === pathTracker.s && pathTracker.e === pathTracker.w;
  }

  const walk = ["n", "e", "w", "e", "w", "e", "w", "e", "w", "e"];
  console.log(isValidWalk(walk))