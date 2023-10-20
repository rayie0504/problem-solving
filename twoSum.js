/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]*/


const navieTwoSum = (sum,target)=>{
        for(let i = 0 ; i< sum.length;i++){
            for(let j= i + 1;j < sum.length;j ++){
                if(sum[i] + sum[j] == target){
                    return [i, j]
                }
            }
        }
}

const efficientTwoSum = (sum, target) =>{
    let numIndex = new Map()
    for(let i = 0 ; i< sum.length;i++){
        let targetValue = target - sum[i];
        if(numIndex.has(targetValue)){
            return [numIndex.get(targetValue),i]
        }
        numIndex.set(sum[i],i)
    }
}

console.log(efficientTwoSum(  [2,7,11,15],9))
