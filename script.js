const MinHeap = require('minheap');

function mincost(arr) {
    const heap = new MinHeap();
    
    for (const length of arr) {
        heap.insert(length);
    }

    let totalCost = 0;

    while (heap.size() > 1) {
        const first = heap.removeMin();
        const second = heap.removeMin();

        const cost = first + second;
        totalCost += cost;

        heap.insert(cost);
    }

    return totalCost;
}

module.exports = mincost;
