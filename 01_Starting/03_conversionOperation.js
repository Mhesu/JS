let age = undefined

// console.log(typeof 18)
// console.log(typeof (age))

let valueInNumber = Number(age)
// console.log( typeof valueInNumber)
// console.log(valueInNumber) 

/*
 18 => 18 (number)
 "18" => 18 (NaN [NotaNumber])
 true => 1; false => 0
 null => 0 
 undefined => NaN
*/

let isLoggedIn = "Mahesh"

// console.log(typeof isLoggedIn);

let booleanisLoggedIn =  Boolean(isLoggedIn)
// console.log(booleanisLoggedIn)

/*
 1 => true
 0 => false
 "" => false
 "Mahesh" => true
*/

let num = 18

// console.log(typeof num);
let stringNumber =  String(num)
// console.log(stringNumber)
// console.log(typeof stringNumber)



/* **************************************Operations************************************** */

let val = 8
let negativeVal = -val
// console.log(negativeVal);


// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2/3)
// console.log(2**3)
// console.log(2%3)

let str1 = "Hello "
let str2 = "Mahesh"
let strResult = str1 + str2
// console.log(strResult);

// console.log(1 + 2)
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log(1 + 2 + "3")

// console.log( (2 + 3) * 4 ** 5 / 6)

// console.log(+true)
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter
console.log(--gameCounter);