var search = function(nums, target) {
    var l = 0;
    var r = nums.length-1;
    while(l <= r){
        var mid = l + (r - l) /2;
        if(nums[mid] == target){
            return mid;
            break;
        }
        if(nums[l] < target)
            l = l +1;
        else
            r = r -1;
    }
    return -1
};

function driver(){

    const nums = [-1,0,5]
    const target = 0;
    const result = search(nums, target)
    console.log(result)
}

driver()