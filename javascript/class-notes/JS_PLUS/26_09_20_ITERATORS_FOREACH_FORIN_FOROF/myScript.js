// Iterators

// foreach()

// const numbers = [1,3,5,'selam',{'id': 0, 'name': 'Nur'},67,87,4,3,2];
// numbers.forEach((number) =>{
//     console.log(number)
// })

//Baska bir ornek ile

// index te parametre olarak kullanilabiliyor..

// const numbers = [1,3,5,67,87,4,3,2];
// numbers.forEach((number, index) =>{
//     console.log('number: ' + number + 'index' + index)
// })

// for each ile normal function

// const numbers = [1,3,5,'selam',{'id': 0, 'name': 'Nur'},67,87,4,3,2];
// numbers.forEach(logNumbers);

// function logNumbers(number){
//     console.log('number: ' + number)
// }

// Map fonksiyonu, o da callback mantigi ile calisiyor. geriye donduruyor
// const numbers = [1,3,5,67,87,4,3,2];

// const newNumbers = numbers.map(num => {
//     return num * 2;
// })

// console.log(newNumbers);

// find() ilk buldugunu getirir.

// const users = [
//     {id:0, name:'Jack', age:20},
//     {id:1, name:'Milton', age:34},
//     {id:2, name:'Arthur', age:76},
//     {id:3, name:'Mercedes', age:16}
// ];

// const myUser = users.find((user) => user.age === 76);
// console.log(myUser);

// buldugu ilkini getirir
// const myUser = users.find((user) => user.age < 25).name;
// console.log(myUser);

// Farkli islemler yapacaksak return koymak zorundayiz
// const myUser = users.find((user) => {
//     return user.age < 25
// });
// console.log(myUser);

// filter() coklu deger ariyorsam filter kullaniyorum
// const users = [
//     {id:0, name:'Jack', age:20},
//     {id:1, name:'Milton', age:34},
//     {id:2, name:'Arthur', age:76},
//     {id:3, name:'Mercedes', age:16},
//     {id:4, name:'Dave', age:76}
// ];

// const myUsers = users.filter((user) => user.age < 25);
// console.log(myUsers);
// console.log(users);

// map vs foreach!!!!!!!

// const users = [
//     {id:0, name:'Jack', age:20},
//     {id:1, name:'Milton', age:34},
//     {id:2, name:'Arthur', age:76},
//     {id:3, name:'Mercedes', age:16},
//     {id:4, name:'Dave', age:76}
// ];

// age leri 2 ile carpip bir array e atmak istesek
// foreach ile yapmak istersek: foreach geriye dondurmuyor o yuzden biz array e push ediyoruz.

// const ageArray_1 = [];
// users.forEach((user) => {
//     ageArray_1.push(user.age * 2)
// })
// console.log(ageArray_1)

// map ile cozumu:  map otomatik dondurdugu icin arraye push etmeye gerek kalmadi...!!!!

// const ageArray_2 = users.map((user) => user.age * 2);
// console.log(ageArray_2)

// reduce()

// const myArray = [1,3,5,6,8];
// const sumOfNumbers = myArray.reduce((acc, curr) =>{
//     console.log('acc: ' + acc);
//     console.log('curr: ' + curr);

//     return acc + curr;
// });

// console.log('Sum of numbers: ' + sumOfNumbers)


// Challenge time!! Find the max of the array

// const numbers = [9,5,2,1,77,23,24,65]

// const maxNum = numbers.reduce((acc, curr) =>{return (acc < curr) ? curr: acc});

// console.log('Maximum number is: ' + maxNum)


// every() ve some() metodu

// const users = [
//     { id: 0, isOld: false, name: "Jack", age: 20 },
//     { id: 1, isOld: true, name: "Milton", age: 34 },
//     { id: 2, isOld: true, name: "Arthur", age: 40 },
//     { id: 3, isOld: false, name: "Mercedes", age: 10 },
//     { id: 4, isOld: true, name: "David", age: 34 }
// ];
// console.log("every: ", users.every(user => user.isOld === true));
// console.log("some: ", users.some(user => user.isOld === true));


// for-in  for-of(iterable yapilarda kullanilir o yuzden arraylerde kullanilmaz, ama object lerde kullanilir)

// object de for in deniyoruz...
// const user = {
//     id: 0,
//     isOld: false,
//     name: 'Jack',
//     age: 20
// }

// for (key in user){
//     console.log('property: ' + key);
//     console.log('value: ' + user[key])
// }

// for (element of user) {
//     console.log(element);
//   } // calismaz object te

// Arrayde for of kullaniyoruz....

const userArray = [
    { id: 0, isOld: false, name: "Jack", age: 20 },
    { id: 1, isOld: true, name: "Milton", age: 34 },
    { id: 2, isOld: true, name: "Arthur", age: 76 },
    { id: 3, isOld: false, name: "Mercedes", age: 16 },
    { id: 4, isOld: true, name: "Dave", age: 76 },
  ];

  // for of ile elamanlari cagirinca yazdirir.
  for (element of userArray) {
    console.log(element);
  }

  // for in ile elemanlari cagirinca index numaralari gelir
  for (element in userArray) {
    console.log(element);
  }

  // for in ile array in elemanlarini yazdirma
  for (element in userArray) {
    console.log(userArray[element]);
  }



