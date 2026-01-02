/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let left = 0 ;
    let right = height.length - 1;
    let maxArea = 0;
    while(left < right){

        let minHeight = Math.min(height[left],height[right]);
        let width = right - left ;
        area = minHeight * width;

        maxArea = Math.max(area , maxArea)

        if(height[right] > height[left]){
            left++;
        }else{
            right--;
        }

    }
    return maxArea;

};