// var myNumber;

// console.log('My Number: ' + myNumber);

// const myString = 'Merhaba';

// console.log(myString);

// const myString = `Merhaba! ${100} Nasilsin?`;
// const myString = `Merhaba! ${5+6} Nasilsin?`;
// console.log('My String: ' + myString);

// const myBool = 5<2; //true
// console.log('My Boolean: ' + myBool) 

// const myBool = 5==2;
// console.log('My Boolean: ' + myBool);

// const myVar_1 = 3;
// const myVar_2 = '3';
// const myBool = myVar_1 == myVar_2; //iki esittir icteki degerleri kontrol eder sadece
// //const myBool = myVar_1 === myVar_2; //uc esittir hem deger hem turlerin esitligini kontrol eder.
// console.log('My Boolean: ' + myBool);

// const myVar_1 = Boolean('Hello');
// const myVar_2 = 5 == true;
// const myVar_3 = Boolean(5);
// console.log(myVar_1);
// console.log(myVar_2);
// console.log(myVar_3);

// const myVar_1 = Boolean('');
// const myVar_3 = Boolean(0);
// console.log(myVar_1);
// console.log(myVar_3);

//TYPEOF OPERATORU

// const myVar_1 = 6;
// const myVar_2 = 1000000;
// const myVar_3 = 6.5;
// const myVar_4 = 0;

// const myVar_5 = '';
// const myVar_6 = 'Merhaba !';
// const myVar_7 = 'Selamlar' + 105;

// const myVar_8 = 5>2;
// const myVar_9 = Boolean(undefined);
// const myVar_10 = myVar_1 == myVar_5;

// console.log(`My variable 1 : ${myVar_1} type of my variable is:  ${typeOf myVar_1}`);
// console.log(`My variable 2 : ${myVar_2} type of my variable is:  ${typeOf myVar_2}`);
// console.log(`My variable 3 : ${myVar_3} type of my variable is:  ${typeOf myVar_3}`);
// console.log(`My variable 4 : ${myVar_4} type of my variable is:  ${typeOf myVar_4}`);

// console.log('=====================================================================');
// console.log(`My variable 5 : ${myVar_5} type of my variable is:  ${typeOf myVar_5}`);
// console.log(`My variable 6 : ${myVar_6} type of my variable is:  ${typeOf myVar_6}`);
// console.log(`My variable 7 : ${myVar_7} type of my variable is:  ${typeOf myVar_7}`);

// console.log('=====================================================================');
// console.log(`My variable 8 : ${myVar_8} type of my variable is:  ${typeOf myVar_8}`);
// console.log(`My variable 9 : ${myVar_9} type of my variable is:  ${typeOf myVar_9}`);
// console.log(`My variable 10 : ${myVar10} type of my variable is:  ${typeOf myVar_10}`);
// console.log('=====================================================================');


// STRING PROPERTIES

//LENGTH

// const myString1 = 'Merhaba'
// const myString2 = ''
// console.log(myString1.length)
// console.log(myString2.length)

//CONCAT
// const myString3 = 'Clarus';
// const myString4 = 'way';
// const complete = myString3.concat(myString4);
// console.log(complete)
// console.log(complete.concat(' Projects'))

//CHARAT

// const myString5 = 'ClarusWay';
// console.log(myString5.charAt(6));
// console.log(myString5.charAt(-1)); //bos doner
// console.log(myString5.charAt(16)); //bos doner
// console.log(myString5[6]);

//INCLUDES

// const myString6 = 'Hello friends, Welcome to Clarusway!';
// console.log(myString6.includes('friends'));
// console.log(myString6.includes('welcome')); //includes case sensitive dir.

//INDEXOF

// const myString7 = 'Hayat sana guzellikler getirsin kardes';
// console.log(myString7.indexOf('kardes'));
// console.log(myString7.indexOf('e'));
// console.log(myString7.indexOf('p'));
// console.log(myString7.indexOf('H'));

//REPLACE

// const best = 'Hello friends, Welcome to Clarusway.';
// console.log(best);
// console.log(best.replace('Hello', 'Hi!'))
// console.log(best);

// console.log(best.replace('Hellow', 'Hi!')) //best in kendisini verir degistirecek birsey bulamayacagi icin.

//SEARCH (Regular expressions:regex)

// const myString10 = 'Hello friends, Welcome to Clarusway.';
// console.log(myString10.indexOf('welcome'));
// console.log(myString10.search(/welcome/i));

//SLICE

// const myString11 = 'Welcome to the world!';
// const mySlice = myString11.slice(6,13);
// console.log(mySlice);
// console.log(myString11);

//SPLIT

// const myString12 = 'Hello friends, Welcome! to! Clarusway.';
// console.log(myString12.split(' '));
// console.log(myString12.split(','));
// console.log(myString12.split('!'));

//SUBSTR -- SUBSTRING

// const myString13 = 'Hello friends, Welcome! to! Clarusway.';
// console.log(myString13.substr(6,10)) //6 dan basla 10 karakter getir
// console.log(myString13.substring(6,10)) //6 dan basla 10 dahil degil getir
// console.log(myString13.substring(10,6))

//SUBSTRING ? SLICE ? SUBSTR? BAK

//TOLOWERCASE -- TOUPPERCASE

// const myString14 = 'SELAM dunyali, BEN dosTum!';
// console.log(myString14.toUpperCase());
// console.log(myString14.toLowerCase());

//TRIM 

// const myString15 = '             Selamlar dostlar';
// const newString = myString15.trim();
// console.log(myString15.length);
// console.log(newString.length);




