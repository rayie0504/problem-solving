/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

*/

const navieApproach = (height)=>{
    let maxWater = 0;
    for(var i=0; i<=height.length-2; i++){
        for(var j=1; j<=height.length-1; j++){
            let water = Math.min(height[i], height[j]) * (j-i);
            maxWater = Math.max(maxWater, water);
        }
    }
    return maxWater;
}

const efficientApproach = (height)=>{
    let left = 0
    let right = height.length - 1
    let maxWater = 0
    while(left < right){
        const leftValue = height[left]
        const rightValue = height[right]
        const water = leftValue < rightValue ? leftValue * (right - left) : rightValue * (right - left);

        if(water > maxWater){
            maxWater = water
        }

        if(leftValue < rightValue){
            left++
        }else{
            right--
        }
    }
    return maxWater
}

// console.log(navieApproach([1,8,6,2,5,4,8,3,7]))