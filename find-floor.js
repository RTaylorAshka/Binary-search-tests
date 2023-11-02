function findFloor(arr, target) {
    let lIdx = 0
    let rIdx = arr.length - 1

    while (lIdx <= rIdx) {
        let mIdx = Math.floor((lIdx + rIdx) / 2)
        let val = arr[mIdx]

        if ((val < target) && (arr[mIdx + 1] < target)) {
            lIdx = mIdx + 1
        } else if (val > target) {
            rIdx = mIdx - 1
        } else {
            return val
        }
    }

    return -1
}

module.exports = findFloor