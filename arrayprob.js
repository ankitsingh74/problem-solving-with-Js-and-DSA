//day 0 ----------------------------------------------------------------

// let arr = [1,-4,7,12]
// let sum=0
//  for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>0) {
//         console.log('items', arr[i]);
//         sum +=arr[i]
//     }
    
//  }
// console.log(sum);

//day 2----------------------------------
// cover till if else

//day 3 -------------------------------------
//  revese array and sort array

// let  arr = [1, 2, 3]

//  let i = 0;
// let j = arr.length - 1;

// while (i < j) {
 
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;

 
//     i++;
//     j--;
// }

// console.log(arr); 


// Home assignment??????????????????????????????????

// 1. find the maximum element in an array
// 2. find the minimum element in an array
// 3. find the second largest element in an array
// 4. find the second smallest element in an array
// 5. find the sum of all elements in an array
// 6. find the average of all elements in an array
// 7. find the sum of all even elements in an array
// 8. find the sum of all odd elements in an array
// 9. find the number of even elements in an array
// 10. find the number of odd elements in an array

//  1. find the maximum element in an array

// let arr = [1,-4,7,12]
// let max=0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>max) {
//         max=arr[i]
//     }
    
// }
// console.log(max);

// 2. find the minimum element in an array

// let arr = [1,-4,7,12]
// let min=Infinity
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<min) {
//         min=arr[i]
//     }
    
// }
// console.log(min);

// 3. find the second largest element in an array


// let arr = [10,-4,17,23,12]
// let max=0
// let smax=0
// for (let i = 0; i < arr.length; i++) {
// if (arr[i]>max) {
//     smax=max
//     max=arr[i]
   
// }else if (arr[i]>smax  && arr[i]<max) {
//     smax = arr[i]
// }
// }
// // console.log(max);
// console.log("second Largest",smax);

// 4. find the second smallest element in an array
// let arr = [10,-4,17,-23,12]
// let min=Infinity
// let smin=Infinity
// for (let i = 0; i < arr.length; i++) {
// if (arr[i]<min) {
//     smin=min
//     min=arr[i]
   
// }else if (arr[i]>smin  && arr[i]<min) {
//     smin = arr[i]
// }
// }
// // console.log(max);
// console.log("second min",smin);


// 6. find the average of all elements in an array
// let arr = [10,-4,17,-23,12]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
// sum+=arr[i]
    
// }
// console.log("Average =",sum/arr.length);

// 7. find the sum of all even elements in an array
// let arr = [1,23,4,5,6,7,8,9]
// let esum=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0) {
//         esum += arr[i]
//     }    
// }
// console.log(esum);

// 8. find the sum of all odd elements in an array
// let arr = [1,23,4,5,6,7,8,9]
// let osum=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2!==0) {
//         osum += arr[i]
//     }    
// }
// console.log(osum);

// 9. find the number of even elements in an array

// let arr = [1,23,4,5,6,7,8,9]
// let count=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0) {
//        count++
//     }    
// }
// console.log(count)

// 10. find the number of odd elements in an array

// let arr = [1,23,4,5,6,7,8,9]
// let count=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2!==0) {
//        count++
//     }    
// }
// console.log(count)


