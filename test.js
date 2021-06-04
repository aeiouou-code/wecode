function evenNum(nums) {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      array.push(nums[i]);
    }
  }
  return array;
}
