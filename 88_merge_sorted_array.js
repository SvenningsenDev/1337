let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3;
let n = 3;

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merged = merge(nums1, m, nums2, n)

function merge(nums1, m, nums2, n) {
    let newArray = [];
    let i = 0;
    let j = 0;

    nums1.forEach(element => {
        if (element == 0) {
            nums1.
        }
    });

    while (i <= m || j <= n) {
        if (nums1[i] <= nums2[j]) {
            newArray.push(nums1[i]);
            i++;
        } else {
            newArray.push(nums2[j]);
            j++;
        }
        console.log(newArray);
    }
};

