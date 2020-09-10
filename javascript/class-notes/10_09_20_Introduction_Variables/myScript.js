//var myName = 'Nur';
//var MyName = 'Betul';
//var false = 'Meryem' //Hata verdigini gormek icin yazdik
//var isWhile = 
//console.log('Selam', myName);

// var a = 10; {
// let b = 3; //let ile tanimlanan degisken yeni statementlara gecince hafizadan silinir.
// var c = 5;
// }
// console.log("a = " + a);
// console.log('b = ' + b);
// console.log('c = ' + c);
// Simdi de const keywordune bakalim
//const x = 5;
//x = 7;
//console.log('x = ' + x)
//Simdi de const u scope ile deniyoruz
// const a = 100; {
//     const b = 200;
// }
// console.log("a = " + a);
// console.log('b = ' + b);
/*let ve const ile tanimlamanin en 
buyuk avantaji tanimlandigi scope icerisinde calismasi, 
sonra bellekten silinmesi*/
let myFirstNumber = 10; {
    let mySecondNumber = 5
    mySecondNumber = 100 {
        console.log(“(NESTED SCOPE) myFirstNumber = ”+myFirstNumber);
        console.log(“(NESTED SCOPE) mySecondNumber = ”+mySecondNumber);
    }
    console.log(“mySecondNumber = ”+mySecondNumber);
}
console.log(“myFirstNumber = ”+myFirstNumber);