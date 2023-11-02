function findRotationCount(arr) {
    let lIdx = 0
    let rIdx = arr.length - 1

    while (lIdx <= rIdx) {
        let mIdx = Math.floor((lIdx + rIdx) / 2)
        let val = arr[mIdx]
        // console.log(arr[lIdx], val, arr[rIdx])
        if (val > arr[rIdx]) {
            lIdx = mIdx + 1

        } else if ((val < arr[rIdx]) && (val > arr[mIdx - 1])) {
            rIdx = mIdx - 1
        }
        else {

            return mIdx
        }
    }

    return 0
}

console.log(


    findRotationCount([18, 2, 3, 6, 12, 15]), // 1
    // console.log('re')
    findRotationCount([15, 18, 2, 3, 6, 12]), // 2
    // console.log('re')
    findRotationCount([12, 15, 18, 2, 3, 6]), // 3
    findRotationCount([7, 9, 11, 12, 5]), // 4
    findRotationCount([7, 9, 11, 12, 15]) // 0
)

module.exports = findRotationCount