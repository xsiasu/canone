const nums = [0,1,0,3,1,2]


var moveZeors = function(nums){
    let j =0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!==0) {
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp

            j++
        }
        
    }

}

console.log(moveZeors())
