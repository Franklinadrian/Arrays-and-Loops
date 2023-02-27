// Question 1 Divide the arrays and put result in a new one
 


let array1 = [20, 46 ,90,80,120];
let  array2 = [2,2,5,4,2];
let array = ( array1 , array2) => {
  return array1.map((e , index) => e / array2[index]);

}
console.log(array(array1, array2));

// Question 2 using for loop
// Print out (10, 8, 13, 136, and 4)

var arr = [[1, 2, 3], [4, 5, 6], 7,8,9,[[10, 11, 12[13, 4, 112]], 136, 14]];

for (let i = 0; i< arr.length; i++){
  console.log(arr [5] [i] [0] );
  console.log(arr  [3]);
  // console.log( arr [5]  [3] [0] [i] )
  console.log(arr [5] [1] );
  console.log(arr [1]  [0]);
}
