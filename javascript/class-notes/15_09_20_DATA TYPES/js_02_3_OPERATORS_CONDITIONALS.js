//CONDITIONALS

const myValue1 = 5;
const myValue2 = false;

// if (myValue1 ===5){
//     let myNumber = 100; //var ile tanimlasaydik kosul saglaninca da scope disi da calisirdi myNumber
//     console.log('Deger 5' + myNumber);

//     if (myValue2 == false){
//         console.log('VALUE FALSE');
//     }
//     else{
//         console.log('value TRUE');
//     }

// } else if(myValue1 === 8){
//     console.log('Deger 8');
// }else{
//     console.log('Yazik!');
// }

// const score = 60;

// if (score > 70){
//     console.log('GOOD');
// }
// else if (score > 50){
//     console.log('FIFTY FIFTY');
// }
// else if (score > 20){
//     console.log('NOT BAD');
// }
// else{
//     console.log('BAD');
// }

const userType = 'Customer';

switch (userType){
    case "Admin":
        console.log('Welcome to Admin Panel');
        break;
    case "Employee":
        console.log('Welcome to Employee Section');
        break;
    case "Customer":
        console.log('Welcome to menu');
        // break;
    default:
        console.log('Who are  you?');
        break
}

