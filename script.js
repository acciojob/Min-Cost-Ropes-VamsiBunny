function mincost(arr) {
    let totalCost = 0;

    while (arr.length > 1) {
        arr.sort((a, b) => a - b);

        const first = arr.shift(); 
        const second = arr.shift(); 

        const cost = first + second;
        totalCost += cost;

        arr.push(cost);
    }

    return totalCost;
}

module.exports = mincost;
