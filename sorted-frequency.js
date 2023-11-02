function findFirst(arr, target) {
    let lIdx = 0
    let rIdx = arr.length - 1

    while (lIdx <= rIdx) {
        let mIdx = Math.floor((lIdx + rIdx) / 2)
        let val = arr[mIdx]

        if ((val < target)) {
            lIdx = mIdx + 1
        } else if ((val >= target) && (arr[mIdx - 1] >= target)) {
            rIdx = mIdx - 1
        } else {
            return mIdx
        }
    }

    return -1

}

function findSecond(arr, target) {
    let lIdx = 0
    let rIdx = arr.length - 1

    while (lIdx <= rIdx) {
        let mIdx = Math.floor((lIdx + rIdx) / 2)
        let val = arr[mIdx]

        if ((val > target)) {
            rIdx = mIdx - 1
        } else if ((val <= target) && (arr[mIdx + 1] <= target)) {
            lIdx = mIdx + 1
        } else {
            return mIdx
        }
    }

    return -1
}

function sortedFrequency(arr, target) {
    let fIdx = findFirst(arr, target)
    let sIdx = findSecond(arr, target)

    if (fIdx == -1 || sIdx == -1) {
        return -1
    }

    return (sIdx - fIdx + 1)


}

console.log(
    sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2), // 4
    sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3), // 1
    sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1), // 2
    sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1
)

module.exports = sortedFrequency