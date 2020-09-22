// FUNCTIONS

//Regular functions..

// const myNumber1 = 9;
// const myNumber2 = 10;

// function sum(){
//     const result = myNumber1 + myNumber2;
//     return result; //Her fonksiyonda bir return olmak zorunda degil. return gorunen yerde fonksiyon direk sonlanir, ardindaki kodlar calistirilmaz.
// }

// const res = sum();
// console.log(res);


// Soyle de yazariz aynisini..

// const myNumber1 = 9;
// const myNumber2 = 10;

// function sum(){
//     return myNumber1 + myNumber2;
// }

// console.log(sum());

// Yeni ornek...

// let word1 = 'Selamlar';
// let word2 = 'Merhaba';
// console.log('1-Ilk halleri: ', word1, word2);

// function upperWords(){
//     word1 = word1.toUpperCase();
//     word2 = word2.toUpperCase();
// }

// console.log('2-Suanki halleri: ', word1, word2);
// upperWords();
// console.log('3-Fonksiyonu cagirdiktan sonra halleri: ', word1, word2)

//Bir ornek daha..

// let word1 = 'Selamlar';
// let word2 = 'Merhaba';

// console.log('1- ', word1, word2);

// function upperWords(word){
//     const response = word.toUpperCase();
//     return response;
// }

// console.log('2- ', word1, word2);
// word1 = upperWords(word1)
// word2 = upperWords(word2)
// console.log('3-Fonksiyonu cagirdiktan sonra halleri: ', word1, word2)

//Yeni ornek

// let word1 = 'Selamlar';
// let word2 = 'Merhaba';

// function upperWords(w1, w2){
//     const w_1 = w1.toUpperCase();
//     const w_2 = w2.toUpperCase();

//     return w_1 + ' ' + w_2;
// }

// console.log(upperWords(word1, word2));
// console.log(upperWords('Hello', "World!"));

// Yeni bir ornek...

// function checkNumbers(){
//     for (let i = 0; i < 10; i++){
//         if (i === 5)
//             break; //Bu asamada return yazarsak direk fonksiyonun kendisinden cikar. Break ile ise kosuldan cikar sadece. Fonksiyonda bir sey dondurmek istiyorsak ya da kosullu bir durumda kosuldan direk kurtulmak istiyorsak return kullaniyoruz.
//         console.log('i: ', i)
//     }
//     console.log('END')
// }
// checkNumbers();

// Functions Expression & Function Constructor

// Regular (Normal) Function

// function myFunction1(p1){
//     console.log('my function 1! ' + p1);
// }

// myFunction1('Clarus')

// Function Expression  
// (Performans acisindan daha hizli calisiyor)

// const myFunction2 = function(p2){
//     console.log('my function 2! ' + p2)
// }

// myFunction2('Way')

// Arrow Functions

// ES6 ile eklenen bir ozellik. 

// Sabit olarak tanimladigimiz icin yukaridaki satirlarda bir yerde gidip bu fonksiyonu cagiramayiz hata aliriz.

// const myFunction3 = () => {
//     console.log('my function 3! ');
// }

// myFunction3()

// Daha da kisa yazariz hatta. Yine performans acisindan onemli

// const myFunction4 = (p1, p2) => p1 * p2;
// console.log(myFunction4(3, 4))


// IIFE (Immediately Invoable Function Expressions)

// (function (p1, p2){
//     console.log('IIFE! ' + p1, p2)
// })('ABC', 55);

// (() => {
//     console.log('IIFE! ')
// })();


// Sayilarda Siralama

//Normalde sort sayilari asagidaki gibi siralar.

// const myArray = [1,2,3,45,32,115,22]
// console.log(myArray.sort());

let my_array = [6, 7, 11, 2, 123, 3, 55];

console.log("Original array: " + my_array)
console.log("---------")

function sortElements_1(a,b){  //BU sekilde de olustururuz fonksiyonu
     return a - b
 }
 
const sortElements_2 = (a,b)=>{return a - b} //Bu sekilde de

const num1 = my_array.sort(function (a,b) {return a - b}); //Ya da bu sekilde de
const num2 = my_array.sort(sortElements_1);
const num3 = my_array.sort(sortElements_2);
 
console.log(num1);
console.log(num2);
console.log(num3);




