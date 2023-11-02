function findRotatedIndex(arr, target) {
    let lIdx = 0
    let rIdx = arr.length - 1

    let mIdx = Math.floor((lIdx + rIdx) / 2)
    let val = arr[mIdx]

    if ((val > target) && (arr[mIdx - 1] > target)) {
        lIdx = mIdx + 1
    } else if ((val > target) && (arr[mIdx + 1] < target)) {
        rIdx = mIdx - 1
    }


    while (lIdx <= rIdx) {
        mIdx = Math.floor((lIdx + rIdx) / 2)
        val = arr[mIdx]

        if (val < target) {
            lIdx = mIdx + 1
        } else if (val > target) {
            rIdx = mIdx - 1
        } else {
            console.log(mIdx)
            return mIdx
        }
    }

    return -1
}




module.exports = findRotatedIndex