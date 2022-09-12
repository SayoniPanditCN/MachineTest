// 1. Write the codebase to make the below code operate Asynchronously, so that result should be {name: 'John'} instead of {}

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve( data = {name: 'John'})
    }, 2000);
})
fetchData
.then((res) => {
    console.log("Answer 1. ",res);
})







// 2. const input1 = [2, 8, 15, 4, 7, 10, 6];
//output : 15(highest)

const input1 = [2, 8, 15, 4, 7, 10, 6];
const Highest = Math.max(...input1)
console.log("Answer 2. ",Highest);





// 3. const input2 = [10, 5, 20, 10, 6, 5, 8, 5, 20];
// Output: [10, 5, 20, 6, 8];







//4. const input3 = 'sayoni@capitalnumbers.com';
//  output = capitalnumbers.com

const input3 = 'sayoni@capitalnumbers.com';

const ABCD = input3.slice(7, 25)
console.log("Answer 4. ", ABCD);








// 5. const input = [12, null, 0, 'xyz', -25, NaN, '', undefined, false, 0.5];
// Output: [12, 'xyz', -25, 0.5]

const input4 = [12, null, 0, 'xyz', -25, NaN, '', undefined, false, 0.5];
const FilterArr = input4.filter((x) => {
    if (!!x){
        return x
    }
})
console.log("Answer 5. ", FilterArr);





