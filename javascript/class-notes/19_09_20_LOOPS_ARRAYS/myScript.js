// LOOPS


// for(var i = 0; i < 5; i++){
//     console.log('i: ',i)
// }
// console.log(i) // i nin son degeri 5 kalir ama. Bunu i yi var ile tanimladigim icin gorebiliyorum scope disinda

//Simdi toplatalim

// let sum = 0;
// for(var i = 0; i <= 5; i++){
//     sum += i;
// }
// console.log(sum)

// Simdi carptiralim

// let sum = 1; //0 verirsek baslangic degerine 0 carpmada yutan
// for(var i = 1; i <= 5; i++){
//     sum *= i;
// }
// console.log('Result is: ', sum)


// Bir string ile calisalim

// {
//     let myString = 'Clarusway';

//     for (let i = 0; i < myString.length; i++){
//         console.log(myString[i]);
//     }
// }
// {
//     let myString = 'Clarusway';

//     for (let i = 0; i < myString.length; i++){
//         console.log(`${i + 1}.ci harf ${myString[i]}`);
//         }
//     }
// }

// Bir de bu yolla bakalim...

// {
//     let myString = 'Clarusway';
//     let result = '';

//     for (let i = 0; i < myString.length; i++){
        
//         for (let j = 0; j < 2; j++){
//             result += myString[i];
//         }
// }
//     console.log(result)
// }


// WHILE

// let i = 0;
// while(i < 5){
//     i++; // Yukari yazinca ilk artirir sonra yazar.
//     console.log('i: ' + i);
//     // i++; //Asagi yazinca once yazar sonra artirir.
// }
// console.log(i)

//Toplama yaptiralim

// {
//     let i = 0, sum = 0;

//     while (i<5){
//         i++;
//         sum += i;
//     }

//     console.log('sum: ' + sum);
// }

// {
//     let i = 0, myString = 'Clarusway';
//     while (i < myString.length){
//         console.log(myString[i]);
//         i++;
//     }
// }

//DO-WHILE

// {
//     let i = 0;

//     do {
//         console.log(i)
//         i++;
//     } while(i > 5)

// }

// BREAK & CONTINUE

// {
//     for (let i = 0; i < 10; i++){
//         if (i === 4)
//             break;
//         console.log('i: ' + i);
//     }
//     console.log('End')
// }

// {
//     for (let i = 0; i < 10; i++){
//         if (i === 4)
//             continue;
//         console.log('i: ' + i);
//     }
//     console.log('End')
// }


// Tek sayilari continue kullanarak yazdirdik
// {
//     let sum = 0;
//     for (let i = 1; i <= 5; i++){
//         if (i % 2 === 0)
//             continue;
//         console.log('i: ' + i);
//         sum += i;
//     }
//     console.log('Sum: ' + sum)
// }

// Cift sayilari continue kullanarak yazdirdik

// {
//     let sum = 0;
//     for (let i = 1; i <= 5; i++){
//         if (i % 2 !== 0)
//             continue;
//         console.log('i: ' + i);
//         sum += i;
//     }
//     console.log('Sum: ' + sum)
// }

// String icinde continue kullanalim

// {let myString = 'Clarusway', result = '';

// for (let i = 0; i < myString.length; i++){
//     if (myString[i] === 'a'){
//         continue
//     }
//     result += myString[i]
// }
//     console.log(result)
// }


// ARRAY

const myArray = ['Izmir', 'Istanbul', 'Ankara', 'Bursa', 'Diyarbakir', 'Bursa', 'Bursa', 'Mugla', 'Bursa'];

// console.log('My Array', myArray)
// console.log(myArray[3]);
// console.log(myArray[11]);  //henuz atanmamis array elemani undefined olur.

// console.log(typeof(myArray));

// Su alttakilere bir bak neymis
// flat array
// array of array
// object of array

// Concat Metodu
// {
//     let arr_1 = ['Konya', 'Canakkale'];
//     const result = myArray.concat(arr_1)

//     console.log(myArray);
//     console.log(arr_1);
//     console.log(result);
// }

//Sort metodu

// {
//     const result = myArray.sort();
//     console.log(result);
// }

//Sort metodu sayilari siralamaz DIKKAT

// Push metodu

// {
//     const result = myArray.push('Van');
//     console.log(result);
//     console.log(myArray)
// }

// Pop metodu

// {
//     const result = myArray.pop();
//     console.log(result);
//     console.log(myArray)
// }

// Shift metodu  orjinal listenin ilk elemanini siler. Orjinal liste degisir DIKKAT!

// {
//     console.log(myArray);
//     const result = myArray.shift();
//     console.log(result);
//     console.log(myArray)
// }

// Unshift metodu  orjinal listenin ilk elemanina belirtilen elemani ekler Orjinal liste degisir DIKKAT!

// {
//     console.log(myArray);
//     const result = myArray.unshift('Zonguldak');
//     console.log(result);
//     console.log(myArray)
// }

// Splice metodu orjinal listeyi degistirir.DIKKAT!

// {
//     console.log(myArray);
//     const result = myArray.splice(2,1,'splice'); //2. indexten sonra 1 tane sil anlamina gelir
//     console.log(result);
//     console.log(myArray);
// }
// {
//     console.log(myArray);
//     const result = myArray.splice(2,2,'splice'); //2. indexten sonra 2 tane sil anlamina gelir
//     console.log(result);
//     console.log(myArray);
// }

// Slice metodu

// {
//     console.log(myArray);
//     const result = myArray.slice(1, 4); //1 ile 4 arasindaki!!! (son index dahil degil) kesiti getirir. Orjinal array degismez.
//     console.log(result);
//     console.log(myArray);
// }

// indexOf-lastIndexOf

// {
//     console.log(myArray);
//     const result = myArray.indexOf('Bursa'); // Ifadenin ilk goruldugu index i verir
//     console.log(result);
// }

// {
//     console.log(myArray);
//     const result = myArray.lastIndexOf('Bursa'); // Ifadenin son goruldugu index i verir
//     console.log(result);
// }

// {
//     console.log(myArray);
//     const result = myArray.lastIndexOf('Bursa', 7); // Verilen 2. parametre index olarak baz alindiginda ifadenin en son hangi indexte goruldugunu verir 
//     console.log(result);
// }



// Arraylerde tanimlanmamis elemanlarin tipi undefined olur, cagrilsa da undefined sonucu verir.

// {
//     let myArray2 = [1,2,3,null];
// // myArray2[10] = 25;
// console.log(myArray2);
// console.log(myArray2[3]);
// console.log(typeof(myArray2[3]));
// }

{
    let myArray = [1,2,3,null];
    myArray[10] = 25;
    console.log(myArray);
    console.log(myArray[3]);
    console.log(typeof(myArray[3]));
    console.log(myArray[8]);
    console.log(typeof(myArray[8]));
}
