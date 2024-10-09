/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

function removeElement(nums, val) {
    let k = 0;
    nums.forEach(number => {
        console.log("COUNTING: Currently checking: ", number);
        if (number != val) {
            k++;
            console.log("k++, now: ", k);
        }
    });

    for (let index = 0; index < nums.length; index++) {
        console.log("REMOVING: Currently checking: ", nums[index]);
        if (nums[index] == val) {
            let removed = nums.splice(index, 1);
            console.log(removed, " was removed, now the nums looks like: ", nums);
            index--; // because element was removed, don't increase index. That would cause an elem,ent to be skipped and not checked
        }
    }
    return k;
};

function removeElementsFaster(nums, val) {
    let index = 0;
    console.log("This is the list being worked on:", nums);
    console.log("Ands this is the value we are looking for:", val);

    for(let i=0;i<nums.length;i++){
        console.log("COUNTING: Currently checking:", nums[i]);

        if(nums[i]!==val){
            console.log(nums[i], " is NOT equal to", val);
            nums[index] = nums[i];
            console.log("The value at index ", index, "with value:", nums[index], " is nopw equal to:", nums[i]);
            console.log("The list now looks like:", nums);
            
            ++index;
        } else {
            console.log(nums[i], " IS equal to:", val);
        }
        
    }
    return index;
}

function generateRandomArray() {
    // Generate a random length between 3 and 15
    const length = Math.floor(Math.random() * 13) + 3;
    
    // Create and fill the array with random integers
    return Array.from({ length }, () => Math.floor(Math.random() * 16));
}

function getRandomInt() {
    return Math.floor(Math.random() * 16);
}

let list = generateRandomArray();
let val = getRandomInt();
var removedElements1 = removeElementsFaster(list, val);
// var removedElements2 = removeElementsFaster(list2, val2);
