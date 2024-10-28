const MinHeap = require('minheap');

function mincost(arr) {
   
    arr.sort((a,b)=>a-b)

  

    let totalCost = 0;

    while (arr.length > 1) {
        const first = arr[0];
        const second = arr[1];
        arr.shift()
		arr.shift()
        const cost = first + second;
        totalCost += cost;

       arr.push(cost);
	  arr.sort((a,b)=>a-b)
    }

    return totalCost;
}

module.exports = mincost;
