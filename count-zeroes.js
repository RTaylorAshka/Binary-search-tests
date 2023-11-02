function countZeroes(arr) {
    let lIdx = 0
    let rIdx = arr.length - 1

    while (lIdx <= rIdx) {
        let mIdx = Math.floor((lIdx + rIdx) / 2)
        let val = arr[mIdx]

        if ((val == 1)) {
            lIdx = mIdx + 1
        } else if ((val == 0) && (arr[mIdx - 1] == 0)) {
            rIdx = mIdx - 1
        } else {
            return arr.length - mIdx
        }
    }

    return 0
}

module.exports = countZeroes