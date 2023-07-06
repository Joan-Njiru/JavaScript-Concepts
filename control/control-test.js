//Write a function that accepts an array of strings and console.logs each element using a for loop
let arr = ["apple","berry","passion","pear"]
function loopString(arr){
for(i=0;i<arr.length;i++)
console.log(arr[i])
}
loopString(arr)

//Write a function that accepts an array of numbers and uses the forEach() method to console.log
// each number multiplied by 2.
let numbers = [2,5,3,1,9];
function multiply(item){
    console.log(item*2)
}
numbers.forEach(multiply)

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 
//8 and the last two added by 5. Console the array with the new values.

let nums = [2,1,7,4,8,3,9];
function takesArr(nums){
    let newArray = []
    for(let i=0;i<=nums.length;i++)
    if(i<4){
    newArray.push(nums[i]*8)
    }
    else if(i>=nums.length-2){
    newArray.push(nums[i]+5)
}
console.log(newArray)
}
takesArr(nums)

//Write a function that takes in the following array and use a while loop to iterate and break when
// the item is equal to the fourth index

let arrNum = [1,2,3,4,5,6,7,8,9];

function breaks(arrNum){
    i=0;
    while(i<arrNum.length){
    if(i===4){
    break;
    
}
console.log(arrNum[i]);
i++;
}
}
breaks(arrNum)

//Write a function that takes in  an array of strings and use a continue 
//statement when the item is at the second index 

let fruits= ['apple','plum','banana','strawberries','kiwi']
function continues(){
for(i=0;i<fruits.length;i++){
if(i===2){
    continue;
}
console.log(i)
}
}
continues(fruits)

 