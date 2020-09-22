// OBJECTS

// const phone = {
//     camera: 12,
//     model: 'Mi T9',
//     memory: '4 GB',
//     price: 2000
// }

// const user = {
//     userName: 'Nur',
//     userSurname: 'Kocar',
//     age:36,
//     isMember: true
// }

// console.log(user);
// console.log(user.userName); //birinci erisim saglama sekli
// console.log(user['userName']); //ikinci erisim saglama sekli

// const propName = 'userName';
// console.log(user[propName])


// METHOD IN OBJECT

// const user = {
//     userName: 'cilginCocuk',
//     userPass: 'ABC123',
//     age:15,

//     login(){
//         const loginTime = '20-10-2020';
//         console.log(this.userName + ' logged in on:' + loginTime);

//         //const userName = 'Ahmet';
//         //console.log(userName + ' logged in'); // this in farkini gormek icin ayni adda baska bir degisken tanimladik. 
//     },
    
//     changeNickName(nick){
//         console.log(this.userName + ' nickname changing to: ' + nick);
//     }

//     // ya da soyle de yazabiliriz methodu

//     // login: function (){
//     //     console.log('User logged in')
//     // }


// }

// console.log(user.userName);
// user.login();
// user.changeNickName('cilginOlmayanCocuk');


// let newDate = new Date();

// console.log(newDate);

// user = {

// }

// const userArray = [];

// const myUser_1 = user;
// myUser_1.userName = 'Mehmet';
// myUser_1.userPass = 'ABC';
// myUser_1.age = 30;

// console.log(myUser_1);

// const myUser_1 = user;
// myUser_2.userName = 'Ahmet';
// myUser_2.userPass = 'DEF';
// myUser_2.age = 40;

// console.log(myUser_2);
// Bu sekilde yaparsak sadece gidip user nesnesini her seferinde degistirmis oluruz.
// Her seferinde yeni bir obje olusturmanin yolu class olusturmaktir.

// CLASSES

// class User{
//     constructor(name, password, age){
//         this.userName = name;
//         this.UserPass = password;
//         this.age = age;
//     }
// }

// const myUser1 = new User('Albert', 'EMC2', 25);
// const myUser2 = new User('Thomas', 'tesla', 35);

// console.log(myUser1);
// console.log(myUser2);

//ya da boyle

// class User{
//     constructor(param){
//         this.userName = param.name;
//         this.UserPass = param.password;
//         this.age = param.age;
//         this.city = param.city;
//     }
// }

// const myUser1 = new User({name:'Albert', password:'EMC2', age:25, city:'Izmir'});

// const myUser2 = new User({name:'Thomas', password:'123', age:35, city:'Istanbul'});


// console.log(myUser1);
// console.log(myUser2);


