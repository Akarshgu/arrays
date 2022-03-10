
//1st method for iteration
// for (let step = 1; step <= 5; step++) {
//     // Runs 5 times, with values of step 1 through 5.
//     console.log(step);
//   }
// let i,j,row=4;

// for (i = 1; i<row; i--) {
//     for ( j = 1; j <= i;j ++){
//         console.log(j);
//     }
//     console.log(i);
// }

//   let rem=0;
//   let count=0;
//   while(N!==0)
//   {
//       rem=parsInt(N%10);
//       if(rem==5){
//           count++;
//       }
//       N=parseInt(N/10);
//   }
//   return count;


                             //  arrays --> it is represented as var []

// using array literals   -->let arr=[];

// using constructor function  --> let another = new arr();

// how do we print the array  and we can use inside it as strings also or nubers etc
// let arr=[1,2,3,4,5,6];
// console.log("arr",arr);
// let anotherArr = new Array(1,2,3,4,5,6,7);
// console.log("anotherArr",anotherArr);

// if i want to find the no in a array we will find with  l
// console.log(arr[]); by this with index value



// let values=["a","e","i","o","u"];
// console.log(values.length);            // to find length of array console.log(values.length); 


// values[10]=12;   //--> the value for 10index is 12 is set but in between the emptyb will bw there 
   
// console.log(values);

// values.push(1);
// console.log(values);

// values.pop();         //removes from end
// console.log(values);

// values.shift();     //removes from start
// console.log(values);

// values.unshift("a");
// console.log(values);




// {           //f unction to find out how many of numeric values in a array or strings
// // function countString(arr) {
// //     let count;
// //     for(let i=0; i< arr.length; i++){
// //         const element = arr[i];
// //         if(typeof(element)==="string") count++;
// //     }
// //     return count;
    
// // }
// // const result = countString();
// // console.log(result);




// some and every

// let arr =[1,2,3,4,5,6];
// const value1 = arr.some(element=>element>2); //which returns bullean values .-- both are call back function
// const value2 = arr.every(element=>element>2);
// console.log(value1,);