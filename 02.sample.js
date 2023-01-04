


const nums = [1,2,2,3,4,5,6,6,7,8,9]


const uiniqueNum = [...new Set(nums)]
//console.log(uiniqueNum)

const uiniqueNum02 = nums.filter((item, position) => {
    return nums.indexOf((item)===position)
})

//console.log(uiniqueNum02)

function uiniqueNum03(arr){
    const uniqueElement = {}
    const result =[]

    for (const element of arr) {
        if(!uniqueElement[element]){
            result.push(element)
        }
        uniqueElement[element] = element
    }
    return result
}

console.log(uiniqueNum03(nums))
